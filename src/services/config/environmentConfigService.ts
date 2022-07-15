import dotenv from 'dotenv';

import type { Config, IConfigService } from './index.js';

dotenv.config();

export class EnvironmentConfigService implements IConfigService {
  static #defaultPort = 8080;

  readonly #config: Config;

  public constructor() {
    const environment = process.env.NODE_ENV;
    if (environment !== 'development' && environment !== 'production') {
      throw Error('Environment variable NODE_ENV must be \'development\' or \'production\'');
    }

    const port = process.env.PORT
      ? parseInt(process.env.PORT, 10)
      : EnvironmentConfigService.#defaultPort;

    // const host = process.env.HOST;
    // if (typeof host === 'undefined') {
    //   throw Error('Environment variable HOST is undefined');
    // }

    const smtpHost = process.env.SMTP_HOST;
    if (typeof smtpHost === 'undefined') {
      throw Error('Environment variable SMTP_HOST is undefined');
    }

    const smtpPort = process.env.SMTP_PORT;
    if (typeof smtpPort === 'undefined') {
      throw Error('Environment variable SMTP_PORT is undefined');
    }
    const smtpPortNumber = parseInt(smtpPort, 10);
    if (isNaN(smtpPortNumber)) {
      throw Error('Environment variable SMTP_PORT is invalid');
    }

    const smtpUser = process.env.SMTP_USERNAME;
    if (typeof smtpUser === 'undefined') {
      throw Error('Environment variable SMTP_USERNAME is undefined');
    }

    const smtpPassword = process.env.SMTP_PASSWORD;
    if (typeof smtpPassword === 'undefined') {
      throw Error('Environment variable SMTP_PASSWORD is undefined');
    }

    const smtpMode = process.env.SMTP_MODE;
    if (typeof smtpMode === 'undefined') {
      throw Error('Environment variable SMTP_MODE is undefined');
    }
    if (smtpMode !== 'TLS' && smtpMode !== 'STARTTLS' && smtpMode !== 'INSECURE') {
      throw Error('Environment variable SMTP_MODE is invalid');
    }

    const paysafeCAApiKey = process.env.PAYSAFE_CA_API_KEY;
    if (typeof paysafeCAApiKey === 'undefined') {
      throw Error('Environment variable PAYSAFE_CA_API_KEY is undefined');
    }
    const paysafeCAApiPassword = process.env.PAYSAFE_CA_API_PASSWORD;
    if (typeof paysafeCAApiPassword === 'undefined') {
      throw Error('Environment variable PAYSAFE_CA_API_PASSWORD is undefined');
    }
    const paysafeCAAccountCAD = process.env.PAYSAFE_CA_ACCOUNT_CAD;
    if (typeof paysafeCAAccountCAD === 'undefined') {
      throw Error('Environment variable PAYSAFE_CA_ACCOUNT_CAD is undefined');
    }

    const paysafeUSApiKey = process.env.PAYSAFE_US_API_KEY;
    if (typeof paysafeUSApiKey === 'undefined') {
      throw Error('Environment variable PAYSAFE_US_API_KEY is undefined');
    }
    const paysafeUSApiPassword = process.env.PAYSAFE_US_API_PASSWORD;
    if (typeof paysafeUSApiPassword === 'undefined') {
      throw Error('Environment variable PAYSAFE_US_API_PASSWORD is undefined');
    }
    const paysafeUSAccountUSD = process.env.PAYSAFE_US_ACCOUNT_USD;
    if (typeof paysafeUSAccountUSD === 'undefined') {
      throw Error('Environment variable PAYSAFE_US_ACCOUNT_USD is undefined');
    }

    const paysafeGBApiKey = process.env.PAYSAFE_GB_API_KEY;
    if (typeof paysafeGBApiKey === 'undefined') {
      throw Error('Environment variable PAYSAFE_GB_API_KEY is undefined');
    }
    const paysafeGBApiPassword = process.env.PAYSAFE_GB_API_PASSWORD;
    if (typeof paysafeGBApiPassword === 'undefined') {
      throw Error('Environment variable PAYSAFE_GB_API_PASSWORD is undefined');
    }
    const paysafeGBAccountGBP = process.env.PAYSAFE_GB_ACCOUNT_GBP;
    if (typeof paysafeGBAccountGBP === 'undefined') {
      throw Error('Environment variable PAYSAFE_GB_ACCOUNT_GBP is undefined');
    }
    const paysafeGBAccountAUD = process.env.PAYSAFE_GB_ACCOUNT_AUD;
    if (typeof paysafeGBAccountAUD === 'undefined') {
      throw Error('Environment variable PAYSAFE_GB_ACCOUNT_AUD is undefined');
    }
    const paysafeGBAccountNZD = process.env.PAYSAFE_GB_ACCOUNT_NZD;
    if (typeof paysafeGBAccountNZD === 'undefined') {
      throw Error('Environment variable PAYSAFE_GB_ACCOUNT_NZD is undefined');
    }

    this.#config = {
      environment,
      port,
      // host,
      auth: {
        cookieDomain: process.env.COOKIE_DOMAIN ?? 'localhost',
        cookiePath: process.env.COOKIE_PATH ?? '/v4',
        accessTokenLifetime: process.env.ACCESS_TOKEN_LIFETIME ? parseInt(process.env.ACCESS_TOKEN_LIFETIME, 10) : 30 * 60, // 30-minute default
        refreshTokenLifetime: process.env.REFRESH_TOKEN_LIFETIME ? parseInt(process.env.REFRESH_TOKEN_LIFETIME, 10) : 30 * 60 * 60 * 24, // 30-day default
      },
      paysafe: {
        CA: {
          apiKey: paysafeCAApiKey,
          apiPassword: paysafeCAApiPassword,
          accounts: {
            CAD: paysafeCAAccountCAD,
          },
        },
        US: {
          apiKey: paysafeUSApiKey,
          apiPassword: paysafeUSApiPassword,
          accounts: {
            USD: paysafeUSAccountUSD,
          },
        },
        GB: {
          apiKey: paysafeGBApiKey,
          apiPassword: paysafeGBApiPassword,
          accounts: {
            USD: paysafeGBAccountGBP,
            AUD: paysafeGBAccountAUD,
            NZD: paysafeGBAccountNZD,
          },
        },
      },
      email: {
        host: smtpHost,
        port: smtpPortNumber,
        user: smtpUser,
        pass: smtpPassword,
        mode: smtpMode,
      },
    };
  }

  public get config(): Config { return this.#config; }
}
