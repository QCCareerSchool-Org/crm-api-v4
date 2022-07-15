export type AccountType = 'student' | 'administrator';

export type AccessTokenPayload = {
  sub: number;
  iss: string;
  userType: AccountType;
  exp: number;
  xsrf: string;
};

export const isAccessTokenPayload = (value: unknown): value is AccessTokenPayload => {
  if (typeof value === 'object' && value !== null) {
    if ('sub' in value && 'iss' in value && 'userType' in value && 'exp' in value && 'xsrf' in value) {
      const v = value as AccessTokenPayload;
      return typeof v.sub === 'number' && typeof v.iss === 'string' && typeof v.exp === 'number' && typeof v.xsrf === 'string';
    }
  }
  return false;
};
