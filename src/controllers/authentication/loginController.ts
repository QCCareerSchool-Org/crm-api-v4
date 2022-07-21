import type { BrowserDetectInfo } from 'browser-detect/dist/types/browser-detect.interface.js';
import type { CityResponse } from 'maxmind';
import * as yup from 'yup';

import type { AccessTokenPayload } from '../../domain/accessTokenPayload.js';
import { loginInteractor } from '../../interactors/authentication/index.js';
import { LoginNoPasswordHash, LoginUsernameNotFound, LoginWrongPassword } from '../../interactors/authentication/loginInteractor.js';
import { BaseController } from '../baseController.js';

type Request = {
  body: {
    studentId: number;
    password: string;
    stayLoggedIn?: boolean;
  };
};

type Response = AccessTokenPayload;

export class LoginController extends BaseController<Request, Response> {

  protected async validate(): Promise<Request | false> {

    const bodySchema: yup.SchemaOf<Request['body']> = yup.object({
      studentId: yup.number().required(),
      password: yup.string().required(),
      stayLoggedIn: yup.boolean(),
    });
    try {
      const body = await bodySchema.validate(this.req.body);
      return { body };
    } catch (error) {
      if (error instanceof Error) {
        this.badRequest(error.message);
      } else {
        this.badRequest('invalid request');
      }
      return false;
    }
  }

  protected async executeImpl({ body }: Request): Promise<void> {

    const { studentId, password, stayLoggedIn } = body;

    // read browser data from request (created by middleware)
    const browser = this.res.locals.browser as BrowserDetectInfo | undefined;

    // read location data from request (created by middleware)
    const location = this.res.locals.location as CityResponse | undefined;

    // read ip address data from request
    let ipAddress: string | null = null;
    const forwardedFor = this.req.headers['x-forwarded-for'];
    if (Array.isArray(forwardedFor) && forwardedFor.length) {
      ipAddress = forwardedFor[0].split(',')[0].trim();
    } else if (typeof forwardedFor === 'string') {
      ipAddress = forwardedFor.split(',')[0].trim();
    } else if (typeof this.req.socket.remoteAddress === 'string') {
      ipAddress = this.req.socket.remoteAddress;
    }

    const result = await loginInteractor.execute({
      studentId,
      password,
      stayLoggedIn,
      ipAddress,
      browser: browser?.name ?? null,
      browserVersion: browser?.version ?? null,
      mobile: browser?.mobile ?? null,
      os: browser?.os ?? null,
      city: location?.city?.names.en ?? null,
      country: location?.country?.iso_code ?? null,
      latitude: location?.location?.latitude ?? null,
      longitude: location?.location?.longitude ?? null,
    });

    if (result.success) {
      const { accessTokenPayload, cookies } = result.value;

      // send all the cookies
      for (const c of cookies) {
        this.sendCookie(c.name, c.value, c.options.maxAge, c.options.path, c.options.domain, c.options.secure, c.options.httpOnly, c.options.sameSite);
      }

      // return the payload
      return this.ok(accessTokenPayload);
    }

    switch (result.error.constructor) {
      case LoginNoPasswordHash:
        return this.internalServerError('Password is not set');
      case LoginWrongPassword:
      case LoginUsernameNotFound:
        // send this response for either error--we don't want an attacker to know whether
        // a username exists or not
        return this.badRequest('Invalid username or password');
      default:
        return this.internalServerError(result.error.message);
    }
  }
}
