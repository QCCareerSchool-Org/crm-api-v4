
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  countryId: 'countryId',
  code: 'code',
  name: 'name',
  iso: 'iso',
  eu: 'eu',
  noShipping: 'noShipping',
  needsPostalCode: 'needsPostalCode',
  studentCount: 'studentCount'
});

exports.Prisma.CourseScalarFieldEnum = makeEnum({
  courseId: 'courseId',
  schoolId: 'schoolId',
  code: 'code',
  name: 'name',
  prefix: 'prefix',
  maxAssignments: 'maxAssignments',
  order: 'order',
  enrollmentCount: 'enrollmentCount',
  cost: 'cost',
  installment: 'installment',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.CurrencyScalarFieldEnum = makeEnum({
  currencyId: 'currencyId',
  code: 'code',
  name: 'name',
  symbol: 'symbol',
  exchangeRate: 'exchangeRate',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.EnrollmentScalarFieldEnum = makeEnum({
  enrollmentId: 'enrollmentId',
  studentId: 'studentId',
  courseId: 'courseId',
  currencyId: 'currencyId',
  userId: 'userId',
  enrollmentDate: 'enrollmentDate',
  expiryDate: 'expiryDate',
  paymentPlan: 'paymentPlan',
  status: 'status',
  statusDate: 'statusDate',
  gradEmailDate: 'gradEmailDate',
  gradEmailSkip: 'gradEmailSkip',
  cost: 'cost',
  discount: 'discount',
  installment: 'installment',
  noShipping: 'noShipping',
  hideFromShippingList: 'hideFromShippingList',
  paymentOverride: 'paymentOverride',
  paymentFrequency: 'paymentFrequency',
  paymentDay: 'paymentDay',
  paymentStart: 'paymentStart',
  accountId: 'accountId',
  shippingNote: 'shippingNote',
  preparedDate: 'preparedDate',
  shippedDate: 'shippedDate',
  diploma: 'diploma',
  diplomaDate: 'diplomaDate',
  fastTrack: 'fastTrack',
  noStudentCenter: 'noStudentCenter',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.NoteScalarFieldEnum = makeEnum({
  noteId: 'noteId',
  studentId: 'studentId',
  courseId: 'courseId',
  userId: 'userId',
  note: 'note',
  type: 'type',
  starred: 'starred',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.PaymentMethodScalarFieldEnum = makeEnum({
  paymentMethodId: 'paymentMethodId',
  enrollmentId: 'enrollmentId',
  paymentTypeId: 'paymentTypeId',
  primary: 'primary',
  paysafeProfileId: 'paysafeProfileId',
  paysafeCardId: 'paysafeCardId',
  paysafePaymentToken: 'paysafePaymentToken',
  paysafeCompany: 'paysafeCompany',
  pan: 'pan',
  expiryMonth: 'expiryMonth',
  expiryYear: 'expiryYear',
  deleted: 'deleted',
  notified: 'notified',
  disabled: 'disabled',
  transactionCount: 'transactionCount',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.PaymentTypeScalarFieldEnum = makeEnum({
  paymentTypeId: 'paymentTypeId',
  name: 'name'
});

exports.Prisma.ProvinceScalarFieldEnum = makeEnum({
  provinceId: 'provinceId',
  countryId: 'countryId',
  code: 'code',
  name: 'name',
  studentCount: 'studentCount'
});

exports.Prisma.RefreshTokenScalarFieldEnum = makeEnum({
  refreshTokenId: 'refreshTokenId',
  studentId: 'studentId',
  userId: 'userId',
  token: 'token',
  expiry: 'expiry',
  ipAddress: 'ipAddress',
  browser: 'browser',
  browserVersion: 'browserVersion',
  mobile: 'mobile',
  os: 'os',
  city: 'city',
  country: 'country',
  latitude: 'latitude',
  longitude: 'longitude',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.SchoolScalarFieldEnum = makeEnum({
  schoolId: 'schoolId',
  name: 'name',
  courseCount: 'courseCount',
  created: 'created',
  modified: 'modified',
  studentCenterAccountType: 'studentCenterAccountType'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  studentId: 'studentId',
  currencyId: 'currencyId',
  userId: 'userId',
  languageId: 'languageId',
  sex: 'sex',
  firstName: 'firstName',
  lastName: 'lastName',
  address1: 'address1',
  address2: 'address2',
  city: 'city',
  provinceId: 'provinceId',
  postalCode: 'postalCode',
  countryId: 'countryId',
  telephoneCountryCode: 'telephoneCountryCode',
  telephoneNumber: 'telephoneNumber',
  emailAddress: 'emailAddress',
  paymentStart: 'paymentStart',
  paymentDay: 'paymentDay',
  password: 'password',
  e164: 'e164',
  sms: 'sms',
  enrollmentCount: 'enrollmentCount',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.TelephoneCountryCodeScalarFieldEnum = makeEnum({
  telephoneCountryCodeId: 'telephoneCountryCodeId',
  code: 'code',
  region: 'region'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TransactionScalarFieldEnum = makeEnum({
  transactionId: 'transactionId',
  enrollmentId: 'enrollmentId',
  paymentMethodId: 'paymentMethodId',
  userId: 'userId',
  parentId: 'parentId',
  transactionDate: 'transactionDate',
  transactionTime: 'transactionTime',
  amount: 'amount',
  attemptedAmount: 'attemptedAmount',
  usdAmount: 'usdAmount',
  refund: 'refund',
  chargeback: 'chargeback',
  orderId: 'orderId',
  responseCode: 'responseCode',
  authCode: 'authCode',
  referenceNumber: 'referenceNumber',
  settlementId: 'settlementId',
  transactionNumber: 'transactionNumber',
  response: 'response',
  description: 'description',
  posted: 'posted',
  postedDate: 'postedDate',
  notified: 'notified',
  extraCharge: 'extraCharge',
  auto: 'auto',
  reattempt: 'reattempt',
  transactionType: 'transactionType',
  voided: 'voided',
  notes: 'notes',
  severity: 'severity',
  created: 'created',
  modified: 'modified'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  userId: 'userId',
  username: 'username',
  password: 'password',
  sex: 'sex',
  firstName: 'firstName',
  lastName: 'lastName',
  emailAddress: 'emailAddress',
  adminPriv: 'adminPriv',
  accountingPriv: 'accountingPriv',
  created: 'created',
  modified: 'modified'
});
exports.EnrollmentPaymentFrequency = makeEnum({
  monthly: 'monthly',
  biWeekly: 'biWeekly',
  weekly: 'weekly'
});

exports.EnrollmentPaymentPlan = makeEnum({
  full: 'full',
  accelerated: 'accelerated',
  extended: 'extended'
});

exports.EnrollmentStatus = makeEnum({
  W: 'W',
  H: 'H',
  T: 'T',
  G: 'G',
  R: 'R'
});

exports.NoteType = makeEnum({
  general: 'general',
  automatic: 'automatic',
  tutorial: 'tutorial'
});

exports.PaysafeCompany = makeEnum({
  CA: 'CA',
  US: 'US',
  GB: 'GB'
});

exports.StudentCenterAccountType = makeEnum({
  general: 'general',
  style: 'style',
  travel: 'travel',
  paymentTypewriting: 'paymentTypewriting'
});

exports.StudentSex = makeEnum({
  M: 'M',
  F: 'F'
});

exports.TransactionType = makeEnum({
  charge: 'charge',
  refund: 'refund',
  chargeback: 'chargeback',
  nsfFee: 'nsfFee',
  void: 'void'
});

exports.UserSex = makeEnum({
  M: 'M',
  F: 'F'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  School: 'School',
  Course: 'Course',
  Currency: 'Currency',
  Country: 'Country',
  Province: 'Province',
  Student: 'Student',
  Enrollment: 'Enrollment',
  PaymentType: 'PaymentType',
  PaymentMethod: 'PaymentMethod',
  Transaction: 'Transaction',
  RefreshToken: 'RefreshToken',
  TelephoneCountryCode: 'TelephoneCountryCode',
  Note: 'Note'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
