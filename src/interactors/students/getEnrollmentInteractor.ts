import type { BonusItemDTO } from '../../domain/bonusItemDTO.js';
import type { BonusItemShipmentDTO } from '../../domain/bonusItemShipmentDTO.js';
import type { CourseDTO } from '../../domain/courseDTO.js';
import type { CurrencyDTO } from '../../domain/currencyDTO.js';
import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { PaymentMethodDTO } from '../../domain/paymentMethodDTO.js';
import type { TransactionDTO } from '../../domain/transactionDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { DateService } from '../../services/date/dateService.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IUUIDService } from '../../services/uuid/index.js';
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
  bonusItemShipments: Array<BonusItemShipmentDTO & { bonusItem: BonusItemDTO }>;
};

class GetEnrollmentError extends Error { }
export class GetEnrollmentNotFound extends GetEnrollmentError { }

export class GetEnrollmentInteractor implements IInteractor<GetEnrollmentRequestDTO, GetEnrollmentResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly uuidService: IUUIDService,
    private readonly dateService: DateService,
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
          bonusItemShipments: { include: { bonusItem: true } },
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
        paymentStart: this.dateService.fixPrismaReadDate(enrollment.paymentStart),
        accountId: enrollment.accountId,
        preparedDate: this.dateService.fixPrismaReadDate(enrollment.preparedDate),
        shippedDate: this.dateService.fixPrismaReadDate(enrollment.shippedDate),
        diploma: enrollment.diploma,
        diplomaDate: this.dateService.fixPrismaReadDate(enrollment.diplomaDate),
        fastTrack: enrollment.fastTrack,
        noStudentCenter: enrollment.noStudentCenter,
        created: this.dateService.fixPrismaReadDate(enrollment.created),
        modified: this.dateService.fixPrismaReadDate(enrollment.modified),
        course: {
          courseId: enrollment.course.courseId,
          schoolId: enrollment.course.schoolId,
          variantId: enrollment.course.variantId,
          code: enrollment.course.code,
          name: enrollment.course.name,
          prefix: enrollment.course.prefix,
          maxAssignments: enrollment.course.maxAssignments,
          order: enrollment.course.order,
          cost: enrollment.course.cost.toNumber(),
          created: this.dateService.fixPrismaReadDate(enrollment.course.created),
          modified: this.dateService.fixPrismaReadDate(enrollment.course.modified),
        },
        currency: {
          currencyId: enrollment.currency.currencyId,
          code: enrollment.currency.code,
          name: enrollment.currency.name,
          symbol: enrollment.currency.symbol,
          exchangeRate: enrollment.currency.exchangeRate.toNumber(),
          created: this.dateService.fixPrismaReadDate(enrollment.currency.created),
          modified: this.dateService.fixPrismaReadDate(enrollment.currency.modified),
        },
        transactions: enrollment.transactions.map(t => {
          const transactionDate = this.dateService.fixPrismaReadDate(t.transactionDate);
          const transactionDateTime = new Date(transactionDate);
          if (t.transactionTime) {
            const transactionTime = this.dateService.fixPrismaReadDate(t.transactionTime);
            transactionDateTime.setHours(transactionTime.getHours());
            transactionDateTime.setMinutes(transactionTime.getMinutes());
            transactionDateTime.setSeconds(transactionTime.getSeconds());
            transactionDateTime.setMilliseconds(transactionTime.getMilliseconds());
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
            postedDate: this.dateService.fixPrismaReadDate(t.postedDate),
            notified: t.notified,
            extraCharge: t.extraCharge,
            auto: t.auto,
            reattempt: t.reattempt,
            transactionType: t.transactionType,
            voided: t.voided,
            notes: t.notes,
            severity: t.severity,
            created: this.dateService.fixPrismaReadDate(t.created),
            modified: this.dateService.fixPrismaReadDate(t.modified),
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
              created: this.dateService.fixPrismaReadDate(t.paymentMethod.created),
              modified: this.dateService.fixPrismaReadDate(t.paymentMethod.modified),
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
          created: this.dateService.fixPrismaReadDate(p.created),
          modified: this.dateService.fixPrismaReadDate(p.modified),
        })),
        bonusItemShipments: enrollment.bonusItemShipments.map(s => ({
          bonusItemShipmentId: this.uuidService.binToUUID(s.bonusItemShipmentId),
          enrollmentId: s.enrollmentId,
          bonusItemId: this.uuidService.binToUUID(s.bonusItemId),
          threshold: s.threshold === null ? null : s.threshold.toNumber(),
          qualified: this.dateService.fixPrismaReadDate(s.qualified),
          prepared: this.dateService.fixPrismaReadDate(s.prepared),
          shipped: this.dateService.fixPrismaReadDate(s.shipped),
          created: this.dateService.fixPrismaReadDate(s.created),
          bonusItem: {
            bonusItemId: this.uuidService.binToUUID(s.bonusItem.bonusItemId),
            name: s.bonusItem.name,
            description: s.bonusItem.description,
            enabled: s.bonusItem.enabled,
            default: s.bonusItem.default,
            shipImmediately: s.bonusItem.shipImmediately,
            threshold: s.bonusItem.threshold === null ? null : s.bonusItem.threshold.toNumber(),
            created: this.dateService.fixPrismaReadDate(s.bonusItem.created),
            modified: this.dateService.fixPrismaReadDate(s.bonusItem.modified),
          },
        })),
      });

    } catch (err) {
      this.logger.error('error getting enrollments', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
