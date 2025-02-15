
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model KeyVault
 * 
 */
export type KeyVault = $Result.DefaultSelection<Prisma.$KeyVaultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more KeyVaults
 * const keyVaults = await prisma.keyVault.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more KeyVaults
   * const keyVaults = await prisma.keyVault.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.keyVault`: Exposes CRUD operations for the **KeyVault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyVaults
    * const keyVaults = await prisma.keyVault.findMany()
    * ```
    */
  get keyVault(): Prisma.KeyVaultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    KeyVault: 'KeyVault'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "keyVault"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      KeyVault: {
        payload: Prisma.$KeyVaultPayload<ExtArgs>
        fields: Prisma.KeyVaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyVaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyVaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          findFirst: {
            args: Prisma.KeyVaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyVaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          findMany: {
            args: Prisma.KeyVaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>[]
          }
          create: {
            args: Prisma.KeyVaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          createMany: {
            args: Prisma.KeyVaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyVaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>[]
          }
          delete: {
            args: Prisma.KeyVaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          update: {
            args: Prisma.KeyVaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          deleteMany: {
            args: Prisma.KeyVaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyVaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyVaultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>[]
          }
          upsert: {
            args: Prisma.KeyVaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyVaultPayload>
          }
          aggregate: {
            args: Prisma.KeyVaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyVault>
          }
          groupBy: {
            args: Prisma.KeyVaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyVaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyVaultCountArgs<ExtArgs>
            result: $Utils.Optional<KeyVaultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    keyVault?: KeyVaultOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model KeyVault
   */

  export type AggregateKeyVault = {
    _count: KeyVaultCountAggregateOutputType | null
    _min: KeyVaultMinAggregateOutputType | null
    _max: KeyVaultMaxAggregateOutputType | null
  }

  export type KeyVaultMinAggregateOutputType = {
    id: string | null
    keyName: string | null
    keyValue: string | null
    key: string | null
    iv: string | null
    algorithm: string | null
    createdAt: Date | null
  }

  export type KeyVaultMaxAggregateOutputType = {
    id: string | null
    keyName: string | null
    keyValue: string | null
    key: string | null
    iv: string | null
    algorithm: string | null
    createdAt: Date | null
  }

  export type KeyVaultCountAggregateOutputType = {
    id: number
    keyName: number
    keyValue: number
    key: number
    iv: number
    algorithm: number
    createdAt: number
    _all: number
  }


  export type KeyVaultMinAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    key?: true
    iv?: true
    algorithm?: true
    createdAt?: true
  }

  export type KeyVaultMaxAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    key?: true
    iv?: true
    algorithm?: true
    createdAt?: true
  }

  export type KeyVaultCountAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    key?: true
    iv?: true
    algorithm?: true
    createdAt?: true
    _all?: true
  }

  export type KeyVaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyVault to aggregate.
     */
    where?: KeyVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyVaults to fetch.
     */
    orderBy?: KeyVaultOrderByWithRelationInput | KeyVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyVaults
    **/
    _count?: true | KeyVaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyVaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyVaultMaxAggregateInputType
  }

  export type GetKeyVaultAggregateType<T extends KeyVaultAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyVault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyVault[P]>
      : GetScalarType<T[P], AggregateKeyVault[P]>
  }




  export type KeyVaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyVaultWhereInput
    orderBy?: KeyVaultOrderByWithAggregationInput | KeyVaultOrderByWithAggregationInput[]
    by: KeyVaultScalarFieldEnum[] | KeyVaultScalarFieldEnum
    having?: KeyVaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyVaultCountAggregateInputType | true
    _min?: KeyVaultMinAggregateInputType
    _max?: KeyVaultMaxAggregateInputType
  }

  export type KeyVaultGroupByOutputType = {
    id: string
    keyName: string
    keyValue: string
    key: string
    iv: string
    algorithm: string
    createdAt: Date
    _count: KeyVaultCountAggregateOutputType | null
    _min: KeyVaultMinAggregateOutputType | null
    _max: KeyVaultMaxAggregateOutputType | null
  }

  type GetKeyVaultGroupByPayload<T extends KeyVaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyVaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyVaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyVaultGroupByOutputType[P]>
            : GetScalarType<T[P], KeyVaultGroupByOutputType[P]>
        }
      >
    >


  export type KeyVaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    key?: boolean
    iv?: boolean
    algorithm?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keyVault"]>

  export type KeyVaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    key?: boolean
    iv?: boolean
    algorithm?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keyVault"]>

  export type KeyVaultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    key?: boolean
    iv?: boolean
    algorithm?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keyVault"]>

  export type KeyVaultSelectScalar = {
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    key?: boolean
    iv?: boolean
    algorithm?: boolean
    createdAt?: boolean
  }

  export type KeyVaultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "keyValue" | "key" | "iv" | "algorithm" | "createdAt", ExtArgs["result"]["keyVault"]>

  export type $KeyVaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyVault"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyName: string
      keyValue: string
      key: string
      iv: string
      algorithm: string
      createdAt: Date
    }, ExtArgs["result"]["keyVault"]>
    composites: {}
  }

  type KeyVaultGetPayload<S extends boolean | null | undefined | KeyVaultDefaultArgs> = $Result.GetResult<Prisma.$KeyVaultPayload, S>

  type KeyVaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyVaultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyVaultCountAggregateInputType | true
    }

  export interface KeyVaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyVault'], meta: { name: 'KeyVault' } }
    /**
     * Find zero or one KeyVault that matches the filter.
     * @param {KeyVaultFindUniqueArgs} args - Arguments to find a KeyVault
     * @example
     * // Get one KeyVault
     * const keyVault = await prisma.keyVault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyVaultFindUniqueArgs>(args: SelectSubset<T, KeyVaultFindUniqueArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one KeyVault that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyVaultFindUniqueOrThrowArgs} args - Arguments to find a KeyVault
     * @example
     * // Get one KeyVault
     * const keyVault = await prisma.keyVault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyVaultFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyVaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first KeyVault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultFindFirstArgs} args - Arguments to find a KeyVault
     * @example
     * // Get one KeyVault
     * const keyVault = await prisma.keyVault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyVaultFindFirstArgs>(args?: SelectSubset<T, KeyVaultFindFirstArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first KeyVault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultFindFirstOrThrowArgs} args - Arguments to find a KeyVault
     * @example
     * // Get one KeyVault
     * const keyVault = await prisma.keyVault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyVaultFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyVaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more KeyVaults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyVaults
     * const keyVaults = await prisma.keyVault.findMany()
     * 
     * // Get first 10 KeyVaults
     * const keyVaults = await prisma.keyVault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyVaultWithIdOnly = await prisma.keyVault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyVaultFindManyArgs>(args?: SelectSubset<T, KeyVaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a KeyVault.
     * @param {KeyVaultCreateArgs} args - Arguments to create a KeyVault.
     * @example
     * // Create one KeyVault
     * const KeyVault = await prisma.keyVault.create({
     *   data: {
     *     // ... data to create a KeyVault
     *   }
     * })
     * 
     */
    create<T extends KeyVaultCreateArgs>(args: SelectSubset<T, KeyVaultCreateArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many KeyVaults.
     * @param {KeyVaultCreateManyArgs} args - Arguments to create many KeyVaults.
     * @example
     * // Create many KeyVaults
     * const keyVault = await prisma.keyVault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyVaultCreateManyArgs>(args?: SelectSubset<T, KeyVaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyVaults and returns the data saved in the database.
     * @param {KeyVaultCreateManyAndReturnArgs} args - Arguments to create many KeyVaults.
     * @example
     * // Create many KeyVaults
     * const keyVault = await prisma.keyVault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyVaults and only return the `id`
     * const keyVaultWithIdOnly = await prisma.keyVault.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyVaultCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyVaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a KeyVault.
     * @param {KeyVaultDeleteArgs} args - Arguments to delete one KeyVault.
     * @example
     * // Delete one KeyVault
     * const KeyVault = await prisma.keyVault.delete({
     *   where: {
     *     // ... filter to delete one KeyVault
     *   }
     * })
     * 
     */
    delete<T extends KeyVaultDeleteArgs>(args: SelectSubset<T, KeyVaultDeleteArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one KeyVault.
     * @param {KeyVaultUpdateArgs} args - Arguments to update one KeyVault.
     * @example
     * // Update one KeyVault
     * const keyVault = await prisma.keyVault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyVaultUpdateArgs>(args: SelectSubset<T, KeyVaultUpdateArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more KeyVaults.
     * @param {KeyVaultDeleteManyArgs} args - Arguments to filter KeyVaults to delete.
     * @example
     * // Delete a few KeyVaults
     * const { count } = await prisma.keyVault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyVaultDeleteManyArgs>(args?: SelectSubset<T, KeyVaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyVaults
     * const keyVault = await prisma.keyVault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyVaultUpdateManyArgs>(args: SelectSubset<T, KeyVaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyVaults and returns the data updated in the database.
     * @param {KeyVaultUpdateManyAndReturnArgs} args - Arguments to update many KeyVaults.
     * @example
     * // Update many KeyVaults
     * const keyVault = await prisma.keyVault.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyVaults and only return the `id`
     * const keyVaultWithIdOnly = await prisma.keyVault.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyVaultUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyVaultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one KeyVault.
     * @param {KeyVaultUpsertArgs} args - Arguments to update or create a KeyVault.
     * @example
     * // Update or create a KeyVault
     * const keyVault = await prisma.keyVault.upsert({
     *   create: {
     *     // ... data to create a KeyVault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyVault we want to update
     *   }
     * })
     */
    upsert<T extends KeyVaultUpsertArgs>(args: SelectSubset<T, KeyVaultUpsertArgs<ExtArgs>>): Prisma__KeyVaultClient<$Result.GetResult<Prisma.$KeyVaultPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of KeyVaults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultCountArgs} args - Arguments to filter KeyVaults to count.
     * @example
     * // Count the number of KeyVaults
     * const count = await prisma.keyVault.count({
     *   where: {
     *     // ... the filter for the KeyVaults we want to count
     *   }
     * })
    **/
    count<T extends KeyVaultCountArgs>(
      args?: Subset<T, KeyVaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyVaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeyVaultAggregateArgs>(args: Subset<T, KeyVaultAggregateArgs>): Prisma.PrismaPromise<GetKeyVaultAggregateType<T>>

    /**
     * Group by KeyVault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyVaultGroupByArgs} args - Group by arguments.
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
      T extends KeyVaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyVaultGroupByArgs['orderBy'] }
        : { orderBy?: KeyVaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, KeyVaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyVaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyVault model
   */
  readonly fields: KeyVaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyVault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyVaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeyVault model
   */ 
  interface KeyVaultFieldRefs {
    readonly id: FieldRef<"KeyVault", 'String'>
    readonly keyName: FieldRef<"KeyVault", 'String'>
    readonly keyValue: FieldRef<"KeyVault", 'String'>
    readonly key: FieldRef<"KeyVault", 'String'>
    readonly iv: FieldRef<"KeyVault", 'String'>
    readonly algorithm: FieldRef<"KeyVault", 'String'>
    readonly createdAt: FieldRef<"KeyVault", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KeyVault findUnique
   */
  export type KeyVaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter, which KeyVault to fetch.
     */
    where: KeyVaultWhereUniqueInput
  }

  /**
   * KeyVault findUniqueOrThrow
   */
  export type KeyVaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter, which KeyVault to fetch.
     */
    where: KeyVaultWhereUniqueInput
  }

  /**
   * KeyVault findFirst
   */
  export type KeyVaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter, which KeyVault to fetch.
     */
    where?: KeyVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyVaults to fetch.
     */
    orderBy?: KeyVaultOrderByWithRelationInput | KeyVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyVaults.
     */
    cursor?: KeyVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyVaults.
     */
    distinct?: KeyVaultScalarFieldEnum | KeyVaultScalarFieldEnum[]
  }

  /**
   * KeyVault findFirstOrThrow
   */
  export type KeyVaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter, which KeyVault to fetch.
     */
    where?: KeyVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyVaults to fetch.
     */
    orderBy?: KeyVaultOrderByWithRelationInput | KeyVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyVaults.
     */
    cursor?: KeyVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyVaults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyVaults.
     */
    distinct?: KeyVaultScalarFieldEnum | KeyVaultScalarFieldEnum[]
  }

  /**
   * KeyVault findMany
   */
  export type KeyVaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter, which KeyVaults to fetch.
     */
    where?: KeyVaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyVaults to fetch.
     */
    orderBy?: KeyVaultOrderByWithRelationInput | KeyVaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyVaults.
     */
    cursor?: KeyVaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyVaults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyVaults.
     */
    skip?: number
    distinct?: KeyVaultScalarFieldEnum | KeyVaultScalarFieldEnum[]
  }

  /**
   * KeyVault create
   */
  export type KeyVaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * The data needed to create a KeyVault.
     */
    data: XOR<KeyVaultCreateInput, KeyVaultUncheckedCreateInput>
  }

  /**
   * KeyVault createMany
   */
  export type KeyVaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyVaults.
     */
    data: KeyVaultCreateManyInput | KeyVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeyVault createManyAndReturn
   */
  export type KeyVaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * The data used to create many KeyVaults.
     */
    data: KeyVaultCreateManyInput | KeyVaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeyVault update
   */
  export type KeyVaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * The data needed to update a KeyVault.
     */
    data: XOR<KeyVaultUpdateInput, KeyVaultUncheckedUpdateInput>
    /**
     * Choose, which KeyVault to update.
     */
    where: KeyVaultWhereUniqueInput
  }

  /**
   * KeyVault updateMany
   */
  export type KeyVaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyVaults.
     */
    data: XOR<KeyVaultUpdateManyMutationInput, KeyVaultUncheckedUpdateManyInput>
    /**
     * Filter which KeyVaults to update
     */
    where?: KeyVaultWhereInput
    /**
     * Limit how many KeyVaults to update.
     */
    limit?: number
  }

  /**
   * KeyVault updateManyAndReturn
   */
  export type KeyVaultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * The data used to update KeyVaults.
     */
    data: XOR<KeyVaultUpdateManyMutationInput, KeyVaultUncheckedUpdateManyInput>
    /**
     * Filter which KeyVaults to update
     */
    where?: KeyVaultWhereInput
    /**
     * Limit how many KeyVaults to update.
     */
    limit?: number
  }

  /**
   * KeyVault upsert
   */
  export type KeyVaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * The filter to search for the KeyVault to update in case it exists.
     */
    where: KeyVaultWhereUniqueInput
    /**
     * In case the KeyVault found by the `where` argument doesn't exist, create a new KeyVault with this data.
     */
    create: XOR<KeyVaultCreateInput, KeyVaultUncheckedCreateInput>
    /**
     * In case the KeyVault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyVaultUpdateInput, KeyVaultUncheckedUpdateInput>
  }

  /**
   * KeyVault delete
   */
  export type KeyVaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
    /**
     * Filter which KeyVault to delete.
     */
    where: KeyVaultWhereUniqueInput
  }

  /**
   * KeyVault deleteMany
   */
  export type KeyVaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyVaults to delete
     */
    where?: KeyVaultWhereInput
    /**
     * Limit how many KeyVaults to delete.
     */
    limit?: number
  }

  /**
   * KeyVault without action
   */
  export type KeyVaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyVault
     */
    select?: KeyVaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyVault
     */
    omit?: KeyVaultOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KeyVaultScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    keyValue: 'keyValue',
    key: 'key',
    iv: 'iv',
    algorithm: 'algorithm',
    createdAt: 'createdAt'
  };

  export type KeyVaultScalarFieldEnum = (typeof KeyVaultScalarFieldEnum)[keyof typeof KeyVaultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type KeyVaultWhereInput = {
    AND?: KeyVaultWhereInput | KeyVaultWhereInput[]
    OR?: KeyVaultWhereInput[]
    NOT?: KeyVaultWhereInput | KeyVaultWhereInput[]
    id?: StringFilter<"KeyVault"> | string
    keyName?: StringFilter<"KeyVault"> | string
    keyValue?: StringFilter<"KeyVault"> | string
    key?: StringFilter<"KeyVault"> | string
    iv?: StringFilter<"KeyVault"> | string
    algorithm?: StringFilter<"KeyVault"> | string
    createdAt?: DateTimeFilter<"KeyVault"> | Date | string
  }

  export type KeyVaultOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    key?: SortOrder
    iv?: SortOrder
    algorithm?: SortOrder
    createdAt?: SortOrder
  }

  export type KeyVaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyName?: string
    AND?: KeyVaultWhereInput | KeyVaultWhereInput[]
    OR?: KeyVaultWhereInput[]
    NOT?: KeyVaultWhereInput | KeyVaultWhereInput[]
    keyValue?: StringFilter<"KeyVault"> | string
    key?: StringFilter<"KeyVault"> | string
    iv?: StringFilter<"KeyVault"> | string
    algorithm?: StringFilter<"KeyVault"> | string
    createdAt?: DateTimeFilter<"KeyVault"> | Date | string
  }, "id" | "keyName">

  export type KeyVaultOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    key?: SortOrder
    iv?: SortOrder
    algorithm?: SortOrder
    createdAt?: SortOrder
    _count?: KeyVaultCountOrderByAggregateInput
    _max?: KeyVaultMaxOrderByAggregateInput
    _min?: KeyVaultMinOrderByAggregateInput
  }

  export type KeyVaultScalarWhereWithAggregatesInput = {
    AND?: KeyVaultScalarWhereWithAggregatesInput | KeyVaultScalarWhereWithAggregatesInput[]
    OR?: KeyVaultScalarWhereWithAggregatesInput[]
    NOT?: KeyVaultScalarWhereWithAggregatesInput | KeyVaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KeyVault"> | string
    keyName?: StringWithAggregatesFilter<"KeyVault"> | string
    keyValue?: StringWithAggregatesFilter<"KeyVault"> | string
    key?: StringWithAggregatesFilter<"KeyVault"> | string
    iv?: StringWithAggregatesFilter<"KeyVault"> | string
    algorithm?: StringWithAggregatesFilter<"KeyVault"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeyVault"> | Date | string
  }

  export type KeyVaultCreateInput = {
    id?: string
    keyName: string
    keyValue: string
    key: string
    iv: string
    algorithm?: string
    createdAt?: Date | string
  }

  export type KeyVaultUncheckedCreateInput = {
    id?: string
    keyName: string
    keyValue: string
    key: string
    iv: string
    algorithm?: string
    createdAt?: Date | string
  }

  export type KeyVaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyVaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyVaultCreateManyInput = {
    id?: string
    keyName: string
    keyValue: string
    key: string
    iv: string
    algorithm?: string
    createdAt?: Date | string
  }

  export type KeyVaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeyVaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KeyVaultCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    key?: SortOrder
    iv?: SortOrder
    algorithm?: SortOrder
    createdAt?: SortOrder
  }

  export type KeyVaultMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    key?: SortOrder
    iv?: SortOrder
    algorithm?: SortOrder
    createdAt?: SortOrder
  }

  export type KeyVaultMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    key?: SortOrder
    iv?: SortOrder
    algorithm?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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