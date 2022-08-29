
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
 * Model Course
 * 
 */
export type Course = {
  courseId: number
  schoolId: number
  code: string
  version: number
  studentTypeId: string
  name: string
  courseGuide: boolean
  quizzesEnabled: boolean
  noTutor: boolean
  submissionType: number
  enabled: boolean
  order: number
  submissionsEnabled: boolean
  entityVersion: number
}

/**
 * Model Enrollment
 * 
 */
export type Enrollment = {
  enrollmentId: number
  courseId: number
  studentNumber: number
  studentId: number
  tutorId: number | null
  maxAssignments: number | null
  graduated: boolean
  assignmentsDisabled: boolean
  quizzesDisabled: boolean
  onHold: boolean
  holdReason: string | null
  currencyCode: string
  courseCost: Prisma.Decimal
  amountPaid: Prisma.Decimal
  monthlyInstallment: Prisma.Decimal | null
  enrollmentDate: Date | null
  fastTrack: boolean
  paymentsDisabled: boolean
  updated: Date | null
  entityVersion: number
  timestamp: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<GlobalReject>;
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
    Course: 'Course',
    Enrollment: 'Enrollment'
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

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CourseCountOutputType
   */


  export type CourseCountOutputType = {
    enrollments: number
  }

  export type CourseCountOutputTypeSelect = {
    enrollments?: boolean
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
   * Models
   */

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
    version: number | null
    submissionType: number | null
    order: number | null
    entityVersion: number | null
  }

  export type CourseSumAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    version: number | null
    submissionType: number | null
    order: number | null
    entityVersion: number | null
  }

  export type CourseMinAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    code: string | null
    version: number | null
    studentTypeId: string | null
    name: string | null
    courseGuide: boolean | null
    quizzesEnabled: boolean | null
    noTutor: boolean | null
    submissionType: number | null
    enabled: boolean | null
    order: number | null
    submissionsEnabled: boolean | null
    entityVersion: number | null
  }

  export type CourseMaxAggregateOutputType = {
    courseId: number | null
    schoolId: number | null
    code: string | null
    version: number | null
    studentTypeId: string | null
    name: string | null
    courseGuide: boolean | null
    quizzesEnabled: boolean | null
    noTutor: boolean | null
    submissionType: number | null
    enabled: boolean | null
    order: number | null
    submissionsEnabled: boolean | null
    entityVersion: number | null
  }

  export type CourseCountAggregateOutputType = {
    courseId: number
    schoolId: number
    code: number
    version: number
    studentTypeId: number
    name: number
    courseGuide: number
    quizzesEnabled: number
    noTutor: number
    submissionType: number
    enabled: number
    order: number
    submissionsEnabled: number
    entityVersion: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    courseId?: true
    schoolId?: true
    version?: true
    submissionType?: true
    order?: true
    entityVersion?: true
  }

  export type CourseSumAggregateInputType = {
    courseId?: true
    schoolId?: true
    version?: true
    submissionType?: true
    order?: true
    entityVersion?: true
  }

  export type CourseMinAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    version?: true
    studentTypeId?: true
    name?: true
    courseGuide?: true
    quizzesEnabled?: true
    noTutor?: true
    submissionType?: true
    enabled?: true
    order?: true
    submissionsEnabled?: true
    entityVersion?: true
  }

  export type CourseMaxAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    version?: true
    studentTypeId?: true
    name?: true
    courseGuide?: true
    quizzesEnabled?: true
    noTutor?: true
    submissionType?: true
    enabled?: true
    order?: true
    submissionsEnabled?: true
    entityVersion?: true
  }

  export type CourseCountAggregateInputType = {
    courseId?: true
    schoolId?: true
    code?: true
    version?: true
    studentTypeId?: true
    name?: true
    courseGuide?: true
    quizzesEnabled?: true
    noTutor?: true
    submissionType?: true
    enabled?: true
    order?: true
    submissionsEnabled?: true
    entityVersion?: true
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
    version: number
    studentTypeId: string
    name: string
    courseGuide: boolean
    quizzesEnabled: boolean
    noTutor: boolean
    submissionType: number
    enabled: boolean
    order: number
    submissionsEnabled: boolean
    entityVersion: number
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
    version?: boolean
    studentTypeId?: boolean
    name?: boolean
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: boolean
    enabled?: boolean
    order?: boolean
    submissionsEnabled?: boolean
    entityVersion?: boolean
    enrollments?: boolean | EnrollmentFindManyArgs
    _count?: boolean | CourseCountOutputTypeArgs
  }

  export type CourseInclude = {
    enrollments?: boolean | EnrollmentFindManyArgs
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
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['include'][P]>>  :
        P extends '_count' ? CourseCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'enrollments' ? Array < EnrollmentGetPayload<S['select'][P]>>  :
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
    courseId: number | null
    studentNumber: number | null
    studentId: number | null
    tutorId: number | null
    maxAssignments: number | null
    courseCost: Decimal | null
    amountPaid: Decimal | null
    monthlyInstallment: Decimal | null
    entityVersion: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    enrollmentId: number | null
    courseId: number | null
    studentNumber: number | null
    studentId: number | null
    tutorId: number | null
    maxAssignments: number | null
    courseCost: Decimal | null
    amountPaid: Decimal | null
    monthlyInstallment: Decimal | null
    entityVersion: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    enrollmentId: number | null
    courseId: number | null
    studentNumber: number | null
    studentId: number | null
    tutorId: number | null
    maxAssignments: number | null
    graduated: boolean | null
    assignmentsDisabled: boolean | null
    quizzesDisabled: boolean | null
    onHold: boolean | null
    holdReason: string | null
    currencyCode: string | null
    courseCost: Decimal | null
    amountPaid: Decimal | null
    monthlyInstallment: Decimal | null
    enrollmentDate: Date | null
    fastTrack: boolean | null
    paymentsDisabled: boolean | null
    updated: Date | null
    entityVersion: number | null
    timestamp: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    enrollmentId: number | null
    courseId: number | null
    studentNumber: number | null
    studentId: number | null
    tutorId: number | null
    maxAssignments: number | null
    graduated: boolean | null
    assignmentsDisabled: boolean | null
    quizzesDisabled: boolean | null
    onHold: boolean | null
    holdReason: string | null
    currencyCode: string | null
    courseCost: Decimal | null
    amountPaid: Decimal | null
    monthlyInstallment: Decimal | null
    enrollmentDate: Date | null
    fastTrack: boolean | null
    paymentsDisabled: boolean | null
    updated: Date | null
    entityVersion: number | null
    timestamp: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    enrollmentId: number
    courseId: number
    studentNumber: number
    studentId: number
    tutorId: number
    maxAssignments: number
    graduated: number
    assignmentsDisabled: number
    quizzesDisabled: number
    onHold: number
    holdReason: number
    currencyCode: number
    courseCost: number
    amountPaid: number
    monthlyInstallment: number
    enrollmentDate: number
    fastTrack: number
    paymentsDisabled: number
    updated: number
    entityVersion: number
    timestamp: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    enrollmentId?: true
    courseId?: true
    studentNumber?: true
    studentId?: true
    tutorId?: true
    maxAssignments?: true
    courseCost?: true
    amountPaid?: true
    monthlyInstallment?: true
    entityVersion?: true
  }

  export type EnrollmentSumAggregateInputType = {
    enrollmentId?: true
    courseId?: true
    studentNumber?: true
    studentId?: true
    tutorId?: true
    maxAssignments?: true
    courseCost?: true
    amountPaid?: true
    monthlyInstallment?: true
    entityVersion?: true
  }

  export type EnrollmentMinAggregateInputType = {
    enrollmentId?: true
    courseId?: true
    studentNumber?: true
    studentId?: true
    tutorId?: true
    maxAssignments?: true
    graduated?: true
    assignmentsDisabled?: true
    quizzesDisabled?: true
    onHold?: true
    holdReason?: true
    currencyCode?: true
    courseCost?: true
    amountPaid?: true
    monthlyInstallment?: true
    enrollmentDate?: true
    fastTrack?: true
    paymentsDisabled?: true
    updated?: true
    entityVersion?: true
    timestamp?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    enrollmentId?: true
    courseId?: true
    studentNumber?: true
    studentId?: true
    tutorId?: true
    maxAssignments?: true
    graduated?: true
    assignmentsDisabled?: true
    quizzesDisabled?: true
    onHold?: true
    holdReason?: true
    currencyCode?: true
    courseCost?: true
    amountPaid?: true
    monthlyInstallment?: true
    enrollmentDate?: true
    fastTrack?: true
    paymentsDisabled?: true
    updated?: true
    entityVersion?: true
    timestamp?: true
  }

  export type EnrollmentCountAggregateInputType = {
    enrollmentId?: true
    courseId?: true
    studentNumber?: true
    studentId?: true
    tutorId?: true
    maxAssignments?: true
    graduated?: true
    assignmentsDisabled?: true
    quizzesDisabled?: true
    onHold?: true
    holdReason?: true
    currencyCode?: true
    courseCost?: true
    amountPaid?: true
    monthlyInstallment?: true
    enrollmentDate?: true
    fastTrack?: true
    paymentsDisabled?: true
    updated?: true
    entityVersion?: true
    timestamp?: true
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
    courseId: number
    studentNumber: number
    studentId: number
    tutorId: number | null
    maxAssignments: number | null
    graduated: boolean
    assignmentsDisabled: boolean
    quizzesDisabled: boolean
    onHold: boolean
    holdReason: string | null
    currencyCode: string
    courseCost: Decimal
    amountPaid: Decimal
    monthlyInstallment: Decimal | null
    enrollmentDate: Date | null
    fastTrack: boolean
    paymentsDisabled: boolean
    updated: Date | null
    entityVersion: number
    timestamp: Date
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
    courseId?: boolean
    studentNumber?: boolean
    studentId?: boolean
    tutorId?: boolean
    maxAssignments?: boolean
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: boolean
    currencyCode?: boolean
    courseCost?: boolean
    amountPaid?: boolean
    monthlyInstallment?: boolean
    enrollmentDate?: boolean
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: boolean
    entityVersion?: boolean
    timestamp?: boolean
    course?: boolean | CourseArgs
  }

  export type EnrollmentInclude = {
    course?: boolean | CourseArgs
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
        P extends 'course' ? CourseGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'course' ? CourseGetPayload<S['select'][P]> :  P extends keyof Enrollment ? Enrollment[P] : never
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

    course<T extends CourseArgs = {}>(args?: Subset<T, CourseArgs>): CheckSelect<T, Prisma__CourseClient<Course | null >, Prisma__CourseClient<CourseGetPayload<T> | null >>;

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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CourseScalarFieldEnum: {
    courseId: 'courseId',
    schoolId: 'schoolId',
    code: 'code',
    version: 'version',
    studentTypeId: 'studentTypeId',
    name: 'name',
    courseGuide: 'courseGuide',
    quizzesEnabled: 'quizzesEnabled',
    noTutor: 'noTutor',
    submissionType: 'submissionType',
    enabled: 'enabled',
    order: 'order',
    submissionsEnabled: 'submissionsEnabled',
    entityVersion: 'entityVersion'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    enrollmentId: 'enrollmentId',
    courseId: 'courseId',
    studentNumber: 'studentNumber',
    studentId: 'studentId',
    tutorId: 'tutorId',
    maxAssignments: 'maxAssignments',
    graduated: 'graduated',
    assignmentsDisabled: 'assignmentsDisabled',
    quizzesDisabled: 'quizzesDisabled',
    onHold: 'onHold',
    holdReason: 'holdReason',
    currencyCode: 'currencyCode',
    courseCost: 'courseCost',
    amountPaid: 'amountPaid',
    monthlyInstallment: 'monthlyInstallment',
    enrollmentDate: 'enrollmentDate',
    fastTrack: 'fastTrack',
    paymentsDisabled: 'paymentsDisabled',
    updated: 'updated',
    entityVersion: 'entityVersion',
    timestamp: 'timestamp'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    courseId?: IntFilter | number
    schoolId?: IntFilter | number
    code?: StringFilter | string
    version?: IntFilter | number
    studentTypeId?: StringFilter | string
    name?: StringFilter | string
    courseGuide?: BoolFilter | boolean
    quizzesEnabled?: BoolFilter | boolean
    noTutor?: BoolFilter | boolean
    submissionType?: IntFilter | number
    enabled?: BoolFilter | boolean
    order?: IntFilter | number
    submissionsEnabled?: BoolFilter | boolean
    entityVersion?: IntFilter | number
    enrollments?: EnrollmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    version?: SortOrder
    studentTypeId?: SortOrder
    name?: SortOrder
    courseGuide?: SortOrder
    quizzesEnabled?: SortOrder
    noTutor?: SortOrder
    submissionType?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    submissionsEnabled?: SortOrder
    entityVersion?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = {
    courseId?: number
    courseId_entityVersion?: CourseCourseIdEntityVersionCompoundUniqueInput
  }

  export type CourseOrderByWithAggregationInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    version?: SortOrder
    studentTypeId?: SortOrder
    name?: SortOrder
    courseGuide?: SortOrder
    quizzesEnabled?: SortOrder
    noTutor?: SortOrder
    submissionType?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    submissionsEnabled?: SortOrder
    entityVersion?: SortOrder
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
    version?: IntWithAggregatesFilter | number
    studentTypeId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    courseGuide?: BoolWithAggregatesFilter | boolean
    quizzesEnabled?: BoolWithAggregatesFilter | boolean
    noTutor?: BoolWithAggregatesFilter | boolean
    submissionType?: IntWithAggregatesFilter | number
    enabled?: BoolWithAggregatesFilter | boolean
    order?: IntWithAggregatesFilter | number
    submissionsEnabled?: BoolWithAggregatesFilter | boolean
    entityVersion?: IntWithAggregatesFilter | number
  }

  export type EnrollmentWhereInput = {
    AND?: Enumerable<EnrollmentWhereInput>
    OR?: Enumerable<EnrollmentWhereInput>
    NOT?: Enumerable<EnrollmentWhereInput>
    enrollmentId?: IntFilter | number
    courseId?: IntFilter | number
    studentNumber?: IntFilter | number
    studentId?: IntFilter | number
    tutorId?: IntNullableFilter | number | null
    maxAssignments?: IntNullableFilter | number | null
    graduated?: BoolFilter | boolean
    assignmentsDisabled?: BoolFilter | boolean
    quizzesDisabled?: BoolFilter | boolean
    onHold?: BoolFilter | boolean
    holdReason?: StringNullableFilter | string | null
    currencyCode?: StringFilter | string
    courseCost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: DateTimeNullableFilter | Date | string | null
    fastTrack?: BoolFilter | boolean
    paymentsDisabled?: BoolFilter | boolean
    updated?: DateTimeNullableFilter | Date | string | null
    entityVersion?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    graduated?: SortOrder
    assignmentsDisabled?: SortOrder
    quizzesDisabled?: SortOrder
    onHold?: SortOrder
    holdReason?: SortOrder
    currencyCode?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    enrollmentDate?: SortOrder
    fastTrack?: SortOrder
    paymentsDisabled?: SortOrder
    updated?: SortOrder
    entityVersion?: SortOrder
    timestamp?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = {
    enrollmentId?: number
    studentId_courseId?: EnrollmentStudentIdCourseIdCompoundUniqueInput
    courseId_studentNumber?: EnrollmentCourseIdStudentNumberCompoundUniqueInput
    enrollmentId_entityVersion?: EnrollmentEnrollmentIdEntityVersionCompoundUniqueInput
  }

  export type EnrollmentOrderByWithAggregationInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    graduated?: SortOrder
    assignmentsDisabled?: SortOrder
    quizzesDisabled?: SortOrder
    onHold?: SortOrder
    holdReason?: SortOrder
    currencyCode?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    enrollmentDate?: SortOrder
    fastTrack?: SortOrder
    paymentsDisabled?: SortOrder
    updated?: SortOrder
    entityVersion?: SortOrder
    timestamp?: SortOrder
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
    courseId?: IntWithAggregatesFilter | number
    studentNumber?: IntWithAggregatesFilter | number
    studentId?: IntWithAggregatesFilter | number
    tutorId?: IntNullableWithAggregatesFilter | number | null
    maxAssignments?: IntNullableWithAggregatesFilter | number | null
    graduated?: BoolWithAggregatesFilter | boolean
    assignmentsDisabled?: BoolWithAggregatesFilter | boolean
    quizzesDisabled?: BoolWithAggregatesFilter | boolean
    onHold?: BoolWithAggregatesFilter | boolean
    holdReason?: StringNullableWithAggregatesFilter | string | null
    currencyCode?: StringWithAggregatesFilter | string
    courseCost?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fastTrack?: BoolWithAggregatesFilter | boolean
    paymentsDisabled?: BoolWithAggregatesFilter | boolean
    updated?: DateTimeNullableWithAggregatesFilter | Date | string | null
    entityVersion?: IntWithAggregatesFilter | number
    timestamp?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CourseCreateInput = {
    schoolId: number
    code: string
    version?: number
    studentTypeId: string
    name: string
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: number
    enabled?: boolean
    order?: number
    submissionsEnabled?: boolean
    entityVersion?: number
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    courseId?: number
    schoolId: number
    code: string
    version?: number
    studentTypeId: string
    name: string
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: number
    enabled?: boolean
    order?: number
    submissionsEnabled?: boolean
    entityVersion?: number
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    courseId?: number
    schoolId: number
    code: string
    version?: number
    studentTypeId: string
    name: string
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: number
    enabled?: boolean
    order?: number
    submissionsEnabled?: boolean
    entityVersion?: number
  }

  export type CourseUpdateManyMutationInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    enrollmentId?: number
    courseId: number
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
  }

  export type EnrollmentUpdateInput = {
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    enrollmentId?: number
    courseId: number
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCourseIdEntityVersionCompoundUniqueInput = {
    courseId: number
    entityVersion: number
  }

  export type CourseCountOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    version?: SortOrder
    studentTypeId?: SortOrder
    name?: SortOrder
    courseGuide?: SortOrder
    quizzesEnabled?: SortOrder
    noTutor?: SortOrder
    submissionType?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    submissionsEnabled?: SortOrder
    entityVersion?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    version?: SortOrder
    submissionType?: SortOrder
    order?: SortOrder
    entityVersion?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    version?: SortOrder
    studentTypeId?: SortOrder
    name?: SortOrder
    courseGuide?: SortOrder
    quizzesEnabled?: SortOrder
    noTutor?: SortOrder
    submissionType?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    submissionsEnabled?: SortOrder
    entityVersion?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    code?: SortOrder
    version?: SortOrder
    studentTypeId?: SortOrder
    name?: SortOrder
    courseGuide?: SortOrder
    quizzesEnabled?: SortOrder
    noTutor?: SortOrder
    submissionType?: SortOrder
    enabled?: SortOrder
    order?: SortOrder
    submissionsEnabled?: SortOrder
    entityVersion?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    courseId?: SortOrder
    schoolId?: SortOrder
    version?: SortOrder
    submissionType?: SortOrder
    order?: SortOrder
    entityVersion?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentStudentIdCourseIdCompoundUniqueInput = {
    studentId: number
    courseId: number
  }

  export type EnrollmentCourseIdStudentNumberCompoundUniqueInput = {
    courseId: number
    studentNumber: number
  }

  export type EnrollmentEnrollmentIdEntityVersionCompoundUniqueInput = {
    enrollmentId: number
    entityVersion: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    graduated?: SortOrder
    assignmentsDisabled?: SortOrder
    quizzesDisabled?: SortOrder
    onHold?: SortOrder
    holdReason?: SortOrder
    currencyCode?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    enrollmentDate?: SortOrder
    fastTrack?: SortOrder
    paymentsDisabled?: SortOrder
    updated?: SortOrder
    entityVersion?: SortOrder
    timestamp?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    entityVersion?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    graduated?: SortOrder
    assignmentsDisabled?: SortOrder
    quizzesDisabled?: SortOrder
    onHold?: SortOrder
    holdReason?: SortOrder
    currencyCode?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    enrollmentDate?: SortOrder
    fastTrack?: SortOrder
    paymentsDisabled?: SortOrder
    updated?: SortOrder
    entityVersion?: SortOrder
    timestamp?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    graduated?: SortOrder
    assignmentsDisabled?: SortOrder
    quizzesDisabled?: SortOrder
    onHold?: SortOrder
    holdReason?: SortOrder
    currencyCode?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    enrollmentDate?: SortOrder
    fastTrack?: SortOrder
    paymentsDisabled?: SortOrder
    updated?: SortOrder
    entityVersion?: SortOrder
    timestamp?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    enrollmentId?: SortOrder
    courseId?: SortOrder
    studentNumber?: SortOrder
    studentId?: SortOrder
    tutorId?: SortOrder
    maxAssignments?: SortOrder
    courseCost?: SortOrder
    amountPaid?: SortOrder
    monthlyInstallment?: SortOrder
    entityVersion?: SortOrder
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

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutCourseInput>, Enumerable<EnrollmentUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutCourseInput>
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type EnrollmentCreateWithoutCourseInput = {
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    enrollmentId?: number
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyCourseInput>
    skipDuplicates?: boolean
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

  export type EnrollmentScalarWhereInput = {
    AND?: Enumerable<EnrollmentScalarWhereInput>
    OR?: Enumerable<EnrollmentScalarWhereInput>
    NOT?: Enumerable<EnrollmentScalarWhereInput>
    enrollmentId?: IntFilter | number
    courseId?: IntFilter | number
    studentNumber?: IntFilter | number
    studentId?: IntFilter | number
    tutorId?: IntNullableFilter | number | null
    maxAssignments?: IntNullableFilter | number | null
    graduated?: BoolFilter | boolean
    assignmentsDisabled?: BoolFilter | boolean
    quizzesDisabled?: BoolFilter | boolean
    onHold?: BoolFilter | boolean
    holdReason?: StringNullableFilter | string | null
    currencyCode?: StringFilter | string
    courseCost?: DecimalFilter | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFilter | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: DateTimeNullableFilter | Date | string | null
    fastTrack?: BoolFilter | boolean
    paymentsDisabled?: BoolFilter | boolean
    updated?: DateTimeNullableFilter | Date | string | null
    entityVersion?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    schoolId: number
    code: string
    version?: number
    studentTypeId: string
    name: string
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: number
    enabled?: boolean
    order?: number
    submissionsEnabled?: boolean
    entityVersion?: number
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    courseId?: number
    schoolId: number
    code: string
    version?: number
    studentTypeId: string
    name: string
    courseGuide?: boolean
    quizzesEnabled?: boolean
    noTutor?: boolean
    submissionType?: number
    enabled?: boolean
    order?: number
    submissionsEnabled?: boolean
    entityVersion?: number
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    courseId?: IntFieldUpdateOperationsInput | number
    schoolId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    studentTypeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseGuide?: BoolFieldUpdateOperationsInput | boolean
    quizzesEnabled?: BoolFieldUpdateOperationsInput | boolean
    noTutor?: BoolFieldUpdateOperationsInput | boolean
    submissionType?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    submissionsEnabled?: BoolFieldUpdateOperationsInput | boolean
    entityVersion?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateManyCourseInput = {
    enrollmentId?: number
    studentNumber?: number
    studentId?: number
    tutorId?: number | null
    maxAssignments?: number | null
    graduated?: boolean
    assignmentsDisabled?: boolean
    quizzesDisabled?: boolean
    onHold?: boolean
    holdReason?: string | null
    currencyCode: string
    courseCost?: Decimal | DecimalJsLike | number | string
    amountPaid?: Decimal | DecimalJsLike | number | string
    monthlyInstallment?: Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: Date | string | null
    fastTrack?: boolean
    paymentsDisabled?: boolean
    updated?: Date | string | null
    entityVersion?: number
    timestamp?: Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput = {
    enrollmentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    maxAssignments?: NullableIntFieldUpdateOperationsInput | number | null
    graduated?: BoolFieldUpdateOperationsInput | boolean
    assignmentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    quizzesDisabled?: BoolFieldUpdateOperationsInput | boolean
    onHold?: BoolFieldUpdateOperationsInput | boolean
    holdReason?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: StringFieldUpdateOperationsInput | string
    courseCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyInstallment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enrollmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fastTrack?: BoolFieldUpdateOperationsInput | boolean
    paymentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entityVersion?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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