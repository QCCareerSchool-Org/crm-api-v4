import type { PaysafeResult } from '../../domain/paysafeResult';

export interface IPaysafeServiceFactory {
  createInstance: (currencyCode: string) => IPaysafeService;
}

export interface IPaysafeService {
  create: (
    studentNumber: string,
    firstName: string,
    lastName: string,
    sex: 'M' | 'F',
    emailAddress: string,
    telephoneNumber: string | null,
    address1: string,
    address2: string,
    city: string,
    provinceCode: string | null,
    postalCode: string | null,
    countryCode: string,
    token: string,
  ) => Promise<PaysafeResult>;
}
