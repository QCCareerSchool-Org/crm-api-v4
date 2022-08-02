import type { PrismaClient } from '@prisma/client';

import type { StudentDTO } from '../../domain/studentDTO.js';
import type { IEmailValidatorService } from '../../services/emailValidator/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type UpdateEmailAddressRequestDTO = {
  studentId: number;
  emailAddress: string;
};

export type UpdateEmailAddressResponseDTO = StudentDTO;

class UpdateEmailAddressError extends Error { }
export class UpdateEmailAddressStudentNotFound extends UpdateEmailAddressError { }
export class UpdateEmailAddressInvalidEmailAddress extends UpdateEmailAddressError { }

export class UpdateEmailAddressInteractor implements IInteractor<UpdateEmailAddressRequestDTO, UpdateEmailAddressResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly emailValidator: IEmailValidatorService,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId, emailAddress }: UpdateEmailAddressRequestDTO): Promise<ResultType<UpdateEmailAddressResponseDTO>> {
    try {
      const student = await this.prisma.student.findFirst({
        where: { studentId },
      });
      if (!student) {
        return Result.fail(new UpdateEmailAddressStudentNotFound());
      }

      if (!this.emailValidator.validate(emailAddress)) {
        return Result.fail(new UpdateEmailAddressInvalidEmailAddress());
      }

      const updated = await this.prisma.student.update({
        where: { studentId },
        data: {
          emailAddress,
          notes: {
            create: { note: `Student updated email address number from ${student.emailAddress} to ${emailAddress}` },
          },
        },
      });

      return Result.success({
        studentId: updated.studentId,
        currencyId: updated.currencyId,
        userId: updated.userId,
        languageId: updated.languageId,
        sex: updated.sex,
        firstName: updated.firstName,
        lastName: updated.lastName,
        address1: updated.address1,
        address2: updated.address2,
        city: updated.city,
        provinceId: updated.provinceId,
        postalCode: updated.postalCode,
        countryId: updated.countryId,
        telephoneCountryCode: updated.telephoneCountryCode,
        telephoneNumber: updated.telephoneNumber,
        emailAddress: updated.emailAddress,
        paymentStart: updated.paymentStart,
        paymentDay: updated.paymentDay,
        sms: updated.sms,
        enrollmentCount: updated.enrollmentCount,
        created: updated.created,
        modified: updated.modified,
      });

    } catch (err) {
      this.logger.error('error updating email address', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
