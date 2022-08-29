import type { CountryDTO } from '../../domain/countryDTO.js';
import type { CourseDTO } from '../../domain/courseDTO.js';
import type { CurrencyDTO } from '../../domain/currencyDTO.js';
import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { ProvinceDTO } from '../../domain/provinceDTO.js';
import type { StudentDTO } from '../../domain/studentDTO.js';
import type { TransactionDTO } from '../../domain/transactionDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
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
  }>;
};

class GetStudentError extends Error { }
export class GetStudentNotFound extends GetStudentError { }

export class GetStudentInteractor implements IInteractor<GetStudentRequestDTO, GetStudentResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
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
            include: { course: true, currency: true, transactions: true },
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
        paymentStart: student.paymentStart,
        paymentDay: student.paymentDay,
        sms: student.sms,
        enrollmentCount: student.enrollmentCount,
        created: student.created,
        modified: student.modified,
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
          enrollmentDate: e.enrollmentDate,
          expiryDate: e.expiryDate,
          paymentPlan: e.paymentPlan,
          status: e.status,
          statusDate: e.statusDate,
          gradEmailDate: e.gradEmailDate,
          gradEmailSkip: e.gradEmailSkip,
          cost: e.cost.toNumber(),
          discount: e.discount.toNumber(),
          installment: e.installment.toNumber(),
          noShipping: e.noShipping,
          hideFromShippingList: e.hideFromShippingList,
          paymentOverride: e.paymentOverride,
          paymentFrequency: e.paymentFrequency,
          paymentDay: e.paymentDay,
          paymentStart: e.paymentStart,
          accountId: e.accountId,
          preparedDate: e.preparedDate,
          shippedDate: e.shippedDate,
          diploma: e.diploma,
          diplomaDate: e.diplomaDate,
          fastTrack: e.fastTrack,
          noStudentCenter: e.noStudentCenter,
          created: e.created,
          modified: e.modified,
          course: {
            courseId: e.course.courseId,
            schoolId: e.course.schoolId,
            code: e.course.code,
            name: e.course.name,
            prefix: e.course.prefix,
            maxAssignments: e.course.maxAssignments,
            order: e.course.order,
            cost: e.course.cost.toNumber(),
            created: e.course.created,
            modified: e.course.modified,
          },
          currency: {
            currencyId: e.currency.currencyId,
            code: e.currency.code,
            name: e.currency.name,
            symbol: e.currency.symbol,
            exchangeRate: e.currency.exchangeRate.toNumber(),
            created: e.currency.created,
            modified: e.currency.modified,
          },
          transactions: e.transactions.map(t => {
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
            };
          }),
        })),
      });

    } catch (err) {
      this.logger.error('error getting student', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
