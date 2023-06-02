import type { BonusItemDTO } from '../../domain/bonusItemDTO.js';
import type { BonusItemShipmentDTO } from '../../domain/bonusItemShipmentDTO.js';
import type { CountryDTO } from '../../domain/countryDTO.js';
import type { CourseDTO } from '../../domain/courseDTO.js';
import type { CurrencyDTO } from '../../domain/currencyDTO.js';
import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { ProvinceDTO } from '../../domain/provinceDTO.js';
import type { StudentDTO } from '../../domain/studentDTO.js';
import type { TransactionDTO } from '../../domain/transactionDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { DateService } from '../../services/date/dateService.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IUUIDService } from '../../services/uuid/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetStudentRequestDTO = {
  studentId: number;
};

export type GetStudentResponseDTO = StudentDTO & {
  province: ProvinceDTO | null;
  country: CountryDTO;
  enrollments: Array<EnrollmentDTO & {
    course: CourseDTO;
    currency: CurrencyDTO;
    transactions: TransactionDTO[];
    bonusItemShipments: Array<BonusItemShipmentDTO & { bonusItem: BonusItemDTO }>;
  }>;
};

class GetStudentError extends Error { }
export class GetStudentNotFound extends GetStudentError { }

export class GetStudentInteractor implements IInteractor<GetStudentRequestDTO, GetStudentResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly uuidService: IUUIDService,
    private readonly dateService: DateService,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId }: GetStudentRequestDTO): Promise<ResultType<GetStudentResponseDTO>> {
    try {
      const student = await this.prisma.student.findFirst({
        where: { studentId },
        include: {
          country: true,
          province: true,
          enrollments: {
            include: { course: true, currency: true, transactions: true, bonusItemShipments: { include: { bonusItem: true } } },
          },
        },
      });
      if (!student) {
        return Result.fail(new GetStudentNotFound());
      }

      return Result.success({
        studentId: student.studentId,
        currencyId: student.currencyId,
        userId: student.userId,
        languageId: student.languageId,
        sex: student.sex,
        firstName: student.firstName,
        lastName: student.lastName,
        address1: student.address1,
        address2: student.address2,
        city: student.city,
        provinceId: student.provinceId,
        postalCode: student.postalCode,
        countryId: student.countryId,
        telephoneCountryCode: student.telephoneCountryCode,
        telephoneNumber: student.telephoneNumber,
        emailAddress: student.emailAddress,
        paymentStart: this.dateService.fixPrismaReadDate(student.paymentStart),
        paymentDay: student.paymentDay,
        sms: student.sms,
        enrollmentCount: student.enrollmentCount,
        created: this.dateService.fixPrismaReadDate(student.created),
        modified: this.dateService.fixPrismaReadDate(student.modified),
        province: student.province === null ? null : {
          provinceId: student.province.provinceId,
          countryId: student.province.countryId,
          code: student.province.code,
          name: student.province.name,
        },
        country: {
          countryId: student.country.countryId,
          code: student.country.code,
          name: student.country.name,
          needsPostalCode: student.country.needsPostalCode,
        },
        enrollments: student.enrollments.map(e => ({
          enrollmentId: e.enrollmentId,
          studentId: e.studentId,
          courseId: e.courseId,
          currencyId: e.currencyId,
          userId: e.userId,
          enrollmentDate: this.dateService.fixPrismaReadDate(e.enrollmentDate),
          expiryDate: this.dateService.fixPrismaReadDate(e.expiryDate),
          paymentPlan: e.paymentPlan,
          status: e.status,
          statusDate: this.dateService.fixPrismaReadDate(e.statusDate),
          gradEmailDate: this.dateService.fixPrismaReadDate(e.gradEmailDate),
          gradEmailSkip: e.gradEmailSkip,
          cost: e.cost.toNumber(),
          discount: e.discount.toNumber(),
          installment: e.installment.toNumber(),
          noShipping: e.noShipping,
          hideFromShippingList: e.hideFromShippingList,
          paymentOverride: e.paymentOverride,
          paymentFrequency: e.paymentFrequency,
          paymentDay: e.paymentDay,
          paymentStart: this.dateService.fixPrismaReadDate(e.paymentStart),
          accountId: e.accountId,
          preparedDate: this.dateService.fixPrismaReadDate(e.preparedDate),
          shippedDate: this.dateService.fixPrismaReadDate(e.shippedDate),
          diploma: e.diploma,
          diplomaDate: this.dateService.fixPrismaReadDate(e.diplomaDate),
          fastTrack: e.fastTrack,
          noStudentCenter: e.noStudentCenter,
          created: this.dateService.fixPrismaReadDate(e.created),
          modified: this.dateService.fixPrismaReadDate(e.modified),
          course: {
            courseId: e.course.courseId,
            schoolId: e.course.schoolId,
            code: e.course.code,
            name: e.course.name,
            prefix: e.course.prefix,
            maxAssignments: e.course.maxAssignments,
            order: e.course.order,
            cost: e.course.cost.toNumber(),
            created: this.dateService.fixPrismaReadDate(e.course.created),
            modified: this.dateService.fixPrismaReadDate(e.course.modified),
          },
          currency: {
            currencyId: e.currency.currencyId,
            code: e.currency.code,
            name: e.currency.name,
            symbol: e.currency.symbol,
            exchangeRate: e.currency.exchangeRate.toNumber(),
            created: this.dateService.fixPrismaReadDate(e.currency.created),
            modified: this.dateService.fixPrismaReadDate(e.currency.modified),
          },
          transactions: e.transactions.map(t => {
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
            };
          }),
          bonusItemShipments: e.bonusItemShipments.map(s => ({
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
        })),
      });

    } catch (err) {
      this.logger.error('error getting student', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
