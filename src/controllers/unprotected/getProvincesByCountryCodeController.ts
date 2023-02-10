import * as yup from 'yup';

import type { GetProvincesByCountryCodeResponseDTO } from '../../interactors/unprotected/getProvincesByCountryCodeInteractor';
import { getProvincesByCountryCodeInteractor } from '../../interactors/unprotected/index.js';
import { BaseController } from '../baseController.js';

type Request = {
  query: {
    countryCode: string;
  };
};

type Response = GetProvincesByCountryCodeResponseDTO;

export class GetProvincesByCountryCodeController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {
    const querySchema: yup.SchemaOf<Request['query']> = yup.object({
      countryCode: yup.string().defined(),
    });
    try {
      const query = await querySchema.validate(this.req.query);
      return { query };
    } catch (error) {
      if (error instanceof Error) {
        this.badRequest(error.message);
      } else {
        this.badRequest('invalid request');
      }
      return false;
    }
  }

  protected async executeImpl({ query }: Request): Promise<void> {
    if (!this.isGetMethod()) {
      return this.methodNotAllowed();
    }

    const result = await getProvincesByCountryCodeInteractor.execute({ countryCode: query.countryCode });

    if (result.success) {
      return this.ok(result.value);
    }

    switch (result.error.constructor) {
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
