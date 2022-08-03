import * as yup from 'yup';

import type { ChargePaymentMethodResponseDTO } from '../../interactors/students/chargePaymentMethodInteractor.js';
import { ChargePaymentMethodAmountExceedsMaximum, ChargePaymentMethodAmountTooLarge, ChargePaymentMethodAmountZeroOrLess, ChargePaymentMethodEnrollmentRefunded, ChargePaymentMethodEnrollmentTransferred, ChargePaymentMethodEnrollmentWithdrawn, ChargePaymentMethodNotFound, ChargePaymentMethodPaidInFull, ChargePaymentMethodPaysafeCompanyMissing, ChargePaymentMethodPaysafeTokenMissing, ChargePaymentMethodUnlinkedEnrollment, ChargePaymentMethodUnsupportedPaymentType } from '../../interactors/students/chargePaymentMethodInteractor.js';
import { chargePaymentMethodInteractor } from '../../interactors/students/index.js';
import { BaseController } from '../baseController.js';

type Request = {
  params: {
    /** numeric string */
    studentId: string;
    /** numeric string */
    enrollmentId: string;
    /** numeric string */
    paymentMethodId: string;
  };
  body: {
    amount: number;
  };
};

type Response = ChargePaymentMethodResponseDTO;

export class ChargePaymentMethodController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {
    const paramsSchema: yup.SchemaOf<Request['params']> = yup.object({
      studentId: yup.string().matches(/^\d+$/u).defined(),
      enrollmentId: yup.string().matches(/^\d+$/u).defined(),
      paymentMethodId: yup.string().matches(/^\d+$/u).defined(),
    });
    const bodySchema: yup.SchemaOf<Request['body']> = yup.object({
      amount: yup.number().defined(),
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
    const enrollmentId = parseInt(params.enrollmentId, 10);
    const paymentMethodId = parseInt(params.paymentMethodId, 10);

    const result = await chargePaymentMethodInteractor.execute({ studentId, enrollmentId, paymentMethodId, amount: body.amount });

    if (result.success) {
      return this.ok(result.value);
    }

    switch (result.error.constructor) {
      case ChargePaymentMethodNotFound:
        return this.notFound('Payment method not found');
      case ChargePaymentMethodUnlinkedEnrollment:
        return this.internalServerError('Unlinked enrollment');
      case ChargePaymentMethodEnrollmentTransferred:
        return this.badRequest('Enrollment has transferred');
      case ChargePaymentMethodEnrollmentWithdrawn:
        return this.badRequest('Enrollment has withdrawn');
      case ChargePaymentMethodEnrollmentRefunded:
        return this.badRequest('Enrollment has received end-of-course refund');
      case ChargePaymentMethodUnsupportedPaymentType:
        return this.badRequest('Unsupported payment type');
      case ChargePaymentMethodPaysafeCompanyMissing:
        return this.badRequest('Paysafe company missing');
      case ChargePaymentMethodPaysafeTokenMissing:
        return this.badRequest('Paysafe payment token missing');
      case ChargePaymentMethodAmountZeroOrLess:
        return this.badRequest('Amount must be greater than zero');
      case ChargePaymentMethodAmountExceedsMaximum:
        return this.badRequest('Amount exceeds maximum limits');
      case ChargePaymentMethodPaidInFull:
      case ChargePaymentMethodAmountTooLarge:
        return this.badRequest('Amount exceeds remaining balance');
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
