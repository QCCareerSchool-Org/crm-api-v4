import type { PaysafeCompany } from './paymentMethodDTO';

export type PaysafeResult = {
  profileId: string;
  cardId: string;
  paymentToken: string;
  company: PaysafeCompany;
  maskedPan: string;
  expiryMonth: number;
  expiryYear: number;
};
