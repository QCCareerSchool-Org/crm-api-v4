import * as yup from 'yup';

import { logoutInteractor } from '../../interactors/authentication/index.js';
import { environmentConfigService } from '../../services/index.js';
import { BaseController } from '../baseController.js';

type Request = {
  cookies: {
    refreshToken?: string;
  };
};

export class LogoutController extends BaseController<Request, void> {

  protected async validate(): Promise<Request | false> {
    const cookiesSchema: yup.SchemaOf<Request['cookies']> = yup.object({
      refreshToken: yup.string(),
    });
    try {
      const cookies = await cookiesSchema.validate(this.req.cookies);
      return { cookies };
    } catch (error) {
      if (error instanceof Error) {
        this.badRequest(error.message);
      } else {
        this.badRequest('invalid request');
      }
      return false;
    }
  }

  protected async executeImpl({ cookies }: Request): Promise<void> {
    const token = typeof cookies.refreshToken === 'undefined' ? null : Buffer.from(cookies.refreshToken, 'base64');

    const result = await logoutInteractor.execute({ token });

    this.clearCookies();

    if (result.success) {
      return this.noContent();
    }

    switch (result.error.constructor) {
      default:
        return this.internalServerError(result.error.message);
    }
  }

  /**
   * Clear all authorization cookies
   */
  private clearCookies(): void {
    const secure = environmentConfigService.config.environment !== 'development';
    const sameSite = 'strict';
    const httpOnly = true;
    const domain = environmentConfigService.config.auth.cookieDomain;
    this.res.clearCookie('refeshToken', { secure, sameSite, httpOnly, domain });
    this.res.clearCookie('refreshType', { secure, sameSite, httpOnly, domain });
    this.res.clearCookie('refreshId', { secure, sameSite, httpOnly, domain });
    this.res.clearCookie('accessToken', { secure, sameSite, httpOnly, domain });
    this.res.clearCookie('XSRF-TOKEN', { secure, sameSite, httpOnly, domain });
  }
}
