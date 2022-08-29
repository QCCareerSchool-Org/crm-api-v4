import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { PaymentMethodDTO } from '../../domain/paymentMethodDTO.js';
import type { TransactionDTO } from '../../domain/transactionDTO.js';
import type { PrismaClient, RemotePrismaClient } from '../../frameworks/prisma/index.js';
import type { IDecimalService } from '../../services/decimal/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IPaysafeServiceFactory } from '../../services/paysafe/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type ChargePaymentMethodRequestDTO = {
  studentId: number;
  enrollmentId: number;
  paymentMethodId: number;
  amount: number;
};

export type ChargePaymentMethodResponseDTO = TransactionDTO & {
  paymentMethod: PaymentMethodDTO | null;
  enrollment: EnrollmentDTO;
};

class ChargePaymentMethodError extends Error { }
export class ChargePaymentMethodNotFound extends ChargePaymentMethodError { }
export class ChargePaymentMethodUnlinkedEnrollment extends ChargePaymentMethodError { }
export class ChargePaymentMethodEnrollmentTransferred extends ChargePaymentMethodError { }
export class ChargePaymentMethodEnrollmentWithdrawn extends ChargePaymentMethodError { }
export class ChargePaymentMethodEnrollmentRefunded extends ChargePaymentMethodError { }
export class ChargePaymentMethodUnsupportedPaymentType extends ChargePaymentMethodError { }
export class ChargePaymentMethodPaysafeCompanyMissing extends ChargePaymentMethodError { }
export class ChargePaymentMethodPaysafeTokenMissing extends ChargePaymentMethodError { }
export class ChargePaymentMethodAmountZeroOrLess extends ChargePaymentMethodError { }
export class ChargePaymentMethodAmountExceedsMaximum extends ChargePaymentMethodError { }
export class ChargePaymentMethodPaidInFull extends ChargePaymentMethodError { }
export class ChargePaymentMethodAmountTooLarge extends ChargePaymentMethodError { }

