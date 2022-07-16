export type StudentDTO = {
  studentId: number;
  currencyId: number;
  userId: number | null;
  languageId: number;
  sex: 'M' | 'F';
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  province: string | null;
  postalCode: string | null;
  country: string;
  telephoneCountryCode: number;
  telephoneNumber: string;
  emailAddress: string;
  paymentStart: Date | null;
  paymentDay: number | null;
  // password is omitted
  // e164 virtual field omitted
  sms: boolean;
  // enrollmentCount is omitted
  created: Date;
  modified: Date | null;
};
