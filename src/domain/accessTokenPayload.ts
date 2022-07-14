export type AccessTokenPayload = {
  id: number;
  exp: number;
  xsrf: string;
};

export const isAccessTokenPayload = (value: unknown): value is AccessTokenPayload => {
  if (typeof value === 'object' && value !== null) {
    if ('id' in value && 'type' in value && 'exp' in value && 'xsrf' in value) {
      const v = value as AccessTokenPayload;
      return typeof v.id === 'number' && typeof v.exp === 'number' && typeof v.xsrf === 'string';
    }
  }
  return false;
};
