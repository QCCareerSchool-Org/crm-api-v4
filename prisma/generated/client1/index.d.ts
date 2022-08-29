
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  userId: number
  username: string
  password: string
  sex: UserSex
  firstName: string
  lastName: string
  emailAddress: string | null
  adminPriv: boolean
  accountingPriv: boolean
  created: Date
  modified: Date | null
}

/**
 * Model School
 * 
 */
export type School = {
  schoolId: number
  name: string
  courseCount: number
  created: Date
  modified: Date | null
  studentCenterAccountType: StudentCenterAccountType
}

/**
 * Model Course
 * 
 */
export type Course = {
  courseId: number
  schoolId: number
  code: string
  name: string
  prefix: string
  maxAssignments: number | null
  order: number
  enrollmentCount: number
  cost: Prisma.Decimal
  installment: Prisma.Decimal
  created: Date
  modified: Date | null
}

/**
 * Model Currency
 * 
 */
export type Currency = {
  currencyId: number
  code: string
  name: string
  symbol: string
  exchangeRate: Prisma.Decimal
  created: Date
  modified: Date | null
}

/**
 * Model Country
 * 
 */
export type Country = {
  countryId: number
  code: string
  name: string
  iso: number | null
  eu: boolean
  noShipping: boolean
  needsPostalCode: boolean
  studentCount: number
}

/**
 * Model Province
 * 
 */
export type Province = {
  provinceId: number
  countryId: number
  code: string
  name: string
  studentCount: number
}

/**
 * Model Student
 * 
 */
export type Student = {
  studentId: number
  currencyId: number
  userId: number | null
  languageId: number
  sex: StudentSex
  firstName: string
  lastName: string
  address1: string
  address2: string
  city: string
  provinceId: number | null
  postalCode: string | null
  countryId: number
  telephoneCountryCode: number
  telephoneNumber: string
  emailAddress: string
  paymentStart: Date | null
  paymentDay: number | null
  password: string | null
  e164: string
  sms: boolean
  enrollmentCount: number
  created: Date
  modified: Date | null
}

/**
 * Model Enrollment
 * 
 */
export type Enrollment = {
  enrollmentId: number
  studentId: number
  courseId: number
  currencyId: number
  userId: number | null
  enrollmentDate: Date
  expiryDate: Date | null
  paymentPlan: EnrollmentPaymentPlan
  status: EnrollmentStatus | null
  statusDate: Date | null
  gradEmailDate: Date | null
  gradEmailSkip: boolean
  cost: Prisma.Decimal
  discount: Prisma.Decimal
  installment: Prisma.Decimal
  noShipping: boolean
  hideFromShippingList: boolean
  paymentOverride: boolean
  paymentFrequency: EnrollmentPaymentFrequency
  paymentDay: number | null
  paymentStart: Date | null
  accountId: number | null
  shippingNote: string | null
  preparedDate: Date | null
  shippedDate: Date | null
  diploma: boolean
  diplomaDate: Date | null
  fastTrack: boolean
  noStudentCenter: boolean
  created: Date
  modified: Date | null
}

/**
 * Model PaymentType
 * 
 */
export type PaymentType = {
  paymentTypeId: number
  name: string
}

/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = {
  paymentMethodId: number
  enrollmentId: number | null
  paymentTypeId: number
  primary: boolean
  paysafeProfileId: string | null
  paysafeCardId: string | null
  paysafePaymentToken: string | null
  paysafeCompany: PaysafeCompany | null
  pan: string | null
  expiryMonth: number | null
  expiryYear: number | null
  deleted: boolean
  notified: boolean
  disabled: boolean
  transactionCount: number
  created: Date
  modified: Date | null
}

/**
 * Model Transaction
 * 
 */
export type Transaction = {
  transactionId: number
  enrollmentId: number
  paymentMethodId: number | null
  userId: number | null
  parentId: number | null
  transactionDate: Date
  transactionTime: Date | null
  amount: Prisma.Decimal
  attemptedAmount: Prisma.Decimal
  usdAmount: Prisma.Decimal | null
  refund: Prisma.Decimal
  chargeback: Prisma.Decimal
  orderId: string | null
  responseCode: number | null
  authCode: string | null
  referenceNumber: string | null
  settlementId: string | null
  transactionNumber: string | null
  response: string | null
  description: string | null
  posted: boolean | null
  postedDate: Date | null
  notified: boolean | null
  extraCharge: boolean
  auto: boolean
  reattempt: boolean
  transactionType: TransactionType
  voided: boolean
  notes: string | null
  severity: number | null
  created: Date
  modified: Date | null
}

/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = {
  refreshTokenId: Buffer
  studentId: number | null
  userId: number | null
  token: Buffer
  expiry: Date
  ipAddress: Buffer | null
  browser: string | null
  browserVersion: string | null
  mobile: boolean | null
  os: string | null
  city: string | null
  country: string | null
  latitude: Prisma.Decimal | null
  longitude: Prisma.Decimal | null
  created: Date
  modified: Date | null
}

/**
 * Model TelephoneCountryCode
 * 
 */
export type TelephoneCountryCode = {
  telephoneCountryCodeId: number
  code: number
  region: string
}

/**
 * Model Note
 * 
 */