export class ChargePaymentMethodInteractor implements IInteractor<ChargePaymentMethodRequestDTO, ChargePaymentMethodResponseDTO> {
  public static readonly maxAmount = 1800;

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly remotePrisma: RemotePrismaClient,
    private readonly decimalService: IDecimalService,
    private readonly paysafeServiceFactory: IPaysafeServiceFactory,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId, enrollmentId, paymentMethodId, amount }: ChargePaymentMethodRequestDTO): Promise<ResultType<ChargePaymentMethodResponseDTO>> {
    try {
      const paymentMethod = await this.prisma.paymentMethod.findFirst({
        where: { paymentMethodId, enrollmentId, enrollment: { studentId } },
        include: { paymentType: true, enrollment: { include: { currency: true, course: true, transactions: true } } },
      });
      if (!paymentMethod) {
        return Result.fail(new ChargePaymentMethodNotFound());
      }

      if (paymentMethod.enrollment === null) {
        return Result.fail(new ChargePaymentMethodUnlinkedEnrollment());
      }
      const enrollment = paymentMethod.enrollment;

      if (enrollment.status === 'T') {
        return Result.fail(new ChargePaymentMethodEnrollmentTransferred());
      }

      if (enrollment.status === 'W') {
        return Result.fail(new ChargePaymentMethodEnrollmentWithdrawn());
      }

      if (enrollment.status === 'R') {
        return Result.fail(new ChargePaymentMethodEnrollmentRefunded());
      }

      if (paymentMethod.paymentType.name !== 'Paysafe') {
        return Result.fail(new ChargePaymentMethodUnsupportedPaymentType());
      }

      if (!paymentMethod.paysafeCompany) {
        return Result.fail(new ChargePaymentMethodPaysafeCompanyMissing());
      }

      if (!paymentMethod.paysafePaymentToken) {
        return Result.fail(new ChargePaymentMethodPaysafeTokenMissing());
      }

      if (amount <= 0) {
        return Result.fail(new ChargePaymentMethodAmountZeroOrLess());
      }
      if (amount > ChargePaymentMethodInteractor.maxAmount) {
        return Result.fail(new ChargePaymentMethodAmountExceedsMaximum());
      }

      const amountPaid = enrollment.transactions
        .filter(t => !t.extraCharge)
        .reduce((prev, cur) => this.decimalService.add(prev, cur.amount.toNumber()), 0);

      const discountedCost = this.decimalService.subtract(enrollment.cost.toNumber(), enrollment.discount.toNumber());

      if (amountPaid >= discountedCost) {
        return Result.fail(new ChargePaymentMethodPaidInFull());
      }

      const amountRemaining = this.decimalService.subtract(discountedCost, amountPaid);

      if (amount > amountRemaining) {
        return Result.fail(new ChargePaymentMethodAmountTooLarge());
      }

      const paysafe = this.paysafeServiceFactory.createInstance(paymentMethod.paysafeCompany, paymentMethod.enrollment.currency.code);

      const studentNumber = `${enrollment.course.prefix}${enrollment.enrollmentId}`;

      const paysafeResult = await paysafe.charge(studentNumber, amount, paymentMethod.paysafePaymentToken);

      const minimumPaymentMade = paysafeResult.amount >= Math.min(enrollment.installment.toNumber(), amountRemaining);

      const insertedTransaction = await this.prisma.$transaction(async transaction => {
        if (enrollment.status === 'H' && minimumPaymentMade) {
          // take the enrollment off hold
          await transaction.enrollment.update({
            data: { status: null, statusDate: null },
            where: { enrollmentId },
          });
        }
        // update the payment method transaction count
        await transaction.paymentMethod.update({
          data: { transactionCount: { increment: 1 } },
          where: { paymentMethodId },
        });
        // insert a transaction
        return transaction.transaction.create({
          data: {
            enrollmentId,
            paymentMethodId,
            transactionDate: paysafeResult.date, // paysafeResult.date.toString().substring(0, 10),
            transactionTime: paysafeResult.date, // paysafeResult.date.toTimeString().substring(0, 8),
            amount: paysafeResult.amount,
            attemptedAmount: amount,
            orderId: paysafeResult.orderId,
            responseCode: paysafeResult.responseCode,
            authCode: paysafeResult.authCode,
            referenceNumber: paysafeResult.settlementId,
            settlementId: paysafeResult.settlementId,
            response: paysafeResult.response,
          },
          include: { enrollment: true, paymentMethod: true },
        });
      });

      // remove hold status in the Online Student Center
      if (minimumPaymentMade) {
        try {
          const remoteEnrollment = await this.remotePrisma.enrollment.findFirst({
            where: {
              studentNumber: enrollmentId,
              course: { code: enrollment.course.prefix },
            },
          });
          console.log(remoteEnrollment);
          if (remoteEnrollment) {
            if (remoteEnrollment.onHold && remoteEnrollment.holdReason !== 'failed unit') {
              await this.remotePrisma.enrollment.update({
                data: { onHold: false, holdReason: null },
                where: { enrollmentId: remoteEnrollment.enrollmentId },
              });
            }
          }
        } catch (err) {
          this.logger.error('Could not update remote database', err);
        }
      }

      const transactionDateTime = new Date(insertedTransaction.transactionDate);
      if (insertedTransaction.transactionTime) {
        transactionDateTime.setHours(insertedTransaction.transactionTime.getHours());
        transactionDateTime.setMinutes(insertedTransaction.transactionTime.getMinutes());
        transactionDateTime.setSeconds(insertedTransaction.transactionTime.getSeconds());
        transactionDateTime.setMilliseconds(insertedTransaction.transactionTime.getMilliseconds());
      }

      return Result.success({
        transactionId: insertedTransaction.transactionId,
        enrollmentId: insertedTransaction.enrollmentId,
        paymentMethodId: insertedTransaction.paymentMethodId,
        userId: insertedTransaction.userId,
        parentId: insertedTransaction.parentId,
        transactionDateTime,
        amount: insertedTransaction.amount.toNumber(),
        attemptedAmount: insertedTransaction.attemptedAmount.toNumber(),
        usdAmount: insertedTransaction.usdAmount?.toNumber() ?? null,
        refund: insertedTransaction.refund.toNumber(),
        chargeback: insertedTransaction.chargeback.toNumber(),
        orderId: insertedTransaction.orderId,
        responseCode: insertedTransaction.responseCode,
        authCode: insertedTransaction.authCode,
        referenceNumber: insertedTransaction.referenceNumber,
        settlementId: insertedTransaction.settlementId,
        transactionNumber: insertedTransaction.transactionNumber,
        response: insertedTransaction.response,
        description: insertedTransaction.description,
        posted: insertedTransaction.posted,
        postedDate: insertedTransaction.postedDate,
        notified: insertedTransaction.notified,
        extraCharge: insertedTransaction.extraCharge,
        auto: insertedTransaction.auto,
        reattempt: insertedTransaction.reattempt,
        transactionType: insertedTransaction.transactionType,
        voided: insertedTransaction.voided,
        notes: insertedTransaction.notes,
        severity: insertedTransaction.severity,
        created: insertedTransaction.created,
        modified: insertedTransaction.modified,
        paymentMethod: insertedTransaction.paymentMethod === null ? null : {
          paymentMethodId: insertedTransaction.paymentMethod.paymentMethodId,
          enrollmentId: insertedTransaction.paymentMethod.enrollmentId,
          paymentTypeId: insertedTransaction.paymentMethod.paymentTypeId,
          primary: insertedTransaction.paymentMethod.primary,
          paysafeProfileId: insertedTransaction.paymentMethod.paysafeProfileId,
          paysafeCardId: insertedTransaction.paymentMethod.paysafeCardId,
          paysafePaymentToken: insertedTransaction.paymentMethod.paysafePaymentToken,
          paysafeCompany: insertedTransaction.paymentMethod.paysafeCompany,
          pan: insertedTransaction.paymentMethod.pan,
          expiryMonth: insertedTransaction.paymentMethod.expiryMonth,
          expiryYear: insertedTransaction.paymentMethod.expiryYear,
          deleted: insertedTransaction.paymentMethod.deleted,
          notified: insertedTransaction.paymentMethod.notified,
          disabled: insertedTransaction.paymentMethod.disabled,
          transactionCount: insertedTransaction.paymentMethod.transactionCount,
          created: insertedTransaction.paymentMethod.created,
          modified: insertedTransaction.paymentMethod.modified,
        },
        enrollment: {
          enrollmentId: insertedTransaction.enrollment.enrollmentId,
          studentId: insertedTransaction.enrollment.studentId,
          courseId: insertedTransaction.enrollment.courseId,
          currencyId: insertedTransaction.enrollment.currencyId,
          userId: insertedTransaction.enrollment.userId,
          enrollmentDate: insertedTransaction.enrollment.enrollmentDate,
          expiryDate: insertedTransaction.enrollment.expiryDate,
          paymentPlan: insertedTransaction.enrollment.paymentPlan,
          status: insertedTransaction.enrollment.status,
          statusDate: insertedTransaction.enrollment.statusDate,
          gradEmailDate: insertedTransaction.enrollment.gradEmailDate,
          gradEmailSkip: insertedTransaction.enrollment.gradEmailSkip,
          cost: insertedTransaction.enrollment.cost.toNumber(),
          discount: insertedTransaction.enrollment.discount.toNumber(),
          installment: insertedTransaction.enrollment.installment.toNumber(),
          noShipping: insertedTransaction.enrollment.noShipping,
          hideFromShippingList: insertedTransaction.enrollment.hideFromShippingList,
          paymentOverride: insertedTransaction.enrollment.paymentOverride,
          paymentFrequency: insertedTransaction.enrollment.paymentFrequency,
          paymentDay: insertedTransaction.enrollment.paymentDay,
          paymentStart: insertedTransaction.enrollment.paymentStart,
          accountId: insertedTransaction.enrollment.accountId,
          preparedDate: insertedTransaction.enrollment.preparedDate,
          shippedDate: insertedTransaction.enrollment.shippedDate,
          diploma: insertedTransaction.enrollment.diploma,
          diplomaDate: insertedTransaction.enrollment.diplomaDate,
          fastTrack: insertedTransaction.enrollment.fastTrack,
          noStudentCenter: insertedTransaction.enrollment.noStudentCenter,
          created: insertedTransaction.enrollment.created,
          modified: insertedTransaction.enrollment.modified,
        },
      });

    } catch (err) {
      this.logger.error('error adding payment method', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
