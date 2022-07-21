import * as yup from 'yup';

import type { AddPaymentMethodResponseDTO } from '../../interactors/students/addPaymentMethodInteractor.js';
import { AddPaymentMethodEnrollmentNotFound, AddPaymentMethodPaymentTypeNotFound } from '../../interactors/students/addPaymentMethodInteractor.js';
import { addPaymentMethodInteractor } from '../../interactors/students/index.js';
import { BaseController } from '../baseController.js';

type Request = {
  params: {
    /** numeric string */
    studentId: string;
  };
  body: {
    enrollmentIds: number[];
    paymentToken: string;
  };
};

type Response = AddPaymentMethodResponseDTO;

export class AddPaymentMethodController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {
    const paramsSchema: yup.SchemaOf<Request['params']> = yup.object({
      studentId: yup.string().matches(/^\d+$/u).defined(),
    });
    const bodySchema: yup.SchemaOf<Request['body']> = yup.object({
      enrollmentIds: yup.array().of(yup.number().defined()).defined(),
      paymentToken: yup.string().defined(),
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
    if (!this.isPostMethod()) {
      return this.methodNotAllowed();
    }

    const studentId = parseInt(params.studentId, 10);

    const result = await addPaymentMethodInteractor.execute({ studentId, enrollmentIds: body.enrollmentIds, paymentToken: body.paymentToken });

    if (result.success) {
      return this.noContent();
    }

    switch (result.error.constructor) {
      case AddPaymentMethodPaymentTypeNotFound:
        return this.internalServerError('Paysafe payment type not found');
      case AddPaymentMethodEnrollmentNotFound:
        return this.notFound('Enrollment not found');
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
