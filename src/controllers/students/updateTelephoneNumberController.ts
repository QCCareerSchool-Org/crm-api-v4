import * as yup from 'yup';

import { updateTelephoneNumberInteractor } from '../../interactors/students/index.js';
import type { UpdateTelephoneNumberResponseDTO } from '../../interactors/students/updateTelephoneNumberInteractor.js';
import { UpdateTelephoneNumberInvalidTelephoneNumber, UpdateTelephoneNumberStudentNotFound } from '../../interactors/students/updateTelephoneNumberInteractor.js';
import { BaseController } from '../baseController.js';

type Request = {
  params: {
    /** numeric string */
    studentId: string;
  };
  body: {
    telephoneCountryCode: number;
    telephoneNumber: string;
  };
};

type Response = UpdateTelephoneNumberResponseDTO;

export class UpdateTelephoneNumberController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {
    const paramsSchema: yup.SchemaOf<Request['params']> = yup.object({
      studentId: yup.string().matches(/^\d+$/u).defined(),
    });
    const bodySchema: yup.SchemaOf<Request['body']> = yup.object({
      telephoneCountryCode: yup.number().defined(),
      telephoneNumber: yup.string().defined(),
    });
    try {
      const [ params, body ] = await Promise.all([
        paramsSchema.validate(this.req.params),
        bodySchema.validate(this.req.body),
      ]);
      return { params, body: body as Request['body'] };
    } catch (error) {
      if (error instanceof Error) {
        this.badRequest(error.message);
      } else {
        this.badRequest('invalid request');
      }
      return false;
    }
  }

  protected async executeImpl({ params, body }: Request): Promise<void> {
    if (!this.isPutMethod()) {
      return this.methodNotAllowed();
    }

    const studentId = parseInt(params.studentId, 10);

    const result = await updateTelephoneNumberInteractor.execute({ studentId, telephoneCountryCode: body.telephoneCountryCode, telephoneNumber: body.telephoneNumber });

    if (result.success) {
      return this.ok(result.value);
    }

    switch (result.error.constructor) {
      case UpdateTelephoneNumberStudentNotFound:
        return this.notFound('Student not found');
      case UpdateTelephoneNumberInvalidTelephoneNumber:
        return this.badRequest(result.error.message);
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
