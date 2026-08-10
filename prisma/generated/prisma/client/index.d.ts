
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Matchup
 * 
 */
export type Matchup = $Result.DefaultSelection<Prisma.$MatchupPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamOwner
 * 
 */
export type TeamOwner = $Result.DefaultSelection<Prisma.$TeamOwnerPayload>
/**
 * Model Week
 * 
 */
export type Week = $Result.DefaultSelection<Prisma.$WeekPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Matchups
 * const matchups = await prisma.matchup.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Matchups
   * const matchups = await prisma.matchup.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.matchup`: Exposes CRUD operations for the **Matchup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matchups
    * const matchups = await prisma.matchup.findMany()
    * ```
    */
  get matchup(): Prisma.MatchupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamOwner`: Exposes CRUD operations for the **TeamOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamOwners
    * const teamOwners = await prisma.teamOwner.findMany()
    * ```
    */
  get teamOwner(): Prisma.TeamOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.week`: Exposes CRUD operations for the **Week** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeks
    * const weeks = await prisma.week.findMany()
    * ```
    */
  get week(): Prisma.WeekDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Matchup: 'Matchup',
    Owner: 'Owner',
    Team: 'Team',
    TeamOwner: 'TeamOwner',
    Week: 'Week',
    Match: 'Match'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "matchup" | "owner" | "team" | "teamOwner" | "week" | "match"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Matchup: {
        payload: Prisma.$MatchupPayload<ExtArgs>
        fields: Prisma.MatchupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          findFirst: {
            args: Prisma.MatchupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          findMany: {
            args: Prisma.MatchupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[]
          }
          create: {
            args: Prisma.MatchupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          createMany: {
            args: Prisma.MatchupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[]
          }
          delete: {
            args: Prisma.MatchupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          update: {
            args: Prisma.MatchupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          deleteMany: {
            args: Prisma.MatchupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[]
          }
          upsert: {
            args: Prisma.MatchupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>
          }
          aggregate: {
            args: Prisma.MatchupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchup>
          }
          groupBy: {
            args: Prisma.MatchupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchupGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchupCountArgs<ExtArgs>
            result: $Utils.Optional<MatchupCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamOwner: {
        payload: Prisma.$TeamOwnerPayload<ExtArgs>
        fields: Prisma.TeamOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          findFirst: {
            args: Prisma.TeamOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          findMany: {
            args: Prisma.TeamOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>[]
          }
          create: {
            args: Prisma.TeamOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          createMany: {
            args: Prisma.TeamOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>[]
          }
          delete: {
            args: Prisma.TeamOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          update: {
            args: Prisma.TeamOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          deleteMany: {
            args: Prisma.TeamOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamOwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>[]
          }
          upsert: {
            args: Prisma.TeamOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamOwnerPayload>
          }
          aggregate: {
            args: Prisma.TeamOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamOwner>
          }
          groupBy: {
            args: Prisma.TeamOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<TeamOwnerCountAggregateOutputType> | number
          }
        }
      }
      Week: {
        payload: Prisma.$WeekPayload<ExtArgs>
        fields: Prisma.WeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findFirst: {
            args: Prisma.WeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findMany: {
            args: Prisma.WeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          create: {
            args: Prisma.WeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          createMany: {
            args: Prisma.WeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          delete: {
            args: Prisma.WeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          update: {
            args: Prisma.WeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          deleteMany: {
            args: Prisma.WeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeekUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          upsert: {
            args: Prisma.WeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          aggregate: {
            args: Prisma.WeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeek>
          }
          groupBy: {
            args: Prisma.WeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekCountArgs<ExtArgs>
            result: $Utils.Optional<WeekCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    matchup?: MatchupOmit
    owner?: OwnerOmit
    team?: TeamOmit
    teamOwner?: TeamOwnerOmit
    week?: WeekOmit
    match?: MatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    teams: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | OwnerCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamOwnerWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    seasons: number
    homeMatches: number
    awayMatches: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | TeamCountOutputTypeCountSeasonsArgs
    homeMatches?: boolean | TeamCountOutputTypeCountHomeMatchesArgs
    awayMatches?: boolean | TeamCountOutputTypeCountAwayMatchesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamOwnerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type WeekCountOutputType
   */

  export type WeekCountOutputType = {
    matches: number
  }

  export type WeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | WeekCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekCountOutputType
     */
    select?: WeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Matchup
   */

  export type AggregateMatchup = {
    _count: MatchupCountAggregateOutputType | null
    _avg: MatchupAvgAggregateOutputType | null
    _sum: MatchupSumAggregateOutputType | null
    _min: MatchupMinAggregateOutputType | null
    _max: MatchupMaxAggregateOutputType | null
  }

  export type MatchupAvgAggregateOutputType = {
    id: number | null
    week: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupSumAggregateOutputType = {
    id: number | null
    week: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupMinAggregateOutputType = {
    id: number | null
    week: number | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupMaxAggregateOutputType = {
    id: number | null
    week: number | null
    homeTeam: string | null
    awayTeam: string | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupCountAggregateOutputType = {
    id: number
    week: number
    homeTeam: number
    awayTeam: number
    homeScore: number
    awayScore: number
    _all: number
  }


  export type MatchupAvgAggregateInputType = {
    id?: true
    week?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupSumAggregateInputType = {
    id?: true
    week?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupMinAggregateInputType = {
    id?: true
    week?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupMaxAggregateInputType = {
    id?: true
    week?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupCountAggregateInputType = {
    id?: true
    week?: true
    homeTeam?: true
    awayTeam?: true
    homeScore?: true
    awayScore?: true
    _all?: true
  }

  export type MatchupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matchup to aggregate.
     */
    where?: MatchupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matchups
    **/
    _count?: true | MatchupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchupMaxAggregateInputType
  }

  export type GetMatchupAggregateType<T extends MatchupAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchup[P]>
      : GetScalarType<T[P], AggregateMatchup[P]>
  }




  export type MatchupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchupWhereInput
    orderBy?: MatchupOrderByWithAggregationInput | MatchupOrderByWithAggregationInput[]
    by: MatchupScalarFieldEnum[] | MatchupScalarFieldEnum
    having?: MatchupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchupCountAggregateInputType | true
    _avg?: MatchupAvgAggregateInputType
    _sum?: MatchupSumAggregateInputType
    _min?: MatchupMinAggregateInputType
    _max?: MatchupMaxAggregateInputType
  }

  export type MatchupGroupByOutputType = {
    id: number
    week: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    _count: MatchupCountAggregateOutputType | null
    _avg: MatchupAvgAggregateOutputType | null
    _sum: MatchupSumAggregateOutputType | null
    _min: MatchupMinAggregateOutputType | null
    _max: MatchupMaxAggregateOutputType | null
  }

  type GetMatchupGroupByPayload<T extends MatchupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchupGroupByOutputType[P]>
            : GetScalarType<T[P], MatchupGroupByOutputType[P]>
        }
      >
    >


  export type MatchupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectScalar = {
    id?: boolean
    week?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeScore?: boolean
    awayScore?: boolean
  }

  export type MatchupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week" | "homeTeam" | "awayTeam" | "homeScore" | "awayScore", ExtArgs["result"]["matchup"]>

  export type $MatchupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matchup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      week: number
      homeTeam: string
      awayTeam: string
      homeScore: number
      awayScore: number
    }, ExtArgs["result"]["matchup"]>
    composites: {}
  }

  type MatchupGetPayload<S extends boolean | null | undefined | MatchupDefaultArgs> = $Result.GetResult<Prisma.$MatchupPayload, S>

  type MatchupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchupCountAggregateInputType | true
    }

  export interface MatchupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matchup'], meta: { name: 'Matchup' } }
    /**
     * Find zero or one Matchup that matches the filter.
     * @param {MatchupFindUniqueArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchupFindUniqueArgs>(args: SelectSubset<T, MatchupFindUniqueArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matchup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchupFindUniqueOrThrowArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchupFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matchup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindFirstArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchupFindFirstArgs>(args?: SelectSubset<T, MatchupFindFirstArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matchup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindFirstOrThrowArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchupFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchupFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matchups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matchups
     * const matchups = await prisma.matchup.findMany()
     * 
     * // Get first 10 Matchups
     * const matchups = await prisma.matchup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchupWithIdOnly = await prisma.matchup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchupFindManyArgs>(args?: SelectSubset<T, MatchupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matchup.
     * @param {MatchupCreateArgs} args - Arguments to create a Matchup.
     * @example
     * // Create one Matchup
     * const Matchup = await prisma.matchup.create({
     *   data: {
     *     // ... data to create a Matchup
     *   }
     * })
     * 
     */
    create<T extends MatchupCreateArgs>(args: SelectSubset<T, MatchupCreateArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matchups.
     * @param {MatchupCreateManyArgs} args - Arguments to create many Matchups.
     * @example
     * // Create many Matchups
     * const matchup = await prisma.matchup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchupCreateManyArgs>(args?: SelectSubset<T, MatchupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matchups and returns the data saved in the database.
     * @param {MatchupCreateManyAndReturnArgs} args - Arguments to create many Matchups.
     * @example
     * // Create many Matchups
     * const matchup = await prisma.matchup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matchups and only return the `id`
     * const matchupWithIdOnly = await prisma.matchup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchupCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matchup.
     * @param {MatchupDeleteArgs} args - Arguments to delete one Matchup.
     * @example
     * // Delete one Matchup
     * const Matchup = await prisma.matchup.delete({
     *   where: {
     *     // ... filter to delete one Matchup
     *   }
     * })
     * 
     */
    delete<T extends MatchupDeleteArgs>(args: SelectSubset<T, MatchupDeleteArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matchup.
     * @param {MatchupUpdateArgs} args - Arguments to update one Matchup.
     * @example
     * // Update one Matchup
     * const matchup = await prisma.matchup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchupUpdateArgs>(args: SelectSubset<T, MatchupUpdateArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matchups.
     * @param {MatchupDeleteManyArgs} args - Arguments to filter Matchups to delete.
     * @example
     * // Delete a few Matchups
     * const { count } = await prisma.matchup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchupDeleteManyArgs>(args?: SelectSubset<T, MatchupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matchups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matchups
     * const matchup = await prisma.matchup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchupUpdateManyArgs>(args: SelectSubset<T, MatchupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matchups and returns the data updated in the database.
     * @param {MatchupUpdateManyAndReturnArgs} args - Arguments to update many Matchups.
     * @example
     * // Update many Matchups
     * const matchup = await prisma.matchup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matchups and only return the `id`
     * const matchupWithIdOnly = await prisma.matchup.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchupUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matchup.
     * @param {MatchupUpsertArgs} args - Arguments to update or create a Matchup.
     * @example
     * // Update or create a Matchup
     * const matchup = await prisma.matchup.upsert({
     *   create: {
     *     // ... data to create a Matchup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matchup we want to update
     *   }
     * })
     */
    upsert<T extends MatchupUpsertArgs>(args: SelectSubset<T, MatchupUpsertArgs<ExtArgs>>): Prisma__MatchupClient<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matchups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupCountArgs} args - Arguments to filter Matchups to count.
     * @example
     * // Count the number of Matchups
     * const count = await prisma.matchup.count({
     *   where: {
     *     // ... the filter for the Matchups we want to count
     *   }
     * })
    **/
    count<T extends MatchupCountArgs>(
      args?: Subset<T, MatchupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matchup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchupAggregateArgs>(args: Subset<T, MatchupAggregateArgs>): Prisma.PrismaPromise<GetMatchupAggregateType<T>>

    /**
     * Group by Matchup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupGroupByArgs} args - Group by arguments.
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
      T extends MatchupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchupGroupByArgs['orderBy'] }
        : { orderBy?: MatchupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matchup model
   */
  readonly fields: MatchupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matchup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Matchup model
   */
  interface MatchupFieldRefs {
    readonly id: FieldRef<"Matchup", 'Int'>
    readonly week: FieldRef<"Matchup", 'Int'>
    readonly homeTeam: FieldRef<"Matchup", 'String'>
    readonly awayTeam: FieldRef<"Matchup", 'String'>
    readonly homeScore: FieldRef<"Matchup", 'Float'>
    readonly awayScore: FieldRef<"Matchup", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Matchup findUnique
   */
  export type MatchupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter, which Matchup to fetch.
     */
    where: MatchupWhereUniqueInput
  }

  /**
   * Matchup findUniqueOrThrow
   */
  export type MatchupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter, which Matchup to fetch.
     */
    where: MatchupWhereUniqueInput
  }

  /**
   * Matchup findFirst
   */
  export type MatchupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter, which Matchup to fetch.
     */
    where?: MatchupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchups.
     */
    cursor?: MatchupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchups.
     */
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[]
  }

  /**
   * Matchup findFirstOrThrow
   */
  export type MatchupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter, which Matchup to fetch.
     */
    where?: MatchupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matchups.
     */
    cursor?: MatchupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matchups.
     */
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[]
  }

  /**
   * Matchup findMany
   */
  export type MatchupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter, which Matchups to fetch.
     */
    where?: MatchupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matchups.
     */
    cursor?: MatchupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matchups.
     */
    skip?: number
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[]
  }

  /**
   * Matchup create
   */
  export type MatchupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * The data needed to create a Matchup.
     */
    data: XOR<MatchupCreateInput, MatchupUncheckedCreateInput>
  }

  /**
   * Matchup createMany
   */
  export type MatchupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matchups.
     */
    data: MatchupCreateManyInput | MatchupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matchup createManyAndReturn
   */
  export type MatchupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * The data used to create many Matchups.
     */
    data: MatchupCreateManyInput | MatchupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matchup update
   */
  export type MatchupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * The data needed to update a Matchup.
     */
    data: XOR<MatchupUpdateInput, MatchupUncheckedUpdateInput>
    /**
     * Choose, which Matchup to update.
     */
    where: MatchupWhereUniqueInput
  }

  /**
   * Matchup updateMany
   */
  export type MatchupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matchups.
     */
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyInput>
    /**
     * Filter which Matchups to update
     */
    where?: MatchupWhereInput
    /**
     * Limit how many Matchups to update.
     */
    limit?: number
  }

  /**
   * Matchup updateManyAndReturn
   */
  export type MatchupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * The data used to update Matchups.
     */
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyInput>
    /**
     * Filter which Matchups to update
     */
    where?: MatchupWhereInput
    /**
     * Limit how many Matchups to update.
     */
    limit?: number
  }

  /**
   * Matchup upsert
   */
  export type MatchupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * The filter to search for the Matchup to update in case it exists.
     */
    where: MatchupWhereUniqueInput
    /**
     * In case the Matchup found by the `where` argument doesn't exist, create a new Matchup with this data.
     */
    create: XOR<MatchupCreateInput, MatchupUncheckedCreateInput>
    /**
     * In case the Matchup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchupUpdateInput, MatchupUncheckedUpdateInput>
  }

  /**
   * Matchup delete
   */
  export type MatchupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Filter which Matchup to delete.
     */
    where: MatchupWhereUniqueInput
  }

  /**
   * Matchup deleteMany
   */
  export type MatchupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matchups to delete
     */
    where?: MatchupWhereInput
    /**
     * Limit how many Matchups to delete.
     */
    limit?: number
  }

  /**
   * Matchup without action
   */
  export type MatchupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type OwnerSumAggregateOutputType = {
    id: number | null
  }

  export type OwnerMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    id?: true
  }

  export type OwnerSumAggregateInputType = {
    id?: true
  }

  export type OwnerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: number
    name: string
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teams?: boolean | Owner$teamsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Owner$teamsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      teams: Prisma.$TeamOwnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Owner$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'Int'>
    readonly name: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.teams
   */
  export type Owner$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    where?: TeamOwnerWhereInput
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    cursor?: TeamOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamOwnerScalarFieldEnum | TeamOwnerScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasons?: boolean | Team$seasonsArgs<ExtArgs>
    homeMatches?: boolean | Team$homeMatchesArgs<ExtArgs>
    awayMatches?: boolean | Team$awayMatchesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | Team$seasonsArgs<ExtArgs>
    homeMatches?: boolean | Team$homeMatchesArgs<ExtArgs>
    awayMatches?: boolean | Team$awayMatchesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      seasons: Prisma.$TeamOwnerPayload<ExtArgs>[]
      homeMatches: Prisma.$MatchPayload<ExtArgs>[]
      awayMatches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasons<T extends Team$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Team$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homeMatches<T extends Team$homeMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awayMatches<T extends Team$awayMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.seasons
   */
  export type Team$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    where?: TeamOwnerWhereInput
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    cursor?: TeamOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamOwnerScalarFieldEnum | TeamOwnerScalarFieldEnum[]
  }

  /**
   * Team.homeMatches
   */
  export type Team$homeMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.awayMatches
   */
  export type Team$awayMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamOwner
   */

  export type AggregateTeamOwner = {
    _count: TeamOwnerCountAggregateOutputType | null
    _avg: TeamOwnerAvgAggregateOutputType | null
    _sum: TeamOwnerSumAggregateOutputType | null
    _min: TeamOwnerMinAggregateOutputType | null
    _max: TeamOwnerMaxAggregateOutputType | null
  }

  export type TeamOwnerAvgAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    teamId: number | null
    ownerId: number | null
  }

  export type TeamOwnerSumAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    teamId: number | null
    ownerId: number | null
  }

  export type TeamOwnerMinAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    teamId: number | null
    ownerId: number | null
  }

  export type TeamOwnerMaxAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    teamId: number | null
    ownerId: number | null
  }

  export type TeamOwnerCountAggregateOutputType = {
    id: number
    seasonYear: number
    teamId: number
    ownerId: number
    _all: number
  }


  export type TeamOwnerAvgAggregateInputType = {
    id?: true
    seasonYear?: true
    teamId?: true
    ownerId?: true
  }

  export type TeamOwnerSumAggregateInputType = {
    id?: true
    seasonYear?: true
    teamId?: true
    ownerId?: true
  }

  export type TeamOwnerMinAggregateInputType = {
    id?: true
    seasonYear?: true
    teamId?: true
    ownerId?: true
  }

  export type TeamOwnerMaxAggregateInputType = {
    id?: true
    seasonYear?: true
    teamId?: true
    ownerId?: true
  }

  export type TeamOwnerCountAggregateInputType = {
    id?: true
    seasonYear?: true
    teamId?: true
    ownerId?: true
    _all?: true
  }

  export type TeamOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamOwner to aggregate.
     */
    where?: TeamOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOwners to fetch.
     */
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamOwners
    **/
    _count?: true | TeamOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamOwnerMaxAggregateInputType
  }

  export type GetTeamOwnerAggregateType<T extends TeamOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamOwner[P]>
      : GetScalarType<T[P], AggregateTeamOwner[P]>
  }




  export type TeamOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamOwnerWhereInput
    orderBy?: TeamOwnerOrderByWithAggregationInput | TeamOwnerOrderByWithAggregationInput[]
    by: TeamOwnerScalarFieldEnum[] | TeamOwnerScalarFieldEnum
    having?: TeamOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamOwnerCountAggregateInputType | true
    _avg?: TeamOwnerAvgAggregateInputType
    _sum?: TeamOwnerSumAggregateInputType
    _min?: TeamOwnerMinAggregateInputType
    _max?: TeamOwnerMaxAggregateInputType
  }

  export type TeamOwnerGroupByOutputType = {
    id: number
    seasonYear: number
    teamId: number
    ownerId: number
    _count: TeamOwnerCountAggregateOutputType | null
    _avg: TeamOwnerAvgAggregateOutputType | null
    _sum: TeamOwnerSumAggregateOutputType | null
    _min: TeamOwnerMinAggregateOutputType | null
    _max: TeamOwnerMaxAggregateOutputType | null
  }

  type GetTeamOwnerGroupByPayload<T extends TeamOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], TeamOwnerGroupByOutputType[P]>
        }
      >
    >


  export type TeamOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    teamId?: boolean
    ownerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamOwner"]>

  export type TeamOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    teamId?: boolean
    ownerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamOwner"]>

  export type TeamOwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    teamId?: boolean
    ownerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamOwner"]>

  export type TeamOwnerSelectScalar = {
    id?: boolean
    seasonYear?: boolean
    teamId?: boolean
    ownerId?: boolean
  }

  export type TeamOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonYear" | "teamId" | "ownerId", ExtArgs["result"]["teamOwner"]>
  export type TeamOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type TeamOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type TeamOwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $TeamOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamOwner"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      owner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seasonYear: number
      teamId: number
      ownerId: number
    }, ExtArgs["result"]["teamOwner"]>
    composites: {}
  }

  type TeamOwnerGetPayload<S extends boolean | null | undefined | TeamOwnerDefaultArgs> = $Result.GetResult<Prisma.$TeamOwnerPayload, S>

  type TeamOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamOwnerCountAggregateInputType | true
    }

  export interface TeamOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamOwner'], meta: { name: 'TeamOwner' } }
    /**
     * Find zero or one TeamOwner that matches the filter.
     * @param {TeamOwnerFindUniqueArgs} args - Arguments to find a TeamOwner
     * @example
     * // Get one TeamOwner
     * const teamOwner = await prisma.teamOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamOwnerFindUniqueArgs>(args: SelectSubset<T, TeamOwnerFindUniqueArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamOwnerFindUniqueOrThrowArgs} args - Arguments to find a TeamOwner
     * @example
     * // Get one TeamOwner
     * const teamOwner = await prisma.teamOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerFindFirstArgs} args - Arguments to find a TeamOwner
     * @example
     * // Get one TeamOwner
     * const teamOwner = await prisma.teamOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamOwnerFindFirstArgs>(args?: SelectSubset<T, TeamOwnerFindFirstArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerFindFirstOrThrowArgs} args - Arguments to find a TeamOwner
     * @example
     * // Get one TeamOwner
     * const teamOwner = await prisma.teamOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamOwners
     * const teamOwners = await prisma.teamOwner.findMany()
     * 
     * // Get first 10 TeamOwners
     * const teamOwners = await prisma.teamOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamOwnerWithIdOnly = await prisma.teamOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamOwnerFindManyArgs>(args?: SelectSubset<T, TeamOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamOwner.
     * @param {TeamOwnerCreateArgs} args - Arguments to create a TeamOwner.
     * @example
     * // Create one TeamOwner
     * const TeamOwner = await prisma.teamOwner.create({
     *   data: {
     *     // ... data to create a TeamOwner
     *   }
     * })
     * 
     */
    create<T extends TeamOwnerCreateArgs>(args: SelectSubset<T, TeamOwnerCreateArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamOwners.
     * @param {TeamOwnerCreateManyArgs} args - Arguments to create many TeamOwners.
     * @example
     * // Create many TeamOwners
     * const teamOwner = await prisma.teamOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamOwnerCreateManyArgs>(args?: SelectSubset<T, TeamOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamOwners and returns the data saved in the database.
     * @param {TeamOwnerCreateManyAndReturnArgs} args - Arguments to create many TeamOwners.
     * @example
     * // Create many TeamOwners
     * const teamOwner = await prisma.teamOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamOwners and only return the `id`
     * const teamOwnerWithIdOnly = await prisma.teamOwner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamOwner.
     * @param {TeamOwnerDeleteArgs} args - Arguments to delete one TeamOwner.
     * @example
     * // Delete one TeamOwner
     * const TeamOwner = await prisma.teamOwner.delete({
     *   where: {
     *     // ... filter to delete one TeamOwner
     *   }
     * })
     * 
     */
    delete<T extends TeamOwnerDeleteArgs>(args: SelectSubset<T, TeamOwnerDeleteArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamOwner.
     * @param {TeamOwnerUpdateArgs} args - Arguments to update one TeamOwner.
     * @example
     * // Update one TeamOwner
     * const teamOwner = await prisma.teamOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamOwnerUpdateArgs>(args: SelectSubset<T, TeamOwnerUpdateArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamOwners.
     * @param {TeamOwnerDeleteManyArgs} args - Arguments to filter TeamOwners to delete.
     * @example
     * // Delete a few TeamOwners
     * const { count } = await prisma.teamOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamOwnerDeleteManyArgs>(args?: SelectSubset<T, TeamOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamOwners
     * const teamOwner = await prisma.teamOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamOwnerUpdateManyArgs>(args: SelectSubset<T, TeamOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamOwners and returns the data updated in the database.
     * @param {TeamOwnerUpdateManyAndReturnArgs} args - Arguments to update many TeamOwners.
     * @example
     * // Update many TeamOwners
     * const teamOwner = await prisma.teamOwner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamOwners and only return the `id`
     * const teamOwnerWithIdOnly = await prisma.teamOwner.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamOwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamOwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamOwner.
     * @param {TeamOwnerUpsertArgs} args - Arguments to update or create a TeamOwner.
     * @example
     * // Update or create a TeamOwner
     * const teamOwner = await prisma.teamOwner.upsert({
     *   create: {
     *     // ... data to create a TeamOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamOwner we want to update
     *   }
     * })
     */
    upsert<T extends TeamOwnerUpsertArgs>(args: SelectSubset<T, TeamOwnerUpsertArgs<ExtArgs>>): Prisma__TeamOwnerClient<$Result.GetResult<Prisma.$TeamOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerCountArgs} args - Arguments to filter TeamOwners to count.
     * @example
     * // Count the number of TeamOwners
     * const count = await prisma.teamOwner.count({
     *   where: {
     *     // ... the filter for the TeamOwners we want to count
     *   }
     * })
    **/
    count<T extends TeamOwnerCountArgs>(
      args?: Subset<T, TeamOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamOwnerAggregateArgs>(args: Subset<T, TeamOwnerAggregateArgs>): Prisma.PrismaPromise<GetTeamOwnerAggregateType<T>>

    /**
     * Group by TeamOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamOwnerGroupByArgs} args - Group by arguments.
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
      T extends TeamOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamOwnerGroupByArgs['orderBy'] }
        : { orderBy?: TeamOwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamOwner model
   */
  readonly fields: TeamOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamOwner model
   */
  interface TeamOwnerFieldRefs {
    readonly id: FieldRef<"TeamOwner", 'Int'>
    readonly seasonYear: FieldRef<"TeamOwner", 'Int'>
    readonly teamId: FieldRef<"TeamOwner", 'Int'>
    readonly ownerId: FieldRef<"TeamOwner", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeamOwner findUnique
   */
  export type TeamOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter, which TeamOwner to fetch.
     */
    where: TeamOwnerWhereUniqueInput
  }

  /**
   * TeamOwner findUniqueOrThrow
   */
  export type TeamOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter, which TeamOwner to fetch.
     */
    where: TeamOwnerWhereUniqueInput
  }

  /**
   * TeamOwner findFirst
   */
  export type TeamOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter, which TeamOwner to fetch.
     */
    where?: TeamOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOwners to fetch.
     */
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamOwners.
     */
    cursor?: TeamOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamOwners.
     */
    distinct?: TeamOwnerScalarFieldEnum | TeamOwnerScalarFieldEnum[]
  }

  /**
   * TeamOwner findFirstOrThrow
   */
  export type TeamOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter, which TeamOwner to fetch.
     */
    where?: TeamOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOwners to fetch.
     */
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamOwners.
     */
    cursor?: TeamOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamOwners.
     */
    distinct?: TeamOwnerScalarFieldEnum | TeamOwnerScalarFieldEnum[]
  }

  /**
   * TeamOwner findMany
   */
  export type TeamOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter, which TeamOwners to fetch.
     */
    where?: TeamOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamOwners to fetch.
     */
    orderBy?: TeamOwnerOrderByWithRelationInput | TeamOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamOwners.
     */
    cursor?: TeamOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamOwners.
     */
    skip?: number
    distinct?: TeamOwnerScalarFieldEnum | TeamOwnerScalarFieldEnum[]
  }

  /**
   * TeamOwner create
   */
  export type TeamOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamOwner.
     */
    data: XOR<TeamOwnerCreateInput, TeamOwnerUncheckedCreateInput>
  }

  /**
   * TeamOwner createMany
   */
  export type TeamOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamOwners.
     */
    data: TeamOwnerCreateManyInput | TeamOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamOwner createManyAndReturn
   */
  export type TeamOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * The data used to create many TeamOwners.
     */
    data: TeamOwnerCreateManyInput | TeamOwnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamOwner update
   */
  export type TeamOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamOwner.
     */
    data: XOR<TeamOwnerUpdateInput, TeamOwnerUncheckedUpdateInput>
    /**
     * Choose, which TeamOwner to update.
     */
    where: TeamOwnerWhereUniqueInput
  }

  /**
   * TeamOwner updateMany
   */
  export type TeamOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamOwners.
     */
    data: XOR<TeamOwnerUpdateManyMutationInput, TeamOwnerUncheckedUpdateManyInput>
    /**
     * Filter which TeamOwners to update
     */
    where?: TeamOwnerWhereInput
    /**
     * Limit how many TeamOwners to update.
     */
    limit?: number
  }

  /**
   * TeamOwner updateManyAndReturn
   */
  export type TeamOwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * The data used to update TeamOwners.
     */
    data: XOR<TeamOwnerUpdateManyMutationInput, TeamOwnerUncheckedUpdateManyInput>
    /**
     * Filter which TeamOwners to update
     */
    where?: TeamOwnerWhereInput
    /**
     * Limit how many TeamOwners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamOwner upsert
   */
  export type TeamOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamOwner to update in case it exists.
     */
    where: TeamOwnerWhereUniqueInput
    /**
     * In case the TeamOwner found by the `where` argument doesn't exist, create a new TeamOwner with this data.
     */
    create: XOR<TeamOwnerCreateInput, TeamOwnerUncheckedCreateInput>
    /**
     * In case the TeamOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamOwnerUpdateInput, TeamOwnerUncheckedUpdateInput>
  }

  /**
   * TeamOwner delete
   */
  export type TeamOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
    /**
     * Filter which TeamOwner to delete.
     */
    where: TeamOwnerWhereUniqueInput
  }

  /**
   * TeamOwner deleteMany
   */
  export type TeamOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamOwners to delete
     */
    where?: TeamOwnerWhereInput
    /**
     * Limit how many TeamOwners to delete.
     */
    limit?: number
  }

  /**
   * TeamOwner without action
   */
  export type TeamOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamOwner
     */
    select?: TeamOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamOwner
     */
    omit?: TeamOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamOwnerInclude<ExtArgs> | null
  }


  /**
   * Model Week
   */

  export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  export type WeekAvgAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    weekNumber: number | null
  }

  export type WeekSumAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    weekNumber: number | null
  }

  export type WeekMinAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    weekNumber: number | null
  }

  export type WeekMaxAggregateOutputType = {
    id: number | null
    seasonYear: number | null
    weekNumber: number | null
  }

  export type WeekCountAggregateOutputType = {
    id: number
    seasonYear: number
    weekNumber: number
    _all: number
  }


  export type WeekAvgAggregateInputType = {
    id?: true
    seasonYear?: true
    weekNumber?: true
  }

  export type WeekSumAggregateInputType = {
    id?: true
    seasonYear?: true
    weekNumber?: true
  }

  export type WeekMinAggregateInputType = {
    id?: true
    seasonYear?: true
    weekNumber?: true
  }

  export type WeekMaxAggregateInputType = {
    id?: true
    seasonYear?: true
    weekNumber?: true
  }

  export type WeekCountAggregateInputType = {
    id?: true
    seasonYear?: true
    weekNumber?: true
    _all?: true
  }

  export type WeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Week to aggregate.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeks
    **/
    _count?: true | WeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekMaxAggregateInputType
  }

  export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
        [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeek[P]>
      : GetScalarType<T[P], AggregateWeek[P]>
  }




  export type WeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekWhereInput
    orderBy?: WeekOrderByWithAggregationInput | WeekOrderByWithAggregationInput[]
    by: WeekScalarFieldEnum[] | WeekScalarFieldEnum
    having?: WeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekCountAggregateInputType | true
    _avg?: WeekAvgAggregateInputType
    _sum?: WeekSumAggregateInputType
    _min?: WeekMinAggregateInputType
    _max?: WeekMaxAggregateInputType
  }

  export type WeekGroupByOutputType = {
    id: number
    seasonYear: number
    weekNumber: number
    _count: WeekCountAggregateOutputType | null
    _avg: WeekAvgAggregateOutputType | null
    _sum: WeekSumAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  type GetWeekGroupByPayload<T extends WeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekGroupByOutputType[P]>
            : GetScalarType<T[P], WeekGroupByOutputType[P]>
        }
      >
    >


  export type WeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    weekNumber?: boolean
    matches?: boolean | Week$matchesArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>

  export type WeekSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    weekNumber?: boolean
  }, ExtArgs["result"]["week"]>

  export type WeekSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonYear?: boolean
    weekNumber?: boolean
  }, ExtArgs["result"]["week"]>

  export type WeekSelectScalar = {
    id?: boolean
    seasonYear?: boolean
    weekNumber?: boolean
  }

  export type WeekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonYear" | "weekNumber", ExtArgs["result"]["week"]>
  export type WeekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Week$matchesArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeekIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeekIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Week"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seasonYear: number
      weekNumber: number
    }, ExtArgs["result"]["week"]>
    composites: {}
  }

  type WeekGetPayload<S extends boolean | null | undefined | WeekDefaultArgs> = $Result.GetResult<Prisma.$WeekPayload, S>

  type WeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekCountAggregateInputType | true
    }

  export interface WeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Week'], meta: { name: 'Week' } }
    /**
     * Find zero or one Week that matches the filter.
     * @param {WeekFindUniqueArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekFindUniqueArgs>(args: SelectSubset<T, WeekFindUniqueArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Week that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeekFindUniqueOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekFindFirstArgs>(args?: SelectSubset<T, WeekFindFirstArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeks
     * const weeks = await prisma.week.findMany()
     * 
     * // Get first 10 Weeks
     * const weeks = await prisma.week.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekWithIdOnly = await prisma.week.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekFindManyArgs>(args?: SelectSubset<T, WeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Week.
     * @param {WeekCreateArgs} args - Arguments to create a Week.
     * @example
     * // Create one Week
     * const Week = await prisma.week.create({
     *   data: {
     *     // ... data to create a Week
     *   }
     * })
     * 
     */
    create<T extends WeekCreateArgs>(args: SelectSubset<T, WeekCreateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeks.
     * @param {WeekCreateManyArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekCreateManyArgs>(args?: SelectSubset<T, WeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weeks and returns the data saved in the database.
     * @param {WeekCreateManyAndReturnArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Week.
     * @param {WeekDeleteArgs} args - Arguments to delete one Week.
     * @example
     * // Delete one Week
     * const Week = await prisma.week.delete({
     *   where: {
     *     // ... filter to delete one Week
     *   }
     * })
     * 
     */
    delete<T extends WeekDeleteArgs>(args: SelectSubset<T, WeekDeleteArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Week.
     * @param {WeekUpdateArgs} args - Arguments to update one Week.
     * @example
     * // Update one Week
     * const week = await prisma.week.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekUpdateArgs>(args: SelectSubset<T, WeekUpdateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeks.
     * @param {WeekDeleteManyArgs} args - Arguments to filter Weeks to delete.
     * @example
     * // Delete a few Weeks
     * const { count } = await prisma.week.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekDeleteManyArgs>(args?: SelectSubset<T, WeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekUpdateManyArgs>(args: SelectSubset<T, WeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks and returns the data updated in the database.
     * @param {WeekUpdateManyAndReturnArgs} args - Arguments to update many Weeks.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeekUpdateManyAndReturnArgs>(args: SelectSubset<T, WeekUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Week.
     * @param {WeekUpsertArgs} args - Arguments to update or create a Week.
     * @example
     * // Update or create a Week
     * const week = await prisma.week.upsert({
     *   create: {
     *     // ... data to create a Week
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Week we want to update
     *   }
     * })
     */
    upsert<T extends WeekUpsertArgs>(args: SelectSubset<T, WeekUpsertArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekCountArgs} args - Arguments to filter Weeks to count.
     * @example
     * // Count the number of Weeks
     * const count = await prisma.week.count({
     *   where: {
     *     // ... the filter for the Weeks we want to count
     *   }
     * })
    **/
    count<T extends WeekCountArgs>(
      args?: Subset<T, WeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeekAggregateArgs>(args: Subset<T, WeekAggregateArgs>): Prisma.PrismaPromise<GetWeekAggregateType<T>>

    /**
     * Group by Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekGroupByArgs} args - Group by arguments.
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
      T extends WeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekGroupByArgs['orderBy'] }
        : { orderBy?: WeekGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Week model
   */
  readonly fields: WeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Week.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Week$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Week$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Week model
   */
  interface WeekFieldRefs {
    readonly id: FieldRef<"Week", 'Int'>
    readonly seasonYear: FieldRef<"Week", 'Int'>
    readonly weekNumber: FieldRef<"Week", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Week findUnique
   */
  export type WeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findUniqueOrThrow
   */
  export type WeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findFirst
   */
  export type WeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findFirstOrThrow
   */
  export type WeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findMany
   */
  export type WeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Weeks to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week create
   */
  export type WeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to create a Week.
     */
    data: XOR<WeekCreateInput, WeekUncheckedCreateInput>
  }

  /**
   * Week createMany
   */
  export type WeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Week createManyAndReturn
   */
  export type WeekCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Week update
   */
  export type WeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to update a Week.
     */
    data: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
    /**
     * Choose, which Week to update.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week updateMany
   */
  export type WeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
  }

  /**
   * Week updateManyAndReturn
   */
  export type WeekUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
  }

  /**
   * Week upsert
   */
  export type WeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The filter to search for the Week to update in case it exists.
     */
    where: WeekWhereUniqueInput
    /**
     * In case the Week found by the `where` argument doesn't exist, create a new Week with this data.
     */
    create: XOR<WeekCreateInput, WeekUncheckedCreateInput>
    /**
     * In case the Week was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
  }

  /**
   * Week delete
   */
  export type WeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter which Week to delete.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week deleteMany
   */
  export type WeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeks to delete
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to delete.
     */
    limit?: number
  }

  /**
   * Week.matches
   */
  export type Week$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Week without action
   */
  export type WeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    id: number | null
    weekId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
    weekId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    weekId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    weekId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    weekId: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
    weekId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
    weekId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    weekId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    weekId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    weekId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: number
    weekId: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number | null
    awayScore: number | null
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    weekId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekId" | "homeTeamId" | "awayTeamId" | "homeScore" | "awayScore", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    week?: boolean | WeekDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      week: Prisma.$WeekPayload<ExtArgs>
      homeTeam: Prisma.$TeamPayload<ExtArgs>
      awayTeam: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weekId: number
      homeTeamId: number
      awayTeamId: number
      homeScore: number | null
      awayScore: number | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    week<T extends WeekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeekDefaultArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homeTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awayTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'Int'>
    readonly weekId: FieldRef<"Match", 'Int'>
    readonly homeTeamId: FieldRef<"Match", 'Int'>
    readonly awayTeamId: FieldRef<"Match", 'Int'>
    readonly homeScore: FieldRef<"Match", 'Int'>
    readonly awayScore: FieldRef<"Match", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
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


  export const MatchupScalarFieldEnum: {
    id: 'id',
    week: 'week',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    homeScore: 'homeScore',
    awayScore: 'awayScore'
  };

  export type MatchupScalarFieldEnum = (typeof MatchupScalarFieldEnum)[keyof typeof MatchupScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamOwnerScalarFieldEnum: {
    id: 'id',
    seasonYear: 'seasonYear',
    teamId: 'teamId',
    ownerId: 'ownerId'
  };

  export type TeamOwnerScalarFieldEnum = (typeof TeamOwnerScalarFieldEnum)[keyof typeof TeamOwnerScalarFieldEnum]


  export const WeekScalarFieldEnum: {
    id: 'id',
    seasonYear: 'seasonYear',
    weekNumber: 'weekNumber'
  };

  export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    weekId: 'weekId',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    homeScore: 'homeScore',
    awayScore: 'awayScore'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MatchupWhereInput = {
    AND?: MatchupWhereInput | MatchupWhereInput[]
    OR?: MatchupWhereInput[]
    NOT?: MatchupWhereInput | MatchupWhereInput[]
    id?: IntFilter<"Matchup"> | number
    week?: IntFilter<"Matchup"> | number
    homeTeam?: StringFilter<"Matchup"> | string
    awayTeam?: StringFilter<"Matchup"> | string
    homeScore?: FloatFilter<"Matchup"> | number
    awayScore?: FloatFilter<"Matchup"> | number
  }

  export type MatchupOrderByWithRelationInput = {
    id?: SortOrder
    week?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchupWhereInput | MatchupWhereInput[]
    OR?: MatchupWhereInput[]
    NOT?: MatchupWhereInput | MatchupWhereInput[]
    week?: IntFilter<"Matchup"> | number
    homeTeam?: StringFilter<"Matchup"> | string
    awayTeam?: StringFilter<"Matchup"> | string
    homeScore?: FloatFilter<"Matchup"> | number
    awayScore?: FloatFilter<"Matchup"> | number
  }, "id">

  export type MatchupOrderByWithAggregationInput = {
    id?: SortOrder
    week?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    _count?: MatchupCountOrderByAggregateInput
    _avg?: MatchupAvgOrderByAggregateInput
    _max?: MatchupMaxOrderByAggregateInput
    _min?: MatchupMinOrderByAggregateInput
    _sum?: MatchupSumOrderByAggregateInput
  }

  export type MatchupScalarWhereWithAggregatesInput = {
    AND?: MatchupScalarWhereWithAggregatesInput | MatchupScalarWhereWithAggregatesInput[]
    OR?: MatchupScalarWhereWithAggregatesInput[]
    NOT?: MatchupScalarWhereWithAggregatesInput | MatchupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matchup"> | number
    week?: IntWithAggregatesFilter<"Matchup"> | number
    homeTeam?: StringWithAggregatesFilter<"Matchup"> | string
    awayTeam?: StringWithAggregatesFilter<"Matchup"> | string
    homeScore?: FloatWithAggregatesFilter<"Matchup"> | number
    awayScore?: FloatWithAggregatesFilter<"Matchup"> | number
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: IntFilter<"Owner"> | number
    name?: StringFilter<"Owner"> | string
    teams?: TeamOwnerListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teams?: TeamOwnerOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    teams?: TeamOwnerListRelationFilter
  }, "id" | "name">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Owner"> | number
    name?: StringWithAggregatesFilter<"Owner"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    seasons?: TeamOwnerListRelationFilter
    homeMatches?: MatchListRelationFilter
    awayMatches?: MatchListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasons?: TeamOwnerOrderByRelationAggregateInput
    homeMatches?: MatchOrderByRelationAggregateInput
    awayMatches?: MatchOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    seasons?: TeamOwnerListRelationFilter
    homeMatches?: MatchListRelationFilter
    awayMatches?: MatchListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
  }

  export type TeamOwnerWhereInput = {
    AND?: TeamOwnerWhereInput | TeamOwnerWhereInput[]
    OR?: TeamOwnerWhereInput[]
    NOT?: TeamOwnerWhereInput | TeamOwnerWhereInput[]
    id?: IntFilter<"TeamOwner"> | number
    seasonYear?: IntFilter<"TeamOwner"> | number
    teamId?: IntFilter<"TeamOwner"> | number
    ownerId?: IntFilter<"TeamOwner"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }

  export type TeamOwnerOrderByWithRelationInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    team?: TeamOrderByWithRelationInput
    owner?: OwnerOrderByWithRelationInput
  }

  export type TeamOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_seasonYear?: TeamOwnerTeamIdSeasonYearCompoundUniqueInput
    AND?: TeamOwnerWhereInput | TeamOwnerWhereInput[]
    OR?: TeamOwnerWhereInput[]
    NOT?: TeamOwnerWhereInput | TeamOwnerWhereInput[]
    seasonYear?: IntFilter<"TeamOwner"> | number
    teamId?: IntFilter<"TeamOwner"> | number
    ownerId?: IntFilter<"TeamOwner"> | number
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }, "id" | "teamId_seasonYear">

  export type TeamOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    _count?: TeamOwnerCountOrderByAggregateInput
    _avg?: TeamOwnerAvgOrderByAggregateInput
    _max?: TeamOwnerMaxOrderByAggregateInput
    _min?: TeamOwnerMinOrderByAggregateInput
    _sum?: TeamOwnerSumOrderByAggregateInput
  }

  export type TeamOwnerScalarWhereWithAggregatesInput = {
    AND?: TeamOwnerScalarWhereWithAggregatesInput | TeamOwnerScalarWhereWithAggregatesInput[]
    OR?: TeamOwnerScalarWhereWithAggregatesInput[]
    NOT?: TeamOwnerScalarWhereWithAggregatesInput | TeamOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamOwner"> | number
    seasonYear?: IntWithAggregatesFilter<"TeamOwner"> | number
    teamId?: IntWithAggregatesFilter<"TeamOwner"> | number
    ownerId?: IntWithAggregatesFilter<"TeamOwner"> | number
  }

  export type WeekWhereInput = {
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    id?: IntFilter<"Week"> | number
    seasonYear?: IntFilter<"Week"> | number
    weekNumber?: IntFilter<"Week"> | number
    matches?: MatchListRelationFilter
  }

  export type WeekOrderByWithRelationInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
    matches?: MatchOrderByRelationAggregateInput
  }

  export type WeekWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    seasonYear_weekNumber?: WeekSeasonYearWeekNumberCompoundUniqueInput
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    seasonYear?: IntFilter<"Week"> | number
    weekNumber?: IntFilter<"Week"> | number
    matches?: MatchListRelationFilter
  }, "id" | "seasonYear_weekNumber">

  export type WeekOrderByWithAggregationInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
    _count?: WeekCountOrderByAggregateInput
    _avg?: WeekAvgOrderByAggregateInput
    _max?: WeekMaxOrderByAggregateInput
    _min?: WeekMinOrderByAggregateInput
    _sum?: WeekSumOrderByAggregateInput
  }

  export type WeekScalarWhereWithAggregatesInput = {
    AND?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    OR?: WeekScalarWhereWithAggregatesInput[]
    NOT?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Week"> | number
    seasonYear?: IntWithAggregatesFilter<"Week"> | number
    weekNumber?: IntWithAggregatesFilter<"Week"> | number
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: IntFilter<"Match"> | number
    weekId?: IntFilter<"Match"> | number
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    homeScore?: IntNullableFilter<"Match"> | number | null
    awayScore?: IntNullableFilter<"Match"> | number | null
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    week?: WeekOrderByWithRelationInput
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    weekId?: IntFilter<"Match"> | number
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    homeScore?: IntNullableFilter<"Match"> | number | null
    awayScore?: IntNullableFilter<"Match"> | number | null
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Match"> | number
    weekId?: IntWithAggregatesFilter<"Match"> | number
    homeTeamId?: IntWithAggregatesFilter<"Match"> | number
    awayTeamId?: IntWithAggregatesFilter<"Match"> | number
    homeScore?: IntNullableWithAggregatesFilter<"Match"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"Match"> | number | null
  }

  export type MatchupCreateInput = {
    week: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
  }

  export type MatchupUncheckedCreateInput = {
    id?: number
    week: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
  }

  export type MatchupUpdateInput = {
    week?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchupCreateManyInput = {
    id?: number
    week: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
  }

  export type MatchupUpdateManyMutationInput = {
    week?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
  }

  export type OwnerCreateInput = {
    name: string
    teams?: TeamOwnerCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: number
    name: string
    teams?: TeamOwnerUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamOwnerUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamOwnerUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: number
    name: string
  }

  export type OwnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    name: string
    seasons?: TeamOwnerCreateNestedManyWithoutTeamInput
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    seasons?: TeamOwnerUncheckedCreateNestedManyWithoutTeamInput
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUpdateManyWithoutTeamNestedInput
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUncheckedUpdateManyWithoutTeamNestedInput
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamOwnerCreateInput = {
    seasonYear: number
    team: TeamCreateNestedOneWithoutSeasonsInput
    owner: OwnerCreateNestedOneWithoutTeamsInput
  }

  export type TeamOwnerUncheckedCreateInput = {
    id?: number
    seasonYear: number
    teamId: number
    ownerId: number
  }

  export type TeamOwnerUpdateInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSeasonsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamOwnerCreateManyInput = {
    id?: number
    seasonYear: number
    teamId: number
    ownerId: number
  }

  export type TeamOwnerUpdateManyMutationInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
  }

  export type TeamOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type WeekCreateInput = {
    seasonYear: number
    weekNumber: number
    matches?: MatchCreateNestedManyWithoutWeekInput
  }

  export type WeekUncheckedCreateInput = {
    id?: number
    seasonYear: number
    weekNumber: number
    matches?: MatchUncheckedCreateNestedManyWithoutWeekInput
  }

  export type WeekUpdateInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
    matches?: MatchUpdateManyWithoutWeekNestedInput
  }

  export type WeekUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
    matches?: MatchUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type WeekCreateManyInput = {
    id?: number
    seasonYear: number
    weekNumber: number
  }

  export type WeekUpdateManyMutationInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type WeekUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type MatchCreateInput = {
    homeScore?: number | null
    awayScore?: number | null
    week: WeekCreateNestedOneWithoutMatchesInput
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: number
    weekId: number
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchUpdateInput = {
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    week?: WeekUpdateOneRequiredWithoutMatchesNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchCreateManyInput = {
    id?: number
    weekId: number
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchUpdateManyMutationInput = {
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchupCountOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupAvgOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupMaxOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupMinOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupSumOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TeamOwnerListRelationFilter = {
    every?: TeamOwnerWhereInput
    some?: TeamOwnerWhereInput
    none?: TeamOwnerWhereInput
  }

  export type TeamOwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type TeamOwnerTeamIdSeasonYearCompoundUniqueInput = {
    teamId: number
    seasonYear: number
  }

  export type TeamOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
  }

  export type TeamOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
  }

  export type TeamOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
  }

  export type TeamOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
  }

  export type TeamOwnerSumOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
  }

  export type WeekSeasonYearWeekNumberCompoundUniqueInput = {
    seasonYear: number
    weekNumber: number
  }

  export type WeekCountOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeekAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeekMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeekMinOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
  }

  export type WeekSumOrderByAggregateInput = {
    id?: SortOrder
    seasonYear?: SortOrder
    weekNumber?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WeekScalarRelationFilter = {
    is?: WeekWhereInput
    isNot?: WeekWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    id?: SortOrder
    weekId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamOwnerCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput> | TeamOwnerCreateWithoutOwnerInput[] | TeamOwnerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutOwnerInput | TeamOwnerCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamOwnerCreateManyOwnerInputEnvelope
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
  }

  export type TeamOwnerUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput> | TeamOwnerCreateWithoutOwnerInput[] | TeamOwnerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutOwnerInput | TeamOwnerCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamOwnerCreateManyOwnerInputEnvelope
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
  }

  export type TeamOwnerUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput> | TeamOwnerCreateWithoutOwnerInput[] | TeamOwnerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutOwnerInput | TeamOwnerCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamOwnerUpsertWithWhereUniqueWithoutOwnerInput | TeamOwnerUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamOwnerCreateManyOwnerInputEnvelope
    set?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    disconnect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    delete?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    update?: TeamOwnerUpdateWithWhereUniqueWithoutOwnerInput | TeamOwnerUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamOwnerUpdateManyWithWhereWithoutOwnerInput | TeamOwnerUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
  }

  export type TeamOwnerUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput> | TeamOwnerCreateWithoutOwnerInput[] | TeamOwnerUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutOwnerInput | TeamOwnerCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamOwnerUpsertWithWhereUniqueWithoutOwnerInput | TeamOwnerUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamOwnerCreateManyOwnerInputEnvelope
    set?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    disconnect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    delete?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    update?: TeamOwnerUpdateWithWhereUniqueWithoutOwnerInput | TeamOwnerUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamOwnerUpdateManyWithWhereWithoutOwnerInput | TeamOwnerUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
  }

  export type TeamOwnerCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput> | TeamOwnerCreateWithoutTeamInput[] | TeamOwnerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutTeamInput | TeamOwnerCreateOrConnectWithoutTeamInput[]
    createMany?: TeamOwnerCreateManyTeamInputEnvelope
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TeamOwnerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput> | TeamOwnerCreateWithoutTeamInput[] | TeamOwnerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutTeamInput | TeamOwnerCreateOrConnectWithoutTeamInput[]
    createMany?: TeamOwnerCreateManyTeamInputEnvelope
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TeamOwnerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput> | TeamOwnerCreateWithoutTeamInput[] | TeamOwnerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutTeamInput | TeamOwnerCreateOrConnectWithoutTeamInput[]
    upsert?: TeamOwnerUpsertWithWhereUniqueWithoutTeamInput | TeamOwnerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamOwnerCreateManyTeamInputEnvelope
    set?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    disconnect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    delete?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    update?: TeamOwnerUpdateWithWhereUniqueWithoutTeamInput | TeamOwnerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamOwnerUpdateManyWithWhereWithoutTeamInput | TeamOwnerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutHomeTeamInput | MatchUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutHomeTeamInput | MatchUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutHomeTeamInput | MatchUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutAwayTeamInput | MatchUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutAwayTeamInput | MatchUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutAwayTeamInput | MatchUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamOwnerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput> | TeamOwnerCreateWithoutTeamInput[] | TeamOwnerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamOwnerCreateOrConnectWithoutTeamInput | TeamOwnerCreateOrConnectWithoutTeamInput[]
    upsert?: TeamOwnerUpsertWithWhereUniqueWithoutTeamInput | TeamOwnerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamOwnerCreateManyTeamInputEnvelope
    set?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    disconnect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    delete?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    connect?: TeamOwnerWhereUniqueInput | TeamOwnerWhereUniqueInput[]
    update?: TeamOwnerUpdateWithWhereUniqueWithoutTeamInput | TeamOwnerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamOwnerUpdateManyWithWhereWithoutTeamInput | TeamOwnerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput> | MatchCreateWithoutHomeTeamInput[] | MatchUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutHomeTeamInput | MatchCreateOrConnectWithoutHomeTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutHomeTeamInput | MatchUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: MatchCreateManyHomeTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutHomeTeamInput | MatchUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutHomeTeamInput | MatchUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput> | MatchCreateWithoutAwayTeamInput[] | MatchUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutAwayTeamInput | MatchCreateOrConnectWithoutAwayTeamInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutAwayTeamInput | MatchUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: MatchCreateManyAwayTeamInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutAwayTeamInput | MatchUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutAwayTeamInput | MatchUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<TeamCreateWithoutSeasonsInput, TeamUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSeasonsInput
    connect?: TeamWhereUniqueInput
  }

  export type OwnerCreateNestedOneWithoutTeamsInput = {
    create?: XOR<OwnerCreateWithoutTeamsInput, OwnerUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutTeamsInput
    connect?: OwnerWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<TeamCreateWithoutSeasonsInput, TeamUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSeasonsInput
    upsert?: TeamUpsertWithoutSeasonsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSeasonsInput, TeamUpdateWithoutSeasonsInput>, TeamUncheckedUpdateWithoutSeasonsInput>
  }

  export type OwnerUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<OwnerCreateWithoutTeamsInput, OwnerUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutTeamsInput
    upsert?: OwnerUpsertWithoutTeamsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutTeamsInput, OwnerUpdateWithoutTeamsInput>, OwnerUncheckedUpdateWithoutTeamsInput>
  }

  export type MatchCreateNestedManyWithoutWeekInput = {
    create?: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput> | MatchCreateWithoutWeekInput[] | MatchUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWeekInput | MatchCreateOrConnectWithoutWeekInput[]
    createMany?: MatchCreateManyWeekInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput> | MatchCreateWithoutWeekInput[] | MatchUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWeekInput | MatchCreateOrConnectWithoutWeekInput[]
    createMany?: MatchCreateManyWeekInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUpdateManyWithoutWeekNestedInput = {
    create?: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput> | MatchCreateWithoutWeekInput[] | MatchUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWeekInput | MatchCreateOrConnectWithoutWeekInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWeekInput | MatchUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: MatchCreateManyWeekInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWeekInput | MatchUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWeekInput | MatchUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput> | MatchCreateWithoutWeekInput[] | MatchUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWeekInput | MatchCreateOrConnectWithoutWeekInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWeekInput | MatchUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: MatchCreateManyWeekInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWeekInput | MatchUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWeekInput | MatchUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type WeekCreateNestedOneWithoutMatchesInput = {
    create?: XOR<WeekCreateWithoutMatchesInput, WeekUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: WeekCreateOrConnectWithoutMatchesInput
    connect?: WeekWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutHomeMatchesInput = {
    create?: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeMatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayMatchesInput = {
    create?: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayMatchesInput
    connect?: TeamWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeekUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<WeekCreateWithoutMatchesInput, WeekUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: WeekCreateOrConnectWithoutMatchesInput
    upsert?: WeekUpsertWithoutMatchesInput
    connect?: WeekWhereUniqueInput
    update?: XOR<XOR<WeekUpdateToOneWithWhereWithoutMatchesInput, WeekUpdateWithoutMatchesInput>, WeekUncheckedUpdateWithoutMatchesInput>
  }

  export type TeamUpdateOneRequiredWithoutHomeMatchesNestedInput = {
    create?: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeMatchesInput
    upsert?: TeamUpsertWithoutHomeMatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeMatchesInput, TeamUpdateWithoutHomeMatchesInput>, TeamUncheckedUpdateWithoutHomeMatchesInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayMatchesNestedInput = {
    create?: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayMatchesInput
    upsert?: TeamUpsertWithoutAwayMatchesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayMatchesInput, TeamUpdateWithoutAwayMatchesInput>, TeamUncheckedUpdateWithoutAwayMatchesInput>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TeamOwnerCreateWithoutOwnerInput = {
    seasonYear: number
    team: TeamCreateNestedOneWithoutSeasonsInput
  }

  export type TeamOwnerUncheckedCreateWithoutOwnerInput = {
    id?: number
    seasonYear: number
    teamId: number
  }

  export type TeamOwnerCreateOrConnectWithoutOwnerInput = {
    where: TeamOwnerWhereUniqueInput
    create: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput>
  }

  export type TeamOwnerCreateManyOwnerInputEnvelope = {
    data: TeamOwnerCreateManyOwnerInput | TeamOwnerCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TeamOwnerUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TeamOwnerWhereUniqueInput
    update: XOR<TeamOwnerUpdateWithoutOwnerInput, TeamOwnerUncheckedUpdateWithoutOwnerInput>
    create: XOR<TeamOwnerCreateWithoutOwnerInput, TeamOwnerUncheckedCreateWithoutOwnerInput>
  }

  export type TeamOwnerUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TeamOwnerWhereUniqueInput
    data: XOR<TeamOwnerUpdateWithoutOwnerInput, TeamOwnerUncheckedUpdateWithoutOwnerInput>
  }

  export type TeamOwnerUpdateManyWithWhereWithoutOwnerInput = {
    where: TeamOwnerScalarWhereInput
    data: XOR<TeamOwnerUpdateManyMutationInput, TeamOwnerUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TeamOwnerScalarWhereInput = {
    AND?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
    OR?: TeamOwnerScalarWhereInput[]
    NOT?: TeamOwnerScalarWhereInput | TeamOwnerScalarWhereInput[]
    id?: IntFilter<"TeamOwner"> | number
    seasonYear?: IntFilter<"TeamOwner"> | number
    teamId?: IntFilter<"TeamOwner"> | number
    ownerId?: IntFilter<"TeamOwner"> | number
  }

  export type TeamOwnerCreateWithoutTeamInput = {
    seasonYear: number
    owner: OwnerCreateNestedOneWithoutTeamsInput
  }

  export type TeamOwnerUncheckedCreateWithoutTeamInput = {
    id?: number
    seasonYear: number
    ownerId: number
  }

  export type TeamOwnerCreateOrConnectWithoutTeamInput = {
    where: TeamOwnerWhereUniqueInput
    create: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput>
  }

  export type TeamOwnerCreateManyTeamInputEnvelope = {
    data: TeamOwnerCreateManyTeamInput | TeamOwnerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutHomeTeamInput = {
    homeScore?: number | null
    awayScore?: number | null
    week: WeekCreateNestedOneWithoutMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
  }

  export type MatchUncheckedCreateWithoutHomeTeamInput = {
    id?: number
    weekId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchCreateOrConnectWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput>
  }

  export type MatchCreateManyHomeTeamInputEnvelope = {
    data: MatchCreateManyHomeTeamInput | MatchCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutAwayTeamInput = {
    homeScore?: number | null
    awayScore?: number | null
    week: WeekCreateNestedOneWithoutMatchesInput
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
  }

  export type MatchUncheckedCreateWithoutAwayTeamInput = {
    id?: number
    weekId: number
    homeTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchCreateOrConnectWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput>
  }

  export type MatchCreateManyAwayTeamInputEnvelope = {
    data: MatchCreateManyAwayTeamInput | MatchCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamOwnerUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamOwnerWhereUniqueInput
    update: XOR<TeamOwnerUpdateWithoutTeamInput, TeamOwnerUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamOwnerCreateWithoutTeamInput, TeamOwnerUncheckedCreateWithoutTeamInput>
  }

  export type TeamOwnerUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamOwnerWhereUniqueInput
    data: XOR<TeamOwnerUpdateWithoutTeamInput, TeamOwnerUncheckedUpdateWithoutTeamInput>
  }

  export type TeamOwnerUpdateManyWithWhereWithoutTeamInput = {
    where: TeamOwnerScalarWhereInput
    data: XOR<TeamOwnerUpdateManyMutationInput, TeamOwnerUncheckedUpdateManyWithoutTeamInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutHomeTeamInput, MatchUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<MatchCreateWithoutHomeTeamInput, MatchUncheckedCreateWithoutHomeTeamInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutHomeTeamInput, MatchUncheckedUpdateWithoutHomeTeamInput>
  }

  export type MatchUpdateManyWithWhereWithoutHomeTeamInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: IntFilter<"Match"> | number
    weekId?: IntFilter<"Match"> | number
    homeTeamId?: IntFilter<"Match"> | number
    awayTeamId?: IntFilter<"Match"> | number
    homeScore?: IntNullableFilter<"Match"> | number | null
    awayScore?: IntNullableFilter<"Match"> | number | null
  }

  export type MatchUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutAwayTeamInput, MatchUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<MatchCreateWithoutAwayTeamInput, MatchUncheckedCreateWithoutAwayTeamInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutAwayTeamInput, MatchUncheckedUpdateWithoutAwayTeamInput>
  }

  export type MatchUpdateManyWithWhereWithoutAwayTeamInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type TeamCreateWithoutSeasonsInput = {
    name: string
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutSeasonsInput = {
    id?: number
    name: string
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutSeasonsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSeasonsInput, TeamUncheckedCreateWithoutSeasonsInput>
  }

  export type OwnerCreateWithoutTeamsInput = {
    name: string
  }

  export type OwnerUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
  }

  export type OwnerCreateOrConnectWithoutTeamsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutTeamsInput, OwnerUncheckedCreateWithoutTeamsInput>
  }

  export type TeamUpsertWithoutSeasonsInput = {
    update: XOR<TeamUpdateWithoutSeasonsInput, TeamUncheckedUpdateWithoutSeasonsInput>
    create: XOR<TeamCreateWithoutSeasonsInput, TeamUncheckedCreateWithoutSeasonsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSeasonsInput, TeamUncheckedUpdateWithoutSeasonsInput>
  }

  export type TeamUpdateWithoutSeasonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSeasonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type OwnerUpsertWithoutTeamsInput = {
    update: XOR<OwnerUpdateWithoutTeamsInput, OwnerUncheckedUpdateWithoutTeamsInput>
    create: XOR<OwnerCreateWithoutTeamsInput, OwnerUncheckedCreateWithoutTeamsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutTeamsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutTeamsInput, OwnerUncheckedUpdateWithoutTeamsInput>
  }

  export type OwnerUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MatchCreateWithoutWeekInput = {
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeMatchesInput
    awayTeam: TeamCreateNestedOneWithoutAwayMatchesInput
  }

  export type MatchUncheckedCreateWithoutWeekInput = {
    id?: number
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchCreateOrConnectWithoutWeekInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput>
  }

  export type MatchCreateManyWeekInputEnvelope = {
    data: MatchCreateManyWeekInput | MatchCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutWeekInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWeekInput, MatchUncheckedUpdateWithoutWeekInput>
    create: XOR<MatchCreateWithoutWeekInput, MatchUncheckedCreateWithoutWeekInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWeekInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWeekInput, MatchUncheckedUpdateWithoutWeekInput>
  }

  export type MatchUpdateManyWithWhereWithoutWeekInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWeekInput>
  }

  export type WeekCreateWithoutMatchesInput = {
    seasonYear: number
    weekNumber: number
  }

  export type WeekUncheckedCreateWithoutMatchesInput = {
    id?: number
    seasonYear: number
    weekNumber: number
  }

  export type WeekCreateOrConnectWithoutMatchesInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutMatchesInput, WeekUncheckedCreateWithoutMatchesInput>
  }

  export type TeamCreateWithoutHomeMatchesInput = {
    name: string
    seasons?: TeamOwnerCreateNestedManyWithoutTeamInput
    awayMatches?: MatchCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeMatchesInput = {
    id?: number
    name: string
    seasons?: TeamOwnerUncheckedCreateNestedManyWithoutTeamInput
    awayMatches?: MatchUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeMatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
  }

  export type TeamCreateWithoutAwayMatchesInput = {
    name: string
    seasons?: TeamOwnerCreateNestedManyWithoutTeamInput
    homeMatches?: MatchCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayMatchesInput = {
    id?: number
    name: string
    seasons?: TeamOwnerUncheckedCreateNestedManyWithoutTeamInput
    homeMatches?: MatchUncheckedCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayMatchesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
  }

  export type WeekUpsertWithoutMatchesInput = {
    update: XOR<WeekUpdateWithoutMatchesInput, WeekUncheckedUpdateWithoutMatchesInput>
    create: XOR<WeekCreateWithoutMatchesInput, WeekUncheckedCreateWithoutMatchesInput>
    where?: WeekWhereInput
  }

  export type WeekUpdateToOneWithWhereWithoutMatchesInput = {
    where?: WeekWhereInput
    data: XOR<WeekUpdateWithoutMatchesInput, WeekUncheckedUpdateWithoutMatchesInput>
  }

  export type WeekUpdateWithoutMatchesInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type WeekUncheckedUpdateWithoutMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    weekNumber?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUpsertWithoutHomeMatchesInput = {
    update: XOR<TeamUpdateWithoutHomeMatchesInput, TeamUncheckedUpdateWithoutHomeMatchesInput>
    create: XOR<TeamCreateWithoutHomeMatchesInput, TeamUncheckedCreateWithoutHomeMatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeMatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeMatchesInput, TeamUncheckedUpdateWithoutHomeMatchesInput>
  }

  export type TeamUpdateWithoutHomeMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUpdateManyWithoutTeamNestedInput
    awayMatches?: MatchUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUncheckedUpdateManyWithoutTeamNestedInput
    awayMatches?: MatchUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUpsertWithoutAwayMatchesInput = {
    update: XOR<TeamUpdateWithoutAwayMatchesInput, TeamUncheckedUpdateWithoutAwayMatchesInput>
    create: XOR<TeamCreateWithoutAwayMatchesInput, TeamUncheckedCreateWithoutAwayMatchesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayMatchesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayMatchesInput, TeamUncheckedUpdateWithoutAwayMatchesInput>
  }

  export type TeamUpdateWithoutAwayMatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUpdateManyWithoutTeamNestedInput
    homeMatches?: MatchUpdateManyWithoutHomeTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayMatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seasons?: TeamOwnerUncheckedUpdateManyWithoutTeamNestedInput
    homeMatches?: MatchUncheckedUpdateManyWithoutHomeTeamNestedInput
  }

  export type TeamOwnerCreateManyOwnerInput = {
    id?: number
    seasonYear: number
    teamId: number
  }

  export type TeamOwnerUpdateWithoutOwnerInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    team?: TeamUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type TeamOwnerUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamOwnerUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamOwnerCreateManyTeamInput = {
    id?: number
    seasonYear: number
    ownerId: number
  }

  export type MatchCreateManyHomeTeamInput = {
    id?: number
    weekId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchCreateManyAwayTeamInput = {
    id?: number
    weekId: number
    homeTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type TeamOwnerUpdateWithoutTeamInput = {
    seasonYear?: IntFieldUpdateOperationsInput | number
    owner?: OwnerUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamOwnerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type TeamOwnerUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonYear?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type MatchUpdateWithoutHomeTeamInput = {
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    week?: WeekUpdateOneRequiredWithoutMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutHomeTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUpdateWithoutAwayTeamInput = {
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    week?: WeekUpdateOneRequiredWithoutMatchesNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutAwayTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekId?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchCreateManyWeekInput = {
    id?: number
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
  }

  export type MatchUpdateWithoutWeekInput = {
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeMatchesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchUncheckedUpdateManyWithoutWeekInput = {
    id?: IntFieldUpdateOperationsInput | number
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
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