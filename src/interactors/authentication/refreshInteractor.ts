import type { PrismaClient } from '@prisma/client';

import type { AccessTokenPayload } from '../../domain/accessTokenPayload.js';
import type { IInteractor, InteractorCookie, InteractorCookieOptions } from '../../interactors/index.js';
import type { ResultType } from '../../interactors/result.js';
import { Result } from '../../interactors/result.js';
import type { IConfigService } from '../../services/config/index.js';
import type { ICryptoService } from '../../services/crypto/index.js';
import type { IDateService } from '../../services/date/index.js';
import type { IJWTService } from '../../services/jwt/index.js';
import type { ILoggerService } from '../../services/logger/index.js';

export type RefreshRequestDTO = {
  token: Buffer;
};

export type RefreshResponseDTO = {
  accessTokenPayload: AccessTokenPayload;
  cookies: InteractorCookie[];
};

export class RefreshTokenNotFound extends Error {}
export class RefreshTokenExpired extends Error {}
export class RefreshTokenNoStudent extends Error {}

export class RefreshInteractor implements IInteractor<RefreshRequestDTO, RefreshResponseDTO> {

  public constructor(
    private readonly prisma: PrismaClient,
    private readonly configService: IConfigService,
    private readonly dateService: IDateService,
    private readonly jwtService: IJWTService,
    private readonly cryptoService: ICryptoService,
    private readonly logger: ILoggerService,
  ) { /* empty */ }

  public async execute({ token }: RefreshRequestDTO): Promise<ResultType<RefreshResponseDTO>> {
    try {
      // look up the refresh token
      const refreshToken = await this.prisma.refreshToken.findUnique({
        where: { token },
      });
      if (!refreshToken) {
        return Result.fail(new RefreshTokenNotFound());
      }

      // make sure it's not expired
      if (refreshToken.expiry < this.dateService.getDate()) {
        return Result.fail(new RefreshTokenExpired());
      }

      if (refreshToken.studentId === null) {
        return Result.fail(new RefreshTokenNoStudent());
      }

      // determine when the new access token should expire
      const accessExp = Math.floor(this.dateService.getDate().getTime() / 1000) + this.configService.config.auth.accessTokenLifetime;

      // generate a cryptographically suitable pseudo-random value for the XSRF token
      const xsrfTokenBytes = await this.cryptoService.randomBytes(16); // 128 bits of entropy
      const xsrfTokenString = xsrfTokenBytes.toString('base64');

      // create a new jwt access token
      const accessTokenPayload: AccessTokenPayload = {
        crm: {
          id: refreshToken.studentId,
          type: 'student',
        },
        exp: accessExp,
        xsrf: xsrfTokenString, // store the XSRF token in the payload
      };
      const accessToken = await this.jwtService.sign(accessTokenPayload);

      const baseCookieOptions: InteractorCookieOptions = {
        secure: this.configService.config.environment !== 'development',
        httpOnly: true,
        domain: this.configService.config.auth.cookieDomain,
        sameSite: 'strict',
      } as const;

      const accessCookieOptions: InteractorCookieOptions = {
        ...baseCookieOptions,
        path: this.configService.config.auth.cookiePath,
        maxAge: this.configService.config.auth.accessTokenLifetime * 1000,
      };

      return Result.success({
        accessTokenPayload,
        cookies: [
          { name: 'accessToken', value: accessToken, options: accessCookieOptions },
          { name: this.configService.config.auth.xsrfCookieName, value: xsrfTokenString, options: { ...accessCookieOptions, path: '/', httpOnly: false } }, // path '/' and httpOnly false for Angular CSRF
        ],
      });

    } catch (err) {
      this.logger.error('error refreshing user', err instanceof Error ? err.message : err);
      return Result.fail(err instanceof Error ? err : Error('unknown error'));
    }
  }
}
