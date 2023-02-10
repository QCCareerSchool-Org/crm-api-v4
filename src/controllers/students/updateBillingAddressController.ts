import * as yup from 'yup';

import { updateBillingAddressInteractor } from '../../interactors/students/index.js';
import type { UpdateBillingAddressResponseDTO } from '../../interactors/students/updateBillingAddressInteractor.js';
import { UpdateBillingAddressAddress1Empty, UpdateBillingAddressAddress1TooLong, UpdateBillingAddressAddress2TooLong, UpdateBillingAddressCityEmpty, UpdateBillingAddressCityTooLong, UpdateBillingAddressCountryNotFound, UpdateBillingAddressPostalCodeEmpty, UpdateBillingAddressPostalCodeTooLong, UpdateBillingAddressProvinceCodeEmpty, UpdateBillingAddressProvinceNotFound, UpdateBillingAddressStudentNotFound } from '../../interactors/students/updateBillingAddressInteractor.js';
import { BaseController } from '../baseController.js';

type Request = {
  params: {
    /** numeric string */
    studentId: string;
  };
  body: {
    address1: string;
    address2: string;
    city: string;
    provinceCode: string;
    postalCode: string;
    countryCode: string;
  };
};

type Response = UpdateBillingAddressResponseDTO;

export class UpdateBillingAddressController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {
    const paramsSchema: yup.SchemaOf<Request['params']> = yup.object({
      studentId: yup.string().matches(/^\d+$/u).defined(),
    });
    const bodySchema: yup.SchemaOf<Request['body']> = yup.object({
      address1: yup.string().defined(),
      address2: yup.string().defined(),
      city: yup.string().defined(),
      provinceCode: yup.string().defined(),
      postalCode: yup.string().defined(),
      countryCode: yup.string().defined(),
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

    const result = await updateBillingAddressInteractor.execute({
      studentId,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      provinceCode: body.provinceCode,
      postalCode: body.postalCode,
      countryCode: body.countryCode,
    });

    if (result.success) {
      return this.ok(result.value);
    }

    switch (result.error.constructor) {
      case UpdateBillingAddressStudentNotFound:
        return this.notFound('Student not found');
      case UpdateBillingAddressCountryNotFound:
        return this.badRequest('Invalid country code');
      case UpdateBillingAddressProvinceNotFound:
        return this.badRequest('Invalid province code');
      case UpdateBillingAddressProvinceCodeEmpty:
        return this.badRequest('provinceCode is empty');
      case UpdateBillingAddressAddress1Empty:
        return this.badRequest('address1 is empty');
      case UpdateBillingAddressAddress1TooLong:
        return this.badRequest('address1 is too long');
      case UpdateBillingAddressAddress2TooLong:
        return this.badRequest('address2 is too long');
      case UpdateBillingAddressCityEmpty:
        return this.badRequest('city is empty');
      case UpdateBillingAddressCityTooLong:
        return this.badRequest('city is too long');
      case UpdateBillingAddressPostalCodeEmpty:
        return this.badRequest('postalCode is empty');
      case UpdateBillingAddressPostalCodeTooLong:
        return this.badRequest('postalCode is too long');
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
