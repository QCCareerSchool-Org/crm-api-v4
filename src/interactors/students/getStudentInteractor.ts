import type { PrismaClient } from '@prisma/client';

import type { StudentDTO } from '../../domain/studentDTO.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetStudentRequestDTO = {
  studentId: number;
};

export type GetStudentResponseDTO = StudentDTO;

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
        include: { country: true, province: true },
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
        province: student.province === null ? null : student.province.code,
        postalCode: student.postalCode,
        country: student.country.name,
        telephoneCountryCode: student.telephoneCountryCode,
        telephoneNumber: student.telephoneNumber,
        emailAddress: student.emailAddress,
        paymentStart: student.paymentStart,
        paymentDay: student.paymentDay,
        sms: student.sms,
        enrollmentCount: student.enrollmentCount,
        created: student.created,
        modified: student.modified,
      });

    } catch (err) {
      this.logger.error('error getting student', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
