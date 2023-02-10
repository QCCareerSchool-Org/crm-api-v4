import type { StudentDTO } from '../../domain/studentDTO.js';
import type { PrismaClient } from '../../frameworks/prisma/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type UpdateTelephoneNumberRequestDTO = {
  studentId: number;
  telephoneCountryCode: number;
  telephoneNumber: string;
};

export type UpdateTelephoneNumberResponseDTO = StudentDTO;

class UpdateTelephoneNumberError extends Error { }
export class UpdateTelephoneNumberStudentNotFound extends UpdateTelephoneNumberError { }
export class UpdateTelephoneNumberInvalidTelephoneNumber extends UpdateTelephoneNumberError { }

export class UpdateTelephoneNumberInteractor implements IInteractor<UpdateTelephoneNumberRequestDTO, UpdateTelephoneNumberResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId, telephoneCountryCode, telephoneNumber }: UpdateTelephoneNumberRequestDTO): Promise<ResultType<UpdateTelephoneNumberResponseDTO>> {
    try {
      const student = await this.prisma.student.findFirst({
        where: { studentId },
      });
      if (!student) {
        return Result.fail(new UpdateTelephoneNumberStudentNotFound());
      }

      const NORTH_AMERICA_DIALING_CODE = 1;
      const GB_DIALING_CODE = 44;
      const AU_DIALING_CODE = 61;
      const NZ_DIALING_CODE = 64;

      if (telephoneCountryCode === NORTH_AMERICA_DIALING_CODE) {
        telephoneNumber = this.fixNATelephoneNumber(telephoneNumber);
      } else {
        telephoneNumber = telephoneNumber.replace(/\D/gu, '');
        if (telephoneCountryCode === AU_DIALING_CODE) {
          if (!/^((1300|1800)[0-9]{6})|0[1-9][0-9]{8}$/u.test(telephoneNumber)) {
            return Result.fail(new UpdateTelephoneNumberInvalidTelephoneNumber('Invalid telephone number. The format must be 0xxxxxxxxx, 1300xxxxxx, or 1800xxxxxx.'));
          }
        } else if (telephoneCountryCode === GB_DIALING_CODE || telephoneCountryCode === NZ_DIALING_CODE) {
          if (!telephoneNumber.startsWith('0')) {
            telephoneNumber = '0' + telephoneNumber;
          }
        }
      }

      const updated = await this.prisma.student.update({
        where: { studentId },
        data: {
          telephoneCountryCode,
          telephoneNumber,
          notes: {
            create: { note: `Student updated telephone number from +${student.telephoneCountryCode} ${student.telephoneNumber} to +${telephoneCountryCode} ${telephoneNumber}` },
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
      this.logger.error('error updating telephone number', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }

  /**
   * Formats a telephone number like XXX-XXX-XXXX.
   * @param telephoneNumber a telephone number
   */
  private fixNATelephoneNumber(telephoneNumber: string): string {
    const strippedNumber = telephoneNumber.replace(/\D/gu, ''); // remove any non-digit characters

    if (strippedNumber.length === 10) {
      return `${strippedNumber.substring(0, 3)}-${strippedNumber.substring(3, 6)}-${strippedNumber.substring(6, 10)}`;
    }

    if (strippedNumber.length === 11 && strippedNumber.startsWith('1')) {
      return `${strippedNumber.substring(1, 4)}-${strippedNumber.substring(4, 7)}-${strippedNumber.substring(7, 11)}`;
    }

    return telephoneNumber; // there's nothing we can do--return the original telephone number
  }
}
