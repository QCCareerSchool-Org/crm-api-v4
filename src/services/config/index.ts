export type Environment = 'development' | 'production';

export type Config = {
  environment: Environment;
  port: number;
  // host: string;
  auth: {
    cookieDomain: string;
    cookiePath: string;
    /** how long before access tokens should expire, in seconds */
    accessTokenLifetime: number;
    /** how long before refresh tokens should expire, in seconds */
    refreshTokenLifetime: number;
  };
  paysafe: {
    [company in 'CA' | 'US' | 'GB']: {
      apiKey: string;
      apiPassword: string;
      accounts: { [currencyCode: string]: string };
    };
  };
  email: {
    host: string;
    port: number;
    user: string;
    pass: string;
    mode: 'TLS' | 'STARTTLS' | 'INSECURE';
  };
};

export interface IConfigService {
  config: Config;
}
