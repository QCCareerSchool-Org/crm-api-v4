import type { PaysafeCompany } from '../../domain/paymentMethodDTO';
import type { PaysafeChargeResult } from '../../domain/paysafeChargeResult';
import type { PaysafeCreateProfileResult } from '../../domain/paysafeCreateProfileResult';
import { environmentConfigService } from '../config/index.js';
import { winstonLoggerService } from '../logger/index.js';
import { PaysafeServiceFactory } from './paysafeServiceFactory.js';

export interface IPaysafeServiceFactory {
  getCompany: (currencyCode: string) => PaysafeCompany;
  createInstance: (company: PaysafeCompany, currencyCode: string) => IPaysafeService;
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
    singleUseToken: string,
  ) => Promise<PaysafeCreateProfileResult>;

  charge: (amount: number, paymentToken: string, initialTransaction: boolean, initialTransactionId: string | null) => Promise<PaysafeChargeResult>;
}

export const paysafeServiceFactory = new PaysafeServiceFactory(environmentConfigService, winstonLoggerService);