export type Note = {
  noteId: number
  studentId: number
  courseId: number | null
  userId: number | null
  note: string
  type: NoteType
  starred: boolean
  created: Date
  modified: Date | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const EnrollmentPaymentFrequency: {
  monthly: 'monthly',
  biWeekly: 'biWeekly',
  weekly: 'weekly'
};

export type EnrollmentPaymentFrequency = (typeof EnrollmentPaymentFrequency)[keyof typeof EnrollmentPaymentFrequency]


export const EnrollmentPaymentPlan: {
  full: 'full',
  accelerated: 'accelerated',
  extended: 'extended'
};

export type EnrollmentPaymentPlan = (typeof EnrollmentPaymentPlan)[keyof typeof EnrollmentPaymentPlan]


export const EnrollmentStatus: {
  W: 'W',
  H: 'H',
  T: 'T',
  G: 'G',
  R: 'R'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]


export const NoteType: {
  general: 'general',
  automatic: 'automatic',
  tutorial: 'tutorial'
};

export type NoteType = (typeof NoteType)[keyof typeof NoteType]


export const PaysafeCompany: {
  CA: 'CA',
  US: 'US',
  GB: 'GB'
};

export type PaysafeCompany = (typeof PaysafeCompany)[keyof typeof PaysafeCompany]


export const StudentCenterAccountType: {
  general: 'general',
  style: 'style',
  travel: 'travel',
  paymentTypewriting: 'paymentTypewriting'
};

export type StudentCenterAccountType = (typeof StudentCenterAccountType)[keyof typeof StudentCenterAccountType]


export const StudentSex: {
  M: 'M',
  F: 'F'
};

export type StudentSex = (typeof StudentSex)[keyof typeof StudentSex]


export const TransactionType: {
  charge: 'charge',
  refund: 'refund',
  chargeback: 'chargeback',
  nsfFee: 'nsfFee',
  void: 'void'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const UserSex: {
  M: 'M',
  F: 'F'
};

export type UserSex = (typeof UserSex)[keyof typeof UserSex]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<GlobalReject>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<GlobalReject>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<GlobalReject>;

  /**
   * `prisma.paymentType`: Exposes CRUD operations for the **PaymentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTypes
    * const paymentTypes = await prisma.paymentType.findMany()
    * ```
    */
  get paymentType(): Prisma.PaymentTypeDelegate<GlobalReject>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<GlobalReject>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<GlobalReject>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<GlobalReject>;

  /**
   * `prisma.telephoneCountryCode`: Exposes CRUD operations for the **TelephoneCountryCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelephoneCountryCodes
    * const telephoneCountryCodes = await prisma.telephoneCountryCode.findMany()
    * ```
    */
  get telephoneCountryCode(): Prisma.TelephoneCountryCodeDelegate<GlobalReject>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    students: number
    enrollments: number
    transactions: number
    notes: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect = {
    students?: boolean
    enrollments?: boolean
    transactions?: boolean
    notes?: boolean
    refreshTokens?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type SchoolCountOutputType
   */


  export type SchoolCountOutputType = {
    courses: number
  }

  export type SchoolCountOutputTypeSelect = {
    courses?: boolean
  }

  export type SchoolCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SchoolCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SchoolCountOutputType
    : S extends undefined
    ? never
    : S extends SchoolCountOutputTypeArgs
    ?'include' extends U
    ? SchoolCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SchoolCountOutputType ? SchoolCountOutputType[P] : never
  } 
    : SchoolCountOutputType
  : SchoolCountOutputType




  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     * 
    **/
    select?: SchoolCountOutputTypeSelect | null
  }



  /**
   * Count Type CourseCountOutputType
   */


  export type CourseCountOutputType = {
    enrollments: number
    notes: number
  }

  export type CourseCountOutputTypeSelect = {
    enrollments?: boolean
    notes?: boolean
  }

  export type CourseCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CourseCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CourseCountOutputType
    : S extends undefined
    ? never
    : S extends CourseCountOutputTypeArgs
    ?'include' extends U
    ? CourseCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CourseCountOutputType ? CourseCountOutputType[P] : never
  } 
    : CourseCountOutputType
  : CourseCountOutputType




  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     * 
    **/
    select?: CourseCountOutputTypeSelect | null
  }



  /**
   * Count Type CurrencyCountOutputType
   */


  export type CurrencyCountOutputType = {
    enrollments: number
  }

  export type CurrencyCountOutputTypeSelect = {
    enrollments?: boolean
  }

  export type CurrencyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CurrencyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CurrencyCountOutputType
    : S extends undefined
    ? never
    : S extends CurrencyCountOutputTypeArgs
    ?'include' extends U
    ? CurrencyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CurrencyCountOutputType ? CurrencyCountOutputType[P] : never
  } 
    : CurrencyCountOutputType
  : CurrencyCountOutputType




  // Custom InputTypes

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     * 
    **/
    select?: CurrencyCountOutputTypeSelect | null
  }



  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    provinces: number
    students: number
  }

  export type CountryCountOutputTypeSelect = {
    provinces?: boolean
    students?: boolean
  }

  export type CountryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CountryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CountryCountOutputType
    : S extends undefined
    ? never
    : S extends CountryCountOutputTypeArgs
    ?'include' extends U
    ? CountryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
    : CountryCountOutputType
  : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     * 
    **/
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Count Type ProvinceCountOutputType
   */


  export type ProvinceCountOutputType = {
    students: number
  }

  export type ProvinceCountOutputTypeSelect = {
    students?: boolean
  }

  export type ProvinceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProvinceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProvinceCountOutputType
    : S extends undefined
    ? never
    : S extends ProvinceCountOutputTypeArgs
    ?'include' extends U
    ? ProvinceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProvinceCountOutputType ? ProvinceCountOutputType[P] : never
  } 
    : ProvinceCountOutputType
  : ProvinceCountOutputType




  // Custom InputTypes

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     * 
    **/
    select?: ProvinceCountOutputTypeSelect | null
  }



  /**
   * Count Type StudentCountOutputType
   */


  export type StudentCountOutputType = {
    enrollments: number
    notes: number
    refreshTokens: number
  }

  export type StudentCountOutputTypeSelect = {
    enrollments?: boolean
    notes?: boolean
    refreshTokens?: boolean
  }

  export type StudentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StudentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StudentCountOutputType
    : S extends undefined
    ? never
    : S extends StudentCountOutputTypeArgs
    ?'include' extends U
    ? StudentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StudentCountOutputType ? StudentCountOutputType[P] : never
  } 
    : StudentCountOutputType
  : StudentCountOutputType




  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     * 
    **/
    select?: StudentCountOutputTypeSelect | null
  }



  /**
   * Count Type EnrollmentCountOutputType
   */


  export type EnrollmentCountOutputType = {
    paymentMethods: number
    transactions: number
  }

  export type EnrollmentCountOutputTypeSelect = {
    paymentMethods?: boolean
    transactions?: boolean
  }

  export type EnrollmentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EnrollmentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EnrollmentCountOutputType
    : S extends undefined
    ? never
    : S extends EnrollmentCountOutputTypeArgs
    ?'include' extends U
    ? EnrollmentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EnrollmentCountOutputType ? EnrollmentCountOutputType[P] : never
  } 
    : EnrollmentCountOutputType
  : EnrollmentCountOutputType




  // Custom InputTypes

  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EnrollmentCountOutputType
     * 
    **/
    select?: EnrollmentCountOutputTypeSelect | null
  }



  /**
   * Count Type PaymentTypeCountOutputType
   */


  export type PaymentTypeCountOutputType = {
    paymentMethods: number
  }

  export type PaymentTypeCountOutputTypeSelect = {
    paymentMethods?: boolean
  }

  export type PaymentTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PaymentTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PaymentTypeCountOutputType
    : S extends undefined
    ? never
    : S extends PaymentTypeCountOutputTypeArgs
    ?'include' extends U
    ? PaymentTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PaymentTypeCountOutputType ? PaymentTypeCountOutputType[P] : never
  } 
    : PaymentTypeCountOutputType
  : PaymentTypeCountOutputType




  // Custom InputTypes

  /**
   * PaymentTypeCountOutputType without action
   */
  export type PaymentTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PaymentTypeCountOutputType
     * 
    **/
    select?: PaymentTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type PaymentMethodCountOutputType
   */


  export type PaymentMethodCountOutputType = {
    transactions: number
  }

  export type PaymentMethodCountOutputTypeSelect = {
    transactions?: boolean
  }

  export type PaymentMethodCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PaymentMethodCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PaymentMethodCountOutputType
    : S extends undefined
    ? never
    : S extends PaymentMethodCountOutputTypeArgs
    ?'include' extends U
    ? PaymentMethodCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PaymentMethodCountOutputType ? PaymentMethodCountOutputType[P] : never
  } 
    : PaymentMethodCountOutputType
  : PaymentMethodCountOutputType




  // Custom InputTypes

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     * 
    **/
    select?: PaymentMethodCountOutputTypeSelect | null
  }



  /**
   * Count Type TransactionCountOutputType
   */


  export type TransactionCountOutputType = {
    children: number
  }

  export type TransactionCountOutputTypeSelect = {
    children?: boolean
  }

  export type TransactionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TransactionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TransactionCountOutputType
    : S extends undefined
    ? never
    : S extends TransactionCountOutputTypeArgs
    ?'include' extends U
    ? TransactionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TransactionCountOutputType ? TransactionCountOutputType[P] : never
  } 
    : TransactionCountOutputType
  : TransactionCountOutputType




  // Custom InputTypes

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     * 
    **/
    select?: TransactionCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    sex: UserSex | null
    firstName: string | null
    lastName: string | null
    emailAddress: string | null
    adminPriv: boolean | null
    accountingPriv: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    sex: UserSex | null
    firstName: string | null
    lastName: string | null
    emailAddress: string | null
    adminPriv: boolean | null
    accountingPriv: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    sex: number
    firstName: number
    lastName: number
    emailAddress: number
    adminPriv: number
    accountingPriv: number
    created: number
    modified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    sex?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    adminPriv?: true
    accountingPriv?: true
    created?: true
    modified?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    sex?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    adminPriv?: true
    accountingPriv?: true
    created?: true
    modified?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    sex?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    adminPriv?: true
    accountingPriv?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    userId: number
    username: string
    password: string
    sex: UserSex
    firstName: string
    lastName: string
    emailAddress: string | null
    adminPriv: boolean
    accountingPriv: boolean
    created: Date
    modified: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    userId?: boolean
    username?: boolean
    password?: boolean
    sex?: boolean
    firstName?: boolean
    lastName?: boolean
    emailAddress?: boolean
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: boolean
    modified?: boolean
    students?: boolean | StudentFindManyArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    transactions?: boolean | TransactionFindManyArgs
    notes?: boolean | NoteFindManyArgs
    refreshTokens?: boolean | RefreshTokenFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    students?: boolean | StudentFindManyArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    transactions?: boolean | TransactionFindManyArgs
    notes?: boolean | NoteFindManyArgs
    refreshTokens?: boolean | RefreshTokenFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'students' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends 'transactions' ? Array < TransactionGetPayload<S['include'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['include'][P]>>  :
        P extends 'refreshTokens' ? Array < RefreshTokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'students' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
        P extends 'transactions' ? Array < TransactionGetPayload<S['select'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['select'][P]>>  :
        P extends 'refreshTokens' ? Array < RefreshTokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    enrollments<T extends EnrollmentFindManyArgs = {}>(args?: Subset<T, EnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>;

    transactions<T extends TransactionFindManyArgs = {}>(args?: Subset<T, TransactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Transaction>>, PrismaPromise<Array<TransactionGetPayload<T>>>>;

    notes<T extends NoteFindManyArgs = {}>(args?: Subset<T, NoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Note>>, PrismaPromise<Array<NoteGetPayload<T>>>>;

    refreshTokens<T extends RefreshTokenFindManyArgs = {}>(args?: Subset<T, RefreshTokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RefreshToken>>, PrismaPromise<Array<RefreshTokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model School
   */


  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    schoolId: number | null
    courseCount: number | null
  }

  export type SchoolSumAggregateOutputType = {
    schoolId: number | null
    courseCount: number | null
  }

  export type SchoolMinAggregateOutputType = {
    schoolId: number | null
    name: string | null
    courseCount: number | null
    created: Date | null
    modified: Date | null
    studentCenterAccountType: StudentCenterAccountType | null
  }

  export type SchoolMaxAggregateOutputType = {
    schoolId: number | null
    name: string | null
    courseCount: number | null
    created: Date | null
    modified: Date | null
    studentCenterAccountType: StudentCenterAccountType | null
  }

  export type SchoolCountAggregateOutputType = {
    schoolId: number
    name: number
    courseCount: number
    created: number
    modified: number
    studentCenterAccountType: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    schoolId?: true
    courseCount?: true
  }

  export type SchoolSumAggregateInputType = {
    schoolId?: true
    courseCount?: true
  }

  export type SchoolMinAggregateInputType = {
    schoolId?: true
    name?: true
    courseCount?: true
    created?: true
    modified?: true
    studentCenterAccountType?: true
  }

  export type SchoolMaxAggregateInputType = {
    schoolId?: true
    name?: true
    courseCount?: true
    created?: true
    modified?: true
    studentCenterAccountType?: true
  }

  export type SchoolCountAggregateInputType = {
    schoolId?: true
    name?: true
    courseCount?: true
    created?: true
    modified?: true
    studentCenterAccountType?: true
    _all?: true
  }

  export type SchoolAggregateArgs = {
    /**
     * Filter which School to aggregate.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs = {
    where?: SchoolWhereInput
    orderBy?: Enumerable<SchoolOrderByWithAggregationInput>
    by: Array<SchoolScalarFieldEnum>
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }


  export type SchoolGroupByOutputType = {
    schoolId: number
    name: string
    courseCount: number
    created: Date
    modified: Date | null
    studentCenterAccountType: StudentCenterAccountType
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect = {
    schoolId?: boolean
    name?: boolean
    courseCount?: boolean
    created?: boolean
    modified?: boolean
    studentCenterAccountType?: boolean
    courses?: boolean | CourseFindManyArgs
    _count?: boolean | SchoolCountOutputTypeArgs
  }

  export type SchoolInclude = {
    courses?: boolean | CourseFindManyArgs
    _count?: boolean | SchoolCountOutputTypeArgs
  }

  export type SchoolGetPayload<
    S extends boolean | null | undefined | SchoolArgs,
    U = keyof S
      > = S extends true
        ? School
    : S extends undefined
    ? never
    : S extends SchoolArgs | SchoolFindManyArgs
    ?'include' extends U
    ? School  & {
    [P in TrueKeys<S['include']>]:
        P extends 'courses' ? Array < CourseGetPayload<S['include'][P]>>  :
        P extends '_count' ? SchoolCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'courses' ? Array < CourseGetPayload<S['select'][P]>>  :
        P extends '_count' ? SchoolCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof School ? School[P] : never
  } 
    : School
  : School


  type SchoolCountArgs = Merge<
    Omit<SchoolFindManyArgs, 'select' | 'include'> & {
      select?: SchoolCountAggregateInputType | true
    }
  >

  export interface SchoolDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchoolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchoolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'School'> extends True ? CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>> : CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchoolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchoolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'School'> extends True ? CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>> : CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `schoolId`
     * const schoolWithSchoolIdOnly = await prisma.school.findMany({ select: { schoolId: true } })
     * 
    **/
    findMany<T extends SchoolFindManyArgs>(
      args?: SelectSubset<T, SchoolFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<School>>, PrismaPromise<Array<SchoolGetPayload<T>>>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
    **/
    create<T extends SchoolCreateArgs>(
      args: SelectSubset<T, SchoolCreateArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Create many Schools.
     *     @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchoolCreateManyArgs>(
      args?: SelectSubset<T, SchoolCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
    **/
    delete<T extends SchoolDeleteArgs>(
      args: SelectSubset<T, SchoolDeleteArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchoolUpdateArgs>(
      args: SelectSubset<T, SchoolUpdateArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchoolDeleteManyArgs>(
      args?: SelectSubset<T, SchoolDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchoolUpdateManyArgs>(
      args: SelectSubset<T, SchoolUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
    **/
    upsert<T extends SchoolUpsertArgs>(
      args: SelectSubset<T, SchoolUpsertArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Find one School that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SchoolFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Find the first School that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SchoolFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchoolClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    courses<T extends CourseFindManyArgs = {}>(args?: Subset<T, CourseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Course>>, PrismaPromise<Array<CourseGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * School base type for findUnique actions
   */
  export type SchoolFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter, which School to fetch.
     * 
    **/
    where: SchoolWhereUniqueInput
  }

  /**
   * School: findUnique
   */
  export interface SchoolFindUniqueArgs extends SchoolFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * School base type for findFirst actions
   */
  export type SchoolFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter, which School to fetch.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     * 
    **/
    distinct?: Enumerable<SchoolScalarFieldEnum>
  }

  /**
   * School: findFirst
   */
  export interface SchoolFindFirstArgs extends SchoolFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * School findMany
   */
  export type SchoolFindManyArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SchoolScalarFieldEnum>
  }


  /**
   * School create
   */
  export type SchoolCreateArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The data needed to create a School.
     * 
    **/
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }


  /**
   * School createMany
   */
  export type SchoolCreateManyArgs = {
    /**
     * The data used to create many Schools.
     * 
    **/
    data: Enumerable<SchoolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * School update
   */
  export type SchoolUpdateArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The data needed to update a School.
     * 
    **/
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     * 
    **/
    where: SchoolWhereUniqueInput
  }


  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs = {
    /**
     * The data used to update Schools.
     * 
    **/
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     * 
    **/
    where?: SchoolWhereInput
  }


  /**
   * School upsert
   */
  export type SchoolUpsertArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The filter to search for the School to update in case it exists.
     * 
    **/
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     * 
    **/
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }


  /**
   * School delete
   */
  export type SchoolDeleteArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter which School to delete.
     * 
    **/
    where: SchoolWhereUniqueInput
  }


  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs = {
    /**
     * Filter which Schools to delete
     * 
    **/
    where?: SchoolWhereInput
  }


  /**
   * School: findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs = SchoolFindUniqueArgsBase
      

  /**
   * School: findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs = SchoolFindFirstArgsBase
      

  /**
   * School without action
   */
  export type SchoolArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
  }



  /**
   * Model Course
   */


  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    maxAssignments: number | null
    order: number | null
    enrollmentCount: number | null
    cost: Decimal | null
    installment: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    maxAssignments: number | null
    order: number | null
    enrollmentCount: number | null
    cost: Decimal | null
    installment: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    code: string | null
    name: string | null
    prefix: string | null
    maxAssignments: number | null
    order: number | null
    enrollmentCount: number | null
    cost: Decimal | null
    installment: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    code: string | null
    name: string | null
    prefix: string | null
    maxAssignments: number | null
    order: number | null
    enrollmentCount: number | null
    cost: Decimal | null
    installment: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type CourseCountAggregateOutputType = {
    courseId: number
    schoolId: number
    code: number
    name: number
    prefix: number
    maxAssignments: number
    order: number
    enrollmentCount: number
    cost: number
    installment: number
    created: number
    modified: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    courseId?: true
    schoolId?: true
    maxAssignments?: true
    order?: true
    enrollmentCount?: true
    cost?: true
    installment?: true
  }

  export type CourseSumAggregateInputType = {
    courseId?: true
    schoolId?: true
    maxAssignments?: true
    order?: true
    enrollmentCount?: true
    cost?: true
    installment?: true
  }

  export type CourseMinAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    name?: true
    prefix?: true
    maxAssignments?: true
    order?: true
    enrollmentCount?: true
    cost?: true
    installment?: true
    created?: true
    modified?: true
  }

  export type CourseMaxAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    name?: true
    prefix?: true
    maxAssignments?: true
    order?: true
    enrollmentCount?: true
    cost?: true
    installment?: true
    created?: true
    modified?: true
  }

  export type CourseCountAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    name?: true
    prefix?: true
    maxAssignments?: true
    order?: true
    enrollmentCount?: true
    cost?: true
    installment?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type CourseAggregateArgs = {
    /**
     * Filter which Course to aggregate.
     * 
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs = {
    where?: CourseWhereInput
    orderBy?: Enumerable<CourseOrderByWithAggregationInput>
    by: Array<CourseScalarFieldEnum>
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }


  export type CourseGroupByOutputType = {
    courseId: number
    schoolId: number
    code: string
    name: string
    prefix: string
    maxAssignments: number | null
    order: number
    enrollmentCount: number
    cost: Decimal
    installment: Decimal
    created: Date
    modified: Date | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect = {
    courseId?: boolean
    schoolId?: boolean
    code?: boolean
    name?: boolean
    prefix?: boolean
    maxAssignments?: boolean
    order?: boolean
    enrollmentCount?: boolean
    cost?: boolean
    installment?: boolean
    created?: boolean
    modified?: boolean
    school?: boolean | SchoolArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    notes?: boolean | NoteFindManyArgs
    _count?: boolean | CourseCountOutputTypeArgs
  }

  export type CourseInclude = {
    school?: boolean | SchoolArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    notes?: boolean | NoteFindManyArgs
    _count?: boolean | CourseCountOutputTypeArgs
  }

  export type CourseGetPayload<
    S extends boolean | null | undefined | CourseArgs,
    U = keyof S
      > = S extends true
        ? Course
    : S extends undefined
    ? never
    : S extends CourseArgs | CourseFindManyArgs
    ?'include' extends U
    ? Course  & {
    [P in TrueKeys<S['include']>]:
        P extends 'school' ? SchoolGetPayload<S['include'][P]> :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['include'][P]>>  :
        P extends '_count' ? CourseCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'school' ? SchoolGetPayload<S['select'][P]> :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['select'][P]>>  :
        P extends '_count' ? CourseCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Course ? Course[P] : never
  } 
    : Course
  : Course


  type CourseCountArgs = Merge<
    Omit<CourseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }
  >

  export interface CourseDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Course'> extends True ? CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>> : CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Course'> extends True ? CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>> : CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const courseWithCourseIdOnly = await prisma.course.findMany({ select: { courseId: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs>(
      args?: SelectSubset<T, CourseFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Course>>, PrismaPromise<Array<CourseGetPayload<T>>>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs>(
      args: SelectSubset<T, CourseCreateArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs>(
      args?: SelectSubset<T, CourseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs>(
      args: SelectSubset<T, CourseDeleteArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs>(
      args: SelectSubset<T, CourseUpdateArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs>(
      args?: SelectSubset<T, CourseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs>(
      args: SelectSubset<T, CourseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs>(
      args: SelectSubset<T, CourseUpsertArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Find one Course that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Find the first Course that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CourseClient<Course>, Prisma__CourseClient<CourseGetPayload<T>>>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    school<T extends SchoolArgs = {}>(args?: Subset<T, SchoolArgs>): CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>;

    enrollments<T extends EnrollmentFindManyArgs = {}>(args?: Subset<T, EnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>;

    notes<T extends NoteFindManyArgs = {}>(args?: Subset<T, NoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Note>>, PrismaPromise<Array<NoteGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Course base type for findUnique actions
   */
  export type CourseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     * 
    **/
    where: CourseWhereUniqueInput
  }

  /**
   * Course: findUnique
   */
  export interface CourseFindUniqueArgs extends CourseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course base type for findFirst actions
   */
  export type CourseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * Filter, which Course to fetch.
     * 
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     * 
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     * 
    **/
    distinct?: Enumerable<CourseScalarFieldEnum>
  }

  /**
   * Course: findFirst
   */
  export interface CourseFindFirstArgs extends CourseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findMany
   */
  export type CourseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * Filter, which Courses to fetch.
     * 
    **/
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     * 
    **/
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course create
   */
  export type CourseCreateArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * The data needed to create a Course.
     * 
    **/
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs = {
    /**
     * The data used to create many Courses.
     * 
    **/
    data: Enumerable<CourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * The data needed to update a Course.
     * 
    **/
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     * 
    **/
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs = {
    /**
     * The data used to update Courses.
     * 
    **/
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     * 
    **/
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * The filter to search for the Course to update in case it exists.
     * 
    **/
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     * 
    **/
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
    /**
     * Filter which Course to delete.
     * 
    **/
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs = {
    /**
     * Filter which Courses to delete
     * 
    **/
    where?: CourseWhereInput
  }


  /**
   * Course: findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs = CourseFindUniqueArgsBase
      

  /**
   * Course: findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs = CourseFindFirstArgsBase
      

  /**
   * Course without action
   */
  export type CourseArgs = {
    /**
     * Select specific fields to fetch from the Course
     * 
    **/
    select?: CourseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseInclude | null
  }



  /**
   * Model Currency
   */


  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    currencyId: number | null
    exchangeRate: Decimal | null
  }

  export type CurrencySumAggregateOutputType = {
    currencyId: number | null
    exchangeRate: Decimal | null
  }

  export type CurrencyMinAggregateOutputType = {
    currencyId: number | null
    code: string | null
    name: string | null
    symbol: string | null
    exchangeRate: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type CurrencyMaxAggregateOutputType = {
    currencyId: number | null
    code: string | null
    name: string | null
    symbol: string | null
    exchangeRate: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type CurrencyCountAggregateOutputType = {
    currencyId: number
    code: number
    name: number
    symbol: number
    exchangeRate: number
    created: number
    modified: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    currencyId?: true
    exchangeRate?: true
  }

  export type CurrencySumAggregateInputType = {
    currencyId?: true
    exchangeRate?: true
  }

  export type CurrencyMinAggregateInputType = {
    currencyId?: true
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
    created?: true
    modified?: true
  }

  export type CurrencyMaxAggregateInputType = {
    currencyId?: true
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
    created?: true
    modified?: true
  }

  export type CurrencyCountAggregateInputType = {
    currencyId?: true
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type CurrencyAggregateArgs = {
    /**
     * Filter which Currency to aggregate.
     * 
    **/
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     * 
    **/
    orderBy?: Enumerable<CurrencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs = {
    where?: CurrencyWhereInput
    orderBy?: Enumerable<CurrencyOrderByWithAggregationInput>
    by: Array<CurrencyScalarFieldEnum>
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }


  export type CurrencyGroupByOutputType = {
    currencyId: number
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal
    created: Date
    modified: Date | null
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect = {
    currencyId?: boolean
    code?: boolean
    name?: boolean
    symbol?: boolean
    exchangeRate?: boolean
    created?: boolean
    modified?: boolean
    enrollments?: boolean | EnrollmentFindManyArgs
    _count?: boolean | CurrencyCountOutputTypeArgs
  }

  export type CurrencyInclude = {
    enrollments?: boolean | EnrollmentFindManyArgs
    _count?: boolean | CurrencyCountOutputTypeArgs
  }

  export type CurrencyGetPayload<
    S extends boolean | null | undefined | CurrencyArgs,
    U = keyof S
      > = S extends true
        ? Currency
    : S extends undefined
    ? never
    : S extends CurrencyArgs | CurrencyFindManyArgs
    ?'include' extends U
    ? Currency  & {
    [P in TrueKeys<S['include']>]:
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? CurrencyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
        P extends '_count' ? CurrencyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Currency ? Currency[P] : never
  } 
    : Currency
  : Currency


  type CurrencyCountArgs = Merge<
    Omit<CurrencyFindManyArgs, 'select' | 'include'> & {
      select?: CurrencyCountAggregateInputType | true
    }
  >

  export interface CurrencyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurrencyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CurrencyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Currency'> extends True ? CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>> : CheckSelect<T, Prisma__CurrencyClient<Currency | null >, Prisma__CurrencyClient<CurrencyGetPayload<T> | null >>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurrencyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CurrencyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Currency'> extends True ? CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>> : CheckSelect<T, Prisma__CurrencyClient<Currency | null >, Prisma__CurrencyClient<CurrencyGetPayload<T> | null >>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `currencyId`
     * const currencyWithCurrencyIdOnly = await prisma.currency.findMany({ select: { currencyId: true } })
     * 
    **/
    findMany<T extends CurrencyFindManyArgs>(
      args?: SelectSubset<T, CurrencyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Currency>>, PrismaPromise<Array<CurrencyGetPayload<T>>>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends CurrencyCreateArgs>(
      args: SelectSubset<T, CurrencyCreateArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Create many Currencies.
     *     @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurrencyCreateManyArgs>(
      args?: SelectSubset<T, CurrencyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends CurrencyDeleteArgs>(
      args: SelectSubset<T, CurrencyDeleteArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurrencyUpdateArgs>(
      args: SelectSubset<T, CurrencyUpdateArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurrencyDeleteManyArgs>(
      args?: SelectSubset<T, CurrencyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurrencyUpdateManyArgs>(
      args: SelectSubset<T, CurrencyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends CurrencyUpsertArgs>(
      args: SelectSubset<T, CurrencyUpsertArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Find one Currency that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CurrencyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Find the first Currency that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CurrencyClient<Currency>, Prisma__CurrencyClient<CurrencyGetPayload<T>>>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CurrencyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    enrollments<T extends EnrollmentFindManyArgs = {}>(args?: Subset<T, EnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Currency base type for findUnique actions
   */
  export type CurrencyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * Filter, which Currency to fetch.
     * 
    **/
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency: findUnique
   */
  export interface CurrencyFindUniqueArgs extends CurrencyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Currency base type for findFirst actions
   */
  export type CurrencyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * Filter, which Currency to fetch.
     * 
    **/
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     * 
    **/
    orderBy?: Enumerable<CurrencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     * 
    **/
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     * 
    **/
    distinct?: Enumerable<CurrencyScalarFieldEnum>
  }

  /**
   * Currency: findFirst
   */
  export interface CurrencyFindFirstArgs extends CurrencyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * Filter, which Currencies to fetch.
     * 
    **/
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     * 
    **/
    orderBy?: Enumerable<CurrencyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     * 
    **/
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CurrencyScalarFieldEnum>
  }


  /**
   * Currency create
   */
  export type CurrencyCreateArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * The data needed to create a Currency.
     * 
    **/
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }


  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs = {
    /**
     * The data used to create many Currencies.
     * 
    **/
    data: Enumerable<CurrencyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Currency update
   */
  export type CurrencyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * The data needed to update a Currency.
     * 
    **/
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     * 
    **/
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs = {
    /**
     * The data used to update Currencies.
     * 
    **/
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     * 
    **/
    where?: CurrencyWhereInput
  }


  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * The filter to search for the Currency to update in case it exists.
     * 
    **/
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     * 
    **/
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }


  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
    /**
     * Filter which Currency to delete.
     * 
    **/
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs = {
    /**
     * Filter which Currencies to delete
     * 
    **/
    where?: CurrencyWhereInput
  }


  /**
   * Currency: findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs = CurrencyFindUniqueArgsBase
      

  /**
   * Currency: findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs = CurrencyFindFirstArgsBase
      

  /**
   * Currency without action
   */
  export type CurrencyArgs = {
    /**
     * Select specific fields to fetch from the Currency
     * 
    **/
    select?: CurrencySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CurrencyInclude | null
  }



  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    countryId: number | null
    iso: number | null
    studentCount: number | null
  }

  export type CountrySumAggregateOutputType = {
    countryId: number | null
    iso: number | null
    studentCount: number | null
  }

  export type CountryMinAggregateOutputType = {
    countryId: number | null
    code: string | null
    name: string | null
    iso: number | null
    eu: boolean | null
    noShipping: boolean | null
    needsPostalCode: boolean | null
    studentCount: number | null
  }

  export type CountryMaxAggregateOutputType = {
    countryId: number | null
    code: string | null
    name: string | null
    iso: number | null
    eu: boolean | null
    noShipping: boolean | null
    needsPostalCode: boolean | null
    studentCount: number | null
  }

  export type CountryCountAggregateOutputType = {
    countryId: number
    code: number
    name: number
    iso: number
    eu: number
    noShipping: number
    needsPostalCode: number
    studentCount: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    countryId?: true
    iso?: true
    studentCount?: true
  }

  export type CountrySumAggregateInputType = {
    countryId?: true
    iso?: true
    studentCount?: true
  }

  export type CountryMinAggregateInputType = {
    countryId?: true
    code?: true
    name?: true
    iso?: true
    eu?: true
    noShipping?: true
    needsPostalCode?: true
    studentCount?: true
  }

  export type CountryMaxAggregateInputType = {
    countryId?: true
    code?: true
    name?: true
    iso?: true
    eu?: true
    noShipping?: true
    needsPostalCode?: true
    studentCount?: true
  }

  export type CountryCountAggregateInputType = {
    countryId?: true
    code?: true
    name?: true
    iso?: true
    eu?: true
    noShipping?: true
    needsPostalCode?: true
    studentCount?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: Array<CountryScalarFieldEnum>
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    countryId: number
    code: string
    name: string
    iso: number | null
    eu: boolean
    noShipping: boolean
    needsPostalCode: boolean
    studentCount: number
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect = {
    countryId?: boolean
    code?: boolean
    name?: boolean
    iso?: boolean
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: boolean
    provinces?: boolean | ProvinceFindManyArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryInclude = {
    provinces?: boolean | ProvinceFindManyArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryGetPayload<
    S extends boolean | null | undefined | CountryArgs,
    U = keyof S
      > = S extends true
        ? Country
    : S extends undefined
    ? never
    : S extends CountryArgs | CountryFindManyArgs
    ?'include' extends U
    ? Country  & {
    [P in TrueKeys<S['include']>]:
        P extends 'provinces' ? Array < ProvinceGetPayload<S['include'][P]>>  :
        P extends 'students' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'provinces' ? Array < ProvinceGetPayload<S['select'][P]>>  :
        P extends 'students' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Country ? Country[P] : never
  } 
    : Country
  : Country


  type CountryCountArgs = Merge<
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }
  >

  export interface CountryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>> : CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `countryId`
     * const countryWithCountryIdOnly = await prisma.country.findMany({ select: { countryId: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Country>>, PrismaPromise<Array<CountryGetPayload<T>>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs>(
      args?: SelectSubset<T, CountryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Find one Country that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CountryClient<Country>, Prisma__CountryClient<CountryGetPayload<T>>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    provinces<T extends ProvinceFindManyArgs = {}>(args?: Subset<T, ProvinceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Province>>, PrismaPromise<Array<ProvinceGetPayload<T>>>>;

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where: CountryWhereUniqueInput
  }

  /**
   * Country: findUnique
   */
  export interface CountryFindUniqueArgs extends CountryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     * 
    **/
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country: findFirst
   */
  export interface CountryFindFirstArgs extends CountryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     * 
    **/
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     * 
    **/
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     * 
    **/
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     * 
    **/
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs = {
    /**
     * The data used to create many Countries.
     * 
    **/
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     * 
    **/
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    /**
     * The data used to update Countries.
     * 
    **/
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     * 
    **/
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     * 
    **/
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     * 
    **/
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     * 
    **/
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     * 
    **/
    where?: CountryWhereInput
  }


  /**
   * Country: findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs = CountryFindUniqueArgsBase
      

  /**
   * Country: findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs = CountryFindFirstArgsBase
      

  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     * 
    **/
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CountryInclude | null
  }



  /**
   * Model Province
   */


  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    provinceId: number | null
    countryId: number | null
    studentCount: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    provinceId: number | null
    countryId: number | null
    studentCount: number | null
  }

  export type ProvinceMinAggregateOutputType = {
    provinceId: number | null
    countryId: number | null
    code: string | null
    name: string | null
    studentCount: number | null
  }

  export type ProvinceMaxAggregateOutputType = {
    provinceId: number | null
    countryId: number | null
    code: string | null
    name: string | null
    studentCount: number | null
  }

  export type ProvinceCountAggregateOutputType = {
    provinceId: number
    countryId: number
    code: number
    name: number
    studentCount: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    provinceId?: true
    countryId?: true
    studentCount?: true
  }

  export type ProvinceSumAggregateInputType = {
    provinceId?: true
    countryId?: true
    studentCount?: true
  }

  export type ProvinceMinAggregateInputType = {
    provinceId?: true
    countryId?: true
    code?: true
    name?: true
    studentCount?: true
  }

  export type ProvinceMaxAggregateInputType = {
    provinceId?: true
    countryId?: true
    code?: true
    name?: true
    studentCount?: true
  }

  export type ProvinceCountAggregateInputType = {
    provinceId?: true
    countryId?: true
    code?: true
    name?: true
    studentCount?: true
    _all?: true
  }

  export type ProvinceAggregateArgs = {
    /**
     * Filter which Province to aggregate.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs = {
    where?: ProvinceWhereInput
    orderBy?: Enumerable<ProvinceOrderByWithAggregationInput>
    by: Array<ProvinceScalarFieldEnum>
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }


  export type ProvinceGroupByOutputType = {
    provinceId: number
    countryId: number
    code: string
    name: string
    studentCount: number
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect = {
    provinceId?: boolean
    countryId?: boolean
    code?: boolean
    name?: boolean
    studentCount?: boolean
    country?: boolean | CountryArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ProvinceCountOutputTypeArgs
  }

  export type ProvinceInclude = {
    country?: boolean | CountryArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ProvinceCountOutputTypeArgs
  }

  export type ProvinceGetPayload<
    S extends boolean | null | undefined | ProvinceArgs,
    U = keyof S
      > = S extends true
        ? Province
    : S extends undefined
    ? never
    : S extends ProvinceArgs | ProvinceFindManyArgs
    ?'include' extends U
    ? Province  & {
    [P in TrueKeys<S['include']>]:
        P extends 'country' ? CountryGetPayload<S['include'][P]> :
        P extends 'students' ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProvinceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'country' ? CountryGetPayload<S['select'][P]> :
        P extends 'students' ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProvinceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Province ? Province[P] : never
  } 
    : Province
  : Province


  type ProvinceCountArgs = Merge<
    Omit<ProvinceFindManyArgs, 'select' | 'include'> & {
      select?: ProvinceCountAggregateInputType | true
    }
  >

  export interface ProvinceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProvinceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProvinceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Province'> extends True ? CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>> : CheckSelect<T, Prisma__ProvinceClient<Province | null >, Prisma__ProvinceClient<ProvinceGetPayload<T> | null >>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProvinceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProvinceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Province'> extends True ? CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>> : CheckSelect<T, Prisma__ProvinceClient<Province | null >, Prisma__ProvinceClient<ProvinceGetPayload<T> | null >>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `provinceId`
     * const provinceWithProvinceIdOnly = await prisma.province.findMany({ select: { provinceId: true } })
     * 
    **/
    findMany<T extends ProvinceFindManyArgs>(
      args?: SelectSubset<T, ProvinceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Province>>, PrismaPromise<Array<ProvinceGetPayload<T>>>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
    **/
    create<T extends ProvinceCreateArgs>(
      args: SelectSubset<T, ProvinceCreateArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Create many Provinces.
     *     @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     *     @example
     *     // Create many Provinces
     *     const province = await prisma.province.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProvinceCreateManyArgs>(
      args?: SelectSubset<T, ProvinceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
    **/
    delete<T extends ProvinceDeleteArgs>(
      args: SelectSubset<T, ProvinceDeleteArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProvinceUpdateArgs>(
      args: SelectSubset<T, ProvinceUpdateArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProvinceDeleteManyArgs>(
      args?: SelectSubset<T, ProvinceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProvinceUpdateManyArgs>(
      args: SelectSubset<T, ProvinceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
    **/
    upsert<T extends ProvinceUpsertArgs>(
      args: SelectSubset<T, ProvinceUpsertArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Find one Province that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProvinceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Find the first Province that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProvinceClient<Province>, Prisma__ProvinceClient<ProvinceGetPayload<T>>>

    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProvinceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    country<T extends CountryArgs = {}>(args?: Subset<T, CountryArgs>): CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>;

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Province base type for findUnique actions
   */
  export type ProvinceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province: findUnique
   */
  export interface ProvinceFindUniqueArgs extends ProvinceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Province base type for findFirst actions
   */
  export type ProvinceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     * 
    **/
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }

  /**
   * Province: findFirst
   */
  export interface ProvinceFindFirstArgs extends ProvinceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Provinces to fetch.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }


  /**
   * Province create
   */
  export type ProvinceCreateArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The data needed to create a Province.
     * 
    **/
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }


  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs = {
    /**
     * The data used to create many Provinces.
     * 
    **/
    data: Enumerable<ProvinceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Province update
   */
  export type ProvinceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The data needed to update a Province.
     * 
    **/
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs = {
    /**
     * The data used to update Provinces.
     * 
    **/
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     * 
    **/
    where?: ProvinceWhereInput
  }


  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The filter to search for the Province to update in case it exists.
     * 
    **/
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     * 
    **/
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }


  /**
   * Province delete
   */
  export type ProvinceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter which Province to delete.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs = {
    /**
     * Filter which Provinces to delete
     * 
    **/
    where?: ProvinceWhereInput
  }


  /**
   * Province: findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs = ProvinceFindUniqueArgsBase
      

  /**
   * Province: findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs = ProvinceFindFirstArgsBase
      

  /**
   * Province without action
   */
  export type ProvinceArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studentId: number | null
    currencyId: number | null
    userId: number | null
    languageId: number | null
    provinceId: number | null
    countryId: number | null
    telephoneCountryCode: number | null
    paymentDay: number | null
    enrollmentCount: number | null
  }

  export type StudentSumAggregateOutputType = {
    studentId: number | null
    currencyId: number | null
    userId: number | null
    languageId: number | null
    provinceId: number | null
    countryId: number | null
    telephoneCountryCode: number | null
    paymentDay: number | null
    enrollmentCount: number | null
  }

  export type StudentMinAggregateOutputType = {
    studentId: number | null
    currencyId: number | null
    userId: number | null
    languageId: number | null
    sex: StudentSex | null
    firstName: string | null
    lastName: string | null
    address1: string | null
    address2: string | null
    city: string | null
    provinceId: number | null
    postalCode: string | null
    countryId: number | null
    telephoneCountryCode: number | null
    telephoneNumber: string | null
    emailAddress: string | null
    paymentStart: Date | null
    paymentDay: number | null
    password: string | null
    e164: string | null
    sms: boolean | null
    enrollmentCount: number | null
    created: Date | null
    modified: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    studentId: number | null
    currencyId: number | null
    userId: number | null
    languageId: number | null
    sex: StudentSex | null
    firstName: string | null
    lastName: string | null
    address1: string | null
    address2: string | null
    city: string | null
    provinceId: number | null
    postalCode: string | null
    countryId: number | null
    telephoneCountryCode: number | null
    telephoneNumber: string | null
    emailAddress: string | null
    paymentStart: Date | null
    paymentDay: number | null
    password: string | null
    e164: string | null
    sms: boolean | null
    enrollmentCount: number | null
    created: Date | null
    modified: Date | null
  }

  export type StudentCountAggregateOutputType = {
    studentId: number
    currencyId: number
    userId: number
    languageId: number
    sex: number
    firstName: number
    lastName: number
    address1: number
    address2: number
    city: number
    provinceId: number
    postalCode: number
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: number
    emailAddress: number
    paymentStart: number
    paymentDay: number
    password: number
    e164: number
    sms: number
    enrollmentCount: number
    created: number
    modified: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studentId?: true
    currencyId?: true
    userId?: true
    languageId?: true
    provinceId?: true
    countryId?: true
    telephoneCountryCode?: true
    paymentDay?: true
    enrollmentCount?: true
  }

  export type StudentSumAggregateInputType = {
    studentId?: true
    currencyId?: true
    userId?: true
    languageId?: true
    provinceId?: true
    countryId?: true
    telephoneCountryCode?: true
    paymentDay?: true
    enrollmentCount?: true
  }

  export type StudentMinAggregateInputType = {
    studentId?: true
    currencyId?: true
    userId?: true
    languageId?: true
    sex?: true
    firstName?: true
    lastName?: true
    address1?: true
    address2?: true
    city?: true
    provinceId?: true
    postalCode?: true
    countryId?: true
    telephoneCountryCode?: true
    telephoneNumber?: true
    emailAddress?: true
    paymentStart?: true
    paymentDay?: true
    password?: true
    e164?: true
    sms?: true
    enrollmentCount?: true
    created?: true
    modified?: true
  }

  export type StudentMaxAggregateInputType = {
    studentId?: true
    currencyId?: true
    userId?: true
    languageId?: true
    sex?: true
    firstName?: true
    lastName?: true
    address1?: true
    address2?: true
    city?: true
    provinceId?: true
    postalCode?: true
    countryId?: true
    telephoneCountryCode?: true
    telephoneNumber?: true
    emailAddress?: true
    paymentStart?: true
    paymentDay?: true
    password?: true
    e164?: true
    sms?: true
    enrollmentCount?: true
    created?: true
    modified?: true
  }

  export type StudentCountAggregateInputType = {
    studentId?: true
    currencyId?: true
    userId?: true
    languageId?: true
    sex?: true
    firstName?: true
    lastName?: true
    address1?: true
    address2?: true
    city?: true
    provinceId?: true
    postalCode?: true
    countryId?: true
    telephoneCountryCode?: true
    telephoneNumber?: true
    emailAddress?: true
    paymentStart?: true
    paymentDay?: true
    password?: true
    e164?: true
    sms?: true
    enrollmentCount?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: Array<StudentScalarFieldEnum>
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    studentId: number
    currencyId: number
    userId: number | null
    languageId: number
    sex: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId: number | null
    postalCode: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart: Date | null
    paymentDay: number | null
    password: string | null
    e164: string
    sms: boolean
    enrollmentCount: number
    created: Date
    modified: Date | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect = {
    studentId?: boolean
    currencyId?: boolean
    userId?: boolean
    languageId?: boolean
    sex?: boolean
    firstName?: boolean
    lastName?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    provinceId?: boolean
    postalCode?: boolean
    countryId?: boolean
    telephoneCountryCode?: boolean
    telephoneNumber?: boolean
    emailAddress?: boolean
    paymentStart?: boolean
    paymentDay?: boolean
    password?: boolean
    e164?: boolean
    sms?: boolean
    enrollmentCount?: boolean
    created?: boolean
    modified?: boolean
    province?: boolean | ProvinceArgs
    country?: boolean | CountryArgs
    user?: boolean | UserArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    notes?: boolean | NoteFindManyArgs
    refreshTokens?: boolean | RefreshTokenFindManyArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentInclude = {
    province?: boolean | ProvinceArgs
    country?: boolean | CountryArgs
    user?: boolean | UserArgs
    enrollments?: boolean | EnrollmentFindManyArgs
    notes?: boolean | NoteFindManyArgs
    refreshTokens?: boolean | RefreshTokenFindManyArgs
    _count?: boolean | StudentCountOutputTypeArgs
  }

  export type StudentGetPayload<
    S extends boolean | null | undefined | StudentArgs,
    U = keyof S
      > = S extends true
        ? Student
    : S extends undefined
    ? never
    : S extends StudentArgs | StudentFindManyArgs
    ?'include' extends U
    ? Student  & {
    [P in TrueKeys<S['include']>]:
        P extends 'province' ? ProvinceGetPayload<S['include'][P]> | null :
        P extends 'country' ? CountryGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['include'][P]>>  :
        P extends 'refreshTokens' ? Array < RefreshTokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'province' ? ProvinceGetPayload<S['select'][P]> | null :
        P extends 'country' ? CountryGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
        P extends 'notes' ? Array < NoteGetPayload<S['select'][P]>>  :
        P extends 'refreshTokens' ? Array < RefreshTokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Student ? Student[P] : never
  } 
    : Student
  : Student


  type StudentCountArgs = Merge<
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
  >

  export interface StudentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentWithStudentIdOnly = await prisma.student.findMany({ select: { studentId: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find one Student that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    province<T extends ProvinceArgs = {}>(args?: Subset<T, ProvinceArgs>): CheckSelect<T, Prisma__ProvinceClient<Province | null >, Prisma__ProvinceClient<ProvinceGetPayload<T> | null >>;

    country<T extends CountryArgs = {}>(args?: Subset<T, CountryArgs>): CheckSelect<T, Prisma__CountryClient<Country | null >, Prisma__CountryClient<CountryGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    enrollments<T extends EnrollmentFindManyArgs = {}>(args?: Subset<T, EnrollmentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>;

    notes<T extends NoteFindManyArgs = {}>(args?: Subset<T, NoteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Note>>, PrismaPromise<Array<NoteGetPayload<T>>>>;

    refreshTokens<T extends RefreshTokenFindManyArgs = {}>(args?: Subset<T, RefreshTokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RefreshToken>>, PrismaPromise<Array<RefreshTokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where: StudentWhereUniqueInput
  }

  /**
   * Student: findUnique
   */
  export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     * 
    **/
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student: findFirst
   */
  export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     * 
    **/
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs = {
    /**
     * The data used to create many Students.
     * 
    **/
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     * 
    **/
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    /**
     * The data used to update Students.
     * 
    **/
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     * 
    **/
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     * 
    **/
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    /**
     * Filter which Students to delete
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student: findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs = StudentFindUniqueArgsBase
      

  /**
   * Student: findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs = StudentFindFirstArgsBase
      

  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
  }



  /**
   * Model Enrollment
   */


  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    enrollmentId: number | null
    studentId: number | null
    courseId: number | null
    currencyId: number | null
    userId: number | null
    cost: Decimal | null
    discount: Decimal | null
    installment: Decimal | null
    paymentDay: number | null
    accountId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    enrollmentId: number | null
    studentId: number | null
    courseId: number | null
    currencyId: number | null
    userId: number | null
    cost: Decimal | null
    discount: Decimal | null
    installment: Decimal | null
    paymentDay: number | null
    accountId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    enrollmentId: number | null
    studentId: number | null
    courseId: number | null
    currencyId: number | null
    userId: number | null
    enrollmentDate: Date | null
    expiryDate: Date | null
    paymentPlan: EnrollmentPaymentPlan | null
    status: EnrollmentStatus | null
    statusDate: Date | null
    gradEmailDate: Date | null
    gradEmailSkip: boolean | null
    cost: Decimal | null
    discount: Decimal | null
    installment: Decimal | null
    noShipping: boolean | null
    hideFromShippingList: boolean | null
    paymentOverride: boolean | null
    paymentFrequency: EnrollmentPaymentFrequency | null
    paymentDay: number | null
    paymentStart: Date | null
    accountId: number | null
    shippingNote: string | null
    preparedDate: Date | null
    shippedDate: Date | null
    diploma: boolean | null
    diplomaDate: Date | null
    fastTrack: boolean | null
    noStudentCenter: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    enrollmentId: number | null
    studentId: number | null
    courseId: number | null
    currencyId: number | null
    userId: number | null
    enrollmentDate: Date | null
    expiryDate: Date | null
    paymentPlan: EnrollmentPaymentPlan | null
    status: EnrollmentStatus | null
    statusDate: Date | null
    gradEmailDate: Date | null
    gradEmailSkip: boolean | null
    cost: Decimal | null
    discount: Decimal | null
    installment: Decimal | null
    noShipping: boolean | null
    hideFromShippingList: boolean | null
    paymentOverride: boolean | null
    paymentFrequency: EnrollmentPaymentFrequency | null
    paymentDay: number | null
    paymentStart: Date | null
    accountId: number | null
    shippingNote: string | null
    preparedDate: Date | null
    shippedDate: Date | null
    diploma: boolean | null
    diplomaDate: Date | null
    fastTrack: boolean | null
    noStudentCenter: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    enrollmentId: number
    studentId: number
    courseId: number
    currencyId: number
    userId: number
    enrollmentDate: number
    expiryDate: number
    paymentPlan: number
    status: number
    statusDate: number
    gradEmailDate: number
    gradEmailSkip: number
    cost: number
    discount: number
    installment: number
    noShipping: number
    hideFromShippingList: number
    paymentOverride: number
    paymentFrequency: number
    paymentDay: number
    paymentStart: number
    accountId: number
    shippingNote: number
    preparedDate: number
    shippedDate: number
    diploma: number
    diplomaDate: number
    fastTrack: number
    noStudentCenter: number
    created: number
    modified: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    enrollmentId?: true
    studentId?: true
    courseId?: true
    currencyId?: true
    userId?: true
    cost?: true
    discount?: true
    installment?: true
    paymentDay?: true
    accountId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    enrollmentId?: true
    studentId?: true
    courseId?: true
    currencyId?: true
    userId?: true
    cost?: true
    discount?: true
    installment?: true
    paymentDay?: true
    accountId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    enrollmentId?: true
    studentId?: true
    courseId?: true
    currencyId?: true
    userId?: true
    enrollmentDate?: true
    expiryDate?: true
    paymentPlan?: true
    status?: true
    statusDate?: true
    gradEmailDate?: true
    gradEmailSkip?: true
    cost?: true
    discount?: true
    installment?: true
    noShipping?: true
    hideFromShippingList?: true
    paymentOverride?: true
    paymentFrequency?: true
    paymentDay?: true
    paymentStart?: true
    accountId?: true
    shippingNote?: true
    preparedDate?: true
    shippedDate?: true
    diploma?: true
    diplomaDate?: true
    fastTrack?: true
    noStudentCenter?: true
    created?: true
    modified?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    enrollmentId?: true
    studentId?: true
    courseId?: true
    currencyId?: true
    userId?: true
    enrollmentDate?: true
    expiryDate?: true
    paymentPlan?: true
    status?: true
    statusDate?: true
    gradEmailDate?: true
    gradEmailSkip?: true
    cost?: true
    discount?: true
    installment?: true
    noShipping?: true
    hideFromShippingList?: true
    paymentOverride?: true
    paymentFrequency?: true
    paymentDay?: true
    paymentStart?: true
    accountId?: true
    shippingNote?: true
    preparedDate?: true
    shippedDate?: true
    diploma?: true
    diplomaDate?: true
    fastTrack?: true
    noStudentCenter?: true
    created?: true
    modified?: true
  }

  export type EnrollmentCountAggregateInputType = {
    enrollmentId?: true
    studentId?: true
    courseId?: true
    currencyId?: true
    userId?: true
    enrollmentDate?: true
    expiryDate?: true
    paymentPlan?: true
    status?: true
    statusDate?: true
    gradEmailDate?: true
    gradEmailSkip?: true
    cost?: true
    discount?: true
    installment?: true
    noShipping?: true
    hideFromShippingList?: true
    paymentOverride?: true
    paymentFrequency?: true
    paymentDay?: true
    paymentStart?: true
    accountId?: true
    shippingNote?: true
    preparedDate?: true
    shippedDate?: true
    diploma?: true
    diplomaDate?: true
    fastTrack?: true
    noStudentCenter?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs = {
    /**
     * Filter which Enrollment to aggregate.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs = {
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithAggregationInput>
    by: Array<EnrollmentScalarFieldEnum>
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }


  export type EnrollmentGroupByOutputType = {
    enrollmentId: number
    studentId: number
    courseId: number
    currencyId: number
    userId: number | null
    enrollmentDate: Date
    expiryDate: Date | null
    paymentPlan: EnrollmentPaymentPlan
    status: EnrollmentStatus | null
    statusDate: Date | null
    gradEmailDate: Date | null
    gradEmailSkip: boolean
    cost: Decimal
    discount: Decimal
    installment: Decimal
    noShipping: boolean
    hideFromShippingList: boolean
    paymentOverride: boolean
    paymentFrequency: EnrollmentPaymentFrequency
    paymentDay: number | null
    paymentStart: Date | null
    accountId: number | null
    shippingNote: string | null
    preparedDate: Date | null
    shippedDate: Date | null
    diploma: boolean
    diplomaDate: Date | null
    fastTrack: boolean
    noStudentCenter: boolean
    created: Date
    modified: Date | null
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect = {
    enrollmentId?: boolean
    studentId?: boolean
    courseId?: boolean
    currencyId?: boolean
    userId?: boolean
    enrollmentDate?: boolean
    expiryDate?: boolean
    paymentPlan?: boolean
    status?: boolean
    statusDate?: boolean
    gradEmailDate?: boolean
    gradEmailSkip?: boolean
    cost?: boolean
    discount?: boolean
    installment?: boolean
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: boolean
    paymentDay?: boolean
    paymentStart?: boolean
    accountId?: boolean
    shippingNote?: boolean
    preparedDate?: boolean
    shippedDate?: boolean
    diploma?: boolean
    diplomaDate?: boolean
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: boolean
    modified?: boolean
    student?: boolean | StudentArgs
    course?: boolean | CourseArgs
    currency?: boolean | CurrencyArgs
    user?: boolean | UserArgs
    paymentMethods?: boolean | PaymentMethodFindManyArgs
    transactions?: boolean | TransactionFindManyArgs
    _count?: boolean | EnrollmentCountOutputTypeArgs
  }

  export type EnrollmentInclude = {
    student?: boolean | StudentArgs
    course?: boolean | CourseArgs
    currency?: boolean | CurrencyArgs
    user?: boolean | UserArgs
    paymentMethods?: boolean | PaymentMethodFindManyArgs
    transactions?: boolean | TransactionFindManyArgs
    _count?: boolean | EnrollmentCountOutputTypeArgs
  }

  export type EnrollmentGetPayload<
    S extends boolean | null | undefined | EnrollmentArgs,
    U = keyof S
      > = S extends true
        ? Enrollment
    : S extends undefined
    ? never
    : S extends EnrollmentArgs | EnrollmentFindManyArgs
    ?'include' extends U
    ? Enrollment  & {
    [P in TrueKeys<S['include']>]:
        P extends 'student' ? StudentGetPayload<S['include'][P]> :
        P extends 'course' ? CourseGetPayload<S['include'][P]> :
        P extends 'currency' ? CurrencyGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'paymentMethods' ? Array < PaymentMethodGetPayload<S['include'][P]>>  :
        P extends 'transactions' ? Array < TransactionGetPayload<S['include'][P]>>  :
        P extends '_count' ? EnrollmentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'student' ? StudentGetPayload<S['select'][P]> :
        P extends 'course' ? CourseGetPayload<S['select'][P]> :
        P extends 'currency' ? CurrencyGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'paymentMethods' ? Array < PaymentMethodGetPayload<S['select'][P]>>  :
        P extends 'transactions' ? Array < TransactionGetPayload<S['select'][P]>>  :
        P extends '_count' ? EnrollmentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Enrollment ? Enrollment[P] : never
  } 
    : Enrollment
  : Enrollment


  type EnrollmentCountArgs = Merge<
    Omit<EnrollmentFindManyArgs, 'select' | 'include'> & {
      select?: EnrollmentCountAggregateInputType | true
    }
  >

  export interface EnrollmentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrollmentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnrollmentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Enrollment'> extends True ? CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrollmentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnrollmentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Enrollment'> extends True ? CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>> : CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `enrollmentId`
     * const enrollmentWithEnrollmentIdOnly = await prisma.enrollment.findMany({ select: { enrollmentId: true } })
     * 
    **/
    findMany<T extends EnrollmentFindManyArgs>(
      args?: SelectSubset<T, EnrollmentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Enrollment>>, PrismaPromise<Array<EnrollmentGetPayload<T>>>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
    **/
    create<T extends EnrollmentCreateArgs>(
      args: SelectSubset<T, EnrollmentCreateArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Create many Enrollments.
     *     @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     *     @example
     *     // Create many Enrollments
     *     const enrollment = await prisma.enrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrollmentCreateManyArgs>(
      args?: SelectSubset<T, EnrollmentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
    **/
    delete<T extends EnrollmentDeleteArgs>(
      args: SelectSubset<T, EnrollmentDeleteArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrollmentUpdateArgs>(
      args: SelectSubset<T, EnrollmentUpdateArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrollmentDeleteManyArgs>(
      args?: SelectSubset<T, EnrollmentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrollmentUpdateManyArgs>(
      args: SelectSubset<T, EnrollmentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
    **/
    upsert<T extends EnrollmentUpsertArgs>(
      args: SelectSubset<T, EnrollmentUpsertArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Find one Enrollment that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EnrollmentClient<Enrollment>, Prisma__EnrollmentClient<EnrollmentGetPayload<T>>>

    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnrollmentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    course<T extends CourseArgs = {}>(args?: Subset<T, CourseArgs>): CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>;

    currency<T extends CurrencyArgs = {}>(args?: Subset<T, CurrencyArgs>): CheckSelect<T, Prisma__CurrencyClient<Currency | null >, Prisma__CurrencyClient<CurrencyGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    paymentMethods<T extends PaymentMethodFindManyArgs = {}>(args?: Subset<T, PaymentMethodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PaymentMethod>>, PrismaPromise<Array<PaymentMethodGetPayload<T>>>>;

    transactions<T extends TransactionFindManyArgs = {}>(args?: Subset<T, TransactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Transaction>>, PrismaPromise<Array<TransactionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Enrollment base type for findUnique actions
   */
  export type EnrollmentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter, which Enrollment to fetch.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment: findUnique
   */
  export interface EnrollmentFindUniqueArgs extends EnrollmentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrollment base type for findFirst actions
   */
  export type EnrollmentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter, which Enrollment to fetch.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     * 
    **/
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }

  /**
   * Enrollment: findFirst
   */
  export interface EnrollmentFindFirstArgs extends EnrollmentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter, which Enrollments to fetch.
     * 
    **/
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     * 
    **/
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     * 
    **/
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The data needed to create a Enrollment.
     * 
    **/
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }


  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs = {
    /**
     * The data used to create many Enrollments.
     * 
    **/
    data: Enumerable<EnrollmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The data needed to update a Enrollment.
     * 
    **/
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs = {
    /**
     * The data used to update Enrollments.
     * 
    **/
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     * 
    **/
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     * 
    **/
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     * 
    **/
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }


  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
    /**
     * Filter which Enrollment to delete.
     * 
    **/
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs = {
    /**
     * Filter which Enrollments to delete
     * 
    **/
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment: findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs = EnrollmentFindUniqueArgsBase
      

  /**
   * Enrollment: findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs = EnrollmentFindFirstArgsBase
      

  /**
   * Enrollment without action
   */
  export type EnrollmentArgs = {
    /**
     * Select specific fields to fetch from the Enrollment
     * 
    **/
    select?: EnrollmentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnrollmentInclude | null
  }



  /**
   * Model PaymentType
   */


  export type AggregatePaymentType = {
    _count: PaymentTypeCountAggregateOutputType | null
    _avg: PaymentTypeAvgAggregateOutputType | null
    _sum: PaymentTypeSumAggregateOutputType | null
    _min: PaymentTypeMinAggregateOutputType | null
    _max: PaymentTypeMaxAggregateOutputType | null
  }

  export type PaymentTypeAvgAggregateOutputType = {
    paymentTypeId: number | null
  }

  export type PaymentTypeSumAggregateOutputType = {
    paymentTypeId: number | null
  }

  export type PaymentTypeMinAggregateOutputType = {
    paymentTypeId: number | null
    name: string | null
  }

  export type PaymentTypeMaxAggregateOutputType = {
    paymentTypeId: number | null
    name: string | null
  }

  export type PaymentTypeCountAggregateOutputType = {
    paymentTypeId: number
    name: number
    _all: number
  }


  export type PaymentTypeAvgAggregateInputType = {
    paymentTypeId?: true
  }

  export type PaymentTypeSumAggregateInputType = {
    paymentTypeId?: true
  }

  export type PaymentTypeMinAggregateInputType = {
    paymentTypeId?: true
    name?: true
  }

  export type PaymentTypeMaxAggregateInputType = {
    paymentTypeId?: true
    name?: true
  }

  export type PaymentTypeCountAggregateInputType = {
    paymentTypeId?: true
    name?: true
    _all?: true
  }

  export type PaymentTypeAggregateArgs = {
    /**
     * Filter which PaymentType to aggregate.
     * 
    **/
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTypes
    **/
    _count?: true | PaymentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTypeMaxAggregateInputType
  }

  export type GetPaymentTypeAggregateType<T extends PaymentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentType[P]>
      : GetScalarType<T[P], AggregatePaymentType[P]>
  }




  export type PaymentTypeGroupByArgs = {
    where?: PaymentTypeWhereInput
    orderBy?: Enumerable<PaymentTypeOrderByWithAggregationInput>
    by: Array<PaymentTypeScalarFieldEnum>
    having?: PaymentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTypeCountAggregateInputType | true
    _avg?: PaymentTypeAvgAggregateInputType
    _sum?: PaymentTypeSumAggregateInputType
    _min?: PaymentTypeMinAggregateInputType
    _max?: PaymentTypeMaxAggregateInputType
  }


  export type PaymentTypeGroupByOutputType = {
    paymentTypeId: number
    name: string
    _count: PaymentTypeCountAggregateOutputType | null
    _avg: PaymentTypeAvgAggregateOutputType | null
    _sum: PaymentTypeSumAggregateOutputType | null
    _min: PaymentTypeMinAggregateOutputType | null
    _max: PaymentTypeMaxAggregateOutputType | null
  }

  type GetPaymentTypeGroupByPayload<T extends PaymentTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PaymentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTypeGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTypeSelect = {
    paymentTypeId?: boolean
    name?: boolean
    paymentMethods?: boolean | PaymentMethodFindManyArgs
    _count?: boolean | PaymentTypeCountOutputTypeArgs
  }

  export type PaymentTypeInclude = {
    paymentMethods?: boolean | PaymentMethodFindManyArgs
    _count?: boolean | PaymentTypeCountOutputTypeArgs
  }

  export type PaymentTypeGetPayload<
    S extends boolean | null | undefined | PaymentTypeArgs,
    U = keyof S
      > = S extends true
        ? PaymentType
    : S extends undefined
    ? never
    : S extends PaymentTypeArgs | PaymentTypeFindManyArgs
    ?'include' extends U
    ? PaymentType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'paymentMethods' ? Array < PaymentMethodGetPayload<S['include'][P]>>  :
        P extends '_count' ? PaymentTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'paymentMethods' ? Array < PaymentMethodGetPayload<S['select'][P]>>  :
        P extends '_count' ? PaymentTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PaymentType ? PaymentType[P] : never
  } 
    : PaymentType
  : PaymentType


  type PaymentTypeCountArgs = Merge<
    Omit<PaymentTypeFindManyArgs, 'select' | 'include'> & {
      select?: PaymentTypeCountAggregateInputType | true
    }
  >

  export interface PaymentTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PaymentType that matches the filter.
     * @param {PaymentTypeFindUniqueArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PaymentType'> extends True ? CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>> : CheckSelect<T, Prisma__PaymentTypeClient<PaymentType | null >, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T> | null >>

    /**
     * Find the first PaymentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindFirstArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PaymentType'> extends True ? CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>> : CheckSelect<T, Prisma__PaymentTypeClient<PaymentType | null >, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T> | null >>

    /**
     * Find zero or more PaymentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTypes
     * const paymentTypes = await prisma.paymentType.findMany()
     * 
     * // Get first 10 PaymentTypes
     * const paymentTypes = await prisma.paymentType.findMany({ take: 10 })
     * 
     * // Only select the `paymentTypeId`
     * const paymentTypeWithPaymentTypeIdOnly = await prisma.paymentType.findMany({ select: { paymentTypeId: true } })
     * 
    **/
    findMany<T extends PaymentTypeFindManyArgs>(
      args?: SelectSubset<T, PaymentTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PaymentType>>, PrismaPromise<Array<PaymentTypeGetPayload<T>>>>

    /**
     * Create a PaymentType.
     * @param {PaymentTypeCreateArgs} args - Arguments to create a PaymentType.
     * @example
     * // Create one PaymentType
     * const PaymentType = await prisma.paymentType.create({
     *   data: {
     *     // ... data to create a PaymentType
     *   }
     * })
     * 
    **/
    create<T extends PaymentTypeCreateArgs>(
      args: SelectSubset<T, PaymentTypeCreateArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Create many PaymentTypes.
     *     @param {PaymentTypeCreateManyArgs} args - Arguments to create many PaymentTypes.
     *     @example
     *     // Create many PaymentTypes
     *     const paymentType = await prisma.paymentType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentTypeCreateManyArgs>(
      args?: SelectSubset<T, PaymentTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentType.
     * @param {PaymentTypeDeleteArgs} args - Arguments to delete one PaymentType.
     * @example
     * // Delete one PaymentType
     * const PaymentType = await prisma.paymentType.delete({
     *   where: {
     *     // ... filter to delete one PaymentType
     *   }
     * })
     * 
    **/
    delete<T extends PaymentTypeDeleteArgs>(
      args: SelectSubset<T, PaymentTypeDeleteArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Update one PaymentType.
     * @param {PaymentTypeUpdateArgs} args - Arguments to update one PaymentType.
     * @example
     * // Update one PaymentType
     * const paymentType = await prisma.paymentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentTypeUpdateArgs>(
      args: SelectSubset<T, PaymentTypeUpdateArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Delete zero or more PaymentTypes.
     * @param {PaymentTypeDeleteManyArgs} args - Arguments to filter PaymentTypes to delete.
     * @example
     * // Delete a few PaymentTypes
     * const { count } = await prisma.paymentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentTypeDeleteManyArgs>(
      args?: SelectSubset<T, PaymentTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTypes
     * const paymentType = await prisma.paymentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentTypeUpdateManyArgs>(
      args: SelectSubset<T, PaymentTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentType.
     * @param {PaymentTypeUpsertArgs} args - Arguments to update or create a PaymentType.
     * @example
     * // Update or create a PaymentType
     * const paymentType = await prisma.paymentType.upsert({
     *   create: {
     *     // ... data to create a PaymentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentType we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentTypeUpsertArgs>(
      args: SelectSubset<T, PaymentTypeUpsertArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Find one PaymentType that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PaymentTypeFindUniqueOrThrowArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PaymentTypeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Find the first PaymentType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindFirstOrThrowArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentTypeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType>, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T>>>

    /**
     * Count the number of PaymentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeCountArgs} args - Arguments to filter PaymentTypes to count.
     * @example
     * // Count the number of PaymentTypes
     * const count = await prisma.paymentType.count({
     *   where: {
     *     // ... the filter for the PaymentTypes we want to count
     *   }
     * })
    **/
    count<T extends PaymentTypeCountArgs>(
      args?: Subset<T, PaymentTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentTypeAggregateArgs>(args: Subset<T, PaymentTypeAggregateArgs>): PrismaPromise<GetPaymentTypeAggregateType<T>>

    /**
     * Group by PaymentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTypeGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    paymentMethods<T extends PaymentMethodFindManyArgs = {}>(args?: Subset<T, PaymentMethodFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PaymentMethod>>, PrismaPromise<Array<PaymentMethodGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PaymentType base type for findUnique actions
   */
  export type PaymentTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * Filter, which PaymentType to fetch.
     * 
    **/
    where: PaymentTypeWhereUniqueInput
  }

  /**
   * PaymentType: findUnique
   */
  export interface PaymentTypeFindUniqueArgs extends PaymentTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentType base type for findFirst actions
   */
  export type PaymentTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * Filter, which PaymentType to fetch.
     * 
    **/
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTypes.
     * 
    **/
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTypes.
     * 
    **/
    distinct?: Enumerable<PaymentTypeScalarFieldEnum>
  }

  /**
   * PaymentType: findFirst
   */
  export interface PaymentTypeFindFirstArgs extends PaymentTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentType findMany
   */
  export type PaymentTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * Filter, which PaymentTypes to fetch.
     * 
    **/
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTypes.
     * 
    **/
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PaymentTypeScalarFieldEnum>
  }


  /**
   * PaymentType create
   */
  export type PaymentTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * The data needed to create a PaymentType.
     * 
    **/
    data: XOR<PaymentTypeCreateInput, PaymentTypeUncheckedCreateInput>
  }


  /**
   * PaymentType createMany
   */
  export type PaymentTypeCreateManyArgs = {
    /**
     * The data used to create many PaymentTypes.
     * 
    **/
    data: Enumerable<PaymentTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PaymentType update
   */
  export type PaymentTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * The data needed to update a PaymentType.
     * 
    **/
    data: XOR<PaymentTypeUpdateInput, PaymentTypeUncheckedUpdateInput>
    /**
     * Choose, which PaymentType to update.
     * 
    **/
    where: PaymentTypeWhereUniqueInput
  }


  /**
   * PaymentType updateMany
   */
  export type PaymentTypeUpdateManyArgs = {
    /**
     * The data used to update PaymentTypes.
     * 
    **/
    data: XOR<PaymentTypeUpdateManyMutationInput, PaymentTypeUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTypes to update
     * 
    **/
    where?: PaymentTypeWhereInput
  }


  /**
   * PaymentType upsert
   */
  export type PaymentTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * The filter to search for the PaymentType to update in case it exists.
     * 
    **/
    where: PaymentTypeWhereUniqueInput
    /**
     * In case the PaymentType found by the `where` argument doesn't exist, create a new PaymentType with this data.
     * 
    **/
    create: XOR<PaymentTypeCreateInput, PaymentTypeUncheckedCreateInput>
    /**
     * In case the PaymentType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PaymentTypeUpdateInput, PaymentTypeUncheckedUpdateInput>
  }


  /**
   * PaymentType delete
   */
  export type PaymentTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
    /**
     * Filter which PaymentType to delete.
     * 
    **/
    where: PaymentTypeWhereUniqueInput
  }


  /**
   * PaymentType deleteMany
   */
  export type PaymentTypeDeleteManyArgs = {
    /**
     * Filter which PaymentTypes to delete
     * 
    **/
    where?: PaymentTypeWhereInput
  }


  /**
   * PaymentType: findUniqueOrThrow
   */
  export type PaymentTypeFindUniqueOrThrowArgs = PaymentTypeFindUniqueArgsBase
      

  /**
   * PaymentType: findFirstOrThrow
   */
  export type PaymentTypeFindFirstOrThrowArgs = PaymentTypeFindFirstArgsBase
      

  /**
   * PaymentType without action
   */
  export type PaymentTypeArgs = {
    /**
     * Select specific fields to fetch from the PaymentType
     * 
    **/
    select?: PaymentTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentTypeInclude | null
  }



  /**
   * Model PaymentMethod
   */


  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    paymentMethodId: number | null
    enrollmentId: number | null
    paymentTypeId: number | null
    expiryMonth: number | null
    expiryYear: number | null
    transactionCount: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    paymentMethodId: number | null
    enrollmentId: number | null
    paymentTypeId: number | null
    expiryMonth: number | null
    expiryYear: number | null
    transactionCount: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    paymentMethodId: number | null
    enrollmentId: number | null
    paymentTypeId: number | null
    primary: boolean | null
    paysafeProfileId: string | null
    paysafeCardId: string | null
    paysafePaymentToken: string | null
    paysafeCompany: PaysafeCompany | null
    pan: string | null
    expiryMonth: number | null
    expiryYear: number | null
    deleted: boolean | null
    notified: boolean | null
    disabled: boolean | null
    transactionCount: number | null
    created: Date | null
    modified: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    paymentMethodId: number | null
    enrollmentId: number | null
    paymentTypeId: number | null
    primary: boolean | null
    paysafeProfileId: string | null
    paysafeCardId: string | null
    paysafePaymentToken: string | null
    paysafeCompany: PaysafeCompany | null
    pan: string | null
    expiryMonth: number | null
    expiryYear: number | null
    deleted: boolean | null
    notified: boolean | null
    disabled: boolean | null
    transactionCount: number | null
    created: Date | null
    modified: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    paymentMethodId: number
    enrollmentId: number
    paymentTypeId: number
    primary: number
    paysafeProfileId: number
    paysafeCardId: number
    paysafePaymentToken: number
    paysafeCompany: number
    pan: number
    expiryMonth: number
    expiryYear: number
    deleted: number
    notified: number
    disabled: number
    transactionCount: number
    created: number
    modified: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    paymentMethodId?: true
    enrollmentId?: true
    paymentTypeId?: true
    expiryMonth?: true
    expiryYear?: true
    transactionCount?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    paymentMethodId?: true
    enrollmentId?: true
    paymentTypeId?: true
    expiryMonth?: true
    expiryYear?: true
    transactionCount?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    paymentMethodId?: true
    enrollmentId?: true
    paymentTypeId?: true
    primary?: true
    paysafeProfileId?: true
    paysafeCardId?: true
    paysafePaymentToken?: true
    paysafeCompany?: true
    pan?: true
    expiryMonth?: true
    expiryYear?: true
    deleted?: true
    notified?: true
    disabled?: true
    transactionCount?: true
    created?: true
    modified?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    paymentMethodId?: true
    enrollmentId?: true
    paymentTypeId?: true
    primary?: true
    paysafeProfileId?: true
    paysafeCardId?: true
    paysafePaymentToken?: true
    paysafeCompany?: true
    pan?: true
    expiryMonth?: true
    expiryYear?: true
    deleted?: true
    notified?: true
    disabled?: true
    transactionCount?: true
    created?: true
    modified?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    paymentMethodId?: true
    enrollmentId?: true
    paymentTypeId?: true
    primary?: true
    paysafeProfileId?: true
    paysafeCardId?: true
    paysafePaymentToken?: true
    paysafeCompany?: true
    pan?: true
    expiryMonth?: true
    expiryYear?: true
    deleted?: true
    notified?: true
    disabled?: true
    transactionCount?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs = {
    /**
     * Filter which PaymentMethod to aggregate.
     * 
    **/
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs = {
    where?: PaymentMethodWhereInput
    orderBy?: Enumerable<PaymentMethodOrderByWithAggregationInput>
    by: Array<PaymentMethodScalarFieldEnum>
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }


  export type PaymentMethodGroupByOutputType = {
    paymentMethodId: number
    enrollmentId: number | null
    paymentTypeId: number
    primary: boolean
    paysafeProfileId: string | null
    paysafeCardId: string | null
    paysafePaymentToken: string | null
    paysafeCompany: PaysafeCompany | null
    pan: string | null
    expiryMonth: number | null
    expiryYear: number | null
    deleted: boolean
    notified: boolean
    disabled: boolean
    transactionCount: number
    created: Date
    modified: Date | null
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect = {
    paymentMethodId?: boolean
    enrollmentId?: boolean
    paymentTypeId?: boolean
    primary?: boolean
    paysafeProfileId?: boolean
    paysafeCardId?: boolean
    paysafePaymentToken?: boolean
    paysafeCompany?: boolean
    pan?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: boolean
    created?: boolean
    modified?: boolean
    enrollment?: boolean | EnrollmentArgs
    paymentType?: boolean | PaymentTypeArgs
    transactions?: boolean | TransactionFindManyArgs
    _count?: boolean | PaymentMethodCountOutputTypeArgs
  }

  export type PaymentMethodInclude = {
    enrollment?: boolean | EnrollmentArgs
    paymentType?: boolean | PaymentTypeArgs
    transactions?: boolean | TransactionFindManyArgs
    _count?: boolean | PaymentMethodCountOutputTypeArgs
  }

  export type PaymentMethodGetPayload<
    S extends boolean | null | undefined | PaymentMethodArgs,
    U = keyof S
      > = S extends true
        ? PaymentMethod
    : S extends undefined
    ? never
    : S extends PaymentMethodArgs | PaymentMethodFindManyArgs
    ?'include' extends U
    ? PaymentMethod  & {
    [P in TrueKeys<S['include']>]:
        P extends 'enrollment' ? EnrollmentGetPayload<S['include'][P]> | null :
        P extends 'paymentType' ? PaymentTypeGetPayload<S['include'][P]> :
        P extends 'transactions' ? Array < TransactionGetPayload<S['include'][P]>>  :
        P extends '_count' ? PaymentMethodCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'enrollment' ? EnrollmentGetPayload<S['select'][P]> | null :
        P extends 'paymentType' ? PaymentTypeGetPayload<S['select'][P]> :
        P extends 'transactions' ? Array < TransactionGetPayload<S['select'][P]>>  :
        P extends '_count' ? PaymentMethodCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PaymentMethod ? PaymentMethod[P] : never
  } 
    : PaymentMethod
  : PaymentMethod


  type PaymentMethodCountArgs = Merge<
    Omit<PaymentMethodFindManyArgs, 'select' | 'include'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }
  >

  export interface PaymentMethodDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentMethodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentMethodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PaymentMethod'> extends True ? CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>> : CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod | null >, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T> | null >>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentMethodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentMethodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PaymentMethod'> extends True ? CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>> : CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod | null >, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T> | null >>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `paymentMethodId`
     * const paymentMethodWithPaymentMethodIdOnly = await prisma.paymentMethod.findMany({ select: { paymentMethodId: true } })
     * 
    **/
    findMany<T extends PaymentMethodFindManyArgs>(
      args?: SelectSubset<T, PaymentMethodFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PaymentMethod>>, PrismaPromise<Array<PaymentMethodGetPayload<T>>>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
    **/
    create<T extends PaymentMethodCreateArgs>(
      args: SelectSubset<T, PaymentMethodCreateArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Create many PaymentMethods.
     *     @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     *     @example
     *     // Create many PaymentMethods
     *     const paymentMethod = await prisma.paymentMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentMethodCreateManyArgs>(
      args?: SelectSubset<T, PaymentMethodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
    **/
    delete<T extends PaymentMethodDeleteArgs>(
      args: SelectSubset<T, PaymentMethodDeleteArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentMethodUpdateArgs>(
      args: SelectSubset<T, PaymentMethodUpdateArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentMethodDeleteManyArgs>(
      args?: SelectSubset<T, PaymentMethodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentMethodUpdateManyArgs>(
      args: SelectSubset<T, PaymentMethodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentMethodUpsertArgs>(
      args: SelectSubset<T, PaymentMethodUpsertArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Find one PaymentMethod that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod>, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T>>>

    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentMethodClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    enrollment<T extends EnrollmentArgs = {}>(args?: Subset<T, EnrollmentArgs>): CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>;

    paymentType<T extends PaymentTypeArgs = {}>(args?: Subset<T, PaymentTypeArgs>): CheckSelect<T, Prisma__PaymentTypeClient<PaymentType | null >, Prisma__PaymentTypeClient<PaymentTypeGetPayload<T> | null >>;

    transactions<T extends TransactionFindManyArgs = {}>(args?: Subset<T, TransactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Transaction>>, PrismaPromise<Array<TransactionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PaymentMethod base type for findUnique actions
   */
  export type PaymentMethodFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * Filter, which PaymentMethod to fetch.
     * 
    **/
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod: findUnique
   */
  export interface PaymentMethodFindUniqueArgs extends PaymentMethodFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentMethod base type for findFirst actions
   */
  export type PaymentMethodFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * Filter, which PaymentMethod to fetch.
     * 
    **/
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     * 
    **/
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     * 
    **/
    distinct?: Enumerable<PaymentMethodScalarFieldEnum>
  }

  /**
   * PaymentMethod: findFirst
   */
  export interface PaymentMethodFindFirstArgs extends PaymentMethodFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * Filter, which PaymentMethods to fetch.
     * 
    **/
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     * 
    **/
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PaymentMethodScalarFieldEnum>
  }


  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * The data needed to create a PaymentMethod.
     * 
    **/
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }


  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs = {
    /**
     * The data used to create many PaymentMethods.
     * 
    **/
    data: Enumerable<PaymentMethodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * The data needed to update a PaymentMethod.
     * 
    **/
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     * 
    **/
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs = {
    /**
     * The data used to update PaymentMethods.
     * 
    **/
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     * 
    **/
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     * 
    **/
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     * 
    **/
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }


  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
    /**
     * Filter which PaymentMethod to delete.
     * 
    **/
    where: PaymentMethodWhereUniqueInput
  }


  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs = {
    /**
     * Filter which PaymentMethods to delete
     * 
    **/
    where?: PaymentMethodWhereInput
  }


  /**
   * PaymentMethod: findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs = PaymentMethodFindUniqueArgsBase
      

  /**
   * PaymentMethod: findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs = PaymentMethodFindFirstArgsBase
      

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodArgs = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     * 
    **/
    select?: PaymentMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentMethodInclude | null
  }



  /**
   * Model Transaction
   */


  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transactionId: number | null
    enrollmentId: number | null
    paymentMethodId: number | null
    userId: number | null
    parentId: number | null
    amount: Decimal | null
    attemptedAmount: Decimal | null
    usdAmount: Decimal | null
    refund: Decimal | null
    chargeback: Decimal | null
    responseCode: number | null
    severity: number | null
  }

  export type TransactionSumAggregateOutputType = {
    transactionId: number | null
    enrollmentId: number | null
    paymentMethodId: number | null
    userId: number | null
    parentId: number | null
    amount: Decimal | null
    attemptedAmount: Decimal | null
    usdAmount: Decimal | null
    refund: Decimal | null
    chargeback: Decimal | null
    responseCode: number | null
    severity: number | null
  }

  export type TransactionMinAggregateOutputType = {
    transactionId: number | null
    enrollmentId: number | null
    paymentMethodId: number | null
    userId: number | null
    parentId: number | null
    transactionDate: Date | null
    transactionTime: Date | null
    amount: Decimal | null
    attemptedAmount: Decimal | null
    usdAmount: Decimal | null
    refund: Decimal | null
    chargeback: Decimal | null
    orderId: string | null
    responseCode: number | null
    authCode: string | null
    referenceNumber: string | null
    settlementId: string | null
    transactionNumber: string | null
    response: string | null
    description: string | null
    posted: boolean | null
    postedDate: Date | null
    notified: boolean | null
    extraCharge: boolean | null
    auto: boolean | null
    reattempt: boolean | null
    transactionType: TransactionType | null
    voided: boolean | null
    notes: string | null
    severity: number | null
    created: Date | null
    modified: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    transactionId: number | null
    enrollmentId: number | null
    paymentMethodId: number | null
    userId: number | null
    parentId: number | null
    transactionDate: Date | null
    transactionTime: Date | null
    amount: Decimal | null
    attemptedAmount: Decimal | null
    usdAmount: Decimal | null
    refund: Decimal | null
    chargeback: Decimal | null
    orderId: string | null
    responseCode: number | null
    authCode: string | null
    referenceNumber: string | null
    settlementId: string | null
    transactionNumber: string | null
    response: string | null
    description: string | null
    posted: boolean | null
    postedDate: Date | null
    notified: boolean | null
    extraCharge: boolean | null
    auto: boolean | null
    reattempt: boolean | null
    transactionType: TransactionType | null
    voided: boolean | null
    notes: string | null
    severity: number | null
    created: Date | null
    modified: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    transactionId: number
    enrollmentId: number
    paymentMethodId: number
    userId: number
    parentId: number
    transactionDate: number
    transactionTime: number
    amount: number
    attemptedAmount: number
    usdAmount: number
    refund: number
    chargeback: number
    orderId: number
    responseCode: number
    authCode: number
    referenceNumber: number
    settlementId: number
    transactionNumber: number
    response: number
    description: number
    posted: number
    postedDate: number
    notified: number
    extraCharge: number
    auto: number
    reattempt: number
    transactionType: number
    voided: number
    notes: number
    severity: number
    created: number
    modified: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transactionId?: true
    enrollmentId?: true
    paymentMethodId?: true
    userId?: true
    parentId?: true
    amount?: true
    attemptedAmount?: true
    usdAmount?: true
    refund?: true
    chargeback?: true
    responseCode?: true
    severity?: true
  }

  export type TransactionSumAggregateInputType = {
    transactionId?: true
    enrollmentId?: true
    paymentMethodId?: true
    userId?: true
    parentId?: true
    amount?: true
    attemptedAmount?: true
    usdAmount?: true
    refund?: true
    chargeback?: true
    responseCode?: true
    severity?: true
  }

  export type TransactionMinAggregateInputType = {
    transactionId?: true
    enrollmentId?: true
    paymentMethodId?: true
    userId?: true
    parentId?: true
    transactionDate?: true
    transactionTime?: true
    amount?: true
    attemptedAmount?: true
    usdAmount?: true
    refund?: true
    chargeback?: true
    orderId?: true
    responseCode?: true
    authCode?: true
    referenceNumber?: true
    settlementId?: true
    transactionNumber?: true
    response?: true
    description?: true
    posted?: true
    postedDate?: true
    notified?: true
    extraCharge?: true
    auto?: true
    reattempt?: true
    transactionType?: true
    voided?: true
    notes?: true
    severity?: true
    created?: true
    modified?: true
  }

  export type TransactionMaxAggregateInputType = {
    transactionId?: true
    enrollmentId?: true
    paymentMethodId?: true
    userId?: true
    parentId?: true
    transactionDate?: true
    transactionTime?: true
    amount?: true
    attemptedAmount?: true
    usdAmount?: true
    refund?: true
    chargeback?: true
    orderId?: true
    responseCode?: true
    authCode?: true
    referenceNumber?: true
    settlementId?: true
    transactionNumber?: true
    response?: true
    description?: true
    posted?: true
    postedDate?: true
    notified?: true
    extraCharge?: true
    auto?: true
    reattempt?: true
    transactionType?: true
    voided?: true
    notes?: true
    severity?: true
    created?: true
    modified?: true
  }

  export type TransactionCountAggregateInputType = {
    transactionId?: true
    enrollmentId?: true
    paymentMethodId?: true
    userId?: true
    parentId?: true
    transactionDate?: true
    transactionTime?: true
    amount?: true
    attemptedAmount?: true
    usdAmount?: true
    refund?: true
    chargeback?: true
    orderId?: true
    responseCode?: true
    authCode?: true
    referenceNumber?: true
    settlementId?: true
    transactionNumber?: true
    response?: true
    description?: true
    posted?: true
    postedDate?: true
    notified?: true
    extraCharge?: true
    auto?: true
    reattempt?: true
    transactionType?: true
    voided?: true
    notes?: true
    severity?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type TransactionAggregateArgs = {
    /**
     * Filter which Transaction to aggregate.
     * 
    **/
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs = {
    where?: TransactionWhereInput
    orderBy?: Enumerable<TransactionOrderByWithAggregationInput>
    by: Array<TransactionScalarFieldEnum>
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }


  export type TransactionGroupByOutputType = {
    transactionId: number
    enrollmentId: number
    paymentMethodId: number | null
    userId: number | null
    parentId: number | null
    transactionDate: Date
    transactionTime: Date | null
    amount: Decimal
    attemptedAmount: Decimal
    usdAmount: Decimal | null
    refund: Decimal
    chargeback: Decimal
    orderId: string | null
    responseCode: number | null
    authCode: string | null
    referenceNumber: string | null
    settlementId: string | null
    transactionNumber: string | null
    response: string | null
    description: string | null
    posted: boolean | null
    postedDate: Date | null
    notified: boolean | null
    extraCharge: boolean
    auto: boolean
    reattempt: boolean
    transactionType: TransactionType
    voided: boolean
    notes: string | null
    severity: number | null
    created: Date
    modified: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect = {
    transactionId?: boolean
    enrollmentId?: boolean
    paymentMethodId?: boolean
    userId?: boolean
    parentId?: boolean
    transactionDate?: boolean
    transactionTime?: boolean
    amount?: boolean
    attemptedAmount?: boolean
    usdAmount?: boolean
    refund?: boolean
    chargeback?: boolean
    orderId?: boolean
    responseCode?: boolean
    authCode?: boolean
    referenceNumber?: boolean
    settlementId?: boolean
    transactionNumber?: boolean
    response?: boolean
    description?: boolean
    posted?: boolean
    postedDate?: boolean
    notified?: boolean
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: boolean
    voided?: boolean
    notes?: boolean
    severity?: boolean
    created?: boolean
    modified?: boolean
    enrollment?: boolean | EnrollmentArgs
    paymentMethod?: boolean | PaymentMethodArgs
    user?: boolean | UserArgs
    parent?: boolean | TransactionArgs
    children?: boolean | TransactionFindManyArgs
    _count?: boolean | TransactionCountOutputTypeArgs
  }

  export type TransactionInclude = {
    enrollment?: boolean | EnrollmentArgs
    paymentMethod?: boolean | PaymentMethodArgs
    user?: boolean | UserArgs
    parent?: boolean | TransactionArgs
    children?: boolean | TransactionFindManyArgs
    _count?: boolean | TransactionCountOutputTypeArgs
  }

  export type TransactionGetPayload<
    S extends boolean | null | undefined | TransactionArgs,
    U = keyof S
      > = S extends true
        ? Transaction
    : S extends undefined
    ? never
    : S extends TransactionArgs | TransactionFindManyArgs
    ?'include' extends U
    ? Transaction  & {
    [P in TrueKeys<S['include']>]:
        P extends 'enrollment' ? EnrollmentGetPayload<S['include'][P]> :
        P extends 'paymentMethod' ? PaymentMethodGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'parent' ? TransactionGetPayload<S['include'][P]> | null :
        P extends 'children' ? Array < TransactionGetPayload<S['include'][P]>>  :
        P extends '_count' ? TransactionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'enrollment' ? EnrollmentGetPayload<S['select'][P]> :
        P extends 'paymentMethod' ? PaymentMethodGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'parent' ? TransactionGetPayload<S['select'][P]> | null :
        P extends 'children' ? Array < TransactionGetPayload<S['select'][P]>>  :
        P extends '_count' ? TransactionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Transaction ? Transaction[P] : never
  } 
    : Transaction
  : Transaction


  type TransactionCountArgs = Merge<
    Omit<TransactionFindManyArgs, 'select' | 'include'> & {
      select?: TransactionCountAggregateInputType | true
    }
  >

  export interface TransactionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransactionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Transaction'> extends True ? CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>> : CheckSelect<T, Prisma__TransactionClient<Transaction | null >, Prisma__TransactionClient<TransactionGetPayload<T> | null >>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransactionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Transaction'> extends True ? CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>> : CheckSelect<T, Prisma__TransactionClient<Transaction | null >, Prisma__TransactionClient<TransactionGetPayload<T> | null >>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const transactionWithTransactionIdOnly = await prisma.transaction.findMany({ select: { transactionId: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs>(
      args?: SelectSubset<T, TransactionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Transaction>>, PrismaPromise<Array<TransactionGetPayload<T>>>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs>(
      args: SelectSubset<T, TransactionCreateArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs>(
      args?: SelectSubset<T, TransactionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs>(
      args: SelectSubset<T, TransactionDeleteArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs>(
      args: SelectSubset<T, TransactionUpdateArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs>(
      args?: SelectSubset<T, TransactionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs>(
      args: SelectSubset<T, TransactionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs>(
      args: SelectSubset<T, TransactionUpsertArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Find one Transaction that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Find the first Transaction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TransactionClient<Transaction>, Prisma__TransactionClient<TransactionGetPayload<T>>>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransactionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    enrollment<T extends EnrollmentArgs = {}>(args?: Subset<T, EnrollmentArgs>): CheckSelect<T, Prisma__EnrollmentClient<Enrollment | null >, Prisma__EnrollmentClient<EnrollmentGetPayload<T> | null >>;

    paymentMethod<T extends PaymentMethodArgs = {}>(args?: Subset<T, PaymentMethodArgs>): CheckSelect<T, Prisma__PaymentMethodClient<PaymentMethod | null >, Prisma__PaymentMethodClient<PaymentMethodGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    parent<T extends TransactionArgs = {}>(args?: Subset<T, TransactionArgs>): CheckSelect<T, Prisma__TransactionClient<Transaction | null >, Prisma__TransactionClient<TransactionGetPayload<T> | null >>;

    children<T extends TransactionFindManyArgs = {}>(args?: Subset<T, TransactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Transaction>>, PrismaPromise<Array<TransactionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Transaction base type for findUnique actions
   */
  export type TransactionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * Filter, which Transaction to fetch.
     * 
    **/
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction: findUnique
   */
  export interface TransactionFindUniqueArgs extends TransactionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Transaction base type for findFirst actions
   */
  export type TransactionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * Filter, which Transaction to fetch.
     * 
    **/
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     * 
    **/
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     * 
    **/
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }

  /**
   * Transaction: findFirst
   */
  export interface TransactionFindFirstArgs extends TransactionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * Filter, which Transactions to fetch.
     * 
    **/
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     * 
    **/
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransactionScalarFieldEnum>
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * The data needed to create a Transaction.
     * 
    **/
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs = {
    /**
     * The data used to create many Transactions.
     * 
    **/
    data: Enumerable<TransactionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * The data needed to update a Transaction.
     * 
    **/
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     * 
    **/
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs = {
    /**
     * The data used to update Transactions.
     * 
    **/
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     * 
    **/
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     * 
    **/
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     * 
    **/
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
    /**
     * Filter which Transaction to delete.
     * 
    **/
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs = {
    /**
     * Filter which Transactions to delete
     * 
    **/
    where?: TransactionWhereInput
  }


  /**
   * Transaction: findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs = TransactionFindUniqueArgsBase
      

  /**
   * Transaction: findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs = TransactionFindFirstArgsBase
      

  /**
   * Transaction without action
   */
  export type TransactionArgs = {
    /**
     * Select specific fields to fetch from the Transaction
     * 
    **/
    select?: TransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransactionInclude | null
  }



  /**
   * Model RefreshToken
   */


  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    studentId: number | null
    userId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    studentId: number | null
    userId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    refreshTokenId: Buffer | null
    studentId: number | null
    userId: number | null
    token: Buffer | null
    expiry: Date | null
    ipAddress: Buffer | null
    browser: string | null
    browserVersion: string | null
    mobile: boolean | null
    os: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    refreshTokenId: Buffer | null
    studentId: number | null
    userId: number | null
    token: Buffer | null
    expiry: Date | null
    ipAddress: Buffer | null
    browser: string | null
    browserVersion: string | null
    mobile: boolean | null
    os: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created: Date | null
    modified: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    refreshTokenId: number
    studentId: number
    userId: number
    token: number
    expiry: number
    ipAddress: number
    browser: number
    browserVersion: number
    mobile: number
    os: number
    city: number
    country: number
    latitude: number
    longitude: number
    created: number
    modified: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    studentId?: true
    userId?: true
    latitude?: true
    longitude?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    studentId?: true
    userId?: true
    latitude?: true
    longitude?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    refreshTokenId?: true
    studentId?: true
    userId?: true
    token?: true
    expiry?: true
    ipAddress?: true
    browser?: true
    browserVersion?: true
    mobile?: true
    os?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    created?: true
    modified?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    refreshTokenId?: true
    studentId?: true
    userId?: true
    token?: true
    expiry?: true
    ipAddress?: true
    browser?: true
    browserVersion?: true
    mobile?: true
    os?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    created?: true
    modified?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    refreshTokenId?: true
    studentId?: true
    userId?: true
    token?: true
    expiry?: true
    ipAddress?: true
    browser?: true
    browserVersion?: true
    mobile?: true
    os?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs = {
    /**
     * Filter which RefreshToken to aggregate.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs = {
    where?: RefreshTokenWhereInput
    orderBy?: Enumerable<RefreshTokenOrderByWithAggregationInput>
    by: Array<RefreshTokenScalarFieldEnum>
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }


  export type RefreshTokenGroupByOutputType = {
    refreshTokenId: Buffer
    studentId: number | null
    userId: number | null
    token: Buffer
    expiry: Date
    ipAddress: Buffer | null
    browser: string | null
    browserVersion: string | null
    mobile: boolean | null
    os: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    created: Date
    modified: Date | null
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect = {
    refreshTokenId?: boolean
    studentId?: boolean
    userId?: boolean
    token?: boolean
    expiry?: boolean
    ipAddress?: boolean
    browser?: boolean
    browserVersion?: boolean
    mobile?: boolean
    os?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    created?: boolean
    modified?: boolean
    student?: boolean | StudentArgs
    user?: boolean | UserArgs
  }

  export type RefreshTokenInclude = {
    student?: boolean | StudentArgs
    user?: boolean | UserArgs
  }

  export type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenArgs,
    U = keyof S
      > = S extends true
        ? RefreshToken
    : S extends undefined
    ? never
    : S extends RefreshTokenArgs | RefreshTokenFindManyArgs
    ?'include' extends U
    ? RefreshToken  & {
    [P in TrueKeys<S['include']>]:
        P extends 'student' ? StudentGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'student' ? StudentGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof RefreshToken ? RefreshToken[P] : never
  } 
    : RefreshToken
  : RefreshToken


  type RefreshTokenCountArgs = Merge<
    Omit<RefreshTokenFindManyArgs, 'select' | 'include'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }
  >

  export interface RefreshTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RefreshToken'> extends True ? CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken | null >, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null >>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RefreshToken'> extends True ? CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>> : CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken | null >, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T> | null >>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `refreshTokenId`
     * const refreshTokenWithRefreshTokenIdOnly = await prisma.refreshToken.findMany({ select: { refreshTokenId: true } })
     * 
    **/
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RefreshToken>>, PrismaPromise<Array<RefreshTokenGetPayload<T>>>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
    **/
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Create many RefreshTokens.
     *     @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     *     @example
     *     // Create many RefreshTokens
     *     const refreshToken = await prisma.refreshToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
    **/
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Find one RefreshToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshTokenClient<RefreshToken>, Prisma__RefreshTokenClient<RefreshTokenGetPayload<T>>>

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefreshTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RefreshToken base type for findUnique actions
   */
  export type RefreshTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken: findUnique
   */
  export interface RefreshTokenFindUniqueArgs extends RefreshTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken base type for findFirst actions
   */
  export type RefreshTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshToken to fetch.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     * 
    **/
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }

  /**
   * RefreshToken: findFirst
   */
  export interface RefreshTokenFindFirstArgs extends RefreshTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter, which RefreshTokens to fetch.
     * 
    **/
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     * 
    **/
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RefreshTokenScalarFieldEnum>
  }


  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The data needed to create a RefreshToken.
     * 
    **/
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }


  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs = {
    /**
     * The data used to create many RefreshTokens.
     * 
    **/
    data: Enumerable<RefreshTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The data needed to update a RefreshToken.
     * 
    **/
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs = {
    /**
     * The data used to update RefreshTokens.
     * 
    **/
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     * 
    **/
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     * 
    **/
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }


  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
    /**
     * Filter which RefreshToken to delete.
     * 
    **/
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs = {
    /**
     * Filter which RefreshTokens to delete
     * 
    **/
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken: findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs = RefreshTokenFindUniqueArgsBase
      

  /**
   * RefreshToken: findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs = RefreshTokenFindFirstArgsBase
      

  /**
   * RefreshToken without action
   */
  export type RefreshTokenArgs = {
    /**
     * Select specific fields to fetch from the RefreshToken
     * 
    **/
    select?: RefreshTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshTokenInclude | null
  }



  /**
   * Model TelephoneCountryCode
   */


  export type AggregateTelephoneCountryCode = {
    _count: TelephoneCountryCodeCountAggregateOutputType | null
    _avg: TelephoneCountryCodeAvgAggregateOutputType | null
    _sum: TelephoneCountryCodeSumAggregateOutputType | null
    _min: TelephoneCountryCodeMinAggregateOutputType | null
    _max: TelephoneCountryCodeMaxAggregateOutputType | null
  }

  export type TelephoneCountryCodeAvgAggregateOutputType = {
    telephoneCountryCodeId: number | null
    code: number | null
  }

  export type TelephoneCountryCodeSumAggregateOutputType = {
    telephoneCountryCodeId: number | null
    code: number | null
  }

  export type TelephoneCountryCodeMinAggregateOutputType = {
    telephoneCountryCodeId: number | null
    code: number | null
    region: string | null
  }

  export type TelephoneCountryCodeMaxAggregateOutputType = {
    telephoneCountryCodeId: number | null
    code: number | null
    region: string | null
  }

  export type TelephoneCountryCodeCountAggregateOutputType = {
    telephoneCountryCodeId: number
    code: number
    region: number
    _all: number
  }


  export type TelephoneCountryCodeAvgAggregateInputType = {
    telephoneCountryCodeId?: true
    code?: true
  }

  export type TelephoneCountryCodeSumAggregateInputType = {
    telephoneCountryCodeId?: true
    code?: true
  }

  export type TelephoneCountryCodeMinAggregateInputType = {
    telephoneCountryCodeId?: true
    code?: true
    region?: true
  }

  export type TelephoneCountryCodeMaxAggregateInputType = {
    telephoneCountryCodeId?: true
    code?: true
    region?: true
  }

  export type TelephoneCountryCodeCountAggregateInputType = {
    telephoneCountryCodeId?: true
    code?: true
    region?: true
    _all?: true
  }

  export type TelephoneCountryCodeAggregateArgs = {
    /**
     * Filter which TelephoneCountryCode to aggregate.
     * 
    **/
    where?: TelephoneCountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelephoneCountryCodes to fetch.
     * 
    **/
    orderBy?: Enumerable<TelephoneCountryCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TelephoneCountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelephoneCountryCodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelephoneCountryCodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelephoneCountryCodes
    **/
    _count?: true | TelephoneCountryCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelephoneCountryCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelephoneCountryCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelephoneCountryCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelephoneCountryCodeMaxAggregateInputType
  }

  export type GetTelephoneCountryCodeAggregateType<T extends TelephoneCountryCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateTelephoneCountryCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelephoneCountryCode[P]>
      : GetScalarType<T[P], AggregateTelephoneCountryCode[P]>
  }




  export type TelephoneCountryCodeGroupByArgs = {
    where?: TelephoneCountryCodeWhereInput
    orderBy?: Enumerable<TelephoneCountryCodeOrderByWithAggregationInput>
    by: Array<TelephoneCountryCodeScalarFieldEnum>
    having?: TelephoneCountryCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelephoneCountryCodeCountAggregateInputType | true
    _avg?: TelephoneCountryCodeAvgAggregateInputType
    _sum?: TelephoneCountryCodeSumAggregateInputType
    _min?: TelephoneCountryCodeMinAggregateInputType
    _max?: TelephoneCountryCodeMaxAggregateInputType
  }


  export type TelephoneCountryCodeGroupByOutputType = {
    telephoneCountryCodeId: number
    code: number
    region: string
    _count: TelephoneCountryCodeCountAggregateOutputType | null
    _avg: TelephoneCountryCodeAvgAggregateOutputType | null
    _sum: TelephoneCountryCodeSumAggregateOutputType | null
    _min: TelephoneCountryCodeMinAggregateOutputType | null
    _max: TelephoneCountryCodeMaxAggregateOutputType | null
  }

  type GetTelephoneCountryCodeGroupByPayload<T extends TelephoneCountryCodeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TelephoneCountryCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelephoneCountryCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelephoneCountryCodeGroupByOutputType[P]>
            : GetScalarType<T[P], TelephoneCountryCodeGroupByOutputType[P]>
        }
      >
    >


  export type TelephoneCountryCodeSelect = {
    telephoneCountryCodeId?: boolean
    code?: boolean
    region?: boolean
  }

  export type TelephoneCountryCodeGetPayload<
    S extends boolean | null | undefined | TelephoneCountryCodeArgs,
    U = keyof S
      > = S extends true
        ? TelephoneCountryCode
    : S extends undefined
    ? never
    : S extends TelephoneCountryCodeArgs | TelephoneCountryCodeFindManyArgs
    ?'include' extends U
    ? TelephoneCountryCode 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TelephoneCountryCode ? TelephoneCountryCode[P] : never
  } 
    : TelephoneCountryCode
  : TelephoneCountryCode


  type TelephoneCountryCodeCountArgs = Merge<
    Omit<TelephoneCountryCodeFindManyArgs, 'select' | 'include'> & {
      select?: TelephoneCountryCodeCountAggregateInputType | true
    }
  >

  export interface TelephoneCountryCodeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TelephoneCountryCode that matches the filter.
     * @param {TelephoneCountryCodeFindUniqueArgs} args - Arguments to find a TelephoneCountryCode
     * @example
     * // Get one TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TelephoneCountryCodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TelephoneCountryCodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TelephoneCountryCode'> extends True ? CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>> : CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode | null >, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T> | null >>

    /**
     * Find the first TelephoneCountryCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeFindFirstArgs} args - Arguments to find a TelephoneCountryCode
     * @example
     * // Get one TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TelephoneCountryCodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TelephoneCountryCodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TelephoneCountryCode'> extends True ? CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>> : CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode | null >, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T> | null >>

    /**
     * Find zero or more TelephoneCountryCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelephoneCountryCodes
     * const telephoneCountryCodes = await prisma.telephoneCountryCode.findMany()
     * 
     * // Get first 10 TelephoneCountryCodes
     * const telephoneCountryCodes = await prisma.telephoneCountryCode.findMany({ take: 10 })
     * 
     * // Only select the `telephoneCountryCodeId`
     * const telephoneCountryCodeWithTelephoneCountryCodeIdOnly = await prisma.telephoneCountryCode.findMany({ select: { telephoneCountryCodeId: true } })
     * 
    **/
    findMany<T extends TelephoneCountryCodeFindManyArgs>(
      args?: SelectSubset<T, TelephoneCountryCodeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TelephoneCountryCode>>, PrismaPromise<Array<TelephoneCountryCodeGetPayload<T>>>>

    /**
     * Create a TelephoneCountryCode.
     * @param {TelephoneCountryCodeCreateArgs} args - Arguments to create a TelephoneCountryCode.
     * @example
     * // Create one TelephoneCountryCode
     * const TelephoneCountryCode = await prisma.telephoneCountryCode.create({
     *   data: {
     *     // ... data to create a TelephoneCountryCode
     *   }
     * })
     * 
    **/
    create<T extends TelephoneCountryCodeCreateArgs>(
      args: SelectSubset<T, TelephoneCountryCodeCreateArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Create many TelephoneCountryCodes.
     *     @param {TelephoneCountryCodeCreateManyArgs} args - Arguments to create many TelephoneCountryCodes.
     *     @example
     *     // Create many TelephoneCountryCodes
     *     const telephoneCountryCode = await prisma.telephoneCountryCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TelephoneCountryCodeCreateManyArgs>(
      args?: SelectSubset<T, TelephoneCountryCodeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TelephoneCountryCode.
     * @param {TelephoneCountryCodeDeleteArgs} args - Arguments to delete one TelephoneCountryCode.
     * @example
     * // Delete one TelephoneCountryCode
     * const TelephoneCountryCode = await prisma.telephoneCountryCode.delete({
     *   where: {
     *     // ... filter to delete one TelephoneCountryCode
     *   }
     * })
     * 
    **/
    delete<T extends TelephoneCountryCodeDeleteArgs>(
      args: SelectSubset<T, TelephoneCountryCodeDeleteArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Update one TelephoneCountryCode.
     * @param {TelephoneCountryCodeUpdateArgs} args - Arguments to update one TelephoneCountryCode.
     * @example
     * // Update one TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TelephoneCountryCodeUpdateArgs>(
      args: SelectSubset<T, TelephoneCountryCodeUpdateArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Delete zero or more TelephoneCountryCodes.
     * @param {TelephoneCountryCodeDeleteManyArgs} args - Arguments to filter TelephoneCountryCodes to delete.
     * @example
     * // Delete a few TelephoneCountryCodes
     * const { count } = await prisma.telephoneCountryCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TelephoneCountryCodeDeleteManyArgs>(
      args?: SelectSubset<T, TelephoneCountryCodeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelephoneCountryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelephoneCountryCodes
     * const telephoneCountryCode = await prisma.telephoneCountryCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TelephoneCountryCodeUpdateManyArgs>(
      args: SelectSubset<T, TelephoneCountryCodeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TelephoneCountryCode.
     * @param {TelephoneCountryCodeUpsertArgs} args - Arguments to update or create a TelephoneCountryCode.
     * @example
     * // Update or create a TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.upsert({
     *   create: {
     *     // ... data to create a TelephoneCountryCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelephoneCountryCode we want to update
     *   }
     * })
    **/
    upsert<T extends TelephoneCountryCodeUpsertArgs>(
      args: SelectSubset<T, TelephoneCountryCodeUpsertArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Find one TelephoneCountryCode that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TelephoneCountryCodeFindUniqueOrThrowArgs} args - Arguments to find a TelephoneCountryCode
     * @example
     * // Get one TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TelephoneCountryCodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TelephoneCountryCodeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Find the first TelephoneCountryCode that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeFindFirstOrThrowArgs} args - Arguments to find a TelephoneCountryCode
     * @example
     * // Get one TelephoneCountryCode
     * const telephoneCountryCode = await prisma.telephoneCountryCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TelephoneCountryCodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TelephoneCountryCodeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TelephoneCountryCodeClient<TelephoneCountryCode>, Prisma__TelephoneCountryCodeClient<TelephoneCountryCodeGetPayload<T>>>

    /**
     * Count the number of TelephoneCountryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeCountArgs} args - Arguments to filter TelephoneCountryCodes to count.
     * @example
     * // Count the number of TelephoneCountryCodes
     * const count = await prisma.telephoneCountryCode.count({
     *   where: {
     *     // ... the filter for the TelephoneCountryCodes we want to count
     *   }
     * })
    **/
    count<T extends TelephoneCountryCodeCountArgs>(
      args?: Subset<T, TelephoneCountryCodeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelephoneCountryCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelephoneCountryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelephoneCountryCodeAggregateArgs>(args: Subset<T, TelephoneCountryCodeAggregateArgs>): PrismaPromise<GetTelephoneCountryCodeAggregateType<T>>

    /**
     * Group by TelephoneCountryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountryCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelephoneCountryCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelephoneCountryCodeGroupByArgs['orderBy'] }
        : { orderBy?: TelephoneCountryCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelephoneCountryCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelephoneCountryCodeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelephoneCountryCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TelephoneCountryCodeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TelephoneCountryCode base type for findUnique actions
   */
  export type TelephoneCountryCodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * Filter, which TelephoneCountryCode to fetch.
     * 
    **/
    where: TelephoneCountryCodeWhereUniqueInput
  }

  /**
   * TelephoneCountryCode: findUnique
   */
  export interface TelephoneCountryCodeFindUniqueArgs extends TelephoneCountryCodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TelephoneCountryCode base type for findFirst actions
   */
  export type TelephoneCountryCodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * Filter, which TelephoneCountryCode to fetch.
     * 
    **/
    where?: TelephoneCountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelephoneCountryCodes to fetch.
     * 
    **/
    orderBy?: Enumerable<TelephoneCountryCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelephoneCountryCodes.
     * 
    **/
    cursor?: TelephoneCountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelephoneCountryCodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelephoneCountryCodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelephoneCountryCodes.
     * 
    **/
    distinct?: Enumerable<TelephoneCountryCodeScalarFieldEnum>
  }

  /**
   * TelephoneCountryCode: findFirst
   */
  export interface TelephoneCountryCodeFindFirstArgs extends TelephoneCountryCodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TelephoneCountryCode findMany
   */
  export type TelephoneCountryCodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * Filter, which TelephoneCountryCodes to fetch.
     * 
    **/
    where?: TelephoneCountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelephoneCountryCodes to fetch.
     * 
    **/
    orderBy?: Enumerable<TelephoneCountryCodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelephoneCountryCodes.
     * 
    **/
    cursor?: TelephoneCountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelephoneCountryCodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelephoneCountryCodes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TelephoneCountryCodeScalarFieldEnum>
  }


  /**
   * TelephoneCountryCode create
   */
  export type TelephoneCountryCodeCreateArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * The data needed to create a TelephoneCountryCode.
     * 
    **/
    data: XOR<TelephoneCountryCodeCreateInput, TelephoneCountryCodeUncheckedCreateInput>
  }


  /**
   * TelephoneCountryCode createMany
   */
  export type TelephoneCountryCodeCreateManyArgs = {
    /**
     * The data used to create many TelephoneCountryCodes.
     * 
    **/
    data: Enumerable<TelephoneCountryCodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TelephoneCountryCode update
   */
  export type TelephoneCountryCodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * The data needed to update a TelephoneCountryCode.
     * 
    **/
    data: XOR<TelephoneCountryCodeUpdateInput, TelephoneCountryCodeUncheckedUpdateInput>
    /**
     * Choose, which TelephoneCountryCode to update.
     * 
    **/
    where: TelephoneCountryCodeWhereUniqueInput
  }


  /**
   * TelephoneCountryCode updateMany
   */
  export type TelephoneCountryCodeUpdateManyArgs = {
    /**
     * The data used to update TelephoneCountryCodes.
     * 
    **/
    data: XOR<TelephoneCountryCodeUpdateManyMutationInput, TelephoneCountryCodeUncheckedUpdateManyInput>
    /**
     * Filter which TelephoneCountryCodes to update
     * 
    **/
    where?: TelephoneCountryCodeWhereInput
  }


  /**
   * TelephoneCountryCode upsert
   */
  export type TelephoneCountryCodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * The filter to search for the TelephoneCountryCode to update in case it exists.
     * 
    **/
    where: TelephoneCountryCodeWhereUniqueInput
    /**
     * In case the TelephoneCountryCode found by the `where` argument doesn't exist, create a new TelephoneCountryCode with this data.
     * 
    **/
    create: XOR<TelephoneCountryCodeCreateInput, TelephoneCountryCodeUncheckedCreateInput>
    /**
     * In case the TelephoneCountryCode was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TelephoneCountryCodeUpdateInput, TelephoneCountryCodeUncheckedUpdateInput>
  }


  /**
   * TelephoneCountryCode delete
   */
  export type TelephoneCountryCodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
    /**
     * Filter which TelephoneCountryCode to delete.
     * 
    **/
    where: TelephoneCountryCodeWhereUniqueInput
  }


  /**
   * TelephoneCountryCode deleteMany
   */
  export type TelephoneCountryCodeDeleteManyArgs = {
    /**
     * Filter which TelephoneCountryCodes to delete
     * 
    **/
    where?: TelephoneCountryCodeWhereInput
  }


  /**
   * TelephoneCountryCode: findUniqueOrThrow
   */
  export type TelephoneCountryCodeFindUniqueOrThrowArgs = TelephoneCountryCodeFindUniqueArgsBase
      

  /**
   * TelephoneCountryCode: findFirstOrThrow
   */
  export type TelephoneCountryCodeFindFirstOrThrowArgs = TelephoneCountryCodeFindFirstArgsBase
      

  /**
   * TelephoneCountryCode without action
   */
  export type TelephoneCountryCodeArgs = {
    /**
     * Select specific fields to fetch from the TelephoneCountryCode
     * 
    **/
    select?: TelephoneCountryCodeSelect | null
  }



  /**
   * Model Note
   */


  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    noteId: number | null
    studentId: number | null
    courseId: number | null
    userId: number | null
  }

  export type NoteSumAggregateOutputType = {
    noteId: number | null
    studentId: number | null
    courseId: number | null
    userId: number | null
  }

  export type NoteMinAggregateOutputType = {
    noteId: number | null
    studentId: number | null
    courseId: number | null
    userId: number | null
    note: string | null
    type: NoteType | null
    starred: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    noteId: number | null
    studentId: number | null
    courseId: number | null
    userId: number | null
    note: string | null
    type: NoteType | null
    starred: boolean | null
    created: Date | null
    modified: Date | null
  }

  export type NoteCountAggregateOutputType = {
    noteId: number
    studentId: number
    courseId: number
    userId: number
    note: number
    type: number
    starred: number
    created: number
    modified: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    noteId?: true
    studentId?: true
    courseId?: true
    userId?: true
  }

  export type NoteSumAggregateInputType = {
    noteId?: true
    studentId?: true
    courseId?: true
    userId?: true
  }

  export type NoteMinAggregateInputType = {
    noteId?: true
    studentId?: true
    courseId?: true
    userId?: true
    note?: true
    type?: true
    starred?: true
    created?: true
    modified?: true
  }

  export type NoteMaxAggregateInputType = {
    noteId?: true
    studentId?: true
    courseId?: true
    userId?: true
    note?: true
    type?: true
    starred?: true
    created?: true
    modified?: true
  }

  export type NoteCountAggregateInputType = {
    noteId?: true
    studentId?: true
    courseId?: true
    userId?: true
    note?: true
    type?: true
    starred?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type NoteAggregateArgs = {
    /**
     * Filter which Note to aggregate.
     * 
    **/
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     * 
    **/
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs = {
    where?: NoteWhereInput
    orderBy?: Enumerable<NoteOrderByWithAggregationInput>
    by: Array<NoteScalarFieldEnum>
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }


  export type NoteGroupByOutputType = {
    noteId: number
    studentId: number
    courseId: number | null
    userId: number | null
    note: string
    type: NoteType
    starred: boolean
    created: Date
    modified: Date | null
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect = {
    noteId?: boolean
    studentId?: boolean
    courseId?: boolean
    userId?: boolean
    note?: boolean
    type?: boolean
    starred?: boolean
    created?: boolean
    modified?: boolean
    student?: boolean | StudentArgs
    course?: boolean | CourseArgs
    user?: boolean | UserArgs
  }

  export type NoteInclude = {
    student?: boolean | StudentArgs
    course?: boolean | CourseArgs
    user?: boolean | UserArgs
  }

  export type NoteGetPayload<
    S extends boolean | null | undefined | NoteArgs,
    U = keyof S
      > = S extends true
        ? Note
    : S extends undefined
    ? never
    : S extends NoteArgs | NoteFindManyArgs
    ?'include' extends U
    ? Note  & {
    [P in TrueKeys<S['include']>]:
        P extends 'student' ? StudentGetPayload<S['include'][P]> :
        P extends 'course' ? CourseGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'student' ? StudentGetPayload<S['select'][P]> :
        P extends 'course' ? CourseGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Note ? Note[P] : never
  } 
    : Note
  : Note


  type NoteCountArgs = Merge<
    Omit<NoteFindManyArgs, 'select' | 'include'> & {
      select?: NoteCountAggregateInputType | true
    }
  >

  export interface NoteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NoteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Note'> extends True ? CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>> : CheckSelect<T, Prisma__NoteClient<Note | null >, Prisma__NoteClient<NoteGetPayload<T> | null >>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NoteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Note'> extends True ? CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>> : CheckSelect<T, Prisma__NoteClient<Note | null >, Prisma__NoteClient<NoteGetPayload<T> | null >>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.findMany({ select: { noteId: true } })
     * 
    **/
    findMany<T extends NoteFindManyArgs>(
      args?: SelectSubset<T, NoteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Note>>, PrismaPromise<Array<NoteGetPayload<T>>>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
    **/
    create<T extends NoteCreateArgs>(
      args: SelectSubset<T, NoteCreateArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Create many Notes.
     *     @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     *     @example
     *     // Create many Notes
     *     const note = await prisma.note.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NoteCreateManyArgs>(
      args?: SelectSubset<T, NoteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
    **/
    delete<T extends NoteDeleteArgs>(
      args: SelectSubset<T, NoteDeleteArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoteUpdateArgs>(
      args: SelectSubset<T, NoteUpdateArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoteDeleteManyArgs>(
      args?: SelectSubset<T, NoteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoteUpdateManyArgs>(
      args: SelectSubset<T, NoteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
    **/
    upsert<T extends NoteUpsertArgs>(
      args: SelectSubset<T, NoteUpsertArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Find one Note that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NoteFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Find the first Note that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__NoteClient<Note>, Prisma__NoteClient<NoteGetPayload<T>>>

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    student<T extends StudentArgs = {}>(args?: Subset<T, StudentArgs>): CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>;

    course<T extends CourseArgs = {}>(args?: Subset<T, CourseArgs>): CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Note base type for findUnique actions
   */
  export type NoteFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     * 
    **/
    where: NoteWhereUniqueInput
  }

  /**
   * Note: findUnique
   */
  export interface NoteFindUniqueArgs extends NoteFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Note base type for findFirst actions
   */
  export type NoteFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * Filter, which Note to fetch.
     * 
    **/
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     * 
    **/
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     * 
    **/
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     * 
    **/
    distinct?: Enumerable<NoteScalarFieldEnum>
  }

  /**
   * Note: findFirst
   */
  export interface NoteFindFirstArgs extends NoteFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Note findMany
   */
  export type NoteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * Filter, which Notes to fetch.
     * 
    **/
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     * 
    **/
    orderBy?: Enumerable<NoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     * 
    **/
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NoteScalarFieldEnum>
  }


  /**
   * Note create
   */
  export type NoteCreateArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * The data needed to create a Note.
     * 
    **/
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }


  /**
   * Note createMany
   */
  export type NoteCreateManyArgs = {
    /**
     * The data used to create many Notes.
     * 
    **/
    data: Enumerable<NoteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Note update
   */
  export type NoteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * The data needed to update a Note.
     * 
    **/
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     * 
    **/
    where: NoteWhereUniqueInput
  }


  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs = {
    /**
     * The data used to update Notes.
     * 
    **/
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     * 
    **/
    where?: NoteWhereInput
  }


  /**
   * Note upsert
   */
  export type NoteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * The filter to search for the Note to update in case it exists.
     * 
    **/
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     * 
    **/
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }


  /**
   * Note delete
   */
  export type NoteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
    /**
     * Filter which Note to delete.
     * 
    **/
    where: NoteWhereUniqueInput
  }


  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs = {
    /**
     * Filter which Notes to delete
     * 
    **/
    where?: NoteWhereInput
  }


  /**
   * Note: findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs = NoteFindUniqueArgsBase
      

  /**
   * Note: findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs = NoteFindFirstArgsBase
      

  /**
   * Note without action
   */
  export type NoteArgs = {
    /**
     * Select specific fields to fetch from the Note
     * 
    **/
    select?: NoteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoteInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CountryScalarFieldEnum: {
    countryId: 'countryId',
    code: 'code',
    name: 'name',
    iso: 'iso',
    eu: 'eu',
    noShipping: 'noShipping',
    needsPostalCode: 'needsPostalCode',
    studentCount: 'studentCount'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
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
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    currencyId: 'currencyId',
    code: 'code',
    name: 'name',
    symbol: 'symbol',
    exchangeRate: 'exchangeRate',
    created: 'created',
    modified: 'modified'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
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
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    noteId: 'noteId',
    studentId: 'studentId',
    courseId: 'courseId',
    userId: 'userId',
    note: 'note',
    type: 'type',
    starred: 'starred',
    created: 'created',
    modified: 'modified'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
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
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const PaymentTypeScalarFieldEnum: {
    paymentTypeId: 'paymentTypeId',
    name: 'name'
  };

  export type PaymentTypeScalarFieldEnum = (typeof PaymentTypeScalarFieldEnum)[keyof typeof PaymentTypeScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    provinceId: 'provinceId',
    countryId: 'countryId',
    code: 'code',
    name: 'name',
    studentCount: 'studentCount'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
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
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    schoolId: 'schoolId',
    name: 'name',
    courseCount: 'courseCount',
    created: 'created',
    modified: 'modified',
    studentCenterAccountType: 'studentCenterAccountType'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentScalarFieldEnum: {
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
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TelephoneCountryCodeScalarFieldEnum: {
    telephoneCountryCodeId: 'telephoneCountryCodeId',
    code: 'code',
    region: 'region'
  };

  export type TelephoneCountryCodeScalarFieldEnum = (typeof TelephoneCountryCodeScalarFieldEnum)[keyof typeof TelephoneCountryCodeScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TransactionScalarFieldEnum: {
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
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    userId?: IntFilter | number
    username?: StringFilter | string
    password?: StringFilter | string
    sex?: EnumUserSexFilter | UserSex
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    emailAddress?: StringNullableFilter | string | null
    adminPriv?: BoolFilter | boolean
    accountingPriv?: BoolFilter | boolean
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    students?: StudentListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    transactions?: TransactionListRelationFilter
    notes?: NoteListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    adminPriv?: SortOrder
    accountingPriv?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    userId?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    adminPriv?: SortOrder
    accountingPriv?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    sex?: EnumUserSexWithAggregatesFilter | UserSex
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    emailAddress?: StringNullableWithAggregatesFilter | string | null
    adminPriv?: BoolWithAggregatesFilter | boolean
    accountingPriv?: BoolWithAggregatesFilter | boolean
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type SchoolWhereInput = {
    AND?: Enumerable<SchoolWhereInput>
    OR?: Enumerable<SchoolWhereInput>
    NOT?: Enumerable<SchoolWhereInput>
    schoolId?: IntFilter | number
    name?: StringFilter | string
    courseCount?: IntFilter | number
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFilter | StudentCenterAccountType
    courses?: CourseListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    schoolId?: SortOrder
    name?: SortOrder
    courseCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    studentCenterAccountType?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = {
    schoolId?: number
  }

  export type SchoolOrderByWithAggregationInput = {
    schoolId?: SortOrder
    name?: SortOrder
    courseCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    studentCenterAccountType?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    schoolId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    courseCount?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeWithAggregatesFilter | StudentCenterAccountType
  }

  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    courseId?: IntFilter | number
    schoolId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    prefix?: StringFilter | string
    maxAssignments?: IntNullableFilter | number | null
    order?: IntFilter | number
    enrollmentCount?: IntFilter | number
    cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalFilter | Decimal | DecimalJsLike | number | string
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
    enrollments?: EnrollmentListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    school?: SchoolOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = {
    courseId?: number
  }

  export type CourseOrderByWithAggregationInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseScalarWhereWithAggregatesInput>
    courseId?: IntWithAggregatesFilter | number
    schoolId?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    prefix?: StringWithAggregatesFilter | string
    maxAssignments?: IntNullableWithAggregatesFilter | number | null
    order?: IntWithAggregatesFilter | number
    enrollmentCount?: IntWithAggregatesFilter | number
    cost?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type CurrencyWhereInput = {
    AND?: Enumerable<CurrencyWhereInput>
    OR?: Enumerable<CurrencyWhereInput>
    NOT?: Enumerable<CurrencyWhereInput>
    currencyId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    symbol?: StringFilter | string
    exchangeRate?: DecimalFilter | Decimal | DecimalJsLike | number | string
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    enrollments?: EnrollmentListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    currencyId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = {
    currencyId?: number
  }

  export type CurrencyOrderByWithAggregationInput = {
    currencyId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CurrencyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CurrencyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CurrencyScalarWhereWithAggregatesInput>
    currencyId?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    symbol?: StringWithAggregatesFilter | string
    exchangeRate?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    countryId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    iso?: IntNullableFilter | number | null
    eu?: BoolFilter | boolean
    noShipping?: BoolFilter | boolean
    needsPostalCode?: BoolFilter | boolean
    studentCount?: IntFilter | number
    provinces?: ProvinceListRelationFilter
    students?: StudentListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    iso?: SortOrder
    eu?: SortOrder
    noShipping?: SortOrder
    needsPostalCode?: SortOrder
    studentCount?: SortOrder
    provinces?: ProvinceOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = {
    countryId?: number
    iso?: number
  }

  export type CountryOrderByWithAggregationInput = {
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    iso?: SortOrder
    eu?: SortOrder
    noShipping?: SortOrder
    needsPostalCode?: SortOrder
    studentCount?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    countryId?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    iso?: IntNullableWithAggregatesFilter | number | null
    eu?: BoolWithAggregatesFilter | boolean
    noShipping?: BoolWithAggregatesFilter | boolean
    needsPostalCode?: BoolWithAggregatesFilter | boolean
    studentCount?: IntWithAggregatesFilter | number
  }

  export type ProvinceWhereInput = {
    AND?: Enumerable<ProvinceWhereInput>
    OR?: Enumerable<ProvinceWhereInput>
    NOT?: Enumerable<ProvinceWhereInput>
    provinceId?: IntFilter | number
    countryId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    studentCount?: IntFilter | number
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    students?: StudentListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    studentCount?: SortOrder
    country?: CountryOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = {
    provinceId?: number
    countryId_code?: ProvinceCountryIdCodeCompoundUniqueInput
  }

  export type ProvinceOrderByWithAggregationInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    studentCount?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _avg?: ProvinceAvgOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
    _sum?: ProvinceSumOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    provinceId?: IntWithAggregatesFilter | number
    countryId?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    studentCount?: IntWithAggregatesFilter | number
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    studentId?: IntFilter | number
    currencyId?: IntFilter | number
    userId?: IntNullableFilter | number | null
    languageId?: IntFilter | number
    sex?: EnumStudentSexFilter | StudentSex
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    address1?: StringFilter | string
    address2?: StringFilter | string
    city?: StringFilter | string
    provinceId?: IntNullableFilter | number | null
    postalCode?: StringNullableFilter | string | null
    countryId?: IntFilter | number
    telephoneCountryCode?: IntFilter | number
    telephoneNumber?: StringFilter | string
    emailAddress?: StringFilter | string
    paymentStart?: DateTimeNullableFilter | Date | string | null
    paymentDay?: IntNullableFilter | number | null
    password?: StringNullableFilter | string | null
    e164?: StringFilter | string
    sms?: BoolFilter | boolean
    enrollmentCount?: IntFilter | number
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    province?: XOR<ProvinceRelationFilter, ProvinceWhereInput> | null
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    notes?: NoteListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    provinceId?: SortOrder
    postalCode?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    telephoneNumber?: SortOrder
    emailAddress?: SortOrder
    paymentStart?: SortOrder
    paymentDay?: SortOrder
    password?: SortOrder
    e164?: SortOrder
    sms?: SortOrder
    enrollmentCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = {
    studentId?: number
  }

  export type StudentOrderByWithAggregationInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    provinceId?: SortOrder
    postalCode?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    telephoneNumber?: SortOrder
    emailAddress?: SortOrder
    paymentStart?: SortOrder
    paymentDay?: SortOrder
    password?: SortOrder
    e164?: SortOrder
    sms?: SortOrder
    enrollmentCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    studentId?: IntWithAggregatesFilter | number
    currencyId?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
    languageId?: IntWithAggregatesFilter | number
    sex?: EnumStudentSexWithAggregatesFilter | StudentSex
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    address1?: StringWithAggregatesFilter | string
    address2?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    provinceId?: IntNullableWithAggregatesFilter | number | null
    postalCode?: StringNullableWithAggregatesFilter | string | null
    countryId?: IntWithAggregatesFilter | number
    telephoneCountryCode?: IntWithAggregatesFilter | number
    telephoneNumber?: StringWithAggregatesFilter | string
    emailAddress?: StringWithAggregatesFilter | string
    paymentStart?: DateTimeNullableWithAggregatesFilter | Date | string | null
    paymentDay?: IntNullableWithAggregatesFilter | number | null
    password?: StringNullableWithAggregatesFilter | string | null
    e164?: StringWithAggregatesFilter | string
    sms?: BoolWithAggregatesFilter | boolean
    enrollmentCount?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type EnrollmentWhereInput = {
    AND?: Enumerable<EnrollmentWhereInput>
    OR?: Enumerable<EnrollmentWhereInput>
    NOT?: Enumerable<EnrollmentWhereInput>
    enrollmentId?: IntFilter | number
    studentId?: IntFilter | number
    courseId?: IntFilter | number
    currencyId?: IntFilter | number
    userId?: IntNullableFilter | number | null
    enrollmentDate?: DateTimeFilter | Date | string
    expiryDate?: DateTimeNullableFilter | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFilter | EnrollmentPaymentPlan
    status?: EnumEnrollmentStatusNullableFilter | EnrollmentStatus | null
    statusDate?: DateTimeNullableFilter | Date | string | null
    gradEmailDate?: DateTimeNullableFilter | Date | string | null
    gradEmailSkip?: BoolFilter | boolean
    cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalFilter | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFilter | boolean
    hideFromShippingList?: BoolFilter | boolean
    paymentOverride?: BoolFilter | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFilter | EnrollmentPaymentFrequency
    paymentDay?: IntNullableFilter | number | null
    paymentStart?: DateTimeNullableFilter | Date | string | null
    accountId?: IntNullableFilter | number | null
    shippingNote?: StringNullableFilter | string | null
    preparedDate?: DateTimeNullableFilter | Date | string | null
    shippedDate?: DateTimeNullableFilter | Date | string | null
    diploma?: BoolFilter | boolean
    diplomaDate?: DateTimeNullableFilter | Date | string | null
    fastTrack?: BoolFilter | boolean
    noStudentCenter?: BoolFilter | boolean
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    currency?: XOR<CurrencyRelationFilter, CurrencyWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    paymentMethods?: PaymentMethodListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type EnrollmentOrderByWithRelationInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    enrollmentDate?: SortOrder
    expiryDate?: SortOrder
    paymentPlan?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    gradEmailDate?: SortOrder
    gradEmailSkip?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    noShipping?: SortOrder
    hideFromShippingList?: SortOrder
    paymentOverride?: SortOrder
    paymentFrequency?: SortOrder
    paymentDay?: SortOrder
    paymentStart?: SortOrder
    accountId?: SortOrder
    shippingNote?: SortOrder
    preparedDate?: SortOrder
    shippedDate?: SortOrder
    diploma?: SortOrder
    diplomaDate?: SortOrder
    fastTrack?: SortOrder
    noStudentCenter?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type EnrollmentWhereUniqueInput = {
    enrollmentId?: number
    studentId_courseId?: EnrollmentStudentIdCourseIdCompoundUniqueInput
  }

  export type EnrollmentOrderByWithAggregationInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    enrollmentDate?: SortOrder
    expiryDate?: SortOrder
    paymentPlan?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    gradEmailDate?: SortOrder
    gradEmailSkip?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    noShipping?: SortOrder
    hideFromShippingList?: SortOrder
    paymentOverride?: SortOrder
    paymentFrequency?: SortOrder
    paymentDay?: SortOrder
    paymentStart?: SortOrder
    accountId?: SortOrder
    shippingNote?: SortOrder
    preparedDate?: SortOrder
    shippedDate?: SortOrder
    diploma?: SortOrder
    diplomaDate?: SortOrder
    fastTrack?: SortOrder
    noStudentCenter?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    enrollmentId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    courseId?: IntWithAggregatesFilter | number
    currencyId?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
    enrollmentDate?: DateTimeWithAggregatesFilter | Date | string
    expiryDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanWithAggregatesFilter | EnrollmentPaymentPlan
    status?: EnumEnrollmentStatusNullableWithAggregatesFilter | EnrollmentStatus | null
    statusDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    gradEmailDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    gradEmailSkip?: BoolWithAggregatesFilter | boolean
    cost?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    noShipping?: BoolWithAggregatesFilter | boolean
    hideFromShippingList?: BoolWithAggregatesFilter | boolean
    paymentOverride?: BoolWithAggregatesFilter | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyWithAggregatesFilter | EnrollmentPaymentFrequency
    paymentDay?: IntNullableWithAggregatesFilter | number | null
    paymentStart?: DateTimeNullableWithAggregatesFilter | Date | string | null
    accountId?: IntNullableWithAggregatesFilter | number | null
    shippingNote?: StringNullableWithAggregatesFilter | string | null
    preparedDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    shippedDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    diploma?: BoolWithAggregatesFilter | boolean
    diplomaDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fastTrack?: BoolWithAggregatesFilter | boolean
    noStudentCenter?: BoolWithAggregatesFilter | boolean
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type PaymentTypeWhereInput = {
    AND?: Enumerable<PaymentTypeWhereInput>
    OR?: Enumerable<PaymentTypeWhereInput>
    NOT?: Enumerable<PaymentTypeWhereInput>
    paymentTypeId?: IntFilter | number
    name?: StringFilter | string
    paymentMethods?: PaymentMethodListRelationFilter
  }

  export type PaymentTypeOrderByWithRelationInput = {
    paymentTypeId?: SortOrder
    name?: SortOrder
    paymentMethods?: PaymentMethodOrderByRelationAggregateInput
  }

  export type PaymentTypeWhereUniqueInput = {
    paymentTypeId?: number
  }

  export type PaymentTypeOrderByWithAggregationInput = {
    paymentTypeId?: SortOrder
    name?: SortOrder
    _count?: PaymentTypeCountOrderByAggregateInput
    _avg?: PaymentTypeAvgOrderByAggregateInput
    _max?: PaymentTypeMaxOrderByAggregateInput
    _min?: PaymentTypeMinOrderByAggregateInput
    _sum?: PaymentTypeSumOrderByAggregateInput
  }

  export type PaymentTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentTypeScalarWhereWithAggregatesInput>
    paymentTypeId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type PaymentMethodWhereInput = {
    AND?: Enumerable<PaymentMethodWhereInput>
    OR?: Enumerable<PaymentMethodWhereInput>
    NOT?: Enumerable<PaymentMethodWhereInput>
    paymentMethodId?: IntFilter | number
    enrollmentId?: IntNullableFilter | number | null
    paymentTypeId?: IntFilter | number
    primary?: BoolFilter | boolean
    paysafeProfileId?: StringNullableFilter | string | null
    paysafeCardId?: StringNullableFilter | string | null
    paysafePaymentToken?: StringNullableFilter | string | null
    paysafeCompany?: EnumPaysafeCompanyNullableFilter | PaysafeCompany | null
    pan?: StringNullableFilter | string | null
    expiryMonth?: IntNullableFilter | number | null
    expiryYear?: IntNullableFilter | number | null
    deleted?: BoolFilter | boolean
    notified?: BoolFilter | boolean
    disabled?: BoolFilter | boolean
    transactionCount?: IntFilter | number
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    enrollment?: XOR<EnrollmentRelationFilter, EnrollmentWhereInput> | null
    paymentType?: XOR<PaymentTypeRelationFilter, PaymentTypeWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    primary?: SortOrder
    paysafeProfileId?: SortOrder
    paysafeCardId?: SortOrder
    paysafePaymentToken?: SortOrder
    paysafeCompany?: SortOrder
    pan?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    deleted?: SortOrder
    notified?: SortOrder
    disabled?: SortOrder
    transactionCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
    paymentType?: PaymentTypeOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = {
    paymentMethodId?: number
  }

  export type PaymentMethodOrderByWithAggregationInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    primary?: SortOrder
    paysafeProfileId?: SortOrder
    paysafeCardId?: SortOrder
    paysafePaymentToken?: SortOrder
    paysafeCompany?: SortOrder
    pan?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    deleted?: SortOrder
    notified?: SortOrder
    disabled?: SortOrder
    transactionCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentMethodScalarWhereWithAggregatesInput>
    paymentMethodId?: IntWithAggregatesFilter | number
    enrollmentId?: IntNullableWithAggregatesFilter | number | null
    paymentTypeId?: IntWithAggregatesFilter | number
    primary?: BoolWithAggregatesFilter | boolean
    paysafeProfileId?: StringNullableWithAggregatesFilter | string | null
    paysafeCardId?: StringNullableWithAggregatesFilter | string | null
    paysafePaymentToken?: StringNullableWithAggregatesFilter | string | null
    paysafeCompany?: EnumPaysafeCompanyNullableWithAggregatesFilter | PaysafeCompany | null
    pan?: StringNullableWithAggregatesFilter | string | null
    expiryMonth?: IntNullableWithAggregatesFilter | number | null
    expiryYear?: IntNullableWithAggregatesFilter | number | null
    deleted?: BoolWithAggregatesFilter | boolean
    notified?: BoolWithAggregatesFilter | boolean
    disabled?: BoolWithAggregatesFilter | boolean
    transactionCount?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: Enumerable<TransactionWhereInput>
    OR?: Enumerable<TransactionWhereInput>
    NOT?: Enumerable<TransactionWhereInput>
    transactionId?: IntFilter | number
    enrollmentId?: IntFilter | number
    paymentMethodId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    parentId?: IntNullableFilter | number | null
    transactionDate?: DateTimeFilter | Date | string
    transactionTime?: DateTimeNullableFilter | Date | string | null
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    usdAmount?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFilter | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFilter | Decimal | DecimalJsLike | number | string
    orderId?: StringNullableFilter | string | null
    responseCode?: IntNullableFilter | number | null
    authCode?: StringNullableFilter | string | null
    referenceNumber?: StringNullableFilter | string | null
    settlementId?: StringNullableFilter | string | null
    transactionNumber?: StringNullableFilter | string | null
    response?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    posted?: BoolNullableFilter | boolean | null
    postedDate?: DateTimeNullableFilter | Date | string | null
    notified?: BoolNullableFilter | boolean | null
    extraCharge?: BoolFilter | boolean
    auto?: BoolFilter | boolean
    reattempt?: BoolFilter | boolean
    transactionType?: EnumTransactionTypeFilter | TransactionType
    voided?: BoolFilter | boolean
    notes?: StringNullableFilter | string | null
    severity?: IntNullableFilter | number | null
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    enrollment?: XOR<EnrollmentRelationFilter, EnrollmentWhereInput>
    paymentMethod?: XOR<PaymentMethodRelationFilter, PaymentMethodWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    parent?: XOR<TransactionRelationFilter, TransactionWhereInput> | null
    children?: TransactionListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    orderId?: SortOrder
    responseCode?: SortOrder
    authCode?: SortOrder
    referenceNumber?: SortOrder
    settlementId?: SortOrder
    transactionNumber?: SortOrder
    response?: SortOrder
    description?: SortOrder
    posted?: SortOrder
    postedDate?: SortOrder
    notified?: SortOrder
    extraCharge?: SortOrder
    auto?: SortOrder
    reattempt?: SortOrder
    transactionType?: SortOrder
    voided?: SortOrder
    notes?: SortOrder
    severity?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    enrollment?: EnrollmentOrderByWithRelationInput
    paymentMethod?: PaymentMethodOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: TransactionOrderByWithRelationInput
    children?: TransactionOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = {
    transactionId?: number
  }

  export type TransactionOrderByWithAggregationInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    orderId?: SortOrder
    responseCode?: SortOrder
    authCode?: SortOrder
    referenceNumber?: SortOrder
    settlementId?: SortOrder
    transactionNumber?: SortOrder
    response?: SortOrder
    description?: SortOrder
    posted?: SortOrder
    postedDate?: SortOrder
    notified?: SortOrder
    extraCharge?: SortOrder
    auto?: SortOrder
    reattempt?: SortOrder
    transactionType?: SortOrder
    voided?: SortOrder
    notes?: SortOrder
    severity?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransactionScalarWhereWithAggregatesInput>
    transactionId?: IntWithAggregatesFilter | number
    enrollmentId?: IntWithAggregatesFilter | number
    paymentMethodId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntNullableWithAggregatesFilter | number | null
    parentId?: IntNullableWithAggregatesFilter | number | null
    transactionDate?: DateTimeWithAggregatesFilter | Date | string
    transactionTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    amount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    usdAmount?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    orderId?: StringNullableWithAggregatesFilter | string | null
    responseCode?: IntNullableWithAggregatesFilter | number | null
    authCode?: StringNullableWithAggregatesFilter | string | null
    referenceNumber?: StringNullableWithAggregatesFilter | string | null
    settlementId?: StringNullableWithAggregatesFilter | string | null
    transactionNumber?: StringNullableWithAggregatesFilter | string | null
    response?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    posted?: BoolNullableWithAggregatesFilter | boolean | null
    postedDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    notified?: BoolNullableWithAggregatesFilter | boolean | null
    extraCharge?: BoolWithAggregatesFilter | boolean
    auto?: BoolWithAggregatesFilter | boolean
    reattempt?: BoolWithAggregatesFilter | boolean
    transactionType?: EnumTransactionTypeWithAggregatesFilter | TransactionType
    voided?: BoolWithAggregatesFilter | boolean
    notes?: StringNullableWithAggregatesFilter | string | null
    severity?: IntNullableWithAggregatesFilter | number | null
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type RefreshTokenWhereInput = {
    AND?: Enumerable<RefreshTokenWhereInput>
    OR?: Enumerable<RefreshTokenWhereInput>
    NOT?: Enumerable<RefreshTokenWhereInput>
    refreshTokenId?: BytesFilter | Buffer
    studentId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    token?: BytesFilter | Buffer
    expiry?: DateTimeFilter | Date | string
    ipAddress?: BytesNullableFilter | Buffer | null
    browser?: StringNullableFilter | string | null
    browserVersion?: StringNullableFilter | string | null
    mobile?: BoolNullableFilter | boolean | null
    os?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    student?: XOR<StudentRelationFilter, StudentWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type RefreshTokenOrderByWithRelationInput = {
    refreshTokenId?: SortOrder
    studentId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    browserVersion?: SortOrder
    mobile?: SortOrder
    os?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    student?: StudentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = {
    refreshTokenId?: Buffer
    token?: Buffer
  }

  export type RefreshTokenOrderByWithAggregationInput = {
    refreshTokenId?: SortOrder
    studentId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    browserVersion?: SortOrder
    mobile?: SortOrder
    os?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefreshTokenScalarWhereWithAggregatesInput>
    refreshTokenId?: BytesWithAggregatesFilter | Buffer
    studentId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntNullableWithAggregatesFilter | number | null
    token?: BytesWithAggregatesFilter | Buffer
    expiry?: DateTimeWithAggregatesFilter | Date | string
    ipAddress?: BytesNullableWithAggregatesFilter | Buffer | null
    browser?: StringNullableWithAggregatesFilter | string | null
    browserVersion?: StringNullableWithAggregatesFilter | string | null
    mobile?: BoolNullableWithAggregatesFilter | boolean | null
    os?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    latitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type TelephoneCountryCodeWhereInput = {
    AND?: Enumerable<TelephoneCountryCodeWhereInput>
    OR?: Enumerable<TelephoneCountryCodeWhereInput>
    NOT?: Enumerable<TelephoneCountryCodeWhereInput>
    telephoneCountryCodeId?: IntFilter | number
    code?: IntFilter | number
    region?: StringFilter | string
  }

  export type TelephoneCountryCodeOrderByWithRelationInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
    region?: SortOrder
  }

  export type TelephoneCountryCodeWhereUniqueInput = {
    telephoneCountryCodeId?: number
  }

  export type TelephoneCountryCodeOrderByWithAggregationInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
    region?: SortOrder
    _count?: TelephoneCountryCodeCountOrderByAggregateInput
    _avg?: TelephoneCountryCodeAvgOrderByAggregateInput
    _max?: TelephoneCountryCodeMaxOrderByAggregateInput
    _min?: TelephoneCountryCodeMinOrderByAggregateInput
    _sum?: TelephoneCountryCodeSumOrderByAggregateInput
  }

  export type TelephoneCountryCodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TelephoneCountryCodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<TelephoneCountryCodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TelephoneCountryCodeScalarWhereWithAggregatesInput>
    telephoneCountryCodeId?: IntWithAggregatesFilter | number
    code?: IntWithAggregatesFilter | number
    region?: StringWithAggregatesFilter | string
  }

  export type NoteWhereInput = {
    AND?: Enumerable<NoteWhereInput>
    OR?: Enumerable<NoteWhereInput>
    NOT?: Enumerable<NoteWhereInput>
    noteId?: IntFilter | number
    studentId?: IntFilter | number
    courseId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    note?: StringFilter | string
    type?: EnumNoteTypeFilter | NoteType
    starred?: BoolFilter | boolean
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type NoteOrderByWithRelationInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    type?: SortOrder
    starred?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = {
    noteId?: number
  }

  export type NoteOrderByWithAggregationInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    type?: SortOrder
    starred?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<NoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NoteScalarWhereWithAggregatesInput>
    noteId?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    courseId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntNullableWithAggregatesFilter | number | null
    note?: StringWithAggregatesFilter | string
    type?: EnumNoteTypeWithAggregatesFilter | NoteType
    starred?: BoolWithAggregatesFilter | boolean
    created?: DateTimeWithAggregatesFilter | Date | string
    modified?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UserCreateInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SchoolCreateInput = {
    name: string
    courseCount?: number
    created?: Date | string
    modified?: Date | string | null
    studentCenterAccountType?: StudentCenterAccountType
    courses?: CourseCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    schoolId?: number
    name: string
    courseCount?: number
    created?: Date | string
    modified?: Date | string | null
    studentCenterAccountType?: StudentCenterAccountType
    courses?: CourseUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
    courses?: CourseUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
    courses?: CourseUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    schoolId?: number
    name: string
    courseCount?: number
    created?: Date | string
    modified?: Date | string | null
    studentCenterAccountType?: StudentCenterAccountType
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
  }

  export type SchoolUncheckedUpdateManyInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
  }

  export type CourseCreateInput = {
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    school: SchoolCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    notes?: NoteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    courseId?: number
    schoolId: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    notes?: NoteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    notes?: NoteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    courseId?: number
    schoolId: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
  }

  export type CourseUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyCreateInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    currencyId?: number
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    currencyId?: number
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
  }

  export type CurrencyUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyUncheckedUpdateManyInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryCreateInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    provinces?: ProvinceCreateNestedManyWithoutCountryInput
    students?: StudentCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    provinces?: ProvinceUncheckedCreateNestedManyWithoutCountryInput
    students?: StudentUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    provinces?: ProvinceUpdateManyWithoutCountryNestedInput
    students?: StudentUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    provinces?: ProvinceUncheckedUpdateManyWithoutCountryNestedInput
    students?: StudentUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
  }

  export type CountryUpdateManyMutationInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type CountryUncheckedUpdateManyInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinceCreateInput = {
    provinceId: number
    code: string
    name: string
    studentCount?: number
    country: CountryCreateNestedOneWithoutProvincesInput
    students?: StudentCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    provinceId: number
    countryId: number
    code: string
    name: string
    studentCount?: number
    students?: StudentUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutProvincesNestedInput
    students?: StudentUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    provinceId: number
    countryId: number
    code: string
    name: string
    studentCount?: number
  }

  export type ProvinceUpdateManyMutationInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinceUncheckedUpdateManyInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    country: CountryCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type StudentUpdateManyMutationInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUpdateInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateManyInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type EnrollmentUpdateManyMutationInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentTypeCreateInput = {
    name: string
    paymentMethods?: PaymentMethodCreateNestedManyWithoutPaymentTypeInput
  }

  export type PaymentTypeUncheckedCreateInput = {
    paymentTypeId?: number
    name: string
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutPaymentTypeInput
  }

  export type PaymentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    paymentMethods?: PaymentMethodUpdateManyWithoutPaymentTypeNestedInput
  }

  export type PaymentTypeUncheckedUpdateInput = {
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutPaymentTypeNestedInput
  }

  export type PaymentTypeCreateManyInput = {
    paymentTypeId?: number
    name: string
  }

  export type PaymentTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTypeUncheckedUpdateManyInput = {
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentMethodCreateInput = {
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollment?: EnrollmentCreateNestedOneWithoutPaymentMethodsInput
    paymentType: PaymentTypeCreateNestedOneWithoutPaymentMethodsInput
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    paymentMethodId?: number
    enrollmentId?: number | null
    paymentTypeId: number
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneWithoutPaymentMethodsNestedInput
    paymentType?: PaymentTypeUpdateOneRequiredWithoutPaymentMethodsNestedInput
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    paymentMethodId?: number
    enrollmentId?: number | null
    paymentTypeId: number
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type PaymentMethodUpdateManyMutationInput = {
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    enrollment: EnrollmentCreateNestedOneWithoutTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
    user?: UserCreateNestedOneWithoutTransactionsInput
    parent?: TransactionCreateNestedOneWithoutChildrenInput
    children?: TransactionCreateNestedManyWithoutParentInput
  }

  export type TransactionUncheckedCreateInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    children?: TransactionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TransactionUpdateInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneWithoutTransactionsNestedInput
    parent?: TransactionUpdateOneWithoutChildrenNestedInput
    children?: TransactionUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: TransactionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TransactionCreateManyInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionUpdateManyMutationInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateInput = {
    refreshTokenId: Buffer
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
    student?: StudentCreateNestedOneWithoutRefreshTokensInput
    user?: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    refreshTokenId: Buffer
    studentId?: number | null
    userId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenUpdateInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneWithoutRefreshTokensNestedInput
    user?: UserUpdateOneWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyInput = {
    refreshTokenId: Buffer
    studentId?: number | null
    userId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelephoneCountryCodeCreateInput = {
    code: number
    region: string
  }

  export type TelephoneCountryCodeUncheckedCreateInput = {
    telephoneCountryCodeId?: number
    code: number
    region: string
  }

  export type TelephoneCountryCodeUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type TelephoneCountryCodeUncheckedUpdateInput = {
    telephoneCountryCodeId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type TelephoneCountryCodeCreateManyInput = {
    telephoneCountryCodeId?: number
    code: number
    region: string
  }

  export type TelephoneCountryCodeUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type TelephoneCountryCodeUncheckedUpdateManyInput = {
    telephoneCountryCodeId?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutNotesInput
    course?: CourseCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    noteId?: number
    studentId: number
    courseId?: number | null
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutNotesNestedInput
    course?: CourseUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteCreateManyInput = {
    noteId?: number
    studentId: number
    courseId?: number | null
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteUncheckedUpdateManyInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type EnumUserSexFilter = {
    equals?: UserSex
    in?: Enumerable<UserSex>
    notIn?: Enumerable<UserSex>
    not?: NestedEnumUserSexFilter | UserSex
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    adminPriv?: SortOrder
    accountingPriv?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    adminPriv?: SortOrder
    accountingPriv?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    adminPriv?: SortOrder
    accountingPriv?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumUserSexWithAggregatesFilter = {
    equals?: UserSex
    in?: Enumerable<UserSex>
    notIn?: Enumerable<UserSex>
    not?: NestedEnumUserSexWithAggregatesFilter | UserSex
    _count?: NestedIntFilter
    _min?: NestedEnumUserSexFilter
    _max?: NestedEnumUserSexFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumStudentCenterAccountTypeFilter = {
    equals?: StudentCenterAccountType
    in?: Enumerable<StudentCenterAccountType>
    notIn?: Enumerable<StudentCenterAccountType>
    not?: NestedEnumStudentCenterAccountTypeFilter | StudentCenterAccountType
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    schoolId?: SortOrder
    name?: SortOrder
    courseCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    studentCenterAccountType?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    schoolId?: SortOrder
    courseCount?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    schoolId?: SortOrder
    name?: SortOrder
    courseCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    studentCenterAccountType?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    schoolId?: SortOrder
    name?: SortOrder
    courseCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    studentCenterAccountType?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    schoolId?: SortOrder
    courseCount?: SortOrder
  }

  export type EnumStudentCenterAccountTypeWithAggregatesFilter = {
    equals?: StudentCenterAccountType
    in?: Enumerable<StudentCenterAccountType>
    notIn?: Enumerable<StudentCenterAccountType>
    not?: NestedEnumStudentCenterAccountTypeWithAggregatesFilter | StudentCenterAccountType
    _count?: NestedIntFilter
    _min?: NestedEnumStudentCenterAccountTypeFilter
    _max?: NestedEnumStudentCenterAccountTypeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type SchoolRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type CourseCountOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    prefix?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    maxAssignments?: SortOrder
    order?: SortOrder
    enrollmentCount?: SortOrder
    cost?: SortOrder
    installment?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type CurrencyCountOrderByAggregateInput = {
    currencyId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    currencyId?: SortOrder
    exchangeRate?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    currencyId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    currencyId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    currencyId?: SortOrder
    exchangeRate?: SortOrder
  }

  export type ProvinceListRelationFilter = {
    every?: ProvinceWhereInput
    some?: ProvinceWhereInput
    none?: ProvinceWhereInput
  }

  export type ProvinceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    iso?: SortOrder
    eu?: SortOrder
    noShipping?: SortOrder
    needsPostalCode?: SortOrder
    studentCount?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    countryId?: SortOrder
    iso?: SortOrder
    studentCount?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    iso?: SortOrder
    eu?: SortOrder
    noShipping?: SortOrder
    needsPostalCode?: SortOrder
    studentCount?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    iso?: SortOrder
    eu?: SortOrder
    noShipping?: SortOrder
    needsPostalCode?: SortOrder
    studentCount?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    countryId?: SortOrder
    iso?: SortOrder
    studentCount?: SortOrder
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type ProvinceCountryIdCodeCompoundUniqueInput = {
    countryId: number
    code: string
  }

  export type ProvinceCountOrderByAggregateInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    studentCount?: SortOrder
  }

  export type ProvinceAvgOrderByAggregateInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    studentCount?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    studentCount?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    studentCount?: SortOrder
  }

  export type ProvinceSumOrderByAggregateInput = {
    provinceId?: SortOrder
    countryId?: SortOrder
    studentCount?: SortOrder
  }

  export type EnumStudentSexFilter = {
    equals?: StudentSex
    in?: Enumerable<StudentSex>
    notIn?: Enumerable<StudentSex>
    not?: NestedEnumStudentSexFilter | StudentSex
  }

  export type ProvinceRelationFilter = {
    is?: ProvinceWhereInput | null
    isNot?: ProvinceWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StudentCountOrderByAggregateInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    provinceId?: SortOrder
    postalCode?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    telephoneNumber?: SortOrder
    emailAddress?: SortOrder
    paymentStart?: SortOrder
    paymentDay?: SortOrder
    password?: SortOrder
    e164?: SortOrder
    sms?: SortOrder
    enrollmentCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    provinceId?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    paymentDay?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    provinceId?: SortOrder
    postalCode?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    telephoneNumber?: SortOrder
    emailAddress?: SortOrder
    paymentStart?: SortOrder
    paymentDay?: SortOrder
    password?: SortOrder
    e164?: SortOrder
    sms?: SortOrder
    enrollmentCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    sex?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    provinceId?: SortOrder
    postalCode?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    telephoneNumber?: SortOrder
    emailAddress?: SortOrder
    paymentStart?: SortOrder
    paymentDay?: SortOrder
    password?: SortOrder
    e164?: SortOrder
    sms?: SortOrder
    enrollmentCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    studentId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    languageId?: SortOrder
    provinceId?: SortOrder
    countryId?: SortOrder
    telephoneCountryCode?: SortOrder
    paymentDay?: SortOrder
    enrollmentCount?: SortOrder
  }

  export type EnumStudentSexWithAggregatesFilter = {
    equals?: StudentSex
    in?: Enumerable<StudentSex>
    notIn?: Enumerable<StudentSex>
    not?: NestedEnumStudentSexWithAggregatesFilter | StudentSex
    _count?: NestedIntFilter
    _min?: NestedEnumStudentSexFilter
    _max?: NestedEnumStudentSexFilter
  }

  export type EnumEnrollmentPaymentPlanFilter = {
    equals?: EnrollmentPaymentPlan
    in?: Enumerable<EnrollmentPaymentPlan>
    notIn?: Enumerable<EnrollmentPaymentPlan>
    not?: NestedEnumEnrollmentPaymentPlanFilter | EnrollmentPaymentPlan
  }

  export type EnumEnrollmentStatusNullableFilter = {
    equals?: EnrollmentStatus | null
    in?: Enumerable<EnrollmentStatus> | null
    notIn?: Enumerable<EnrollmentStatus> | null
    not?: NestedEnumEnrollmentStatusNullableFilter | EnrollmentStatus | null
  }

  export type EnumEnrollmentPaymentFrequencyFilter = {
    equals?: EnrollmentPaymentFrequency
    in?: Enumerable<EnrollmentPaymentFrequency>
    notIn?: Enumerable<EnrollmentPaymentFrequency>
    not?: NestedEnumEnrollmentPaymentFrequencyFilter | EnrollmentPaymentFrequency
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type CurrencyRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentStudentIdCourseIdCompoundUniqueInput = {
    studentId: number
    courseId: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    enrollmentDate?: SortOrder
    expiryDate?: SortOrder
    paymentPlan?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    gradEmailDate?: SortOrder
    gradEmailSkip?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    noShipping?: SortOrder
    hideFromShippingList?: SortOrder
    paymentOverride?: SortOrder
    paymentFrequency?: SortOrder
    paymentDay?: SortOrder
    paymentStart?: SortOrder
    accountId?: SortOrder
    shippingNote?: SortOrder
    preparedDate?: SortOrder
    shippedDate?: SortOrder
    diploma?: SortOrder
    diplomaDate?: SortOrder
    fastTrack?: SortOrder
    noStudentCenter?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    paymentDay?: SortOrder
    accountId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    enrollmentDate?: SortOrder
    expiryDate?: SortOrder
    paymentPlan?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    gradEmailDate?: SortOrder
    gradEmailSkip?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    noShipping?: SortOrder
    hideFromShippingList?: SortOrder
    paymentOverride?: SortOrder
    paymentFrequency?: SortOrder
    paymentDay?: SortOrder
    paymentStart?: SortOrder
    accountId?: SortOrder
    shippingNote?: SortOrder
    preparedDate?: SortOrder
    shippedDate?: SortOrder
    diploma?: SortOrder
    diplomaDate?: SortOrder
    fastTrack?: SortOrder
    noStudentCenter?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    enrollmentDate?: SortOrder
    expiryDate?: SortOrder
    paymentPlan?: SortOrder
    status?: SortOrder
    statusDate?: SortOrder
    gradEmailDate?: SortOrder
    gradEmailSkip?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    noShipping?: SortOrder
    hideFromShippingList?: SortOrder
    paymentOverride?: SortOrder
    paymentFrequency?: SortOrder
    paymentDay?: SortOrder
    paymentStart?: SortOrder
    accountId?: SortOrder
    shippingNote?: SortOrder
    preparedDate?: SortOrder
    shippedDate?: SortOrder
    diploma?: SortOrder
    diplomaDate?: SortOrder
    fastTrack?: SortOrder
    noStudentCenter?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    enrollmentId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    currencyId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    installment?: SortOrder
    paymentDay?: SortOrder
    accountId?: SortOrder
  }

  export type EnumEnrollmentPaymentPlanWithAggregatesFilter = {
    equals?: EnrollmentPaymentPlan
    in?: Enumerable<EnrollmentPaymentPlan>
    notIn?: Enumerable<EnrollmentPaymentPlan>
    not?: NestedEnumEnrollmentPaymentPlanWithAggregatesFilter | EnrollmentPaymentPlan
    _count?: NestedIntFilter
    _min?: NestedEnumEnrollmentPaymentPlanFilter
    _max?: NestedEnumEnrollmentPaymentPlanFilter
  }

  export type EnumEnrollmentStatusNullableWithAggregatesFilter = {
    equals?: EnrollmentStatus | null
    in?: Enumerable<EnrollmentStatus> | null
    notIn?: Enumerable<EnrollmentStatus> | null
    not?: NestedEnumEnrollmentStatusNullableWithAggregatesFilter | EnrollmentStatus | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEnrollmentStatusNullableFilter
    _max?: NestedEnumEnrollmentStatusNullableFilter
  }

  export type EnumEnrollmentPaymentFrequencyWithAggregatesFilter = {
    equals?: EnrollmentPaymentFrequency
    in?: Enumerable<EnrollmentPaymentFrequency>
    notIn?: Enumerable<EnrollmentPaymentFrequency>
    not?: NestedEnumEnrollmentPaymentFrequencyWithAggregatesFilter | EnrollmentPaymentFrequency
    _count?: NestedIntFilter
    _min?: NestedEnumEnrollmentPaymentFrequencyFilter
    _max?: NestedEnumEnrollmentPaymentFrequencyFilter
  }

  export type PaymentTypeCountOrderByAggregateInput = {
    paymentTypeId?: SortOrder
    name?: SortOrder
  }

  export type PaymentTypeAvgOrderByAggregateInput = {
    paymentTypeId?: SortOrder
  }

  export type PaymentTypeMaxOrderByAggregateInput = {
    paymentTypeId?: SortOrder
    name?: SortOrder
  }

  export type PaymentTypeMinOrderByAggregateInput = {
    paymentTypeId?: SortOrder
    name?: SortOrder
  }

  export type PaymentTypeSumOrderByAggregateInput = {
    paymentTypeId?: SortOrder
  }

  export type EnumPaysafeCompanyNullableFilter = {
    equals?: PaysafeCompany | null
    in?: Enumerable<PaysafeCompany> | null
    notIn?: Enumerable<PaysafeCompany> | null
    not?: NestedEnumPaysafeCompanyNullableFilter | PaysafeCompany | null
  }

  export type EnrollmentRelationFilter = {
    is?: EnrollmentWhereInput | null
    isNot?: EnrollmentWhereInput | null
  }

  export type PaymentTypeRelationFilter = {
    is?: PaymentTypeWhereInput
    isNot?: PaymentTypeWhereInput
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    primary?: SortOrder
    paysafeProfileId?: SortOrder
    paysafeCardId?: SortOrder
    paysafePaymentToken?: SortOrder
    paysafeCompany?: SortOrder
    pan?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    deleted?: SortOrder
    notified?: SortOrder
    disabled?: SortOrder
    transactionCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    transactionCount?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    primary?: SortOrder
    paysafeProfileId?: SortOrder
    paysafeCardId?: SortOrder
    paysafePaymentToken?: SortOrder
    paysafeCompany?: SortOrder
    pan?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    deleted?: SortOrder
    notified?: SortOrder
    disabled?: SortOrder
    transactionCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    primary?: SortOrder
    paysafeProfileId?: SortOrder
    paysafeCardId?: SortOrder
    paysafePaymentToken?: SortOrder
    paysafeCompany?: SortOrder
    pan?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    deleted?: SortOrder
    notified?: SortOrder
    disabled?: SortOrder
    transactionCount?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    paymentMethodId?: SortOrder
    enrollmentId?: SortOrder
    paymentTypeId?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    transactionCount?: SortOrder
  }

  export type EnumPaysafeCompanyNullableWithAggregatesFilter = {
    equals?: PaysafeCompany | null
    in?: Enumerable<PaysafeCompany> | null
    notIn?: Enumerable<PaysafeCompany> | null
    not?: NestedEnumPaysafeCompanyNullableWithAggregatesFilter | PaysafeCompany | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPaysafeCompanyNullableFilter
    _max?: NestedEnumPaysafeCompanyNullableFilter
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type EnumTransactionTypeFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeFilter | TransactionType
  }

  export type PaymentMethodRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type TransactionRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    orderId?: SortOrder
    responseCode?: SortOrder
    authCode?: SortOrder
    referenceNumber?: SortOrder
    settlementId?: SortOrder
    transactionNumber?: SortOrder
    response?: SortOrder
    description?: SortOrder
    posted?: SortOrder
    postedDate?: SortOrder
    notified?: SortOrder
    extraCharge?: SortOrder
    auto?: SortOrder
    reattempt?: SortOrder
    transactionType?: SortOrder
    voided?: SortOrder
    notes?: SortOrder
    severity?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    responseCode?: SortOrder
    severity?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    orderId?: SortOrder
    responseCode?: SortOrder
    authCode?: SortOrder
    referenceNumber?: SortOrder
    settlementId?: SortOrder
    transactionNumber?: SortOrder
    response?: SortOrder
    description?: SortOrder
    posted?: SortOrder
    postedDate?: SortOrder
    notified?: SortOrder
    extraCharge?: SortOrder
    auto?: SortOrder
    reattempt?: SortOrder
    transactionType?: SortOrder
    voided?: SortOrder
    notes?: SortOrder
    severity?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    transactionDate?: SortOrder
    transactionTime?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    orderId?: SortOrder
    responseCode?: SortOrder
    authCode?: SortOrder
    referenceNumber?: SortOrder
    settlementId?: SortOrder
    transactionNumber?: SortOrder
    response?: SortOrder
    description?: SortOrder
    posted?: SortOrder
    postedDate?: SortOrder
    notified?: SortOrder
    extraCharge?: SortOrder
    auto?: SortOrder
    reattempt?: SortOrder
    transactionType?: SortOrder
    voided?: SortOrder
    notes?: SortOrder
    severity?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    transactionId?: SortOrder
    enrollmentId?: SortOrder
    paymentMethodId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    amount?: SortOrder
    attemptedAmount?: SortOrder
    usdAmount?: SortOrder
    refund?: SortOrder
    chargeback?: SortOrder
    responseCode?: SortOrder
    severity?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type EnumTransactionTypeWithAggregatesFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeWithAggregatesFilter | TransactionType
    _count?: NestedIntFilter
    _min?: NestedEnumTransactionTypeFilter
    _max?: NestedEnumTransactionTypeFilter
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    studentId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    browserVersion?: SortOrder
    mobile?: SortOrder
    os?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    studentId?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    studentId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    browserVersion?: SortOrder
    mobile?: SortOrder
    os?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    refreshTokenId?: SortOrder
    studentId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiry?: SortOrder
    ipAddress?: SortOrder
    browser?: SortOrder
    browserVersion?: SortOrder
    mobile?: SortOrder
    os?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    studentId?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type TelephoneCountryCodeCountOrderByAggregateInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
    region?: SortOrder
  }

  export type TelephoneCountryCodeAvgOrderByAggregateInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
  }

  export type TelephoneCountryCodeMaxOrderByAggregateInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
    region?: SortOrder
  }

  export type TelephoneCountryCodeMinOrderByAggregateInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
    region?: SortOrder
  }

  export type TelephoneCountryCodeSumOrderByAggregateInput = {
    telephoneCountryCodeId?: SortOrder
    code?: SortOrder
  }

  export type EnumNoteTypeFilter = {
    equals?: NoteType
    in?: Enumerable<NoteType>
    notIn?: Enumerable<NoteType>
    not?: NestedEnumNoteTypeFilter | NoteType
  }

  export type NoteCountOrderByAggregateInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    type?: SortOrder
    starred?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    type?: SortOrder
    starred?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    type?: SortOrder
    starred?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    noteId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type EnumNoteTypeWithAggregatesFilter = {
    equals?: NoteType
    in?: Enumerable<NoteType>
    notIn?: Enumerable<NoteType>
    not?: NestedEnumNoteTypeWithAggregatesFilter | NoteType
    _count?: NestedIntFilter
    _min?: NestedEnumNoteTypeFilter
    _max?: NestedEnumNoteTypeFilter
  }

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<StudentCreateWithoutUserInput>, Enumerable<StudentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutUserInput>
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutUserInput>, Enumerable<TransactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutUserInput>
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<StudentCreateWithoutUserInput>, Enumerable<StudentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutUserInput>
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutUserInput>, Enumerable<TransactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutUserInput>
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserSexFieldUpdateOperationsInput = {
    set?: UserSex
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutUserInput>, Enumerable<StudentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: StudentCreateManyUserInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutUserInput>, Enumerable<TransactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoteCreateManyUserInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutUserInput>, Enumerable<StudentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: StudentCreateManyUserInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutUserInput>, Enumerable<TransactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutUserInput>, Enumerable<NoteUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoteCreateManyUserInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutUserInput>, Enumerable<RefreshTokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type CourseCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<CourseCreateWithoutSchoolInput>, Enumerable<CourseUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<CourseCreateOrConnectWithoutSchoolInput>
    createMany?: CourseCreateManySchoolInputEnvelope
    connect?: Enumerable<CourseWhereUniqueInput>
  }

  export type CourseUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<CourseCreateWithoutSchoolInput>, Enumerable<CourseUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<CourseCreateOrConnectWithoutSchoolInput>
    createMany?: CourseCreateManySchoolInputEnvelope
    connect?: Enumerable<CourseWhereUniqueInput>
  }

  export type EnumStudentCenterAccountTypeFieldUpdateOperationsInput = {
    set?: StudentCenterAccountType
  }

  export type CourseUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<Enumerable<CourseCreateWithoutSchoolInput>, Enumerable<CourseUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<CourseCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<CourseUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: CourseCreateManySchoolInputEnvelope
    set?: Enumerable<CourseWhereUniqueInput>
    disconnect?: Enumerable<CourseWhereUniqueInput>
    delete?: Enumerable<CourseWhereUniqueInput>
    connect?: Enumerable<CourseWhereUniqueInput>
    update?: Enumerable<CourseUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<CourseUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<CourseScalarWhereInput>
  }

  export type CourseUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<Enumerable<CourseCreateWithoutSchoolInput>, Enumerable<CourseUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<CourseCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<CourseUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: CourseCreateManySchoolInputEnvelope
    set?: Enumerable<CourseWhereUniqueInput>
    disconnect?: Enumerable<CourseWhereUniqueInput>
    delete?: Enumerable<CourseWhereUniqueInput>
    connect?: Enumerable<CourseWhereUniqueInput>
    update?: Enumerable<CourseUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<CourseUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<CourseScalarWhereInput>
  }

  export type SchoolCreateNestedOneWithoutCoursesInput = {
    create?: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCoursesInput
    connect?: SchoolWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type NoteCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<NoteCreateWithoutCourseInput>, Enumerable<NoteUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutCourseInput>
    createMany?: NoteCreateManyCourseInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type NoteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<NoteCreateWithoutCourseInput>, Enumerable<NoteUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutCourseInput>
    createMany?: NoteCreateManyCourseInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SchoolUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCoursesInput
    upsert?: SchoolUpsertWithoutCoursesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<SchoolUpdateWithoutCoursesInput, SchoolUncheckedUpdateWithoutCoursesInput>
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type NoteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutCourseInput>, Enumerable<NoteUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: NoteCreateManyCourseInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type NoteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutCourseInput>, Enumerable<NoteUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: NoteCreateManyCourseInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type EnrollmentCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCurrencyInput>, Enumerable<EnrollmentUncheckedCreateWithoutCurrencyInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCurrencyInput>
    createMany?: EnrollmentCreateManyCurrencyInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCurrencyInput>, Enumerable<EnrollmentUncheckedCreateWithoutCurrencyInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCurrencyInput>
    createMany?: EnrollmentCreateManyCurrencyInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type EnrollmentUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCurrencyInput>, Enumerable<EnrollmentUncheckedCreateWithoutCurrencyInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCurrencyInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutCurrencyInput>
    createMany?: EnrollmentCreateManyCurrencyInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutCurrencyInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutCurrencyInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCurrencyInput>, Enumerable<EnrollmentUncheckedCreateWithoutCurrencyInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCurrencyInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutCurrencyInput>
    createMany?: EnrollmentCreateManyCurrencyInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutCurrencyInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutCurrencyInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type ProvinceCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<ProvinceCreateWithoutCountryInput>, Enumerable<ProvinceUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ProvinceCreateOrConnectWithoutCountryInput>
    createMany?: ProvinceCreateManyCountryInputEnvelope
    connect?: Enumerable<ProvinceWhereUniqueInput>
  }

  export type StudentCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<StudentCreateWithoutCountryInput>, Enumerable<StudentUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutCountryInput>
    createMany?: StudentCreateManyCountryInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type ProvinceUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<ProvinceCreateWithoutCountryInput>, Enumerable<ProvinceUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ProvinceCreateOrConnectWithoutCountryInput>
    createMany?: ProvinceCreateManyCountryInputEnvelope
    connect?: Enumerable<ProvinceWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<StudentCreateWithoutCountryInput>, Enumerable<StudentUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutCountryInput>
    createMany?: StudentCreateManyCountryInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type ProvinceUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<ProvinceCreateWithoutCountryInput>, Enumerable<ProvinceUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ProvinceCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<ProvinceUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: ProvinceCreateManyCountryInputEnvelope
    set?: Enumerable<ProvinceWhereUniqueInput>
    disconnect?: Enumerable<ProvinceWhereUniqueInput>
    delete?: Enumerable<ProvinceWhereUniqueInput>
    connect?: Enumerable<ProvinceWhereUniqueInput>
    update?: Enumerable<ProvinceUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<ProvinceUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<ProvinceScalarWhereInput>
  }

  export type StudentUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutCountryInput>, Enumerable<StudentUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: StudentCreateManyCountryInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type ProvinceUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<ProvinceCreateWithoutCountryInput>, Enumerable<ProvinceUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<ProvinceCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<ProvinceUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: ProvinceCreateManyCountryInputEnvelope
    set?: Enumerable<ProvinceWhereUniqueInput>
    disconnect?: Enumerable<ProvinceWhereUniqueInput>
    delete?: Enumerable<ProvinceWhereUniqueInput>
    connect?: Enumerable<ProvinceWhereUniqueInput>
    update?: Enumerable<ProvinceUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<ProvinceUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<ProvinceScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutCountryInput>, Enumerable<StudentUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: StudentCreateManyCountryInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type CountryCreateNestedOneWithoutProvincesInput = {
    create?: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProvincesInput
    connect?: CountryWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutProvinceInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProvinceInput>, Enumerable<StudentUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProvinceInput>
    createMany?: StudentCreateManyProvinceInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProvinceInput>, Enumerable<StudentUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProvinceInput>
    createMany?: StudentCreateManyProvinceInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type CountryUpdateOneRequiredWithoutProvincesNestedInput = {
    create?: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutProvincesInput
    upsert?: CountryUpsertWithoutProvincesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutProvincesInput, CountryUncheckedUpdateWithoutProvincesInput>
  }

  export type StudentUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProvinceInput>, Enumerable<StudentUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProvinceInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProvinceInput>
    createMany?: StudentCreateManyProvinceInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProvinceInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProvinceInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProvinceInput>, Enumerable<StudentUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProvinceInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProvinceInput>
    createMany?: StudentCreateManyProvinceInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProvinceInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProvinceInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type ProvinceCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ProvinceCreateWithoutStudentsInput, ProvinceUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutStudentsInput
    connect?: ProvinceWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CountryCreateWithoutStudentsInput, CountryUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStudentsInput
    connect?: CountryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutStudentInput>, Enumerable<EnrollmentUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutStudentInput>
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type NoteCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<NoteCreateWithoutStudentInput>, Enumerable<NoteUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutStudentInput>
    createMany?: NoteCreateManyStudentInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type RefreshTokenCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutStudentInput>, Enumerable<RefreshTokenUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutStudentInput>
    createMany?: RefreshTokenCreateManyStudentInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutStudentInput>, Enumerable<EnrollmentUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutStudentInput>
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type NoteUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<NoteCreateWithoutStudentInput>, Enumerable<NoteUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutStudentInput>
    createMany?: NoteCreateManyStudentInputEnvelope
    connect?: Enumerable<NoteWhereUniqueInput>
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutStudentInput>, Enumerable<RefreshTokenUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutStudentInput>
    createMany?: RefreshTokenCreateManyStudentInputEnvelope
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
  }

  export type EnumStudentSexFieldUpdateOperationsInput = {
    set?: StudentSex
  }

  export type ProvinceUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<ProvinceCreateWithoutStudentsInput, ProvinceUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutStudentsInput
    upsert?: ProvinceUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProvinceWhereUniqueInput
    update?: XOR<ProvinceUpdateWithoutStudentsInput, ProvinceUncheckedUpdateWithoutStudentsInput>
  }

  export type CountryUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CountryCreateWithoutStudentsInput, CountryUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStudentsInput
    upsert?: CountryUpsertWithoutStudentsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutStudentsInput, CountryUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutStudentInput>, Enumerable<EnrollmentUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type NoteUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutStudentInput>, Enumerable<NoteUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: NoteCreateManyStudentInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type RefreshTokenUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutStudentInput>, Enumerable<RefreshTokenUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: RefreshTokenCreateManyStudentInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutStudentInput>, Enumerable<EnrollmentUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type NoteUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<NoteCreateWithoutStudentInput>, Enumerable<NoteUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<NoteCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<NoteUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: NoteCreateManyStudentInputEnvelope
    set?: Enumerable<NoteWhereUniqueInput>
    disconnect?: Enumerable<NoteWhereUniqueInput>
    delete?: Enumerable<NoteWhereUniqueInput>
    connect?: Enumerable<NoteWhereUniqueInput>
    update?: Enumerable<NoteUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<NoteUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<NoteScalarWhereInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Enumerable<RefreshTokenCreateWithoutStudentInput>, Enumerable<RefreshTokenUncheckedCreateWithoutStudentInput>>
    connectOrCreate?: Enumerable<RefreshTokenCreateOrConnectWithoutStudentInput>
    upsert?: Enumerable<RefreshTokenUpsertWithWhereUniqueWithoutStudentInput>
    createMany?: RefreshTokenCreateManyStudentInputEnvelope
    set?: Enumerable<RefreshTokenWhereUniqueInput>
    disconnect?: Enumerable<RefreshTokenWhereUniqueInput>
    delete?: Enumerable<RefreshTokenWhereUniqueInput>
    connect?: Enumerable<RefreshTokenWhereUniqueInput>
    update?: Enumerable<RefreshTokenUpdateWithWhereUniqueWithoutStudentInput>
    updateMany?: Enumerable<RefreshTokenUpdateManyWithWhereWithoutStudentInput>
    deleteMany?: Enumerable<RefreshTokenScalarWhereInput>
  }

  export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CurrencyCreateWithoutEnrollmentsInput, CurrencyUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutEnrollmentsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentMethodCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutEnrollmentInput>, Enumerable<PaymentMethodUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutEnrollmentInput>
    createMany?: PaymentMethodCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
  }

  export type TransactionCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutEnrollmentInput>, Enumerable<TransactionUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutEnrollmentInput>
    createMany?: TransactionCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutEnrollmentInput>, Enumerable<PaymentMethodUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutEnrollmentInput>
    createMany?: PaymentMethodCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutEnrollmentInput>, Enumerable<TransactionUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutEnrollmentInput>
    createMany?: TransactionCreateManyEnrollmentInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type EnumEnrollmentPaymentPlanFieldUpdateOperationsInput = {
    set?: EnrollmentPaymentPlan
  }

  export type NullableEnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: EnrollmentStatus | null
  }

  export type EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput = {
    set?: EnrollmentPaymentFrequency
  }

  export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    upsert?: StudentUpsertWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CurrencyCreateWithoutEnrollmentsInput, CurrencyUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutEnrollmentsInput
    upsert?: CurrencyUpsertWithoutEnrollmentsInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<CurrencyUpdateWithoutEnrollmentsInput, CurrencyUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateOneWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type PaymentMethodUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutEnrollmentInput>, Enumerable<PaymentMethodUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<PaymentMethodUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: PaymentMethodCreateManyEnrollmentInputEnvelope
    set?: Enumerable<PaymentMethodWhereUniqueInput>
    disconnect?: Enumerable<PaymentMethodWhereUniqueInput>
    delete?: Enumerable<PaymentMethodWhereUniqueInput>
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
    update?: Enumerable<PaymentMethodUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<PaymentMethodUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<PaymentMethodScalarWhereInput>
  }

  export type TransactionUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutEnrollmentInput>, Enumerable<TransactionUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: TransactionCreateManyEnrollmentInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutEnrollmentInput>, Enumerable<PaymentMethodUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<PaymentMethodUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: PaymentMethodCreateManyEnrollmentInputEnvelope
    set?: Enumerable<PaymentMethodWhereUniqueInput>
    disconnect?: Enumerable<PaymentMethodWhereUniqueInput>
    delete?: Enumerable<PaymentMethodWhereUniqueInput>
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
    update?: Enumerable<PaymentMethodUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<PaymentMethodUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<PaymentMethodScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutEnrollmentInput>, Enumerable<TransactionUncheckedCreateWithoutEnrollmentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutEnrollmentInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutEnrollmentInput>
    createMany?: TransactionCreateManyEnrollmentInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutEnrollmentInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutEnrollmentInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type PaymentMethodCreateNestedManyWithoutPaymentTypeInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutPaymentTypeInput>, Enumerable<PaymentMethodUncheckedCreateWithoutPaymentTypeInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutPaymentTypeInput>
    createMany?: PaymentMethodCreateManyPaymentTypeInputEnvelope
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutPaymentTypeInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutPaymentTypeInput>, Enumerable<PaymentMethodUncheckedCreateWithoutPaymentTypeInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutPaymentTypeInput>
    createMany?: PaymentMethodCreateManyPaymentTypeInputEnvelope
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
  }

  export type PaymentMethodUpdateManyWithoutPaymentTypeNestedInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutPaymentTypeInput>, Enumerable<PaymentMethodUncheckedCreateWithoutPaymentTypeInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutPaymentTypeInput>
    upsert?: Enumerable<PaymentMethodUpsertWithWhereUniqueWithoutPaymentTypeInput>
    createMany?: PaymentMethodCreateManyPaymentTypeInputEnvelope
    set?: Enumerable<PaymentMethodWhereUniqueInput>
    disconnect?: Enumerable<PaymentMethodWhereUniqueInput>
    delete?: Enumerable<PaymentMethodWhereUniqueInput>
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
    update?: Enumerable<PaymentMethodUpdateWithWhereUniqueWithoutPaymentTypeInput>
    updateMany?: Enumerable<PaymentMethodUpdateManyWithWhereWithoutPaymentTypeInput>
    deleteMany?: Enumerable<PaymentMethodScalarWhereInput>
  }

  export type PaymentMethodUncheckedUpdateManyWithoutPaymentTypeNestedInput = {
    create?: XOR<Enumerable<PaymentMethodCreateWithoutPaymentTypeInput>, Enumerable<PaymentMethodUncheckedCreateWithoutPaymentTypeInput>>
    connectOrCreate?: Enumerable<PaymentMethodCreateOrConnectWithoutPaymentTypeInput>
    upsert?: Enumerable<PaymentMethodUpsertWithWhereUniqueWithoutPaymentTypeInput>
    createMany?: PaymentMethodCreateManyPaymentTypeInputEnvelope
    set?: Enumerable<PaymentMethodWhereUniqueInput>
    disconnect?: Enumerable<PaymentMethodWhereUniqueInput>
    delete?: Enumerable<PaymentMethodWhereUniqueInput>
    connect?: Enumerable<PaymentMethodWhereUniqueInput>
    update?: Enumerable<PaymentMethodUpdateWithWhereUniqueWithoutPaymentTypeInput>
    updateMany?: Enumerable<PaymentMethodUpdateManyWithWhereWithoutPaymentTypeInput>
    deleteMany?: Enumerable<PaymentMethodScalarWhereInput>
  }

  export type EnrollmentCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentMethodsInput, EnrollmentUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentMethodsInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type PaymentTypeCreateNestedOneWithoutPaymentMethodsInput = {
    create?: XOR<PaymentTypeCreateWithoutPaymentMethodsInput, PaymentTypeUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutPaymentMethodsInput
    connect?: PaymentTypeWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutPaymentMethodInput>, Enumerable<TransactionUncheckedCreateWithoutPaymentMethodInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutPaymentMethodInput>
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutPaymentMethodInput>, Enumerable<TransactionUncheckedCreateWithoutPaymentMethodInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutPaymentMethodInput>
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type NullableEnumPaysafeCompanyFieldUpdateOperationsInput = {
    set?: PaysafeCompany | null
  }

  export type EnrollmentUpdateOneWithoutPaymentMethodsNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentMethodsInput, EnrollmentUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentMethodsInput
    upsert?: EnrollmentUpsertWithoutPaymentMethodsInput
    disconnect?: boolean
    delete?: boolean
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<EnrollmentUpdateWithoutPaymentMethodsInput, EnrollmentUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type PaymentTypeUpdateOneRequiredWithoutPaymentMethodsNestedInput = {
    create?: XOR<PaymentTypeCreateWithoutPaymentMethodsInput, PaymentTypeUncheckedCreateWithoutPaymentMethodsInput>
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutPaymentMethodsInput
    upsert?: PaymentTypeUpsertWithoutPaymentMethodsInput
    connect?: PaymentTypeWhereUniqueInput
    update?: XOR<PaymentTypeUpdateWithoutPaymentMethodsInput, PaymentTypeUncheckedUpdateWithoutPaymentMethodsInput>
  }

  export type TransactionUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutPaymentMethodInput>, Enumerable<TransactionUncheckedCreateWithoutPaymentMethodInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutPaymentMethodInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput>
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutPaymentMethodInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutPaymentMethodInput>, Enumerable<TransactionUncheckedCreateWithoutPaymentMethodInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutPaymentMethodInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput>
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutPaymentMethodInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type EnrollmentCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EnrollmentCreateWithoutTransactionsInput, EnrollmentUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTransactionsInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionsInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TransactionCreateWithoutChildrenInput, TransactionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutChildrenInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutParentInput>, Enumerable<TransactionUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutParentInput>
    createMany?: TransactionCreateManyParentInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type TransactionUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutParentInput>, Enumerable<TransactionUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutParentInput>
    createMany?: TransactionCreateManyParentInputEnvelope
    connect?: Enumerable<TransactionWhereUniqueInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: TransactionType
  }

  export type EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EnrollmentCreateWithoutTransactionsInput, EnrollmentUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutTransactionsInput
    upsert?: EnrollmentUpsertWithoutTransactionsInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<EnrollmentUpdateWithoutTransactionsInput, EnrollmentUncheckedUpdateWithoutTransactionsInput>
  }

  export type PaymentMethodUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionsInput
    upsert?: PaymentMethodUpsertWithoutTransactionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<PaymentMethodUpdateWithoutTransactionsInput, PaymentMethodUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TransactionCreateWithoutChildrenInput, TransactionUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutChildrenInput
    upsert?: TransactionUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<TransactionUpdateWithoutChildrenInput, TransactionUncheckedUpdateWithoutChildrenInput>
  }

  export type TransactionUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutParentInput>, Enumerable<TransactionUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutParentInput>
    createMany?: TransactionCreateManyParentInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type TransactionUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<TransactionCreateWithoutParentInput>, Enumerable<TransactionUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TransactionCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<TransactionUpsertWithWhereUniqueWithoutParentInput>
    createMany?: TransactionCreateManyParentInputEnvelope
    set?: Enumerable<TransactionWhereUniqueInput>
    disconnect?: Enumerable<TransactionWhereUniqueInput>
    delete?: Enumerable<TransactionWhereUniqueInput>
    connect?: Enumerable<TransactionWhereUniqueInput>
    update?: Enumerable<TransactionUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<TransactionUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<TransactionScalarWhereInput>
  }

  export type StudentCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<StudentCreateWithoutRefreshTokensInput, StudentUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRefreshTokensInput
    connect?: StudentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type StudentUpdateOneWithoutRefreshTokensNestedInput = {
    create?: XOR<StudentCreateWithoutRefreshTokensInput, StudentUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRefreshTokensInput
    upsert?: StudentUpsertWithoutRefreshTokensInput
    disconnect?: boolean
    delete?: boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutRefreshTokensInput, StudentUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateOneWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type StudentCreateNestedOneWithoutNotesInput = {
    create?: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNotesInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutNotesInput = {
    create?: XOR<CourseCreateWithoutNotesInput, CourseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutNotesInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNoteTypeFieldUpdateOperationsInput = {
    set?: NoteType
  }

  export type StudentUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNotesInput
    upsert?: StudentUpsertWithoutNotesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<StudentUpdateWithoutNotesInput, StudentUncheckedUpdateWithoutNotesInput>
  }

  export type CourseUpdateOneWithoutNotesNestedInput = {
    create?: XOR<CourseCreateWithoutNotesInput, CourseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutNotesInput
    upsert?: CourseUpsertWithoutNotesInput
    disconnect?: boolean
    delete?: boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutNotesInput, CourseUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumUserSexFilter = {
    equals?: UserSex
    in?: Enumerable<UserSex>
    notIn?: Enumerable<UserSex>
    not?: NestedEnumUserSexFilter | UserSex
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumUserSexWithAggregatesFilter = {
    equals?: UserSex
    in?: Enumerable<UserSex>
    notIn?: Enumerable<UserSex>
    not?: NestedEnumUserSexWithAggregatesFilter | UserSex
    _count?: NestedIntFilter
    _min?: NestedEnumUserSexFilter
    _max?: NestedEnumUserSexFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumStudentCenterAccountTypeFilter = {
    equals?: StudentCenterAccountType
    in?: Enumerable<StudentCenterAccountType>
    notIn?: Enumerable<StudentCenterAccountType>
    not?: NestedEnumStudentCenterAccountTypeFilter | StudentCenterAccountType
  }

  export type NestedEnumStudentCenterAccountTypeWithAggregatesFilter = {
    equals?: StudentCenterAccountType
    in?: Enumerable<StudentCenterAccountType>
    notIn?: Enumerable<StudentCenterAccountType>
    not?: NestedEnumStudentCenterAccountTypeWithAggregatesFilter | StudentCenterAccountType
    _count?: NestedIntFilter
    _min?: NestedEnumStudentCenterAccountTypeFilter
    _max?: NestedEnumStudentCenterAccountTypeFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedEnumStudentSexFilter = {
    equals?: StudentSex
    in?: Enumerable<StudentSex>
    notIn?: Enumerable<StudentSex>
    not?: NestedEnumStudentSexFilter | StudentSex
  }

  export type NestedEnumStudentSexWithAggregatesFilter = {
    equals?: StudentSex
    in?: Enumerable<StudentSex>
    notIn?: Enumerable<StudentSex>
    not?: NestedEnumStudentSexWithAggregatesFilter | StudentSex
    _count?: NestedIntFilter
    _min?: NestedEnumStudentSexFilter
    _max?: NestedEnumStudentSexFilter
  }

  export type NestedEnumEnrollmentPaymentPlanFilter = {
    equals?: EnrollmentPaymentPlan
    in?: Enumerable<EnrollmentPaymentPlan>
    notIn?: Enumerable<EnrollmentPaymentPlan>
    not?: NestedEnumEnrollmentPaymentPlanFilter | EnrollmentPaymentPlan
  }

  export type NestedEnumEnrollmentStatusNullableFilter = {
    equals?: EnrollmentStatus | null
    in?: Enumerable<EnrollmentStatus> | null
    notIn?: Enumerable<EnrollmentStatus> | null
    not?: NestedEnumEnrollmentStatusNullableFilter | EnrollmentStatus | null
  }

  export type NestedEnumEnrollmentPaymentFrequencyFilter = {
    equals?: EnrollmentPaymentFrequency
    in?: Enumerable<EnrollmentPaymentFrequency>
    notIn?: Enumerable<EnrollmentPaymentFrequency>
    not?: NestedEnumEnrollmentPaymentFrequencyFilter | EnrollmentPaymentFrequency
  }

  export type NestedEnumEnrollmentPaymentPlanWithAggregatesFilter = {
    equals?: EnrollmentPaymentPlan
    in?: Enumerable<EnrollmentPaymentPlan>
    notIn?: Enumerable<EnrollmentPaymentPlan>
    not?: NestedEnumEnrollmentPaymentPlanWithAggregatesFilter | EnrollmentPaymentPlan
    _count?: NestedIntFilter
    _min?: NestedEnumEnrollmentPaymentPlanFilter
    _max?: NestedEnumEnrollmentPaymentPlanFilter
  }

  export type NestedEnumEnrollmentStatusNullableWithAggregatesFilter = {
    equals?: EnrollmentStatus | null
    in?: Enumerable<EnrollmentStatus> | null
    notIn?: Enumerable<EnrollmentStatus> | null
    not?: NestedEnumEnrollmentStatusNullableWithAggregatesFilter | EnrollmentStatus | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEnrollmentStatusNullableFilter
    _max?: NestedEnumEnrollmentStatusNullableFilter
  }

  export type NestedEnumEnrollmentPaymentFrequencyWithAggregatesFilter = {
    equals?: EnrollmentPaymentFrequency
    in?: Enumerable<EnrollmentPaymentFrequency>
    notIn?: Enumerable<EnrollmentPaymentFrequency>
    not?: NestedEnumEnrollmentPaymentFrequencyWithAggregatesFilter | EnrollmentPaymentFrequency
    _count?: NestedIntFilter
    _min?: NestedEnumEnrollmentPaymentFrequencyFilter
    _max?: NestedEnumEnrollmentPaymentFrequencyFilter
  }

  export type NestedEnumPaysafeCompanyNullableFilter = {
    equals?: PaysafeCompany | null
    in?: Enumerable<PaysafeCompany> | null
    notIn?: Enumerable<PaysafeCompany> | null
    not?: NestedEnumPaysafeCompanyNullableFilter | PaysafeCompany | null
  }

  export type NestedEnumPaysafeCompanyNullableWithAggregatesFilter = {
    equals?: PaysafeCompany | null
    in?: Enumerable<PaysafeCompany> | null
    notIn?: Enumerable<PaysafeCompany> | null
    not?: NestedEnumPaysafeCompanyNullableWithAggregatesFilter | PaysafeCompany | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPaysafeCompanyNullableFilter
    _max?: NestedEnumPaysafeCompanyNullableFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedEnumTransactionTypeFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeFilter | TransactionType
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter = {
    equals?: TransactionType
    in?: Enumerable<TransactionType>
    notIn?: Enumerable<TransactionType>
    not?: NestedEnumTransactionTypeWithAggregatesFilter | TransactionType
    _count?: NestedIntFilter
    _min?: NestedEnumTransactionTypeFilter
    _max?: NestedEnumTransactionTypeFilter
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedEnumNoteTypeFilter = {
    equals?: NoteType
    in?: Enumerable<NoteType>
    notIn?: Enumerable<NoteType>
    not?: NestedEnumNoteTypeFilter | NoteType
  }

  export type NestedEnumNoteTypeWithAggregatesFilter = {
    equals?: NoteType
    in?: Enumerable<NoteType>
    notIn?: Enumerable<NoteType>
    not?: NestedEnumNoteTypeWithAggregatesFilter | NoteType
    _count?: NestedIntFilter
    _min?: NestedEnumNoteTypeFilter
    _max?: NestedEnumNoteTypeFilter
  }

  export type StudentCreateWithoutUserInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    country: CountryCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    studentId?: number
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: Enumerable<StudentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    enrollment: EnrollmentCreateNestedOneWithoutTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
    parent?: TransactionCreateNestedOneWithoutChildrenInput
    children?: TransactionCreateNestedManyWithoutParentInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    children?: TransactionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: Enumerable<TransactionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutNotesInput
    course?: CourseCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    noteId?: number
    studentId: number
    courseId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: Enumerable<NoteCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    refreshTokenId: Buffer
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
    student?: StudentCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    refreshTokenId: Buffer
    studentId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: Enumerable<RefreshTokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    studentId?: IntFilter | number
    currencyId?: IntFilter | number
    userId?: IntNullableFilter | number | null
    languageId?: IntFilter | number
    sex?: EnumStudentSexFilter | StudentSex
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    address1?: StringFilter | string
    address2?: StringFilter | string
    city?: StringFilter | string
    provinceId?: IntNullableFilter | number | null
    postalCode?: StringNullableFilter | string | null
    countryId?: IntFilter | number
    telephoneCountryCode?: IntFilter | number
    telephoneNumber?: StringFilter | string
    emailAddress?: StringFilter | string
    paymentStart?: DateTimeNullableFilter | Date | string | null
    paymentDay?: IntNullableFilter | number | null
    password?: StringNullableFilter | string | null
    e164?: StringFilter | string
    sms?: BoolFilter | boolean
    enrollmentCount?: IntFilter | number
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: Enumerable<EnrollmentScalarWhereInput>
    OR?: Enumerable<EnrollmentScalarWhereInput>
    NOT?: Enumerable<EnrollmentScalarWhereInput>
    enrollmentId?: IntFilter | number
    studentId?: IntFilter | number
    courseId?: IntFilter | number
    currencyId?: IntFilter | number
    userId?: IntNullableFilter | number | null
    enrollmentDate?: DateTimeFilter | Date | string
    expiryDate?: DateTimeNullableFilter | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFilter | EnrollmentPaymentPlan
    status?: EnumEnrollmentStatusNullableFilter | EnrollmentStatus | null
    statusDate?: DateTimeNullableFilter | Date | string | null
    gradEmailDate?: DateTimeNullableFilter | Date | string | null
    gradEmailSkip?: BoolFilter | boolean
    cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalFilter | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFilter | boolean
    hideFromShippingList?: BoolFilter | boolean
    paymentOverride?: BoolFilter | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFilter | EnrollmentPaymentFrequency
    paymentDay?: IntNullableFilter | number | null
    paymentStart?: DateTimeNullableFilter | Date | string | null
    accountId?: IntNullableFilter | number | null
    shippingNote?: StringNullableFilter | string | null
    preparedDate?: DateTimeNullableFilter | Date | string | null
    shippedDate?: DateTimeNullableFilter | Date | string | null
    diploma?: BoolFilter | boolean
    diplomaDate?: DateTimeNullableFilter | Date | string | null
    fastTrack?: BoolFilter | boolean
    noStudentCenter?: BoolFilter | boolean
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: Enumerable<TransactionScalarWhereInput>
    OR?: Enumerable<TransactionScalarWhereInput>
    NOT?: Enumerable<TransactionScalarWhereInput>
    transactionId?: IntFilter | number
    enrollmentId?: IntFilter | number
    paymentMethodId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    parentId?: IntNullableFilter | number | null
    transactionDate?: DateTimeFilter | Date | string
    transactionTime?: DateTimeNullableFilter | Date | string | null
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    usdAmount?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFilter | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFilter | Decimal | DecimalJsLike | number | string
    orderId?: StringNullableFilter | string | null
    responseCode?: IntNullableFilter | number | null
    authCode?: StringNullableFilter | string | null
    referenceNumber?: StringNullableFilter | string | null
    settlementId?: StringNullableFilter | string | null
    transactionNumber?: StringNullableFilter | string | null
    response?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    posted?: BoolNullableFilter | boolean | null
    postedDate?: DateTimeNullableFilter | Date | string | null
    notified?: BoolNullableFilter | boolean | null
    extraCharge?: BoolFilter | boolean
    auto?: BoolFilter | boolean
    reattempt?: BoolFilter | boolean
    transactionType?: EnumTransactionTypeFilter | TransactionType
    voided?: BoolFilter | boolean
    notes?: StringNullableFilter | string | null
    severity?: IntNullableFilter | number | null
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutNotesInput>
  }

  export type NoteScalarWhereInput = {
    AND?: Enumerable<NoteScalarWhereInput>
    OR?: Enumerable<NoteScalarWhereInput>
    NOT?: Enumerable<NoteScalarWhereInput>
    noteId?: IntFilter | number
    studentId?: IntFilter | number
    courseId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    note?: StringFilter | string
    type?: EnumNoteTypeFilter | NoteType
    starred?: BoolFilter | boolean
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: Enumerable<RefreshTokenScalarWhereInput>
    OR?: Enumerable<RefreshTokenScalarWhereInput>
    NOT?: Enumerable<RefreshTokenScalarWhereInput>
    refreshTokenId?: BytesFilter | Buffer
    studentId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    token?: BytesFilter | Buffer
    expiry?: DateTimeFilter | Date | string
    ipAddress?: BytesNullableFilter | Buffer | null
    browser?: StringNullableFilter | string | null
    browserVersion?: StringNullableFilter | string | null
    mobile?: BoolNullableFilter | boolean | null
    os?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type CourseCreateWithoutSchoolInput = {
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    notes?: NoteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSchoolInput = {
    courseId?: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    notes?: NoteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput>
  }

  export type CourseCreateManySchoolInputEnvelope = {
    data: Enumerable<CourseCreateManySchoolInput>
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutSchoolInput, CourseUncheckedUpdateWithoutSchoolInput>
    create: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutSchoolInput, CourseUncheckedUpdateWithoutSchoolInput>
  }

  export type CourseUpdateManyWithWhereWithoutSchoolInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCoursesInput>
  }

  export type CourseScalarWhereInput = {
    AND?: Enumerable<CourseScalarWhereInput>
    OR?: Enumerable<CourseScalarWhereInput>
    NOT?: Enumerable<CourseScalarWhereInput>
    courseId?: IntFilter | number
    schoolId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    prefix?: StringFilter | string
    maxAssignments?: IntNullableFilter | number | null
    order?: IntFilter | number
    enrollmentCount?: IntFilter | number
    cost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    installment?: DecimalFilter | Decimal | DecimalJsLike | number | string
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type SchoolCreateWithoutCoursesInput = {
    name: string
    courseCount?: number
    created?: Date | string
    modified?: Date | string | null
    studentCenterAccountType?: StudentCenterAccountType
  }

  export type SchoolUncheckedCreateWithoutCoursesInput = {
    schoolId?: number
    name: string
    courseCount?: number
    created?: Date | string
    modified?: Date | string | null
    studentCenterAccountType?: StudentCenterAccountType
  }

  export type SchoolCreateOrConnectWithoutCoursesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
  }

  export type EnrollmentCreateWithoutCourseInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    enrollmentId?: number
    studentId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutCourseInput = {
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutCourseInput = {
    noteId?: number
    studentId: number
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateOrConnectWithoutCourseInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCourseInput, NoteUncheckedCreateWithoutCourseInput>
  }

  export type NoteCreateManyCourseInputEnvelope = {
    data: Enumerable<NoteCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutCoursesInput = {
    update: XOR<SchoolUpdateWithoutCoursesInput, SchoolUncheckedUpdateWithoutCoursesInput>
    create: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
  }

  export type SchoolUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
  }

  export type SchoolUncheckedUpdateWithoutCoursesInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentCenterAccountType?: EnumStudentCenterAccountTypeFieldUpdateOperationsInput | StudentCenterAccountType
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutCourseInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCourseInput, NoteUncheckedUpdateWithoutCourseInput>
    create: XOR<NoteCreateWithoutCourseInput, NoteUncheckedCreateWithoutCourseInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCourseInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCourseInput, NoteUncheckedUpdateWithoutCourseInput>
  }

  export type NoteUpdateManyWithWhereWithoutCourseInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutNotesInput>
  }

  export type EnrollmentCreateWithoutCurrencyInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutCurrencyInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutCurrencyInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCurrencyInput, EnrollmentUncheckedCreateWithoutCurrencyInput>
  }

  export type EnrollmentCreateManyCurrencyInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyCurrencyInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCurrencyInput, EnrollmentUncheckedUpdateWithoutCurrencyInput>
    create: XOR<EnrollmentCreateWithoutCurrencyInput, EnrollmentUncheckedCreateWithoutCurrencyInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCurrencyInput, EnrollmentUncheckedUpdateWithoutCurrencyInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCurrencyInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type ProvinceCreateWithoutCountryInput = {
    provinceId: number
    code: string
    name: string
    studentCount?: number
    students?: StudentCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutCountryInput = {
    provinceId: number
    code: string
    name: string
    studentCount?: number
    students?: StudentUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput>
  }

  export type ProvinceCreateManyCountryInputEnvelope = {
    data: Enumerable<ProvinceCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutCountryInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCountryInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCountryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCountryInput, StudentUncheckedCreateWithoutCountryInput>
  }

  export type StudentCreateManyCountryInputEnvelope = {
    data: Enumerable<StudentCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithWhereUniqueWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    update: XOR<ProvinceUpdateWithoutCountryInput, ProvinceUncheckedUpdateWithoutCountryInput>
    create: XOR<ProvinceCreateWithoutCountryInput, ProvinceUncheckedCreateWithoutCountryInput>
  }

  export type ProvinceUpdateWithWhereUniqueWithoutCountryInput = {
    where: ProvinceWhereUniqueInput
    data: XOR<ProvinceUpdateWithoutCountryInput, ProvinceUncheckedUpdateWithoutCountryInput>
  }

  export type ProvinceUpdateManyWithWhereWithoutCountryInput = {
    where: ProvinceScalarWhereInput
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyWithoutProvincesInput>
  }

  export type ProvinceScalarWhereInput = {
    AND?: Enumerable<ProvinceScalarWhereInput>
    OR?: Enumerable<ProvinceScalarWhereInput>
    NOT?: Enumerable<ProvinceScalarWhereInput>
    provinceId?: IntFilter | number
    countryId?: IntFilter | number
    code?: StringFilter | string
    name?: StringFilter | string
    studentCount?: IntFilter | number
  }

  export type StudentUpsertWithWhereUniqueWithoutCountryInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCountryInput, StudentUncheckedUpdateWithoutCountryInput>
    create: XOR<StudentCreateWithoutCountryInput, StudentUncheckedCreateWithoutCountryInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCountryInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCountryInput, StudentUncheckedUpdateWithoutCountryInput>
  }

  export type StudentUpdateManyWithWhereWithoutCountryInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type CountryCreateWithoutProvincesInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    students?: StudentCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutProvincesInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    students?: StudentUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutProvincesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
  }

  export type StudentCreateWithoutProvinceInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    country: CountryCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutProvinceInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutProvinceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProvinceInput, StudentUncheckedCreateWithoutProvinceInput>
  }

  export type StudentCreateManyProvinceInputEnvelope = {
    data: Enumerable<StudentCreateManyProvinceInput>
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutProvincesInput = {
    update: XOR<CountryUpdateWithoutProvincesInput, CountryUncheckedUpdateWithoutProvincesInput>
    create: XOR<CountryCreateWithoutProvincesInput, CountryUncheckedCreateWithoutProvincesInput>
  }

  export type CountryUpdateWithoutProvincesInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    students?: StudentUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutProvincesInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutProvinceInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutProvinceInput, StudentUncheckedUpdateWithoutProvinceInput>
    create: XOR<StudentCreateWithoutProvinceInput, StudentUncheckedCreateWithoutProvinceInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutProvinceInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutProvinceInput, StudentUncheckedUpdateWithoutProvinceInput>
  }

  export type StudentUpdateManyWithWhereWithoutProvinceInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type ProvinceCreateWithoutStudentsInput = {
    provinceId: number
    code: string
    name: string
    studentCount?: number
    country: CountryCreateNestedOneWithoutProvincesInput
  }

  export type ProvinceUncheckedCreateWithoutStudentsInput = {
    provinceId: number
    countryId: number
    code: string
    name: string
    studentCount?: number
  }

  export type ProvinceCreateOrConnectWithoutStudentsInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutStudentsInput, ProvinceUncheckedCreateWithoutStudentsInput>
  }

  export type CountryCreateWithoutStudentsInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    provinces?: ProvinceCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutStudentsInput = {
    countryId: number
    code: string
    name: string
    iso?: number | null
    eu?: boolean
    noShipping?: boolean
    needsPostalCode?: boolean
    studentCount?: number
    provinces?: ProvinceUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutStudentsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStudentsInput, CountryUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentsInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type EnrollmentCreateWithoutStudentInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    enrollmentId?: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutStudentInput = {
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
    course?: CourseCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutStudentInput = {
    noteId?: number
    courseId?: number | null
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateOrConnectWithoutStudentInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutStudentInput, NoteUncheckedCreateWithoutStudentInput>
  }

  export type NoteCreateManyStudentInputEnvelope = {
    data: Enumerable<NoteCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutStudentInput = {
    refreshTokenId: Buffer
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
    user?: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateWithoutStudentInput = {
    refreshTokenId: Buffer
    userId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutStudentInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutStudentInput, RefreshTokenUncheckedCreateWithoutStudentInput>
  }

  export type RefreshTokenCreateManyStudentInputEnvelope = {
    data: Enumerable<RefreshTokenCreateManyStudentInput>
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutStudentsInput = {
    update: XOR<ProvinceUpdateWithoutStudentsInput, ProvinceUncheckedUpdateWithoutStudentsInput>
    create: XOR<ProvinceCreateWithoutStudentsInput, ProvinceUncheckedCreateWithoutStudentsInput>
  }

  export type ProvinceUpdateWithoutStudentsInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutProvincesNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutStudentsInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type CountryUpsertWithoutStudentsInput = {
    update: XOR<CountryUpdateWithoutStudentsInput, CountryUncheckedUpdateWithoutStudentsInput>
    create: XOR<CountryCreateWithoutStudentsInput, CountryUncheckedCreateWithoutStudentsInput>
  }

  export type CountryUpdateWithoutStudentsInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    provinces?: ProvinceUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStudentsInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iso?: NullableIntFieldUpdateOperationsInput | number | null
    eu?: BoolFieldUpdateOperationsInput | boolean
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    needsPostalCode?: BoolFieldUpdateOperationsInput | boolean
    studentCount?: IntFieldUpdateOperationsInput | number
    provinces?: ProvinceUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutStudentInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutStudentInput, NoteUncheckedUpdateWithoutStudentInput>
    create: XOR<NoteCreateWithoutStudentInput, NoteUncheckedCreateWithoutStudentInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutStudentInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutStudentInput, NoteUncheckedUpdateWithoutStudentInput>
  }

  export type NoteUpdateManyWithWhereWithoutStudentInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutNotesInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutStudentInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutStudentInput, RefreshTokenUncheckedUpdateWithoutStudentInput>
    create: XOR<RefreshTokenCreateWithoutStudentInput, RefreshTokenUncheckedCreateWithoutStudentInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutStudentInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutStudentInput, RefreshTokenUncheckedUpdateWithoutStudentInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutStudentInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput>
  }

  export type StudentCreateWithoutEnrollmentsInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    country: CountryCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    notes?: NoteCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    school: SchoolCreateNestedOneWithoutCoursesInput
    notes?: NoteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    courseId?: number
    schoolId: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    notes?: NoteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CurrencyCreateWithoutEnrollmentsInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
  }

  export type CurrencyUncheckedCreateWithoutEnrollmentsInput = {
    currencyId?: number
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
  }

  export type CurrencyCreateOrConnectWithoutEnrollmentsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutEnrollmentsInput, CurrencyUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type PaymentMethodCreateWithoutEnrollmentInput = {
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    paymentType: PaymentTypeCreateNestedOneWithoutPaymentMethodsInput
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutEnrollmentInput = {
    paymentMethodId?: number
    paymentTypeId: number
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutEnrollmentInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutEnrollmentInput, PaymentMethodUncheckedCreateWithoutEnrollmentInput>
  }

  export type PaymentMethodCreateManyEnrollmentInputEnvelope = {
    data: Enumerable<PaymentMethodCreateManyEnrollmentInput>
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEnrollmentInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
    user?: UserCreateNestedOneWithoutTransactionsInput
    parent?: TransactionCreateNestedOneWithoutChildrenInput
    children?: TransactionCreateNestedManyWithoutParentInput
  }

  export type TransactionUncheckedCreateWithoutEnrollmentInput = {
    transactionId?: number
    paymentMethodId?: number | null
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    children?: TransactionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TransactionCreateOrConnectWithoutEnrollmentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEnrollmentInput, TransactionUncheckedCreateWithoutEnrollmentInput>
  }

  export type TransactionCreateManyEnrollmentInputEnvelope = {
    data: Enumerable<TransactionCreateManyEnrollmentInput>
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutEnrollmentsInput = {
    update: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type StudentUpdateWithoutEnrollmentsInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    notes?: NoteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NoteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CurrencyUpsertWithoutEnrollmentsInput = {
    update: XOR<CurrencyUpdateWithoutEnrollmentsInput, CurrencyUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CurrencyCreateWithoutEnrollmentsInput, CurrencyUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CurrencyUpdateWithoutEnrollmentsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CurrencyUncheckedUpdateWithoutEnrollmentsInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutEnrollmentInput, PaymentMethodUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<PaymentMethodCreateWithoutEnrollmentInput, PaymentMethodUncheckedCreateWithoutEnrollmentInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutEnrollmentInput, PaymentMethodUncheckedUpdateWithoutEnrollmentInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutEnrollmentInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutPaymentMethodsInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: Enumerable<PaymentMethodScalarWhereInput>
    OR?: Enumerable<PaymentMethodScalarWhereInput>
    NOT?: Enumerable<PaymentMethodScalarWhereInput>
    paymentMethodId?: IntFilter | number
    enrollmentId?: IntNullableFilter | number | null
    paymentTypeId?: IntFilter | number
    primary?: BoolFilter | boolean
    paysafeProfileId?: StringNullableFilter | string | null
    paysafeCardId?: StringNullableFilter | string | null
    paysafePaymentToken?: StringNullableFilter | string | null
    paysafeCompany?: EnumPaysafeCompanyNullableFilter | PaysafeCompany | null
    pan?: StringNullableFilter | string | null
    expiryMonth?: IntNullableFilter | number | null
    expiryYear?: IntNullableFilter | number | null
    deleted?: BoolFilter | boolean
    notified?: BoolFilter | boolean
    disabled?: BoolFilter | boolean
    transactionCount?: IntFilter | number
    created?: DateTimeFilter | Date | string
    modified?: DateTimeNullableFilter | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEnrollmentInput, TransactionUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<TransactionCreateWithoutEnrollmentInput, TransactionUncheckedCreateWithoutEnrollmentInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEnrollmentInput, TransactionUncheckedUpdateWithoutEnrollmentInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEnrollmentInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type PaymentMethodCreateWithoutPaymentTypeInput = {
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollment?: EnrollmentCreateNestedOneWithoutPaymentMethodsInput
    transactions?: TransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateWithoutPaymentTypeInput = {
    paymentMethodId?: number
    enrollmentId?: number | null
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodCreateOrConnectWithoutPaymentTypeInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPaymentTypeInput, PaymentMethodUncheckedCreateWithoutPaymentTypeInput>
  }

  export type PaymentMethodCreateManyPaymentTypeInputEnvelope = {
    data: Enumerable<PaymentMethodCreateManyPaymentTypeInput>
    skipDuplicates?: boolean
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutPaymentTypeInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutPaymentTypeInput, PaymentMethodUncheckedUpdateWithoutPaymentTypeInput>
    create: XOR<PaymentMethodCreateWithoutPaymentTypeInput, PaymentMethodUncheckedCreateWithoutPaymentTypeInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutPaymentTypeInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutPaymentTypeInput, PaymentMethodUncheckedUpdateWithoutPaymentTypeInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutPaymentTypeInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutPaymentMethodsInput>
  }

  export type EnrollmentCreateWithoutPaymentMethodsInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    transactions?: TransactionCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutPaymentMethodsInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutPaymentMethodsInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutPaymentMethodsInput, EnrollmentUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type PaymentTypeCreateWithoutPaymentMethodsInput = {
    name: string
  }

  export type PaymentTypeUncheckedCreateWithoutPaymentMethodsInput = {
    paymentTypeId?: number
    name: string
  }

  export type PaymentTypeCreateOrConnectWithoutPaymentMethodsInput = {
    where: PaymentTypeWhereUniqueInput
    create: XOR<PaymentTypeCreateWithoutPaymentMethodsInput, PaymentTypeUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type TransactionCreateWithoutPaymentMethodInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    enrollment: EnrollmentCreateNestedOneWithoutTransactionsInput
    user?: UserCreateNestedOneWithoutTransactionsInput
    parent?: TransactionCreateNestedOneWithoutChildrenInput
    children?: TransactionCreateNestedManyWithoutParentInput
  }

  export type TransactionUncheckedCreateWithoutPaymentMethodInput = {
    transactionId?: number
    enrollmentId: number
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    children?: TransactionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TransactionCreateOrConnectWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionCreateManyPaymentMethodInputEnvelope = {
    data: Enumerable<TransactionCreateManyPaymentMethodInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithoutPaymentMethodsInput = {
    update: XOR<EnrollmentUpdateWithoutPaymentMethodsInput, EnrollmentUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<EnrollmentCreateWithoutPaymentMethodsInput, EnrollmentUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type EnrollmentUpdateWithoutPaymentMethodsInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutPaymentMethodsInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type PaymentTypeUpsertWithoutPaymentMethodsInput = {
    update: XOR<PaymentTypeUpdateWithoutPaymentMethodsInput, PaymentTypeUncheckedUpdateWithoutPaymentMethodsInput>
    create: XOR<PaymentTypeCreateWithoutPaymentMethodsInput, PaymentTypeUncheckedCreateWithoutPaymentMethodsInput>
  }

  export type PaymentTypeUpdateWithoutPaymentMethodsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTypeUncheckedUpdateWithoutPaymentMethodsInput = {
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type EnrollmentCreateWithoutTransactionsInput = {
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    student: StudentCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    currency: CurrencyCreateNestedOneWithoutEnrollmentsInput
    user?: UserCreateNestedOneWithoutEnrollmentsInput
    paymentMethods?: PaymentMethodCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutTransactionsInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
    paymentMethods?: PaymentMethodUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutTransactionsInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutTransactionsInput, EnrollmentUncheckedCreateWithoutTransactionsInput>
  }

  export type PaymentMethodCreateWithoutTransactionsInput = {
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollment?: EnrollmentCreateNestedOneWithoutPaymentMethodsInput
    paymentType: PaymentTypeCreateNestedOneWithoutPaymentMethodsInput
  }

  export type PaymentMethodUncheckedCreateWithoutTransactionsInput = {
    paymentMethodId?: number
    enrollmentId?: number | null
    paymentTypeId: number
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type PaymentMethodCreateOrConnectWithoutTransactionsInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionCreateWithoutChildrenInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    enrollment: EnrollmentCreateNestedOneWithoutTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
    user?: UserCreateNestedOneWithoutTransactionsInput
    parent?: TransactionCreateNestedOneWithoutChildrenInput
  }

  export type TransactionUncheckedCreateWithoutChildrenInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutChildrenInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutChildrenInput, TransactionUncheckedCreateWithoutChildrenInput>
  }

  export type TransactionCreateWithoutParentInput = {
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    enrollment: EnrollmentCreateNestedOneWithoutTransactionsInput
    paymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionsInput
    user?: UserCreateNestedOneWithoutTransactionsInput
    children?: TransactionCreateNestedManyWithoutParentInput
  }

  export type TransactionUncheckedCreateWithoutParentInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    userId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
    children?: TransactionUncheckedCreateNestedManyWithoutParentInput
  }

  export type TransactionCreateOrConnectWithoutParentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutParentInput, TransactionUncheckedCreateWithoutParentInput>
  }

  export type TransactionCreateManyParentInputEnvelope = {
    data: Enumerable<TransactionCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithoutTransactionsInput = {
    update: XOR<EnrollmentUpdateWithoutTransactionsInput, EnrollmentUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EnrollmentCreateWithoutTransactionsInput, EnrollmentUncheckedCreateWithoutTransactionsInput>
  }

  export type EnrollmentUpdateWithoutTransactionsInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutTransactionsInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type PaymentMethodUpsertWithoutTransactionsInput = {
    update: XOR<PaymentMethodUpdateWithoutTransactionsInput, PaymentMethodUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PaymentMethodCreateWithoutTransactionsInput, PaymentMethodUncheckedCreateWithoutTransactionsInput>
  }

  export type PaymentMethodUpdateWithoutTransactionsInput = {
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneWithoutPaymentMethodsNestedInput
    paymentType?: PaymentTypeUpdateOneRequiredWithoutPaymentMethodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutTransactionsInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutChildrenInput = {
    update: XOR<TransactionUpdateWithoutChildrenInput, TransactionUncheckedUpdateWithoutChildrenInput>
    create: XOR<TransactionCreateWithoutChildrenInput, TransactionUncheckedCreateWithoutChildrenInput>
  }

  export type TransactionUpdateWithoutChildrenInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneWithoutTransactionsNestedInput
    parent?: TransactionUpdateOneWithoutChildrenNestedInput
  }

  export type TransactionUncheckedUpdateWithoutChildrenInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutParentInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutParentInput, TransactionUncheckedUpdateWithoutParentInput>
    create: XOR<TransactionCreateWithoutParentInput, TransactionUncheckedCreateWithoutParentInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutParentInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutParentInput, TransactionUncheckedUpdateWithoutParentInput>
  }

  export type TransactionUpdateManyWithWhereWithoutParentInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutChildrenInput>
  }

  export type StudentCreateWithoutRefreshTokensInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    country: CountryCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    notes?: NoteCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRefreshTokensInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    notes?: NoteUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRefreshTokensInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRefreshTokensInput, StudentUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserCreateWithoutRefreshTokensInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type StudentUpsertWithoutRefreshTokensInput = {
    update: XOR<StudentUpdateWithoutRefreshTokensInput, StudentUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<StudentCreateWithoutRefreshTokensInput, StudentUncheckedCreateWithoutRefreshTokensInput>
  }

  export type StudentUpdateWithoutRefreshTokensInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRefreshTokensInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateWithoutNotesInput = {
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    province?: ProvinceCreateNestedOneWithoutStudentsInput
    country: CountryCreateNestedOneWithoutStudentsInput
    user?: UserCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutNotesInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutNotesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
  }

  export type CourseCreateWithoutNotesInput = {
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    school: SchoolCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutNotesInput = {
    courseId?: number
    schoolId: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutNotesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutNotesInput, CourseUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    userId?: number
    username: string
    password: string
    sex?: UserSex
    firstName: string
    lastName: string
    emailAddress?: string | null
    adminPriv?: boolean
    accountingPriv?: boolean
    created?: Date | string
    modified?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type StudentUpsertWithoutNotesInput = {
    update: XOR<StudentUpdateWithoutNotesInput, StudentUncheckedUpdateWithoutNotesInput>
    create: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
  }

  export type StudentUpdateWithoutNotesInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutNotesInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutNotesInput = {
    update: XOR<CourseUpdateWithoutNotesInput, CourseUncheckedUpdateWithoutNotesInput>
    create: XOR<CourseCreateWithoutNotesInput, CourseUncheckedCreateWithoutNotesInput>
  }

  export type CourseUpdateWithoutNotesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutNotesInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sex?: EnumUserSexFieldUpdateOperationsInput | UserSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    adminPriv?: BoolFieldUpdateOperationsInput | boolean
    accountingPriv?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateManyUserInput = {
    studentId?: number
    currencyId: number
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type EnrollmentCreateManyUserInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    currencyId: number
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionCreateManyUserInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateManyUserInput = {
    noteId?: number
    studentId: number
    courseId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    refreshTokenId: Buffer
    studentId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type StudentUpdateWithoutUserInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutStudentsInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUpdateWithoutUserInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutUserInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
    parent?: TransactionUpdateOneWithoutChildrenNestedInput
    children?: TransactionUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: TransactionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutTransactionsInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteUpdateWithoutUserInput = {
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutNotesNestedInput
    course?: CourseUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoteUncheckedUpdateManyWithoutNotesInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutRefreshTokensInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseCreateManySchoolInput = {
    courseId?: number
    code: string
    name: string
    prefix: string
    maxAssignments?: number | null
    order?: number
    enrollmentCount?: number
    cost?: Decimal | DecimalJsLike | number | string
    installment?: Decimal | DecimalJsLike | number | string
    created?: Date | string
    modified?: Date | string | null
  }

  export type CourseUpdateWithoutSchoolInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    notes?: NoteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSchoolInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    notes?: NoteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCoursesInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateManyCourseInput = {
    enrollmentId?: number
    studentId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateManyCourseInput = {
    noteId?: number
    studentId: number
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type NoteUpdateWithoutCourseInput = {
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutCourseInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateManyCurrencyInput = {
    enrollmentId?: number
    studentId: number
    courseId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type EnrollmentUpdateWithoutCurrencyInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCurrencyInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type ProvinceCreateManyCountryInput = {
    provinceId: number
    code: string
    name: string
    studentCount?: number
  }

  export type StudentCreateManyCountryInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    provinceId?: number | null
    postalCode?: string | null
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type ProvinceUpdateWithoutCountryInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    students?: StudentUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutCountryInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateManyWithoutProvincesInput = {
    provinceId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudentUpdateWithoutCountryInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    province?: ProvinceUpdateOneWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCountryInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    provinceId?: NullableIntFieldUpdateOperationsInput | number | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyProvinceInput = {
    studentId?: number
    currencyId: number
    userId?: number | null
    languageId: number
    sex?: StudentSex
    firstName: string
    lastName: string
    address1: string
    address2: string
    city: string
    postalCode?: string | null
    countryId: number
    telephoneCountryCode: number
    telephoneNumber: string
    emailAddress: string
    paymentStart?: Date | string | null
    paymentDay?: number | null
    password?: string | null
    e164: string
    sms?: boolean
    enrollmentCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type StudentUpdateWithoutProvinceInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: CountryUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    notes?: NoteUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutProvinceInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    languageId?: IntFieldUpdateOperationsInput | number
    sex?: EnumStudentSexFieldUpdateOperationsInput | StudentSex
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: IntFieldUpdateOperationsInput | number
    telephoneCountryCode?: IntFieldUpdateOperationsInput | number
    telephoneNumber?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    e164?: StringFieldUpdateOperationsInput | string
    sms?: BoolFieldUpdateOperationsInput | boolean
    enrollmentCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    notes?: NoteUncheckedUpdateManyWithoutStudentNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type EnrollmentCreateManyStudentInput = {
    enrollmentId?: number
    courseId: number
    currencyId: number
    userId?: number | null
    enrollmentDate: Date | string
    expiryDate?: Date | string | null
    paymentPlan: EnrollmentPaymentPlan
    status?: EnrollmentStatus | null
    statusDate?: Date | string | null
    gradEmailDate?: Date | string | null
    gradEmailSkip?: boolean
    cost: Decimal | DecimalJsLike | number | string
    discount: Decimal | DecimalJsLike | number | string
    installment: Decimal | DecimalJsLike | number | string
    noShipping?: boolean
    hideFromShippingList?: boolean
    paymentOverride?: boolean
    paymentFrequency?: EnrollmentPaymentFrequency
    paymentDay?: number | null
    paymentStart?: Date | string | null
    accountId?: number | null
    shippingNote?: string | null
    preparedDate?: Date | string | null
    shippedDate?: Date | string | null
    diploma?: boolean
    diplomaDate?: Date | string | null
    fastTrack?: boolean
    noStudentCenter?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type NoteCreateManyStudentInput = {
    noteId?: number
    courseId?: number | null
    userId?: number | null
    note: string
    type?: NoteType
    starred?: boolean
    created?: Date | string
    modified?: Date | string | null
  }

  export type RefreshTokenCreateManyStudentInput = {
    refreshTokenId: Buffer
    userId?: number | null
    token: Buffer
    expiry: Date | string
    ipAddress?: Buffer | null
    browser?: string | null
    browserVersion?: string | null
    mobile?: boolean | null
    os?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutEnrollmentsNestedInput
    user?: UserUpdateOneWithoutEnrollmentsNestedInput
    paymentMethods?: PaymentMethodUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    currencyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentPlan?: EnumEnrollmentPaymentPlanFieldUpdateOperationsInput | EnrollmentPaymentPlan
    status?: NullableEnumEnrollmentStatusFieldUpdateOperationsInput | EnrollmentStatus | null
    statusDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradEmailSkip?: BoolFieldUpdateOperationsInput | boolean
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    installment?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    noShipping?: BoolFieldUpdateOperationsInput | boolean
    hideFromShippingList?: BoolFieldUpdateOperationsInput | boolean
    paymentOverride?: BoolFieldUpdateOperationsInput | boolean
    paymentFrequency?: EnumEnrollmentPaymentFrequencyFieldUpdateOperationsInput | EnrollmentPaymentFrequency
    paymentDay?: NullableIntFieldUpdateOperationsInput | number | null
    paymentStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingNote?: NullableStringFieldUpdateOperationsInput | string | null
    preparedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shippedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diploma?: BoolFieldUpdateOperationsInput | boolean
    diplomaDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    noStudentCenter?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethods?: PaymentMethodUncheckedUpdateManyWithoutEnrollmentNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type NoteUpdateWithoutStudentInput = {
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutStudentInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    note?: StringFieldUpdateOperationsInput | string
    type?: EnumNoteTypeFieldUpdateOperationsInput | NoteType
    starred?: BoolFieldUpdateOperationsInput | boolean
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUpdateWithoutStudentInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutStudentInput = {
    refreshTokenId?: BytesFieldUpdateOperationsInput | Buffer
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    token?: BytesFieldUpdateOperationsInput | Buffer
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodCreateManyEnrollmentInput = {
    paymentMethodId?: number
    paymentTypeId: number
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionCreateManyEnrollmentInput = {
    transactionId?: number
    paymentMethodId?: number | null
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type PaymentMethodUpdateWithoutEnrollmentInput = {
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentType?: PaymentTypeUpdateOneRequiredWithoutPaymentMethodsNestedInput
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutEnrollmentInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateManyWithoutPaymentMethodsInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    paymentTypeId?: IntFieldUpdateOperationsInput | number
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutEnrollmentInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneWithoutTransactionsNestedInput
    parent?: TransactionUpdateOneWithoutChildrenNestedInput
    children?: TransactionUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEnrollmentInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: TransactionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PaymentMethodCreateManyPaymentTypeInput = {
    paymentMethodId?: number
    enrollmentId?: number | null
    primary: boolean
    paysafeProfileId?: string | null
    paysafeCardId?: string | null
    paysafePaymentToken?: string | null
    paysafeCompany?: PaysafeCompany | null
    pan?: string | null
    expiryMonth?: number | null
    expiryYear?: number | null
    deleted?: boolean
    notified?: boolean
    disabled?: boolean
    transactionCount?: number
    created?: Date | string
    modified?: Date | string | null
  }

  export type PaymentMethodUpdateWithoutPaymentTypeInput = {
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneWithoutPaymentMethodsNestedInput
    transactions?: TransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateWithoutPaymentTypeInput = {
    paymentMethodId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: NullableIntFieldUpdateOperationsInput | number | null
    primary?: BoolFieldUpdateOperationsInput | boolean
    paysafeProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCardId?: NullableStringFieldUpdateOperationsInput | string | null
    paysafePaymentToken?: NullableStringFieldUpdateOperationsInput | string | null
    paysafeCompany?: NullableEnumPaysafeCompanyFieldUpdateOperationsInput | PaysafeCompany | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    expiryMonth?: NullableIntFieldUpdateOperationsInput | number | null
    expiryYear?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    transactionCount?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type TransactionCreateManyPaymentMethodInput = {
    transactionId?: number
    enrollmentId: number
    userId?: number | null
    parentId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionUpdateWithoutPaymentMethodInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneWithoutTransactionsNestedInput
    parent?: TransactionUpdateOneWithoutChildrenNestedInput
    children?: TransactionUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentMethodInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: TransactionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TransactionCreateManyParentInput = {
    transactionId?: number
    enrollmentId: number
    paymentMethodId?: number | null
    userId?: number | null
    transactionDate: Date | string
    transactionTime?: Date | string | null
    amount: Decimal | DecimalJsLike | number | string
    attemptedAmount: Decimal | DecimalJsLike | number | string
    usdAmount?: Decimal | DecimalJsLike | number | string | null
    refund?: Decimal | DecimalJsLike | number | string
    chargeback?: Decimal | DecimalJsLike | number | string
    orderId?: string | null
    responseCode?: number | null
    authCode?: string | null
    referenceNumber?: string | null
    settlementId?: string | null
    transactionNumber?: string | null
    response?: string | null
    description?: string | null
    posted?: boolean | null
    postedDate?: Date | string | null
    notified?: boolean | null
    extraCharge?: boolean
    auto?: boolean
    reattempt?: boolean
    transactionType?: TransactionType
    voided?: boolean
    notes?: string | null
    severity?: number | null
    created?: Date | string
    modified?: Date | string | null
  }

  export type TransactionUpdateWithoutParentInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enrollment?: EnrollmentUpdateOneRequiredWithoutTransactionsNestedInput
    paymentMethod?: PaymentMethodUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneWithoutTransactionsNestedInput
    children?: TransactionUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateWithoutParentInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: TransactionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutChildrenInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    paymentMethodId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    attemptedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usdAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    refund?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chargeback?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    responseCode?: NullableIntFieldUpdateOperationsInput | number | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    settlementId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    response?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    posted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    postedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    extraCharge?: BoolFieldUpdateOperationsInput | boolean
    auto?: BoolFieldUpdateOperationsInput | boolean
    reattempt?: BoolFieldUpdateOperationsInput | boolean
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | TransactionType
    voided?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}