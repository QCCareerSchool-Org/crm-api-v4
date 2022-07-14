import { Paysafe } from '@qccareerschool/paysafe';
import { Card } from '@qccareerschool/paysafe/dist/card-payments/lib/card';
import { Verification } from '@qccareerschool/paysafe/dist/card-payments/verification';
import { Address } from '@qccareerschool/paysafe/dist/customer-vault/address';
import { Card as ProfileCard } from '@qccareerschool/paysafe/dist/customer-vault/card';
import { Profile } from '@qccareerschool/paysafe/dist/customer-vault/profile';

import type { PaysafeCompany } from '../../domain/paymentMethodDTO';
import type { PaysafeAddress } from '../../domain/paysafeAddress';
import type { PaysafeCard } from '../../domain/paysafeCard';
import type { PaysafeProfile } from '../../domain/paysafeProfile';
import type { PaysafeResult } from '../../domain/paysafeResult';
import type { IPaysafeService } from '.';

export class PaysafeService implements IPaysafeService {

  private readonly paysafe: Paysafe;

  public constructor(
    private readonly company: PaysafeCompany,
    apiKey: string,
    apiPassword: string,
    environment: 'LIVE' | 'TEST',
    accountNumber: string,
  ) {
    this.paysafe = new Paysafe(apiKey, apiPassword, environment, accountNumber);
  }

  public async create(
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
  ): Promise<PaysafeResult> {
    const profile = await this.createProfile(studentNumber, firstName, lastName, sex, emailAddress, telephoneNumber);
    const address = await this.createAddress(profile.profileId, address1, address2, city, provinceCode, postalCode, countryCode);
    const card = await this.createCard(profile.profileId, token);
    await this.updateCardBillingAddress(profile.profileId, address.addressId, card.cardId);
    await this.verifyCard(token);

    return {
      profileId: profile.profileId,
      cardId: card.cardId,
      paymentToken: card.paymentToken,
      company: this.company,
      maskedPan: card.maskedPan,
      expiryMonth: card.expiryMonth,
      expiryYear: card.expiryYear,
    };
  }

  public async createProfile(
    studentNumber: string,
    firstName: string,
    lastName: string,
    sex: 'M' | 'F',
    emailAddress: string,
    telephoneNumber: string | null,
  ): Promise<PaysafeProfile> {
    const p = new Profile();
    p.setLocale('en_US');
    p.setMerchantCustomerId(this.createCustomerId(studentNumber));
    p.setFirstName(firstName);
    p.setLastName(lastName);
    p.setGender(sex);
    p.setEmail(emailAddress);
    if (telephoneNumber?.length) {
      p.setPhone(telephoneNumber);
    }
    const profile = await this.paysafe.getCustomerServiceHandler().createProfile(p);
    const error = profile.getError();
    if (error) {
      throw error;
    }
    const profileId = profile.getId();
    if (typeof profileId === 'undefined') {
      throw Error('profileId is undefined');
    }
    return {
      profileId,
    };
  }

  public async createAddress(
    profileId: string,
    address1: string,
    address2: string,
    city: string,
    provinceCode: string | null,
    postalCode: string | null,
    countryCode: string,
  ): Promise<PaysafeAddress> {
    const a = new Address();
    a.setStreet(address1);
    if (address2) {
      a.setStreet2(address2);
    }
    a.setCity(city);
    if ([ 'CA', 'US', 'AU' ].includes(countryCode) && provinceCode !== null) {
      a.setState(provinceCode);
    }
    a.setZip(postalCode?.length ? postalCode : 'NA');
    a.setCountry(countryCode);
    a.setDefaultShippingAddressIndicator(true);
    const address = await this.paysafe.getCustomerServiceHandler().createAddress(profileId, a);
    const error = address.getError();
    if (error) {
      throw error;
    }
    const addressId = address.getId();
    if (typeof addressId === 'undefined') {
      throw Error('addressId is undefined');
    }
    return {
      addressId,
    };
  }

  public async createCard(
    profileId: string,
    token: string,
  ): Promise<PaysafeCard> {
    // const e = new CardExpiry();
    // e.setMonth(expiryMonth);
    // e.setYear(expiryYear);
    const c = new ProfileCard();
    c.setPaymentToken(token);
    // c.setCardExpiry(e);
    const card = await this.paysafe.getCustomerServiceHandler().createCard(profileId, c);
    const error = card.getError();
    if (error) {
      throw error;
    }
    const cardId = card.getId();
    if (typeof cardId === 'undefined') {
      throw Error('cardId is undefined');
    }
    const paymentToken = card.getPaymentToken();
    if (typeof paymentToken === 'undefined') {
      throw Error('paymentToken is undefined');
    }
    const cardBin = card.getCardBin();
    if (typeof cardBin === 'undefined') {
      throw Error('cardBin is undefined');
    }
    const lastDigits = card.getLastDigits();
    if (typeof lastDigits === 'undefined') {
      throw Error('lastDigits is undefined');
    }
    const expiry = card.getCardExpiry();
    if (typeof expiry === 'undefined') {
      throw Error('expiry is undefined');
    }
    const expiryMonth = expiry.getMonth();
    if (typeof expiryMonth === 'undefined') {
      throw Error('expiryMonth is undefined');
    }
    const expiryYear = expiry.getYear();
    if (typeof expiryYear === 'undefined') {
      throw Error('expiryYear is undefined');
    }
    return {
      cardId,
      paymentToken,
      maskedPan: cardBin + '*'.repeat(16 - cardBin.length - lastDigits.length) + lastDigits,
      expiryMonth,
      expiryYear,
    };
  }

  public async updateCardBillingAddress(profileId: string, addressId: string, cardId: string): Promise<void> {
    const c = new ProfileCard();
    // cardUpdate.setCardExpiry(cardExpiryResult); // TODO: why are we doing this?
    c.setBillingAddressId(addressId);
    const card = await this.paysafe.getCustomerServiceHandler().updateCard(profileId, cardId, c);
    const error = card.getError();
    if (error) {
      throw error;
    }
  }

  public async verifyCard(token: string): Promise<void> {
    const c = new Card();
    c.setPaymentToken(token);
    const v = new Verification();
    v.setMerchantRefNum(this.createOrderId());
    v.setCard(c);
    const verification = await this.paysafe.getCardServiceHandler().verify(v);
    const error = verification.getError();
    if (error) {
      throw error;
    }
  }

  public createOrderId(): string {
    const now = new Date();
    const date = now.getFullYear().toString() +
      (now.getMonth() + 1).toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0') +
      now.getHours().toString().padStart(2, '0') +
      now.getMinutes().toString().padStart(2, '0') +
      now.getSeconds().toString().padStart(2, '0') +
      now.getMilliseconds().toString().padStart(3, '0');
    const max = 99999;
    const min = 10000;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return `${date}_si_${random}`;
  }

  public createCustomerId(studentNumber: string): string {
    const now = new Date();
    const dateString = now.getFullYear().toString() +
      (now.getMonth() + 1).toString() +
      now.getDate().toString() +
      now.getHours().toString() +
      now.getMinutes().toString() +
      now.getSeconds().toString() +
      now.getMilliseconds().toString();
    return studentNumber + '_' + dateString;
  }
}
