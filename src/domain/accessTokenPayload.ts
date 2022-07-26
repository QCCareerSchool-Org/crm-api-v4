export type AccountType = 'student' | 'admin';

export type AccessTokenPayload = {
  crm?: {
    id: number;
    type: AccountType;
  };
  exp: number;
  xsrf: string;
};

export const isAccessTokenPayload = (value: unknown): value is AccessTokenPayload => {
  if (typeof value === 'object' && value !== null) {
    const v = value as Record<string, unknown>;
    if (typeof v.exp === 'number' && typeof v.xsrf === 'string') {
      if (typeof v.crm === 'undefined') {
        return true;
      }
      if (typeof v.crm === 'object' && v.crm !== null) {
        const c = v.crm as Record<string, unknown>;
        return (typeof c.id === 'number' && typeof c.type === 'string' && [ 'admin', 'student' ].includes(c.type));
      }
    }
  }
  return false;
};
