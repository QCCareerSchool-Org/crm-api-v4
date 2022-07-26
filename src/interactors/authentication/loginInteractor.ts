import type { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/index.js';

import type { AccessTokenPayload } from '../../domain/accessTokenPayload.js';
import type { IConfigService } from '../../services/config/index.js';
import type { ICryptoService } from '../../services/crypto/index.js';
import type { IDateService } from '../../services/date/index.js';
import type { IIPAddressService } from '../../services/ipaddress/index.js';
import type { IJWTService } from '../../services/jwt/index.js';
import type { ILoggerService } from '../../services/logger/index.js';
import type { IUUIDService } from '../../services/uuid/index.js';
import type { IInteractor, InteractorCookie, InteractorCookieOptions } from '../index.js';
import type { ResultType } from '../result.js';
import { Result } from '../result.js';

type LoginRequestDTO = {
  studentId: number;
  password: string;
  stayLoggedIn?: boolean;
  ipAddress: string | null;
  browser: string | null;
  browserVersion: string | null;
  mobile: boolean | null;
  os: string | null;
  city: string | null;
  country: string | null;
  latitude: number | null;
  longitude: number | null;
};

type LoginResponseDTO = {
  accessTokenPayload: AccessTokenPayload;
  cookies: InteractorCookie[];
};

export class LoginUsernameNotFound extends Error { }
export class LoginNoPasswordHash extends Error { }
export class LoginWrongPassword extends Error { }

export class LoginInteractor implements IInteractor<LoginRequestDTO, LoginResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly configService: IConfigService,
    private readonly dateService: IDateService,
    private readonly jwtService: IJWTService,
    private readonly cryptoService: ICryptoService,
    private readonly uuidService: IUUIDService,
    private readonly ipAddressService: IIPAddressService,
    private readonly logger: ILoggerService,
  ) { /* empty */ }

  public async execute(request: LoginRequestDTO): Promise<ResultType<LoginResponseDTO>> {
    try {

      const student = await this.prisma.student.findFirst({
        where: { studentId: request.studentId },
      });
      if (!student) {
        return Result.fail(new LoginUsernameNotFound());
      }

      if (student.password === null) {
        return Result.fail(new LoginNoPasswordHash());
      }

      const passwordMatches = await this.cryptoService.verify(request.password, student.password);
      if (!passwordMatches) {
        return Result.fail(new LoginWrongPassword());
      }

      // determine when the access token should expire
      const accessExp = Math.floor(Date.now() / 1000) + this.configService.config.auth.accessTokenLifetime;

      // generate a cryptographically suitable pseudo-random value for the XSRF token
      const xsrfTokenBytes = await this.cryptoService.randomBytes(16); // 128 bits of entropy
      const xsrfTokenString = xsrfTokenBytes.toString('base64');

      // create a jwt access token
      const accessTokenPayload: AccessTokenPayload = {
        crm: {
          id: student.studentId,
          type: 'student',
        },
        exp: accessExp,
        xsrf: xsrfTokenString, // store the XSRF token in the payload
      };
      const accessToken = await this.jwtService.sign(accessTokenPayload);

      // create a cryptographically suitable pseudo-random value for the refresh token
      const refreshTokenBytes = await this.cryptoService.randomBytes(64); // 512 bits of entropy
      const refreshTokenString = refreshTokenBytes.toString('base64');

      // store a the refresh token in the database
      await this.prisma.refreshToken.create({
        data: {
          refreshTokenId: this.uuidService.uuidToBin(this.uuidService.createUUID()),
          studentId: student.studentId,
          userId: null,
          token: refreshTokenBytes,
          expiry: new Date(this.dateService.getDate().getTime() + (this.configService.config.auth.refreshTokenLifetime * 1000)),
          ipAddress: request.ipAddress === null ? null : this.ipAddressService.parse(request.ipAddress),
          browser: request.browser,
          browserVersion: request.browserVersion,
          mobile: request.mobile,
          os: request.os,
          city: request.city,
          country: request.country,
          latitude: request.latitude === null ? null : new Decimal(request.latitude),
          longitude: request.longitude === null ? null : new Decimal(request.longitude),
        },
      });

      const baseCookieOptions = {
        secure: this.configService.config.environment === 'production',
        httpOnly: true,
        domain: this.configService.config.auth.cookieDomain,
        sameSite: 'strict',
      } as const;

      const accessCookieOptions: InteractorCookieOptions = {
        ...baseCookieOptions,
        path: this.configService.config.auth.cookiePath,
        maxAge: this.configService.config.auth.accessTokenLifetime * 1000,
      };

      const refreshCookieOptions: InteractorCookieOptions = {
        ...baseCookieOptions,
        path: this.configService.config.auth.cookiePath + '/auth/refresh',
      };

      if (request.stayLoggedIn) {
        refreshCookieOptions.maxAge = this.configService.config.auth.refreshTokenLifetime * 1000;
      }

      return Result.success({
        accessTokenPayload,
        cookies: [
          { name: 'accessToken', value: accessToken, options: accessCookieOptions },
          { name: this.configService.config.auth.xsrfCookieName, value: xsrfTokenString, options: { ...accessCookieOptions, path: '/', httpOnly: false } }, // path '/' and httpOnly false for Angular CSRF
          { name: 'refreshToken', value: refreshTokenString, options: refreshCookieOptions },
        ],
      });

    } catch (err) {
      this.logger.error('error logging in', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
