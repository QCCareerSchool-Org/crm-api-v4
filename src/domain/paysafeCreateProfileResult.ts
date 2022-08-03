import type { PaysafeCompany } from './paymentMethodDTO';

export type PaysafeCreateProfileResult = {
  profileId: string;
  cardId: string;
  paymentToken: string;
  company: PaysafeCompany;
  maskedPan: string;
  expiryMonth: number;
  expiryYear: number;
};
