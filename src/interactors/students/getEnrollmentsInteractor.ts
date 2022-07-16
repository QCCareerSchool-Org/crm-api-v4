import type { PrismaClient } from '@prisma/client';

import type { CourseDTO } from '../../domain/courseDTO.js';
import type { EnrollmentDTO } from '../../domain/enrollmentDTO.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IInteractor } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

export type GetEnrollmentsRequestDTO = {
  studentId: number;
};

export type GetEnrollmentsResponseDTO = Array<EnrollmentDTO & {
  course: CourseDTO;
}>;

class GetEnrollmentsError extends Error { }

export class GetEnrollmentsInteractor implements IInteractor<GetEnrollmentsRequestDTO, GetEnrollmentsResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly logger: ILoggerService
  ) { /* empty */ }

  public async execute({ studentId }: GetEnrollmentsRequestDTO): Promise<ResultType<GetEnrollmentsResponseDTO>> {
    try {
      const enrollments = await this.prisma.enrollment.findMany({
        where: { studentId },
        include: { course: true },
      });

      return Result.success(enrollments.map(e => ({
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
      })));

    } catch (err) {
      this.logger.error('error getting enrollments', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
