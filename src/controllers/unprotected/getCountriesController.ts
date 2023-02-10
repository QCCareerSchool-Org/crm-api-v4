import type { GetCountriesResponseDTO } from '../../interactors/unprotected/getCountriesInteractor';
import { getCountriesInteractor } from '../../interactors/unprotected/index.js';
import { BaseController } from '../baseController.js';

type Request = Record<string, never>;

type Response = GetCountriesResponseDTO;

export class GetCountriesController extends BaseController<Request, Response> {

  // eslint-disable-next-line @typescript-eslint/require-await
  protected async validate(): Promise<Request | false> {
    return {};
  }

  protected async executeImpl(): Promise<void> {
    if (!this.isGetMethod()) {
      return this.methodNotAllowed();
    }

    const result = await getCountriesInteractor.execute();

    if (result.success) {
      return this.ok(result.value);
    }

    switch (result.error.constructor) {
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
