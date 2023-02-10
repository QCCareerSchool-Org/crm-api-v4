import type { CourseDTO } from '../../domain/courseDTO.js';
import type { CurrencyDTO } from '../../domain/currencyDTO.js';
import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { PaymentMethodDTO } from '../../domain/paymentMethodDTO.js';
import type { TransactionDTO } from '../../domain/transactionDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetEnrollmentRequestDTO = {
  studentId: number;
  enrollmentId: number;
};

export type GetEnrollmentResponseDTO = EnrollmentDTO & {
  course: CourseDTO;
  currency: CurrencyDTO;
  transactions: Array<TransactionDTO & {
    paymentMethod: PaymentMethodDTO | null;
  }>;
  paymentMethods: PaymentMethodDTO[];
};

class GetEnrollmentError extends Error { }
export class GetEnrollmentNotFound extends GetEnrollmentError { }

export class GetEnrollmentInteractor implements IInteractor<GetEnrollmentRequestDTO, GetEnrollmentResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ enrollmentId, studentId }: GetEnrollmentRequestDTO): Promise<ResultType<GetEnrollmentResponseDTO>> {
    try {
      const enrollment = await this.prisma.enrollment.findFirst({
        where: { enrollmentId, studentId },
        include: {
          course: true,
          currency: true,
          transactions: { include: { paymentMethod: true } },
          paymentMethods: { where: { deleted: false, paymentType: { name: 'paysafe' } } },
        },
      });
      if (!enrollment) {
        return Result.fail(new GetEnrollmentNotFound());
      }

      return Result.success({
        enrollmentId: enrollment.enrollmentId,
        studentId: enrollment.studentId,
        courseId: enrollment.courseId,
        currencyId: enrollment.currencyId,
        userId: enrollment.userId,
        enrollmentDate: enrollment.enrollmentDate,
        expiryDate: enrollment.expiryDate,
        paymentPlan: enrollment.paymentPlan,
        status: enrollment.status,
        statusDate: enrollment.statusDate,
        gradEmailDate: enrollment.gradEmailDate,
        gradEmailSkip: enrollment.gradEmailSkip,
        cost: enrollment.cost.toNumber(),
        discount: enrollment.discount.toNumber(),
        installment: enrollment.installment.toNumber(),
        noShipping: enrollment.noShipping,
        hideFromShippingList: enrollment.hideFromShippingList,
        paymentOverride: enrollment.paymentOverride,
        paymentFrequency: enrollment.paymentFrequency,
        paymentDay: enrollment.paymentDay,
        paymentStart: enrollment.paymentStart,
        accountId: enrollment.accountId,
        preparedDate: enrollment.preparedDate,
        shippedDate: enrollment.shippedDate,
        diploma: enrollment.diploma,
        diplomaDate: enrollment.diplomaDate,
        fastTrack: enrollment.fastTrack,
        noStudentCenter: enrollment.noStudentCenter,
        created: enrollment.created,
        modified: enrollment.modified,
        course: {
          courseId: enrollment.course.courseId,
          schoolId: enrollment.course.schoolId,
          code: enrollment.course.code,
          name: enrollment.course.name,
          prefix: enrollment.course.prefix,
          maxAssignments: enrollment.course.maxAssignments,
          order: enrollment.course.order,
          cost: enrollment.course.cost.toNumber(),
          created: enrollment.course.created,
          modified: enrollment.course.modified,
        },
        currency: {
          currencyId: enrollment.currency.currencyId,
          code: enrollment.currency.code,
          name: enrollment.currency.name,
          symbol: enrollment.currency.symbol,
          exchangeRate: enrollment.currency.exchangeRate.toNumber(),
          created: enrollment.currency.created,
          modified: enrollment.currency.modified,
        },
        transactions: enrollment.transactions.map(t => {
          const transactionDateTime = new Date(t.transactionDate);
          if (t.transactionTime) {
            transactionDateTime.setHours(t.transactionTime.getHours());
            transactionDateTime.setMinutes(t.transactionTime.getMinutes());
            transactionDateTime.setSeconds(t.transactionTime.getSeconds());
            transactionDateTime.setMilliseconds(t.transactionTime.getMilliseconds());
          }
          return {
            transactionId: t.transactionId,
            enrollmentId: t.enrollmentId,
            paymentMethodId: t.paymentMethodId,
            userId: t.userId,
            parentId: t.parentId,
            transactionDateTime,
            amount: t.amount.toNumber(),
            attemptedAmount: t.attemptedAmount.toNumber(),
            usdAmount: t.usdAmount?.toNumber() ?? null,
            refund: t.refund.toNumber(),
            chargeback: t.chargeback.toNumber(),
            orderId: t.orderId,
            responseCode: t.responseCode,
            authCode: t.authCode,
            referenceNumber: t.referenceNumber,
            settlementId: t.settlementId,
            transactionNumber: t.transactionNumber,
            response: t.response,
            description: t.description,
            posted: t.posted,
            postedDate: t.postedDate,
            notified: t.notified,
            extraCharge: t.extraCharge,
            auto: t.auto,
            reattempt: t.reattempt,
            transactionType: t.transactionType,
            voided: t.voided,
            notes: t.notes,
            severity: t.severity,
            created: t.created,
            modified: t.modified,
            paymentMethod: t.paymentMethod === null ? null : {
              paymentMethodId: t.paymentMethod.paymentMethodId,
              enrollmentId: t.paymentMethod.enrollmentId,
              paymentTypeId: t.paymentMethod.paymentTypeId,
              primary: t.paymentMethod.primary,
              paysafeProfileId: t.paymentMethod.paysafeProfileId,
              paysafeCardId: t.paymentMethod.paysafeCardId,
              paysafePaymentToken: t.paymentMethod.paysafePaymentToken,
              paysafeCompany: t.paymentMethod.paysafeCompany,
              pan: t.paymentMethod.pan,
              expiryMonth: t.paymentMethod.expiryMonth,
              expiryYear: t.paymentMethod.expiryYear,
              deleted: t.paymentMethod.deleted,
              notified: t.paymentMethod.notified,
              disabled: t.paymentMethod.disabled,
              transactionCount: t.paymentMethod.transactionCount,
              created: t.paymentMethod.created,
              modified: t.paymentMethod.modified,
            },
          };
        }),
        paymentMethods: enrollment.paymentMethods.map(p => ({
          paymentMethodId: p.paymentMethodId,
          enrollmentId: p.enrollmentId,
          paymentTypeId: p.paymentTypeId,
          primary: p.primary,
          paysafeProfileId: p.paysafeProfileId,
          paysafeCardId: p.paysafeCardId,
          paysafePaymentToken: p.paysafePaymentToken,
          paysafeCompany: p.paysafeCompany,
          pan: p.pan,
          expiryMonth: p.expiryMonth,
          expiryYear: p.expiryYear,
          deleted: p.deleted,
          notified: p.notified,
          disabled: p.disabled,
          transactionCount: p.transactionCount,
          created: p.created,
          modified: p.modified,
        })),
      });

    } catch (err) {
      this.logger.error('error getting enrollments', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
