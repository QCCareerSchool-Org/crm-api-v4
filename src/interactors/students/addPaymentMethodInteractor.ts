import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { IDateService } from '../../services/date/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IPaysafeServiceFactory } from '../../services/paysafe/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type AddPaymentMethodRequestDTO = {
  studentId: number;
  enrollmentIds: number[];
  company: string;
  singleUseToken: string;
};

export type AddPaymentMethodResponseDTO = void;

class AddPaymentMethodError extends Error {}
export class AddPaymentMethodNoEnrollmentsSpecified extends AddPaymentMethodError {}
export class AddPaymentMethodPaymentTypeNotFound extends AddPaymentMethodError {}
export class AddPaymentMethodEnrollmentNotFound extends AddPaymentMethodError {}
export class AddPaymentMethodConflictingCurrency extends AddPaymentMethodError {}
export class AddPaymentMethodInvalidCompany extends AddPaymentMethodError {}

export class AddPaymentMethodInteractor implements IInteractor<AddPaymentMethodRequestDTO, AddPaymentMethodResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly paysafeServiceFactory: IPaysafeServiceFactory,
    private readonly dateService: IDateService,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId, enrollmentIds, company, singleUseToken }: AddPaymentMethodRequestDTO): Promise<ResultType<AddPaymentMethodResponseDTO>> {
    try {
      if (enrollmentIds.length === 0) {
        return Result.fail(new AddPaymentMethodNoEnrollmentsSpecified());
      }

      const paymentType = await this.prisma.paymentType.findFirst({
        where: { name: 'Paysafe' },
      });
      if (!paymentType) {
        return Result.fail(new AddPaymentMethodPaymentTypeNotFound());
      }

      const enrollments = await this.prisma.enrollment.findMany({
        where: {
          studentId,
          OR: enrollmentIds.map(enrollmentId => ({ enrollmentId })),
        },
        include: {
          student: { include: { country: true, province: true } },
          course: true,
          currency: true,
        },
      });
      if (enrollments.length !== enrollmentIds.length) {
        return Result.fail(new AddPaymentMethodEnrollmentNotFound());
      }

      const enrollment = enrollments[0];

      if (!enrollments.every(e => e.currencyId === enrollment.currencyId)) {
        return Result.fail(new AddPaymentMethodConflictingCurrency());
      }

      if (company !== 'CA' && company !== 'US' && company !== 'GB') {
        return Result.fail(new AddPaymentMethodInvalidCompany());
      }

      const paysafe = this.paysafeServiceFactory.createInstance(company, enrollment.currency.code);

      const studentNumber = `${enrollment.course.prefix}${enrollment.enrollmentId}`;

      this.logger.info('Creating credit card', { studentId, enrollmentIds, company });

      const prismaNow = this.dateService.fixPrismaWriteDate(this.dateService.getDate());

      const paysafeResult = await paysafe.create(
        studentNumber,
        enrollment.student.firstName,
        enrollment.student.lastName,
        enrollment.student.sex,
        enrollment.student.emailAddress ?? '',
        enrollment.student.telephoneNumber,
        enrollment.student.address1,
        enrollment.student.address2,
        enrollment.student.city,
        enrollment.student.province === null ? null : enrollment.student.province.code,
        enrollment.student.postalCode,
        enrollment.student.country.code,
        singleUseToken,
      );

      await this.prisma.$transaction(async transaction => {
        await transaction.paymentMethod.updateMany({
          data: { primary: false, modified: prismaNow },
          where: { OR: enrollments.map((e => ({ enrollmentId: e.enrollmentId }))) },
        });
        return transaction.paymentMethod.createMany({
          data: enrollments.map(e => ({
            enrollmentId: e.enrollmentId,
            paymentTypeId: paymentType.paymentTypeId,
            primary: true,
            paysafeProfileId: paysafeResult.profileId,
            paysafeCardId: paysafeResult.cardId,
            paysafePaymentToken: paysafeResult.paymentToken,
            paysafeCompany: paysafeResult.company,
            pan: paysafeResult.maskedPan,
            expiryMonth: paysafeResult.expiryMonth,
            expiryYear: paysafeResult.expiryYear,
            created: prismaNow,
            modified: prismaNow,
          })),
        });
      });

      return Result.success(undefined);

    } catch (err) {
      this.logger.error('error adding payment method', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
