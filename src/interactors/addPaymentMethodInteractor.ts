import type { PrismaClient } from '@prisma/client';

import type { PaymentMethodDTO } from '../domain/paymentMethodDTO.js';
import type { ILoggerService } from '../services/logger/index.js';
import type { IPaysafeServiceFactory } from '../services/paysafe/index.js';
import type { ResultType } from './result.js';
import { Result } from './result.js';
import type { IInteractor } from './index.js';

export type AddPaymentMethodRequestDTO = {
  studentId: number;
  enrollmentId: number;
  paymentToken: string;
};

export type AddPaymentMethodResponseDTO = PaymentMethodDTO;

class AddPaymentMethodError extends Error {}
export class AddPaymentMethodPaymentTypeNotFound extends AddPaymentMethodError {}
export class AddPaymentMethodEnrollmentNotFound extends AddPaymentMethodError {}

export class AddPaymentMethodInteractor implements IInteractor<AddPaymentMethodRequestDTO, AddPaymentMethodResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly paysafeServiceFactory: IPaysafeServiceFactory,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId, enrollmentId, paymentToken }: AddPaymentMethodRequestDTO): Promise<ResultType<PaymentMethodDTO>> {
    try {
      const paymentType = await this.prisma.paymentType.findFirst({
        where: { name: 'Paysafe' },
      });
      if (!paymentType) {
        return Result.fail(new AddPaymentMethodPaymentTypeNotFound());
      }

      const enrollment = await this.prisma.enrollment.findFirst({
        where: { enrollmentId, studentId },
        include: {
          student: { include: { country: true, province: true } },
          course: true,
          currency: true,
        },
      });
      if (!enrollment) {
        return Result.fail(new AddPaymentMethodEnrollmentNotFound());
      }

      const paysafe = this.paysafeServiceFactory.createInstance(enrollment.currency.code);

      const studentNumber = `${enrollment.course.prefix}${enrollment.enrollmentId}`;

      const paysafeResult = await paysafe.create(
        studentNumber,
        enrollment.student.firstName,
        enrollment.student.lastName,
        enrollment.student.sex,
        enrollment.student.emailAddress,
        enrollment.student.telephoneNumber,
        enrollment.student.address1,
        enrollment.student.address2,
        enrollment.student.city,
        enrollment.student.province === null ? null : enrollment.student.province.code,
        enrollment.student.postalCode,
        enrollment.student.country.code,
        paymentToken,
      );

      const paymentMethod = await this.prisma.$transaction(async transaction => {
        await transaction.paymentMethod.updateMany({
          data: { primary: false },
          where: { enrollmentId },
        });
        return transaction.paymentMethod.create({
          data: {
            enrollmentId,
            paymentTypeId: paymentType.paymentTypeId,
            primary: true,
            paysafeProfileId: paysafeResult.profileId,
            paysafeCardId: paysafeResult.cardId,
            paysafePaymentToken: paysafeResult.paymentToken,
            paysafeCompany: paysafeResult.company,
            pan: paysafeResult.maskedPan,
            expiryMonth: paysafeResult.expiryMonth,
            expiryYear: paysafeResult.expiryYear,
          },
        });
      });

      return Result.success({
        paymentMethodId: paymentMethod.paymentMethodId,
        enrollmentId: paymentMethod.enrollmentId,
        paymentTypeId: paymentMethod.paymentTypeId,
        primary: paymentMethod.primary,
        paysafeProfileId: paymentMethod.paysafeProfileId,
        paysafeCardId: paymentMethod.paysafeCardId,
        paysafePaymentToken: paymentMethod.paysafePaymentToken,
        paysafeCompany: paymentMethod.paysafeCompany,
        pan: paymentMethod.pan,
        expiryMonth: paymentMethod.expiryMonth,
        expiryYear: paymentMethod.expiryYear,
        deleted: paymentMethod.deleted,
        notified: paymentMethod.notified,
        disabled: paymentMethod.disabled,
        transactionCount: paymentMethod.transactionCount,
        created: paymentMethod.created,
        modified: paymentMethod.modified,
      });
    } catch (err) {
      this.logger.error('error adding payment method', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
