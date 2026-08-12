
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
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Matchup
 * 
 */
export type Matchup = $Result.DefaultSelection<Prisma.$MatchupPayload>
/**
 * Model SeasonTeam
 * 
 */
export type SeasonTeam = $Result.DefaultSelection<Prisma.$SeasonTeamPayload>
/**
 * Model RosterPlayer
 * 
 */
export type RosterPlayer = $Result.DefaultSelection<Prisma.$RosterPlayerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owners
 * const owners = await prisma.owner.findMany()
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
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
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
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.seasonTeam`: Exposes CRUD operations for the **SeasonTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeasonTeams
    * const seasonTeams = await prisma.seasonTeam.findMany()
    * ```
    */
  get seasonTeam(): Prisma.SeasonTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rosterPlayer`: Exposes CRUD operations for the **RosterPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RosterPlayers
    * const rosterPlayers = await prisma.rosterPlayer.findMany()
    * ```
    */
  get rosterPlayer(): Prisma.RosterPlayerDelegate<ExtArgs, ClientOptions>;
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
    Owner: 'Owner',
    Matchup: 'Matchup',
    SeasonTeam: 'SeasonTeam',
    RosterPlayer: 'RosterPlayer'
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
      modelProps: "owner" | "matchup" | "seasonTeam" | "rosterPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      SeasonTeam: {
        payload: Prisma.$SeasonTeamPayload<ExtArgs>
        fields: Prisma.SeasonTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          findFirst: {
            args: Prisma.SeasonTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          findMany: {
            args: Prisma.SeasonTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>[]
          }
          create: {
            args: Prisma.SeasonTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          createMany: {
            args: Prisma.SeasonTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>[]
          }
          delete: {
            args: Prisma.SeasonTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          update: {
            args: Prisma.SeasonTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          deleteMany: {
            args: Prisma.SeasonTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>[]
          }
          upsert: {
            args: Prisma.SeasonTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonTeamPayload>
          }
          aggregate: {
            args: Prisma.SeasonTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeasonTeam>
          }
          groupBy: {
            args: Prisma.SeasonTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonTeamCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonTeamCountAggregateOutputType> | number
          }
        }
      }
      RosterPlayer: {
        payload: Prisma.$RosterPlayerPayload<ExtArgs>
        fields: Prisma.RosterPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RosterPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RosterPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          findFirst: {
            args: Prisma.RosterPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RosterPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          findMany: {
            args: Prisma.RosterPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[]
          }
          create: {
            args: Prisma.RosterPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          createMany: {
            args: Prisma.RosterPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RosterPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[]
          }
          delete: {
            args: Prisma.RosterPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          update: {
            args: Prisma.RosterPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          deleteMany: {
            args: Prisma.RosterPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RosterPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RosterPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[]
          }
          upsert: {
            args: Prisma.RosterPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>
          }
          aggregate: {
            args: Prisma.RosterPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRosterPlayer>
          }
          groupBy: {
            args: Prisma.RosterPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RosterPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RosterPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<RosterPlayerCountAggregateOutputType> | number
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
    owner?: OwnerOmit
    matchup?: MatchupOmit
    seasonTeam?: SeasonTeamOmit
    rosterPlayer?: RosterPlayerOmit
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
    homeMatchups: number
    awayMatchups: number
    seasonTeams: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeMatchups?: boolean | OwnerCountOutputTypeCountHomeMatchupsArgs
    awayMatchups?: boolean | OwnerCountOutputTypeCountAwayMatchupsArgs
    seasonTeams?: boolean | OwnerCountOutputTypeCountSeasonTeamsArgs
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
  export type OwnerCountOutputTypeCountHomeMatchupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchupWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountAwayMatchupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchupWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountSeasonTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonTeamWhereInput
  }


  /**
   * Count Type SeasonTeamCountOutputType
   */

  export type SeasonTeamCountOutputType = {
    players: number
  }

  export type SeasonTeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | SeasonTeamCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * SeasonTeamCountOutputType without action
   */
  export type SeasonTeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeamCountOutputType
     */
    select?: SeasonTeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonTeamCountOutputType without action
   */
  export type SeasonTeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosterPlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    teamName: string | null
    logoUrl: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    teamName: string | null
    logoUrl: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    name: number
    teamName: number
    logoUrl: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    name?: true
    teamName?: true
    logoUrl?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    name?: true
    teamName?: true
    logoUrl?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    name?: true
    teamName?: true
    logoUrl?: true
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
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    name: string
    teamName: string
    logoUrl: string | null
    _count: OwnerCountAggregateOutputType | null
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
    teamName?: boolean
    logoUrl?: boolean
    homeMatchups?: boolean | Owner$homeMatchupsArgs<ExtArgs>
    awayMatchups?: boolean | Owner$awayMatchupsArgs<ExtArgs>
    seasonTeams?: boolean | Owner$seasonTeamsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teamName?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teamName?: boolean
    logoUrl?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    name?: boolean
    teamName?: boolean
    logoUrl?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teamName" | "logoUrl", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeMatchups?: boolean | Owner$homeMatchupsArgs<ExtArgs>
    awayMatchups?: boolean | Owner$awayMatchupsArgs<ExtArgs>
    seasonTeams?: boolean | Owner$seasonTeamsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      homeMatchups: Prisma.$MatchupPayload<ExtArgs>[]
      awayMatchups: Prisma.$MatchupPayload<ExtArgs>[]
      seasonTeams: Prisma.$SeasonTeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      teamName: string
      logoUrl: string | null
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
    homeMatchups<T extends Owner$homeMatchupsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$homeMatchupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awayMatchups<T extends Owner$awayMatchupsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$awayMatchupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seasonTeams<T extends Owner$seasonTeamsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$seasonTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Owner", 'String'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly teamName: FieldRef<"Owner", 'String'>
    readonly logoUrl: FieldRef<"Owner", 'String'>
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
   * Owner.homeMatchups
   */
  export type Owner$homeMatchupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
    where?: MatchupWhereInput
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    cursor?: MatchupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[]
  }

  /**
   * Owner.awayMatchups
   */
  export type Owner$awayMatchupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
    where?: MatchupWhereInput
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[]
    cursor?: MatchupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[]
  }

  /**
   * Owner.seasonTeams
   */
  export type Owner$seasonTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    where?: SeasonTeamWhereInput
    orderBy?: SeasonTeamOrderByWithRelationInput | SeasonTeamOrderByWithRelationInput[]
    cursor?: SeasonTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonTeamScalarFieldEnum | SeasonTeamScalarFieldEnum[]
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
    season: number | null
    week: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupSumAggregateOutputType = {
    season: number | null
    week: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type MatchupMinAggregateOutputType = {
    id: string | null
    season: number | null
    week: number | null
    homeOwnerId: string | null
    awayOwnerId: string | null
    homeScore: number | null
    awayScore: number | null
    isPlayoff: boolean | null
  }

  export type MatchupMaxAggregateOutputType = {
    id: string | null
    season: number | null
    week: number | null
    homeOwnerId: string | null
    awayOwnerId: string | null
    homeScore: number | null
    awayScore: number | null
    isPlayoff: boolean | null
  }

  export type MatchupCountAggregateOutputType = {
    id: number
    season: number
    week: number
    homeOwnerId: number
    awayOwnerId: number
    homeScore: number
    awayScore: number
    isPlayoff: number
    _all: number
  }


  export type MatchupAvgAggregateInputType = {
    season?: true
    week?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupSumAggregateInputType = {
    season?: true
    week?: true
    homeScore?: true
    awayScore?: true
  }

  export type MatchupMinAggregateInputType = {
    id?: true
    season?: true
    week?: true
    homeOwnerId?: true
    awayOwnerId?: true
    homeScore?: true
    awayScore?: true
    isPlayoff?: true
  }

  export type MatchupMaxAggregateInputType = {
    id?: true
    season?: true
    week?: true
    homeOwnerId?: true
    awayOwnerId?: true
    homeScore?: true
    awayScore?: true
    isPlayoff?: true
  }

  export type MatchupCountAggregateInputType = {
    id?: true
    season?: true
    week?: true
    homeOwnerId?: true
    awayOwnerId?: true
    homeScore?: true
    awayScore?: true
    isPlayoff?: true
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
    id: string
    season: number
    week: number
    homeOwnerId: string
    awayOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff: boolean
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
    season?: boolean
    week?: boolean
    homeOwnerId?: boolean
    awayOwnerId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    isPlayoff?: boolean
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    week?: boolean
    homeOwnerId?: boolean
    awayOwnerId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    isPlayoff?: boolean
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    week?: boolean
    homeOwnerId?: boolean
    awayOwnerId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    isPlayoff?: boolean
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchup"]>

  export type MatchupSelectScalar = {
    id?: boolean
    season?: boolean
    week?: boolean
    homeOwnerId?: boolean
    awayOwnerId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    isPlayoff?: boolean
  }

  export type MatchupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "week" | "homeOwnerId" | "awayOwnerId" | "homeScore" | "awayScore" | "isPlayoff", ExtArgs["result"]["matchup"]>
  export type MatchupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type MatchupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type MatchupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeOwner?: boolean | OwnerDefaultArgs<ExtArgs>
    awayOwner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $MatchupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matchup"
    objects: {
      homeOwner: Prisma.$OwnerPayload<ExtArgs>
      awayOwner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      season: number
      week: number
      homeOwnerId: string
      awayOwnerId: string
      homeScore: number
      awayScore: number
      isPlayoff: boolean
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
    homeOwner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awayOwner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Matchup", 'String'>
    readonly season: FieldRef<"Matchup", 'Int'>
    readonly week: FieldRef<"Matchup", 'Int'>
    readonly homeOwnerId: FieldRef<"Matchup", 'String'>
    readonly awayOwnerId: FieldRef<"Matchup", 'String'>
    readonly homeScore: FieldRef<"Matchup", 'Float'>
    readonly awayScore: FieldRef<"Matchup", 'Float'>
    readonly isPlayoff: FieldRef<"Matchup", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null
  }


  /**
   * Model SeasonTeam
   */

  export type AggregateSeasonTeam = {
    _count: SeasonTeamCountAggregateOutputType | null
    _avg: SeasonTeamAvgAggregateOutputType | null
    _sum: SeasonTeamSumAggregateOutputType | null
    _min: SeasonTeamMinAggregateOutputType | null
    _max: SeasonTeamMaxAggregateOutputType | null
  }

  export type SeasonTeamAvgAggregateOutputType = {
    id: number | null
    season: number | null
    week: number | null
    place: number | null
  }

  export type SeasonTeamSumAggregateOutputType = {
    id: number | null
    season: number | null
    week: number | null
    place: number | null
  }

  export type SeasonTeamMinAggregateOutputType = {
    id: number | null
    season: number | null
    ownerId: string | null
    teamId: string | null
    teamName: string | null
    week: number | null
    place: number | null
  }

  export type SeasonTeamMaxAggregateOutputType = {
    id: number | null
    season: number | null
    ownerId: string | null
    teamId: string | null
    teamName: string | null
    week: number | null
    place: number | null
  }

  export type SeasonTeamCountAggregateOutputType = {
    id: number
    season: number
    ownerId: number
    teamId: number
    teamName: number
    week: number
    place: number
    _all: number
  }


  export type SeasonTeamAvgAggregateInputType = {
    id?: true
    season?: true
    week?: true
    place?: true
  }

  export type SeasonTeamSumAggregateInputType = {
    id?: true
    season?: true
    week?: true
    place?: true
  }

  export type SeasonTeamMinAggregateInputType = {
    id?: true
    season?: true
    ownerId?: true
    teamId?: true
    teamName?: true
    week?: true
    place?: true
  }

  export type SeasonTeamMaxAggregateInputType = {
    id?: true
    season?: true
    ownerId?: true
    teamId?: true
    teamName?: true
    week?: true
    place?: true
  }

  export type SeasonTeamCountAggregateInputType = {
    id?: true
    season?: true
    ownerId?: true
    teamId?: true
    teamName?: true
    week?: true
    place?: true
    _all?: true
  }

  export type SeasonTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonTeam to aggregate.
     */
    where?: SeasonTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonTeams to fetch.
     */
    orderBy?: SeasonTeamOrderByWithRelationInput | SeasonTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeasonTeams
    **/
    _count?: true | SeasonTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonTeamMaxAggregateInputType
  }

  export type GetSeasonTeamAggregateType<T extends SeasonTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasonTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasonTeam[P]>
      : GetScalarType<T[P], AggregateSeasonTeam[P]>
  }




  export type SeasonTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonTeamWhereInput
    orderBy?: SeasonTeamOrderByWithAggregationInput | SeasonTeamOrderByWithAggregationInput[]
    by: SeasonTeamScalarFieldEnum[] | SeasonTeamScalarFieldEnum
    having?: SeasonTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonTeamCountAggregateInputType | true
    _avg?: SeasonTeamAvgAggregateInputType
    _sum?: SeasonTeamSumAggregateInputType
    _min?: SeasonTeamMinAggregateInputType
    _max?: SeasonTeamMaxAggregateInputType
  }

  export type SeasonTeamGroupByOutputType = {
    id: number
    season: number
    ownerId: string
    teamId: string
    teamName: string
    week: number
    place: number | null
    _count: SeasonTeamCountAggregateOutputType | null
    _avg: SeasonTeamAvgAggregateOutputType | null
    _sum: SeasonTeamSumAggregateOutputType | null
    _min: SeasonTeamMinAggregateOutputType | null
    _max: SeasonTeamMaxAggregateOutputType | null
  }

  type GetSeasonTeamGroupByPayload<T extends SeasonTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonTeamGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonTeamGroupByOutputType[P]>
        }
      >
    >


  export type SeasonTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    ownerId?: boolean
    teamId?: boolean
    teamName?: boolean
    week?: boolean
    place?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    players?: boolean | SeasonTeam$playersArgs<ExtArgs>
    _count?: boolean | SeasonTeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonTeam"]>

  export type SeasonTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    ownerId?: boolean
    teamId?: boolean
    teamName?: boolean
    week?: boolean
    place?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonTeam"]>

  export type SeasonTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    season?: boolean
    ownerId?: boolean
    teamId?: boolean
    teamName?: boolean
    week?: boolean
    place?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonTeam"]>

  export type SeasonTeamSelectScalar = {
    id?: boolean
    season?: boolean
    ownerId?: boolean
    teamId?: boolean
    teamName?: boolean
    week?: boolean
    place?: boolean
  }

  export type SeasonTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "season" | "ownerId" | "teamId" | "teamName" | "week" | "place", ExtArgs["result"]["seasonTeam"]>
  export type SeasonTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    players?: boolean | SeasonTeam$playersArgs<ExtArgs>
    _count?: boolean | SeasonTeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type SeasonTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $SeasonTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeasonTeam"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      players: Prisma.$RosterPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      season: number
      ownerId: string
      teamId: string
      teamName: string
      week: number
      place: number | null
    }, ExtArgs["result"]["seasonTeam"]>
    composites: {}
  }

  type SeasonTeamGetPayload<S extends boolean | null | undefined | SeasonTeamDefaultArgs> = $Result.GetResult<Prisma.$SeasonTeamPayload, S>

  type SeasonTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonTeamCountAggregateInputType | true
    }

  export interface SeasonTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeasonTeam'], meta: { name: 'SeasonTeam' } }
    /**
     * Find zero or one SeasonTeam that matches the filter.
     * @param {SeasonTeamFindUniqueArgs} args - Arguments to find a SeasonTeam
     * @example
     * // Get one SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonTeamFindUniqueArgs>(args: SelectSubset<T, SeasonTeamFindUniqueArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeasonTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonTeamFindUniqueOrThrowArgs} args - Arguments to find a SeasonTeam
     * @example
     * // Get one SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamFindFirstArgs} args - Arguments to find a SeasonTeam
     * @example
     * // Get one SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonTeamFindFirstArgs>(args?: SelectSubset<T, SeasonTeamFindFirstArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamFindFirstOrThrowArgs} args - Arguments to find a SeasonTeam
     * @example
     * // Get one SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeasonTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonTeams
     * const seasonTeams = await prisma.seasonTeam.findMany()
     * 
     * // Get first 10 SeasonTeams
     * const seasonTeams = await prisma.seasonTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonTeamWithIdOnly = await prisma.seasonTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonTeamFindManyArgs>(args?: SelectSubset<T, SeasonTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeasonTeam.
     * @param {SeasonTeamCreateArgs} args - Arguments to create a SeasonTeam.
     * @example
     * // Create one SeasonTeam
     * const SeasonTeam = await prisma.seasonTeam.create({
     *   data: {
     *     // ... data to create a SeasonTeam
     *   }
     * })
     * 
     */
    create<T extends SeasonTeamCreateArgs>(args: SelectSubset<T, SeasonTeamCreateArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeasonTeams.
     * @param {SeasonTeamCreateManyArgs} args - Arguments to create many SeasonTeams.
     * @example
     * // Create many SeasonTeams
     * const seasonTeam = await prisma.seasonTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonTeamCreateManyArgs>(args?: SelectSubset<T, SeasonTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeasonTeams and returns the data saved in the database.
     * @param {SeasonTeamCreateManyAndReturnArgs} args - Arguments to create many SeasonTeams.
     * @example
     * // Create many SeasonTeams
     * const seasonTeam = await prisma.seasonTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeasonTeams and only return the `id`
     * const seasonTeamWithIdOnly = await prisma.seasonTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeasonTeam.
     * @param {SeasonTeamDeleteArgs} args - Arguments to delete one SeasonTeam.
     * @example
     * // Delete one SeasonTeam
     * const SeasonTeam = await prisma.seasonTeam.delete({
     *   where: {
     *     // ... filter to delete one SeasonTeam
     *   }
     * })
     * 
     */
    delete<T extends SeasonTeamDeleteArgs>(args: SelectSubset<T, SeasonTeamDeleteArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeasonTeam.
     * @param {SeasonTeamUpdateArgs} args - Arguments to update one SeasonTeam.
     * @example
     * // Update one SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonTeamUpdateArgs>(args: SelectSubset<T, SeasonTeamUpdateArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeasonTeams.
     * @param {SeasonTeamDeleteManyArgs} args - Arguments to filter SeasonTeams to delete.
     * @example
     * // Delete a few SeasonTeams
     * const { count } = await prisma.seasonTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonTeamDeleteManyArgs>(args?: SelectSubset<T, SeasonTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonTeams
     * const seasonTeam = await prisma.seasonTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonTeamUpdateManyArgs>(args: SelectSubset<T, SeasonTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonTeams and returns the data updated in the database.
     * @param {SeasonTeamUpdateManyAndReturnArgs} args - Arguments to update many SeasonTeams.
     * @example
     * // Update many SeasonTeams
     * const seasonTeam = await prisma.seasonTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeasonTeams and only return the `id`
     * const seasonTeamWithIdOnly = await prisma.seasonTeam.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeasonTeam.
     * @param {SeasonTeamUpsertArgs} args - Arguments to update or create a SeasonTeam.
     * @example
     * // Update or create a SeasonTeam
     * const seasonTeam = await prisma.seasonTeam.upsert({
     *   create: {
     *     // ... data to create a SeasonTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonTeam we want to update
     *   }
     * })
     */
    upsert<T extends SeasonTeamUpsertArgs>(args: SelectSubset<T, SeasonTeamUpsertArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeasonTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamCountArgs} args - Arguments to filter SeasonTeams to count.
     * @example
     * // Count the number of SeasonTeams
     * const count = await prisma.seasonTeam.count({
     *   where: {
     *     // ... the filter for the SeasonTeams we want to count
     *   }
     * })
    **/
    count<T extends SeasonTeamCountArgs>(
      args?: Subset<T, SeasonTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeasonTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonTeamAggregateArgs>(args: Subset<T, SeasonTeamAggregateArgs>): Prisma.PrismaPromise<GetSeasonTeamAggregateType<T>>

    /**
     * Group by SeasonTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonTeamGroupByArgs} args - Group by arguments.
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
      T extends SeasonTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonTeamGroupByArgs['orderBy'] }
        : { orderBy?: SeasonTeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeasonTeam model
   */
  readonly fields: SeasonTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends SeasonTeam$playersArgs<ExtArgs> = {}>(args?: Subset<T, SeasonTeam$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SeasonTeam model
   */
  interface SeasonTeamFieldRefs {
    readonly id: FieldRef<"SeasonTeam", 'Int'>
    readonly season: FieldRef<"SeasonTeam", 'Int'>
    readonly ownerId: FieldRef<"SeasonTeam", 'String'>
    readonly teamId: FieldRef<"SeasonTeam", 'String'>
    readonly teamName: FieldRef<"SeasonTeam", 'String'>
    readonly week: FieldRef<"SeasonTeam", 'Int'>
    readonly place: FieldRef<"SeasonTeam", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeasonTeam findUnique
   */
  export type SeasonTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter, which SeasonTeam to fetch.
     */
    where: SeasonTeamWhereUniqueInput
  }

  /**
   * SeasonTeam findUniqueOrThrow
   */
  export type SeasonTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter, which SeasonTeam to fetch.
     */
    where: SeasonTeamWhereUniqueInput
  }

  /**
   * SeasonTeam findFirst
   */
  export type SeasonTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter, which SeasonTeam to fetch.
     */
    where?: SeasonTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonTeams to fetch.
     */
    orderBy?: SeasonTeamOrderByWithRelationInput | SeasonTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonTeams.
     */
    cursor?: SeasonTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonTeams.
     */
    distinct?: SeasonTeamScalarFieldEnum | SeasonTeamScalarFieldEnum[]
  }

  /**
   * SeasonTeam findFirstOrThrow
   */
  export type SeasonTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter, which SeasonTeam to fetch.
     */
    where?: SeasonTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonTeams to fetch.
     */
    orderBy?: SeasonTeamOrderByWithRelationInput | SeasonTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonTeams.
     */
    cursor?: SeasonTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonTeams.
     */
    distinct?: SeasonTeamScalarFieldEnum | SeasonTeamScalarFieldEnum[]
  }

  /**
   * SeasonTeam findMany
   */
  export type SeasonTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter, which SeasonTeams to fetch.
     */
    where?: SeasonTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonTeams to fetch.
     */
    orderBy?: SeasonTeamOrderByWithRelationInput | SeasonTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeasonTeams.
     */
    cursor?: SeasonTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonTeams.
     */
    skip?: number
    distinct?: SeasonTeamScalarFieldEnum | SeasonTeamScalarFieldEnum[]
  }

  /**
   * SeasonTeam create
   */
  export type SeasonTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a SeasonTeam.
     */
    data: XOR<SeasonTeamCreateInput, SeasonTeamUncheckedCreateInput>
  }

  /**
   * SeasonTeam createMany
   */
  export type SeasonTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeasonTeams.
     */
    data: SeasonTeamCreateManyInput | SeasonTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeasonTeam createManyAndReturn
   */
  export type SeasonTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * The data used to create many SeasonTeams.
     */
    data: SeasonTeamCreateManyInput | SeasonTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonTeam update
   */
  export type SeasonTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a SeasonTeam.
     */
    data: XOR<SeasonTeamUpdateInput, SeasonTeamUncheckedUpdateInput>
    /**
     * Choose, which SeasonTeam to update.
     */
    where: SeasonTeamWhereUniqueInput
  }

  /**
   * SeasonTeam updateMany
   */
  export type SeasonTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeasonTeams.
     */
    data: XOR<SeasonTeamUpdateManyMutationInput, SeasonTeamUncheckedUpdateManyInput>
    /**
     * Filter which SeasonTeams to update
     */
    where?: SeasonTeamWhereInput
    /**
     * Limit how many SeasonTeams to update.
     */
    limit?: number
  }

  /**
   * SeasonTeam updateManyAndReturn
   */
  export type SeasonTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * The data used to update SeasonTeams.
     */
    data: XOR<SeasonTeamUpdateManyMutationInput, SeasonTeamUncheckedUpdateManyInput>
    /**
     * Filter which SeasonTeams to update
     */
    where?: SeasonTeamWhereInput
    /**
     * Limit how many SeasonTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonTeam upsert
   */
  export type SeasonTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the SeasonTeam to update in case it exists.
     */
    where: SeasonTeamWhereUniqueInput
    /**
     * In case the SeasonTeam found by the `where` argument doesn't exist, create a new SeasonTeam with this data.
     */
    create: XOR<SeasonTeamCreateInput, SeasonTeamUncheckedCreateInput>
    /**
     * In case the SeasonTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonTeamUpdateInput, SeasonTeamUncheckedUpdateInput>
  }

  /**
   * SeasonTeam delete
   */
  export type SeasonTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
    /**
     * Filter which SeasonTeam to delete.
     */
    where: SeasonTeamWhereUniqueInput
  }

  /**
   * SeasonTeam deleteMany
   */
  export type SeasonTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonTeams to delete
     */
    where?: SeasonTeamWhereInput
    /**
     * Limit how many SeasonTeams to delete.
     */
    limit?: number
  }

  /**
   * SeasonTeam.players
   */
  export type SeasonTeam$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    where?: RosterPlayerWhereInput
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[]
    cursor?: RosterPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[]
  }

  /**
   * SeasonTeam without action
   */
  export type SeasonTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonTeam
     */
    select?: SeasonTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonTeam
     */
    omit?: SeasonTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonTeamInclude<ExtArgs> | null
  }


  /**
   * Model RosterPlayer
   */

  export type AggregateRosterPlayer = {
    _count: RosterPlayerCountAggregateOutputType | null
    _avg: RosterPlayerAvgAggregateOutputType | null
    _sum: RosterPlayerSumAggregateOutputType | null
    _min: RosterPlayerMinAggregateOutputType | null
    _max: RosterPlayerMaxAggregateOutputType | null
  }

  export type RosterPlayerAvgAggregateOutputType = {
    id: number | null
    seasonTeamId: number | null
    points: number | null
  }

  export type RosterPlayerSumAggregateOutputType = {
    id: number | null
    seasonTeamId: number | null
    points: number | null
  }

  export type RosterPlayerMinAggregateOutputType = {
    id: number | null
    seasonTeamId: number | null
    slot: string | null
    name: string | null
    position: string | null
    nflTeam: string | null
    points: number | null
    starter: boolean | null
  }

  export type RosterPlayerMaxAggregateOutputType = {
    id: number | null
    seasonTeamId: number | null
    slot: string | null
    name: string | null
    position: string | null
    nflTeam: string | null
    points: number | null
    starter: boolean | null
  }

  export type RosterPlayerCountAggregateOutputType = {
    id: number
    seasonTeamId: number
    slot: number
    name: number
    position: number
    nflTeam: number
    points: number
    starter: number
    _all: number
  }


  export type RosterPlayerAvgAggregateInputType = {
    id?: true
    seasonTeamId?: true
    points?: true
  }

  export type RosterPlayerSumAggregateInputType = {
    id?: true
    seasonTeamId?: true
    points?: true
  }

  export type RosterPlayerMinAggregateInputType = {
    id?: true
    seasonTeamId?: true
    slot?: true
    name?: true
    position?: true
    nflTeam?: true
    points?: true
    starter?: true
  }

  export type RosterPlayerMaxAggregateInputType = {
    id?: true
    seasonTeamId?: true
    slot?: true
    name?: true
    position?: true
    nflTeam?: true
    points?: true
    starter?: true
  }

  export type RosterPlayerCountAggregateInputType = {
    id?: true
    seasonTeamId?: true
    slot?: true
    name?: true
    position?: true
    nflTeam?: true
    points?: true
    starter?: true
    _all?: true
  }

  export type RosterPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosterPlayer to aggregate.
     */
    where?: RosterPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RosterPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosterPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RosterPlayers
    **/
    _count?: true | RosterPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RosterPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RosterPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RosterPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RosterPlayerMaxAggregateInputType
  }

  export type GetRosterPlayerAggregateType<T extends RosterPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRosterPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRosterPlayer[P]>
      : GetScalarType<T[P], AggregateRosterPlayer[P]>
  }




  export type RosterPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RosterPlayerWhereInput
    orderBy?: RosterPlayerOrderByWithAggregationInput | RosterPlayerOrderByWithAggregationInput[]
    by: RosterPlayerScalarFieldEnum[] | RosterPlayerScalarFieldEnum
    having?: RosterPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RosterPlayerCountAggregateInputType | true
    _avg?: RosterPlayerAvgAggregateInputType
    _sum?: RosterPlayerSumAggregateInputType
    _min?: RosterPlayerMinAggregateInputType
    _max?: RosterPlayerMaxAggregateInputType
  }

  export type RosterPlayerGroupByOutputType = {
    id: number
    seasonTeamId: number
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
    _count: RosterPlayerCountAggregateOutputType | null
    _avg: RosterPlayerAvgAggregateOutputType | null
    _sum: RosterPlayerSumAggregateOutputType | null
    _min: RosterPlayerMinAggregateOutputType | null
    _max: RosterPlayerMaxAggregateOutputType | null
  }

  type GetRosterPlayerGroupByPayload<T extends RosterPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosterPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RosterPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RosterPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], RosterPlayerGroupByOutputType[P]>
        }
      >
    >


  export type RosterPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonTeamId?: boolean
    slot?: boolean
    name?: boolean
    position?: boolean
    nflTeam?: boolean
    points?: boolean
    starter?: boolean
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosterPlayer"]>

  export type RosterPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonTeamId?: boolean
    slot?: boolean
    name?: boolean
    position?: boolean
    nflTeam?: boolean
    points?: boolean
    starter?: boolean
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosterPlayer"]>

  export type RosterPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonTeamId?: boolean
    slot?: boolean
    name?: boolean
    position?: boolean
    nflTeam?: boolean
    points?: boolean
    starter?: boolean
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rosterPlayer"]>

  export type RosterPlayerSelectScalar = {
    id?: boolean
    seasonTeamId?: boolean
    slot?: boolean
    name?: boolean
    position?: boolean
    nflTeam?: boolean
    points?: boolean
    starter?: boolean
  }

  export type RosterPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonTeamId" | "slot" | "name" | "position" | "nflTeam" | "points" | "starter", ExtArgs["result"]["rosterPlayer"]>
  export type RosterPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }
  export type RosterPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }
  export type RosterPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasonTeam?: boolean | SeasonTeamDefaultArgs<ExtArgs>
  }

  export type $RosterPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RosterPlayer"
    objects: {
      seasonTeam: Prisma.$SeasonTeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seasonTeamId: number
      slot: string
      name: string
      position: string
      nflTeam: string
      points: number
      starter: boolean
    }, ExtArgs["result"]["rosterPlayer"]>
    composites: {}
  }

  type RosterPlayerGetPayload<S extends boolean | null | undefined | RosterPlayerDefaultArgs> = $Result.GetResult<Prisma.$RosterPlayerPayload, S>

  type RosterPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RosterPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RosterPlayerCountAggregateInputType | true
    }

  export interface RosterPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RosterPlayer'], meta: { name: 'RosterPlayer' } }
    /**
     * Find zero or one RosterPlayer that matches the filter.
     * @param {RosterPlayerFindUniqueArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosterPlayerFindUniqueArgs>(args: SelectSubset<T, RosterPlayerFindUniqueArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RosterPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosterPlayerFindUniqueOrThrowArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosterPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RosterPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosterPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindFirstArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosterPlayerFindFirstArgs>(args?: SelectSubset<T, RosterPlayerFindFirstArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RosterPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindFirstOrThrowArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosterPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RosterPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RosterPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RosterPlayers
     * const rosterPlayers = await prisma.rosterPlayer.findMany()
     * 
     * // Get first 10 RosterPlayers
     * const rosterPlayers = await prisma.rosterPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RosterPlayerFindManyArgs>(args?: SelectSubset<T, RosterPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RosterPlayer.
     * @param {RosterPlayerCreateArgs} args - Arguments to create a RosterPlayer.
     * @example
     * // Create one RosterPlayer
     * const RosterPlayer = await prisma.rosterPlayer.create({
     *   data: {
     *     // ... data to create a RosterPlayer
     *   }
     * })
     * 
     */
    create<T extends RosterPlayerCreateArgs>(args: SelectSubset<T, RosterPlayerCreateArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RosterPlayers.
     * @param {RosterPlayerCreateManyArgs} args - Arguments to create many RosterPlayers.
     * @example
     * // Create many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RosterPlayerCreateManyArgs>(args?: SelectSubset<T, RosterPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RosterPlayers and returns the data saved in the database.
     * @param {RosterPlayerCreateManyAndReturnArgs} args - Arguments to create many RosterPlayers.
     * @example
     * // Create many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RosterPlayers and only return the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RosterPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RosterPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RosterPlayer.
     * @param {RosterPlayerDeleteArgs} args - Arguments to delete one RosterPlayer.
     * @example
     * // Delete one RosterPlayer
     * const RosterPlayer = await prisma.rosterPlayer.delete({
     *   where: {
     *     // ... filter to delete one RosterPlayer
     *   }
     * })
     * 
     */
    delete<T extends RosterPlayerDeleteArgs>(args: SelectSubset<T, RosterPlayerDeleteArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RosterPlayer.
     * @param {RosterPlayerUpdateArgs} args - Arguments to update one RosterPlayer.
     * @example
     * // Update one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RosterPlayerUpdateArgs>(args: SelectSubset<T, RosterPlayerUpdateArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RosterPlayers.
     * @param {RosterPlayerDeleteManyArgs} args - Arguments to filter RosterPlayers to delete.
     * @example
     * // Delete a few RosterPlayers
     * const { count } = await prisma.rosterPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RosterPlayerDeleteManyArgs>(args?: SelectSubset<T, RosterPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RosterPlayerUpdateManyArgs>(args: SelectSubset<T, RosterPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RosterPlayers and returns the data updated in the database.
     * @param {RosterPlayerUpdateManyAndReturnArgs} args - Arguments to update many RosterPlayers.
     * @example
     * // Update many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RosterPlayers and only return the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends RosterPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RosterPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RosterPlayer.
     * @param {RosterPlayerUpsertArgs} args - Arguments to update or create a RosterPlayer.
     * @example
     * // Update or create a RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.upsert({
     *   create: {
     *     // ... data to create a RosterPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RosterPlayer we want to update
     *   }
     * })
     */
    upsert<T extends RosterPlayerUpsertArgs>(args: SelectSubset<T, RosterPlayerUpsertArgs<ExtArgs>>): Prisma__RosterPlayerClient<$Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerCountArgs} args - Arguments to filter RosterPlayers to count.
     * @example
     * // Count the number of RosterPlayers
     * const count = await prisma.rosterPlayer.count({
     *   where: {
     *     // ... the filter for the RosterPlayers we want to count
     *   }
     * })
    **/
    count<T extends RosterPlayerCountArgs>(
      args?: Subset<T, RosterPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosterPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RosterPlayerAggregateArgs>(args: Subset<T, RosterPlayerAggregateArgs>): Prisma.PrismaPromise<GetRosterPlayerAggregateType<T>>

    /**
     * Group by RosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerGroupByArgs} args - Group by arguments.
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
      T extends RosterPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosterPlayerGroupByArgs['orderBy'] }
        : { orderBy?: RosterPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RosterPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRosterPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RosterPlayer model
   */
  readonly fields: RosterPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RosterPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosterPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasonTeam<T extends SeasonTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonTeamDefaultArgs<ExtArgs>>): Prisma__SeasonTeamClient<$Result.GetResult<Prisma.$SeasonTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RosterPlayer model
   */
  interface RosterPlayerFieldRefs {
    readonly id: FieldRef<"RosterPlayer", 'Int'>
    readonly seasonTeamId: FieldRef<"RosterPlayer", 'Int'>
    readonly slot: FieldRef<"RosterPlayer", 'String'>
    readonly name: FieldRef<"RosterPlayer", 'String'>
    readonly position: FieldRef<"RosterPlayer", 'String'>
    readonly nflTeam: FieldRef<"RosterPlayer", 'String'>
    readonly points: FieldRef<"RosterPlayer", 'Float'>
    readonly starter: FieldRef<"RosterPlayer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RosterPlayer findUnique
   */
  export type RosterPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where: RosterPlayerWhereUniqueInput
  }

  /**
   * RosterPlayer findUniqueOrThrow
   */
  export type RosterPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where: RosterPlayerWhereUniqueInput
  }

  /**
   * RosterPlayer findFirst
   */
  export type RosterPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where?: RosterPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosterPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosterPlayers.
     */
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[]
  }

  /**
   * RosterPlayer findFirstOrThrow
   */
  export type RosterPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where?: RosterPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosterPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RosterPlayers.
     */
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[]
  }

  /**
   * RosterPlayer findMany
   */
  export type RosterPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RosterPlayers to fetch.
     */
    where?: RosterPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RosterPlayers.
     */
    skip?: number
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[]
  }

  /**
   * RosterPlayer create
   */
  export type RosterPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RosterPlayer.
     */
    data: XOR<RosterPlayerCreateInput, RosterPlayerUncheckedCreateInput>
  }

  /**
   * RosterPlayer createMany
   */
  export type RosterPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RosterPlayers.
     */
    data: RosterPlayerCreateManyInput | RosterPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RosterPlayer createManyAndReturn
   */
  export type RosterPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many RosterPlayers.
     */
    data: RosterPlayerCreateManyInput | RosterPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosterPlayer update
   */
  export type RosterPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RosterPlayer.
     */
    data: XOR<RosterPlayerUpdateInput, RosterPlayerUncheckedUpdateInput>
    /**
     * Choose, which RosterPlayer to update.
     */
    where: RosterPlayerWhereUniqueInput
  }

  /**
   * RosterPlayer updateMany
   */
  export type RosterPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RosterPlayers.
     */
    data: XOR<RosterPlayerUpdateManyMutationInput, RosterPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RosterPlayers to update
     */
    where?: RosterPlayerWhereInput
    /**
     * Limit how many RosterPlayers to update.
     */
    limit?: number
  }

  /**
   * RosterPlayer updateManyAndReturn
   */
  export type RosterPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * The data used to update RosterPlayers.
     */
    data: XOR<RosterPlayerUpdateManyMutationInput, RosterPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RosterPlayers to update
     */
    where?: RosterPlayerWhereInput
    /**
     * Limit how many RosterPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RosterPlayer upsert
   */
  export type RosterPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RosterPlayer to update in case it exists.
     */
    where: RosterPlayerWhereUniqueInput
    /**
     * In case the RosterPlayer found by the `where` argument doesn't exist, create a new RosterPlayer with this data.
     */
    create: XOR<RosterPlayerCreateInput, RosterPlayerUncheckedCreateInput>
    /**
     * In case the RosterPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RosterPlayerUpdateInput, RosterPlayerUncheckedUpdateInput>
  }

  /**
   * RosterPlayer delete
   */
  export type RosterPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
    /**
     * Filter which RosterPlayer to delete.
     */
    where: RosterPlayerWhereUniqueInput
  }

  /**
   * RosterPlayer deleteMany
   */
  export type RosterPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RosterPlayers to delete
     */
    where?: RosterPlayerWhereInput
    /**
     * Limit how many RosterPlayers to delete.
     */
    limit?: number
  }

  /**
   * RosterPlayer without action
   */
  export type RosterPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null
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


  export const OwnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teamName: 'teamName',
    logoUrl: 'logoUrl'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const MatchupScalarFieldEnum: {
    id: 'id',
    season: 'season',
    week: 'week',
    homeOwnerId: 'homeOwnerId',
    awayOwnerId: 'awayOwnerId',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    isPlayoff: 'isPlayoff'
  };

  export type MatchupScalarFieldEnum = (typeof MatchupScalarFieldEnum)[keyof typeof MatchupScalarFieldEnum]


  export const SeasonTeamScalarFieldEnum: {
    id: 'id',
    season: 'season',
    ownerId: 'ownerId',
    teamId: 'teamId',
    teamName: 'teamName',
    week: 'week',
    place: 'place'
  };

  export type SeasonTeamScalarFieldEnum = (typeof SeasonTeamScalarFieldEnum)[keyof typeof SeasonTeamScalarFieldEnum]


  export const RosterPlayerScalarFieldEnum: {
    id: 'id',
    seasonTeamId: 'seasonTeamId',
    slot: 'slot',
    name: 'name',
    position: 'position',
    nflTeam: 'nflTeam',
    points: 'points',
    starter: 'starter'
  };

  export type RosterPlayerScalarFieldEnum = (typeof RosterPlayerScalarFieldEnum)[keyof typeof RosterPlayerScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    name?: StringFilter<"Owner"> | string
    teamName?: StringFilter<"Owner"> | string
    logoUrl?: StringNullableFilter<"Owner"> | string | null
    homeMatchups?: MatchupListRelationFilter
    awayMatchups?: MatchupListRelationFilter
    seasonTeams?: SeasonTeamListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teamName?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    homeMatchups?: MatchupOrderByRelationAggregateInput
    awayMatchups?: MatchupOrderByRelationAggregateInput
    seasonTeams?: SeasonTeamOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    name?: StringFilter<"Owner"> | string
    teamName?: StringFilter<"Owner"> | string
    logoUrl?: StringNullableFilter<"Owner"> | string | null
    homeMatchups?: MatchupListRelationFilter
    awayMatchups?: MatchupListRelationFilter
    seasonTeams?: SeasonTeamListRelationFilter
  }, "id">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teamName?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    name?: StringWithAggregatesFilter<"Owner"> | string
    teamName?: StringWithAggregatesFilter<"Owner"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Owner"> | string | null
  }

  export type MatchupWhereInput = {
    AND?: MatchupWhereInput | MatchupWhereInput[]
    OR?: MatchupWhereInput[]
    NOT?: MatchupWhereInput | MatchupWhereInput[]
    id?: StringFilter<"Matchup"> | string
    season?: IntFilter<"Matchup"> | number
    week?: IntFilter<"Matchup"> | number
    homeOwnerId?: StringFilter<"Matchup"> | string
    awayOwnerId?: StringFilter<"Matchup"> | string
    homeScore?: FloatFilter<"Matchup"> | number
    awayScore?: FloatFilter<"Matchup"> | number
    isPlayoff?: BoolFilter<"Matchup"> | boolean
    homeOwner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    awayOwner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }

  export type MatchupOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    homeOwnerId?: SortOrder
    awayOwnerId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    isPlayoff?: SortOrder
    homeOwner?: OwnerOrderByWithRelationInput
    awayOwner?: OwnerOrderByWithRelationInput
  }

  export type MatchupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchupWhereInput | MatchupWhereInput[]
    OR?: MatchupWhereInput[]
    NOT?: MatchupWhereInput | MatchupWhereInput[]
    season?: IntFilter<"Matchup"> | number
    week?: IntFilter<"Matchup"> | number
    homeOwnerId?: StringFilter<"Matchup"> | string
    awayOwnerId?: StringFilter<"Matchup"> | string
    homeScore?: FloatFilter<"Matchup"> | number
    awayScore?: FloatFilter<"Matchup"> | number
    isPlayoff?: BoolFilter<"Matchup"> | boolean
    homeOwner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    awayOwner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }, "id">

  export type MatchupOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    homeOwnerId?: SortOrder
    awayOwnerId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    isPlayoff?: SortOrder
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
    id?: StringWithAggregatesFilter<"Matchup"> | string
    season?: IntWithAggregatesFilter<"Matchup"> | number
    week?: IntWithAggregatesFilter<"Matchup"> | number
    homeOwnerId?: StringWithAggregatesFilter<"Matchup"> | string
    awayOwnerId?: StringWithAggregatesFilter<"Matchup"> | string
    homeScore?: FloatWithAggregatesFilter<"Matchup"> | number
    awayScore?: FloatWithAggregatesFilter<"Matchup"> | number
    isPlayoff?: BoolWithAggregatesFilter<"Matchup"> | boolean
  }

  export type SeasonTeamWhereInput = {
    AND?: SeasonTeamWhereInput | SeasonTeamWhereInput[]
    OR?: SeasonTeamWhereInput[]
    NOT?: SeasonTeamWhereInput | SeasonTeamWhereInput[]
    id?: IntFilter<"SeasonTeam"> | number
    season?: IntFilter<"SeasonTeam"> | number
    ownerId?: StringFilter<"SeasonTeam"> | string
    teamId?: StringFilter<"SeasonTeam"> | string
    teamName?: StringFilter<"SeasonTeam"> | string
    week?: IntFilter<"SeasonTeam"> | number
    place?: IntNullableFilter<"SeasonTeam"> | number | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    players?: RosterPlayerListRelationFilter
  }

  export type SeasonTeamOrderByWithRelationInput = {
    id?: SortOrder
    season?: SortOrder
    ownerId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    week?: SortOrder
    place?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
    players?: RosterPlayerOrderByRelationAggregateInput
  }

  export type SeasonTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    season_ownerId?: SeasonTeamSeasonOwnerIdCompoundUniqueInput
    AND?: SeasonTeamWhereInput | SeasonTeamWhereInput[]
    OR?: SeasonTeamWhereInput[]
    NOT?: SeasonTeamWhereInput | SeasonTeamWhereInput[]
    season?: IntFilter<"SeasonTeam"> | number
    ownerId?: StringFilter<"SeasonTeam"> | string
    teamId?: StringFilter<"SeasonTeam"> | string
    teamName?: StringFilter<"SeasonTeam"> | string
    week?: IntFilter<"SeasonTeam"> | number
    place?: IntNullableFilter<"SeasonTeam"> | number | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    players?: RosterPlayerListRelationFilter
  }, "id" | "season_ownerId">

  export type SeasonTeamOrderByWithAggregationInput = {
    id?: SortOrder
    season?: SortOrder
    ownerId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    week?: SortOrder
    place?: SortOrderInput | SortOrder
    _count?: SeasonTeamCountOrderByAggregateInput
    _avg?: SeasonTeamAvgOrderByAggregateInput
    _max?: SeasonTeamMaxOrderByAggregateInput
    _min?: SeasonTeamMinOrderByAggregateInput
    _sum?: SeasonTeamSumOrderByAggregateInput
  }

  export type SeasonTeamScalarWhereWithAggregatesInput = {
    AND?: SeasonTeamScalarWhereWithAggregatesInput | SeasonTeamScalarWhereWithAggregatesInput[]
    OR?: SeasonTeamScalarWhereWithAggregatesInput[]
    NOT?: SeasonTeamScalarWhereWithAggregatesInput | SeasonTeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeasonTeam"> | number
    season?: IntWithAggregatesFilter<"SeasonTeam"> | number
    ownerId?: StringWithAggregatesFilter<"SeasonTeam"> | string
    teamId?: StringWithAggregatesFilter<"SeasonTeam"> | string
    teamName?: StringWithAggregatesFilter<"SeasonTeam"> | string
    week?: IntWithAggregatesFilter<"SeasonTeam"> | number
    place?: IntNullableWithAggregatesFilter<"SeasonTeam"> | number | null
  }

  export type RosterPlayerWhereInput = {
    AND?: RosterPlayerWhereInput | RosterPlayerWhereInput[]
    OR?: RosterPlayerWhereInput[]
    NOT?: RosterPlayerWhereInput | RosterPlayerWhereInput[]
    id?: IntFilter<"RosterPlayer"> | number
    seasonTeamId?: IntFilter<"RosterPlayer"> | number
    slot?: StringFilter<"RosterPlayer"> | string
    name?: StringFilter<"RosterPlayer"> | string
    position?: StringFilter<"RosterPlayer"> | string
    nflTeam?: StringFilter<"RosterPlayer"> | string
    points?: FloatFilter<"RosterPlayer"> | number
    starter?: BoolFilter<"RosterPlayer"> | boolean
    seasonTeam?: XOR<SeasonTeamScalarRelationFilter, SeasonTeamWhereInput>
  }

  export type RosterPlayerOrderByWithRelationInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    slot?: SortOrder
    name?: SortOrder
    position?: SortOrder
    nflTeam?: SortOrder
    points?: SortOrder
    starter?: SortOrder
    seasonTeam?: SeasonTeamOrderByWithRelationInput
  }

  export type RosterPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RosterPlayerWhereInput | RosterPlayerWhereInput[]
    OR?: RosterPlayerWhereInput[]
    NOT?: RosterPlayerWhereInput | RosterPlayerWhereInput[]
    seasonTeamId?: IntFilter<"RosterPlayer"> | number
    slot?: StringFilter<"RosterPlayer"> | string
    name?: StringFilter<"RosterPlayer"> | string
    position?: StringFilter<"RosterPlayer"> | string
    nflTeam?: StringFilter<"RosterPlayer"> | string
    points?: FloatFilter<"RosterPlayer"> | number
    starter?: BoolFilter<"RosterPlayer"> | boolean
    seasonTeam?: XOR<SeasonTeamScalarRelationFilter, SeasonTeamWhereInput>
  }, "id">

  export type RosterPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    slot?: SortOrder
    name?: SortOrder
    position?: SortOrder
    nflTeam?: SortOrder
    points?: SortOrder
    starter?: SortOrder
    _count?: RosterPlayerCountOrderByAggregateInput
    _avg?: RosterPlayerAvgOrderByAggregateInput
    _max?: RosterPlayerMaxOrderByAggregateInput
    _min?: RosterPlayerMinOrderByAggregateInput
    _sum?: RosterPlayerSumOrderByAggregateInput
  }

  export type RosterPlayerScalarWhereWithAggregatesInput = {
    AND?: RosterPlayerScalarWhereWithAggregatesInput | RosterPlayerScalarWhereWithAggregatesInput[]
    OR?: RosterPlayerScalarWhereWithAggregatesInput[]
    NOT?: RosterPlayerScalarWhereWithAggregatesInput | RosterPlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RosterPlayer"> | number
    seasonTeamId?: IntWithAggregatesFilter<"RosterPlayer"> | number
    slot?: StringWithAggregatesFilter<"RosterPlayer"> | string
    name?: StringWithAggregatesFilter<"RosterPlayer"> | string
    position?: StringWithAggregatesFilter<"RosterPlayer"> | string
    nflTeam?: StringWithAggregatesFilter<"RosterPlayer"> | string
    points?: FloatWithAggregatesFilter<"RosterPlayer"> | number
    starter?: BoolWithAggregatesFilter<"RosterPlayer"> | boolean
  }

  export type OwnerCreateInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupCreateNestedManyWithoutHomeOwnerInput
    awayMatchups?: MatchupCreateNestedManyWithoutAwayOwnerInput
    seasonTeams?: SeasonTeamCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupUncheckedCreateNestedManyWithoutHomeOwnerInput
    awayMatchups?: MatchupUncheckedCreateNestedManyWithoutAwayOwnerInput
    seasonTeams?: SeasonTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUpdateManyWithoutHomeOwnerNestedInput
    awayMatchups?: MatchupUpdateManyWithoutAwayOwnerNestedInput
    seasonTeams?: SeasonTeamUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUncheckedUpdateManyWithoutHomeOwnerNestedInput
    awayMatchups?: MatchupUncheckedUpdateManyWithoutAwayOwnerNestedInput
    seasonTeams?: SeasonTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchupCreateInput = {
    id: string
    season: number
    week: number
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
    homeOwner: OwnerCreateNestedOneWithoutHomeMatchupsInput
    awayOwner: OwnerCreateNestedOneWithoutAwayMatchupsInput
  }

  export type MatchupUncheckedCreateInput = {
    id: string
    season: number
    week: number
    homeOwnerId: string
    awayOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type MatchupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
    homeOwner?: OwnerUpdateOneRequiredWithoutHomeMatchupsNestedInput
    awayOwner?: OwnerUpdateOneRequiredWithoutAwayMatchupsNestedInput
  }

  export type MatchupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeOwnerId?: StringFieldUpdateOperationsInput | string
    awayOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchupCreateManyInput = {
    id: string
    season: number
    week: number
    homeOwnerId: string
    awayOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type MatchupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeOwnerId?: StringFieldUpdateOperationsInput | string
    awayOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonTeamCreateInput = {
    season: number
    teamId: string
    teamName: string
    week: number
    place?: number | null
    owner: OwnerCreateNestedOneWithoutSeasonTeamsInput
    players?: RosterPlayerCreateNestedManyWithoutSeasonTeamInput
  }

  export type SeasonTeamUncheckedCreateInput = {
    id?: number
    season: number
    ownerId: string
    teamId: string
    teamName: string
    week: number
    place?: number | null
    players?: RosterPlayerUncheckedCreateNestedManyWithoutSeasonTeamInput
  }

  export type SeasonTeamUpdateInput = {
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: OwnerUpdateOneRequiredWithoutSeasonTeamsNestedInput
    players?: RosterPlayerUpdateManyWithoutSeasonTeamNestedInput
  }

  export type SeasonTeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
    players?: RosterPlayerUncheckedUpdateManyWithoutSeasonTeamNestedInput
  }

  export type SeasonTeamCreateManyInput = {
    id?: number
    season: number
    ownerId: string
    teamId: string
    teamName: string
    week: number
    place?: number | null
  }

  export type SeasonTeamUpdateManyMutationInput = {
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeasonTeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RosterPlayerCreateInput = {
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
    seasonTeam: SeasonTeamCreateNestedOneWithoutPlayersInput
  }

  export type RosterPlayerUncheckedCreateInput = {
    id?: number
    seasonTeamId: number
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
  }

  export type RosterPlayerUpdateInput = {
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
    seasonTeam?: SeasonTeamUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type RosterPlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonTeamId?: IntFieldUpdateOperationsInput | number
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RosterPlayerCreateManyInput = {
    id?: number
    seasonTeamId: number
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
  }

  export type RosterPlayerUpdateManyMutationInput = {
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RosterPlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seasonTeamId?: IntFieldUpdateOperationsInput | number
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MatchupListRelationFilter = {
    every?: MatchupWhereInput
    some?: MatchupWhereInput
    none?: MatchupWhereInput
  }

  export type SeasonTeamListRelationFilter = {
    every?: SeasonTeamWhereInput
    some?: SeasonTeamWhereInput
    none?: SeasonTeamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamName?: SortOrder
    logoUrl?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamName?: SortOrder
    logoUrl?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamName?: SortOrder
    logoUrl?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type MatchupCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    homeOwnerId?: SortOrder
    awayOwnerId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    isPlayoff?: SortOrder
  }

  export type MatchupAvgOrderByAggregateInput = {
    season?: SortOrder
    week?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type MatchupMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    homeOwnerId?: SortOrder
    awayOwnerId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    isPlayoff?: SortOrder
  }

  export type MatchupMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    homeOwnerId?: SortOrder
    awayOwnerId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    isPlayoff?: SortOrder
  }

  export type MatchupSumOrderByAggregateInput = {
    season?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RosterPlayerListRelationFilter = {
    every?: RosterPlayerWhereInput
    some?: RosterPlayerWhereInput
    none?: RosterPlayerWhereInput
  }

  export type RosterPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonTeamSeasonOwnerIdCompoundUniqueInput = {
    season: number
    ownerId: string
  }

  export type SeasonTeamCountOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    ownerId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    week?: SortOrder
    place?: SortOrder
  }

  export type SeasonTeamAvgOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    place?: SortOrder
  }

  export type SeasonTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    ownerId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    week?: SortOrder
    place?: SortOrder
  }

  export type SeasonTeamMinOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    ownerId?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    week?: SortOrder
    place?: SortOrder
  }

  export type SeasonTeamSumOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
    week?: SortOrder
    place?: SortOrder
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

  export type SeasonTeamScalarRelationFilter = {
    is?: SeasonTeamWhereInput
    isNot?: SeasonTeamWhereInput
  }

  export type RosterPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    slot?: SortOrder
    name?: SortOrder
    position?: SortOrder
    nflTeam?: SortOrder
    points?: SortOrder
    starter?: SortOrder
  }

  export type RosterPlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    points?: SortOrder
  }

  export type RosterPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    slot?: SortOrder
    name?: SortOrder
    position?: SortOrder
    nflTeam?: SortOrder
    points?: SortOrder
    starter?: SortOrder
  }

  export type RosterPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    slot?: SortOrder
    name?: SortOrder
    position?: SortOrder
    nflTeam?: SortOrder
    points?: SortOrder
    starter?: SortOrder
  }

  export type RosterPlayerSumOrderByAggregateInput = {
    id?: SortOrder
    seasonTeamId?: SortOrder
    points?: SortOrder
  }

  export type MatchupCreateNestedManyWithoutHomeOwnerInput = {
    create?: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput> | MatchupCreateWithoutHomeOwnerInput[] | MatchupUncheckedCreateWithoutHomeOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutHomeOwnerInput | MatchupCreateOrConnectWithoutHomeOwnerInput[]
    createMany?: MatchupCreateManyHomeOwnerInputEnvelope
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
  }

  export type MatchupCreateNestedManyWithoutAwayOwnerInput = {
    create?: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput> | MatchupCreateWithoutAwayOwnerInput[] | MatchupUncheckedCreateWithoutAwayOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutAwayOwnerInput | MatchupCreateOrConnectWithoutAwayOwnerInput[]
    createMany?: MatchupCreateManyAwayOwnerInputEnvelope
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
  }

  export type SeasonTeamCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput> | SeasonTeamCreateWithoutOwnerInput[] | SeasonTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutOwnerInput | SeasonTeamCreateOrConnectWithoutOwnerInput[]
    createMany?: SeasonTeamCreateManyOwnerInputEnvelope
    connect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
  }

  export type MatchupUncheckedCreateNestedManyWithoutHomeOwnerInput = {
    create?: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput> | MatchupCreateWithoutHomeOwnerInput[] | MatchupUncheckedCreateWithoutHomeOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutHomeOwnerInput | MatchupCreateOrConnectWithoutHomeOwnerInput[]
    createMany?: MatchupCreateManyHomeOwnerInputEnvelope
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
  }

  export type MatchupUncheckedCreateNestedManyWithoutAwayOwnerInput = {
    create?: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput> | MatchupCreateWithoutAwayOwnerInput[] | MatchupUncheckedCreateWithoutAwayOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutAwayOwnerInput | MatchupCreateOrConnectWithoutAwayOwnerInput[]
    createMany?: MatchupCreateManyAwayOwnerInputEnvelope
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
  }

  export type SeasonTeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput> | SeasonTeamCreateWithoutOwnerInput[] | SeasonTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutOwnerInput | SeasonTeamCreateOrConnectWithoutOwnerInput[]
    createMany?: SeasonTeamCreateManyOwnerInputEnvelope
    connect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MatchupUpdateManyWithoutHomeOwnerNestedInput = {
    create?: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput> | MatchupCreateWithoutHomeOwnerInput[] | MatchupUncheckedCreateWithoutHomeOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutHomeOwnerInput | MatchupCreateOrConnectWithoutHomeOwnerInput[]
    upsert?: MatchupUpsertWithWhereUniqueWithoutHomeOwnerInput | MatchupUpsertWithWhereUniqueWithoutHomeOwnerInput[]
    createMany?: MatchupCreateManyHomeOwnerInputEnvelope
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    update?: MatchupUpdateWithWhereUniqueWithoutHomeOwnerInput | MatchupUpdateWithWhereUniqueWithoutHomeOwnerInput[]
    updateMany?: MatchupUpdateManyWithWhereWithoutHomeOwnerInput | MatchupUpdateManyWithWhereWithoutHomeOwnerInput[]
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
  }

  export type MatchupUpdateManyWithoutAwayOwnerNestedInput = {
    create?: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput> | MatchupCreateWithoutAwayOwnerInput[] | MatchupUncheckedCreateWithoutAwayOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutAwayOwnerInput | MatchupCreateOrConnectWithoutAwayOwnerInput[]
    upsert?: MatchupUpsertWithWhereUniqueWithoutAwayOwnerInput | MatchupUpsertWithWhereUniqueWithoutAwayOwnerInput[]
    createMany?: MatchupCreateManyAwayOwnerInputEnvelope
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    update?: MatchupUpdateWithWhereUniqueWithoutAwayOwnerInput | MatchupUpdateWithWhereUniqueWithoutAwayOwnerInput[]
    updateMany?: MatchupUpdateManyWithWhereWithoutAwayOwnerInput | MatchupUpdateManyWithWhereWithoutAwayOwnerInput[]
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
  }

  export type SeasonTeamUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput> | SeasonTeamCreateWithoutOwnerInput[] | SeasonTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutOwnerInput | SeasonTeamCreateOrConnectWithoutOwnerInput[]
    upsert?: SeasonTeamUpsertWithWhereUniqueWithoutOwnerInput | SeasonTeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SeasonTeamCreateManyOwnerInputEnvelope
    set?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    disconnect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    delete?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    connect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    update?: SeasonTeamUpdateWithWhereUniqueWithoutOwnerInput | SeasonTeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SeasonTeamUpdateManyWithWhereWithoutOwnerInput | SeasonTeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SeasonTeamScalarWhereInput | SeasonTeamScalarWhereInput[]
  }

  export type MatchupUncheckedUpdateManyWithoutHomeOwnerNestedInput = {
    create?: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput> | MatchupCreateWithoutHomeOwnerInput[] | MatchupUncheckedCreateWithoutHomeOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutHomeOwnerInput | MatchupCreateOrConnectWithoutHomeOwnerInput[]
    upsert?: MatchupUpsertWithWhereUniqueWithoutHomeOwnerInput | MatchupUpsertWithWhereUniqueWithoutHomeOwnerInput[]
    createMany?: MatchupCreateManyHomeOwnerInputEnvelope
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    update?: MatchupUpdateWithWhereUniqueWithoutHomeOwnerInput | MatchupUpdateWithWhereUniqueWithoutHomeOwnerInput[]
    updateMany?: MatchupUpdateManyWithWhereWithoutHomeOwnerInput | MatchupUpdateManyWithWhereWithoutHomeOwnerInput[]
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
  }

  export type MatchupUncheckedUpdateManyWithoutAwayOwnerNestedInput = {
    create?: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput> | MatchupCreateWithoutAwayOwnerInput[] | MatchupUncheckedCreateWithoutAwayOwnerInput[]
    connectOrCreate?: MatchupCreateOrConnectWithoutAwayOwnerInput | MatchupCreateOrConnectWithoutAwayOwnerInput[]
    upsert?: MatchupUpsertWithWhereUniqueWithoutAwayOwnerInput | MatchupUpsertWithWhereUniqueWithoutAwayOwnerInput[]
    createMany?: MatchupCreateManyAwayOwnerInputEnvelope
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[]
    update?: MatchupUpdateWithWhereUniqueWithoutAwayOwnerInput | MatchupUpdateWithWhereUniqueWithoutAwayOwnerInput[]
    updateMany?: MatchupUpdateManyWithWhereWithoutAwayOwnerInput | MatchupUpdateManyWithWhereWithoutAwayOwnerInput[]
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
  }

  export type SeasonTeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput> | SeasonTeamCreateWithoutOwnerInput[] | SeasonTeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutOwnerInput | SeasonTeamCreateOrConnectWithoutOwnerInput[]
    upsert?: SeasonTeamUpsertWithWhereUniqueWithoutOwnerInput | SeasonTeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SeasonTeamCreateManyOwnerInputEnvelope
    set?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    disconnect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    delete?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    connect?: SeasonTeamWhereUniqueInput | SeasonTeamWhereUniqueInput[]
    update?: SeasonTeamUpdateWithWhereUniqueWithoutOwnerInput | SeasonTeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SeasonTeamUpdateManyWithWhereWithoutOwnerInput | SeasonTeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SeasonTeamScalarWhereInput | SeasonTeamScalarWhereInput[]
  }

  export type OwnerCreateNestedOneWithoutHomeMatchupsInput = {
    create?: XOR<OwnerCreateWithoutHomeMatchupsInput, OwnerUncheckedCreateWithoutHomeMatchupsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutHomeMatchupsInput
    connect?: OwnerWhereUniqueInput
  }

  export type OwnerCreateNestedOneWithoutAwayMatchupsInput = {
    create?: XOR<OwnerCreateWithoutAwayMatchupsInput, OwnerUncheckedCreateWithoutAwayMatchupsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAwayMatchupsInput
    connect?: OwnerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OwnerUpdateOneRequiredWithoutHomeMatchupsNestedInput = {
    create?: XOR<OwnerCreateWithoutHomeMatchupsInput, OwnerUncheckedCreateWithoutHomeMatchupsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutHomeMatchupsInput
    upsert?: OwnerUpsertWithoutHomeMatchupsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutHomeMatchupsInput, OwnerUpdateWithoutHomeMatchupsInput>, OwnerUncheckedUpdateWithoutHomeMatchupsInput>
  }

  export type OwnerUpdateOneRequiredWithoutAwayMatchupsNestedInput = {
    create?: XOR<OwnerCreateWithoutAwayMatchupsInput, OwnerUncheckedCreateWithoutAwayMatchupsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAwayMatchupsInput
    upsert?: OwnerUpsertWithoutAwayMatchupsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutAwayMatchupsInput, OwnerUpdateWithoutAwayMatchupsInput>, OwnerUncheckedUpdateWithoutAwayMatchupsInput>
  }

  export type OwnerCreateNestedOneWithoutSeasonTeamsInput = {
    create?: XOR<OwnerCreateWithoutSeasonTeamsInput, OwnerUncheckedCreateWithoutSeasonTeamsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutSeasonTeamsInput
    connect?: OwnerWhereUniqueInput
  }

  export type RosterPlayerCreateNestedManyWithoutSeasonTeamInput = {
    create?: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput> | RosterPlayerCreateWithoutSeasonTeamInput[] | RosterPlayerUncheckedCreateWithoutSeasonTeamInput[]
    connectOrCreate?: RosterPlayerCreateOrConnectWithoutSeasonTeamInput | RosterPlayerCreateOrConnectWithoutSeasonTeamInput[]
    createMany?: RosterPlayerCreateManySeasonTeamInputEnvelope
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
  }

  export type RosterPlayerUncheckedCreateNestedManyWithoutSeasonTeamInput = {
    create?: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput> | RosterPlayerCreateWithoutSeasonTeamInput[] | RosterPlayerUncheckedCreateWithoutSeasonTeamInput[]
    connectOrCreate?: RosterPlayerCreateOrConnectWithoutSeasonTeamInput | RosterPlayerCreateOrConnectWithoutSeasonTeamInput[]
    createMany?: RosterPlayerCreateManySeasonTeamInputEnvelope
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OwnerUpdateOneRequiredWithoutSeasonTeamsNestedInput = {
    create?: XOR<OwnerCreateWithoutSeasonTeamsInput, OwnerUncheckedCreateWithoutSeasonTeamsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutSeasonTeamsInput
    upsert?: OwnerUpsertWithoutSeasonTeamsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutSeasonTeamsInput, OwnerUpdateWithoutSeasonTeamsInput>, OwnerUncheckedUpdateWithoutSeasonTeamsInput>
  }

  export type RosterPlayerUpdateManyWithoutSeasonTeamNestedInput = {
    create?: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput> | RosterPlayerCreateWithoutSeasonTeamInput[] | RosterPlayerUncheckedCreateWithoutSeasonTeamInput[]
    connectOrCreate?: RosterPlayerCreateOrConnectWithoutSeasonTeamInput | RosterPlayerCreateOrConnectWithoutSeasonTeamInput[]
    upsert?: RosterPlayerUpsertWithWhereUniqueWithoutSeasonTeamInput | RosterPlayerUpsertWithWhereUniqueWithoutSeasonTeamInput[]
    createMany?: RosterPlayerCreateManySeasonTeamInputEnvelope
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    update?: RosterPlayerUpdateWithWhereUniqueWithoutSeasonTeamInput | RosterPlayerUpdateWithWhereUniqueWithoutSeasonTeamInput[]
    updateMany?: RosterPlayerUpdateManyWithWhereWithoutSeasonTeamInput | RosterPlayerUpdateManyWithWhereWithoutSeasonTeamInput[]
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[]
  }

  export type RosterPlayerUncheckedUpdateManyWithoutSeasonTeamNestedInput = {
    create?: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput> | RosterPlayerCreateWithoutSeasonTeamInput[] | RosterPlayerUncheckedCreateWithoutSeasonTeamInput[]
    connectOrCreate?: RosterPlayerCreateOrConnectWithoutSeasonTeamInput | RosterPlayerCreateOrConnectWithoutSeasonTeamInput[]
    upsert?: RosterPlayerUpsertWithWhereUniqueWithoutSeasonTeamInput | RosterPlayerUpsertWithWhereUniqueWithoutSeasonTeamInput[]
    createMany?: RosterPlayerCreateManySeasonTeamInputEnvelope
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[]
    update?: RosterPlayerUpdateWithWhereUniqueWithoutSeasonTeamInput | RosterPlayerUpdateWithWhereUniqueWithoutSeasonTeamInput[]
    updateMany?: RosterPlayerUpdateManyWithWhereWithoutSeasonTeamInput | RosterPlayerUpdateManyWithWhereWithoutSeasonTeamInput[]
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[]
  }

  export type SeasonTeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<SeasonTeamCreateWithoutPlayersInput, SeasonTeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutPlayersInput
    connect?: SeasonTeamWhereUniqueInput
  }

  export type SeasonTeamUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<SeasonTeamCreateWithoutPlayersInput, SeasonTeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: SeasonTeamCreateOrConnectWithoutPlayersInput
    upsert?: SeasonTeamUpsertWithoutPlayersInput
    connect?: SeasonTeamWhereUniqueInput
    update?: XOR<XOR<SeasonTeamUpdateToOneWithWhereWithoutPlayersInput, SeasonTeamUpdateWithoutPlayersInput>, SeasonTeamUncheckedUpdateWithoutPlayersInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MatchupCreateWithoutHomeOwnerInput = {
    id: string
    season: number
    week: number
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
    awayOwner: OwnerCreateNestedOneWithoutAwayMatchupsInput
  }

  export type MatchupUncheckedCreateWithoutHomeOwnerInput = {
    id: string
    season: number
    week: number
    awayOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type MatchupCreateOrConnectWithoutHomeOwnerInput = {
    where: MatchupWhereUniqueInput
    create: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput>
  }

  export type MatchupCreateManyHomeOwnerInputEnvelope = {
    data: MatchupCreateManyHomeOwnerInput | MatchupCreateManyHomeOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchupCreateWithoutAwayOwnerInput = {
    id: string
    season: number
    week: number
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
    homeOwner: OwnerCreateNestedOneWithoutHomeMatchupsInput
  }

  export type MatchupUncheckedCreateWithoutAwayOwnerInput = {
    id: string
    season: number
    week: number
    homeOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type MatchupCreateOrConnectWithoutAwayOwnerInput = {
    where: MatchupWhereUniqueInput
    create: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput>
  }

  export type MatchupCreateManyAwayOwnerInputEnvelope = {
    data: MatchupCreateManyAwayOwnerInput | MatchupCreateManyAwayOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SeasonTeamCreateWithoutOwnerInput = {
    season: number
    teamId: string
    teamName: string
    week: number
    place?: number | null
    players?: RosterPlayerCreateNestedManyWithoutSeasonTeamInput
  }

  export type SeasonTeamUncheckedCreateWithoutOwnerInput = {
    id?: number
    season: number
    teamId: string
    teamName: string
    week: number
    place?: number | null
    players?: RosterPlayerUncheckedCreateNestedManyWithoutSeasonTeamInput
  }

  export type SeasonTeamCreateOrConnectWithoutOwnerInput = {
    where: SeasonTeamWhereUniqueInput
    create: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput>
  }

  export type SeasonTeamCreateManyOwnerInputEnvelope = {
    data: SeasonTeamCreateManyOwnerInput | SeasonTeamCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MatchupUpsertWithWhereUniqueWithoutHomeOwnerInput = {
    where: MatchupWhereUniqueInput
    update: XOR<MatchupUpdateWithoutHomeOwnerInput, MatchupUncheckedUpdateWithoutHomeOwnerInput>
    create: XOR<MatchupCreateWithoutHomeOwnerInput, MatchupUncheckedCreateWithoutHomeOwnerInput>
  }

  export type MatchupUpdateWithWhereUniqueWithoutHomeOwnerInput = {
    where: MatchupWhereUniqueInput
    data: XOR<MatchupUpdateWithoutHomeOwnerInput, MatchupUncheckedUpdateWithoutHomeOwnerInput>
  }

  export type MatchupUpdateManyWithWhereWithoutHomeOwnerInput = {
    where: MatchupScalarWhereInput
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyWithoutHomeOwnerInput>
  }

  export type MatchupScalarWhereInput = {
    AND?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
    OR?: MatchupScalarWhereInput[]
    NOT?: MatchupScalarWhereInput | MatchupScalarWhereInput[]
    id?: StringFilter<"Matchup"> | string
    season?: IntFilter<"Matchup"> | number
    week?: IntFilter<"Matchup"> | number
    homeOwnerId?: StringFilter<"Matchup"> | string
    awayOwnerId?: StringFilter<"Matchup"> | string
    homeScore?: FloatFilter<"Matchup"> | number
    awayScore?: FloatFilter<"Matchup"> | number
    isPlayoff?: BoolFilter<"Matchup"> | boolean
  }

  export type MatchupUpsertWithWhereUniqueWithoutAwayOwnerInput = {
    where: MatchupWhereUniqueInput
    update: XOR<MatchupUpdateWithoutAwayOwnerInput, MatchupUncheckedUpdateWithoutAwayOwnerInput>
    create: XOR<MatchupCreateWithoutAwayOwnerInput, MatchupUncheckedCreateWithoutAwayOwnerInput>
  }

  export type MatchupUpdateWithWhereUniqueWithoutAwayOwnerInput = {
    where: MatchupWhereUniqueInput
    data: XOR<MatchupUpdateWithoutAwayOwnerInput, MatchupUncheckedUpdateWithoutAwayOwnerInput>
  }

  export type MatchupUpdateManyWithWhereWithoutAwayOwnerInput = {
    where: MatchupScalarWhereInput
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyWithoutAwayOwnerInput>
  }

  export type SeasonTeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SeasonTeamWhereUniqueInput
    update: XOR<SeasonTeamUpdateWithoutOwnerInput, SeasonTeamUncheckedUpdateWithoutOwnerInput>
    create: XOR<SeasonTeamCreateWithoutOwnerInput, SeasonTeamUncheckedCreateWithoutOwnerInput>
  }

  export type SeasonTeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SeasonTeamWhereUniqueInput
    data: XOR<SeasonTeamUpdateWithoutOwnerInput, SeasonTeamUncheckedUpdateWithoutOwnerInput>
  }

  export type SeasonTeamUpdateManyWithWhereWithoutOwnerInput = {
    where: SeasonTeamScalarWhereInput
    data: XOR<SeasonTeamUpdateManyMutationInput, SeasonTeamUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SeasonTeamScalarWhereInput = {
    AND?: SeasonTeamScalarWhereInput | SeasonTeamScalarWhereInput[]
    OR?: SeasonTeamScalarWhereInput[]
    NOT?: SeasonTeamScalarWhereInput | SeasonTeamScalarWhereInput[]
    id?: IntFilter<"SeasonTeam"> | number
    season?: IntFilter<"SeasonTeam"> | number
    ownerId?: StringFilter<"SeasonTeam"> | string
    teamId?: StringFilter<"SeasonTeam"> | string
    teamName?: StringFilter<"SeasonTeam"> | string
    week?: IntFilter<"SeasonTeam"> | number
    place?: IntNullableFilter<"SeasonTeam"> | number | null
  }

  export type OwnerCreateWithoutHomeMatchupsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    awayMatchups?: MatchupCreateNestedManyWithoutAwayOwnerInput
    seasonTeams?: SeasonTeamCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutHomeMatchupsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    awayMatchups?: MatchupUncheckedCreateNestedManyWithoutAwayOwnerInput
    seasonTeams?: SeasonTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutHomeMatchupsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutHomeMatchupsInput, OwnerUncheckedCreateWithoutHomeMatchupsInput>
  }

  export type OwnerCreateWithoutAwayMatchupsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupCreateNestedManyWithoutHomeOwnerInput
    seasonTeams?: SeasonTeamCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutAwayMatchupsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupUncheckedCreateNestedManyWithoutHomeOwnerInput
    seasonTeams?: SeasonTeamUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutAwayMatchupsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutAwayMatchupsInput, OwnerUncheckedCreateWithoutAwayMatchupsInput>
  }

  export type OwnerUpsertWithoutHomeMatchupsInput = {
    update: XOR<OwnerUpdateWithoutHomeMatchupsInput, OwnerUncheckedUpdateWithoutHomeMatchupsInput>
    create: XOR<OwnerCreateWithoutHomeMatchupsInput, OwnerUncheckedCreateWithoutHomeMatchupsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutHomeMatchupsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutHomeMatchupsInput, OwnerUncheckedUpdateWithoutHomeMatchupsInput>
  }

  export type OwnerUpdateWithoutHomeMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awayMatchups?: MatchupUpdateManyWithoutAwayOwnerNestedInput
    seasonTeams?: SeasonTeamUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutHomeMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    awayMatchups?: MatchupUncheckedUpdateManyWithoutAwayOwnerNestedInput
    seasonTeams?: SeasonTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUpsertWithoutAwayMatchupsInput = {
    update: XOR<OwnerUpdateWithoutAwayMatchupsInput, OwnerUncheckedUpdateWithoutAwayMatchupsInput>
    create: XOR<OwnerCreateWithoutAwayMatchupsInput, OwnerUncheckedCreateWithoutAwayMatchupsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutAwayMatchupsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutAwayMatchupsInput, OwnerUncheckedUpdateWithoutAwayMatchupsInput>
  }

  export type OwnerUpdateWithoutAwayMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUpdateManyWithoutHomeOwnerNestedInput
    seasonTeams?: SeasonTeamUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutAwayMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUncheckedUpdateManyWithoutHomeOwnerNestedInput
    seasonTeams?: SeasonTeamUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateWithoutSeasonTeamsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupCreateNestedManyWithoutHomeOwnerInput
    awayMatchups?: MatchupCreateNestedManyWithoutAwayOwnerInput
  }

  export type OwnerUncheckedCreateWithoutSeasonTeamsInput = {
    id: string
    name: string
    teamName: string
    logoUrl?: string | null
    homeMatchups?: MatchupUncheckedCreateNestedManyWithoutHomeOwnerInput
    awayMatchups?: MatchupUncheckedCreateNestedManyWithoutAwayOwnerInput
  }

  export type OwnerCreateOrConnectWithoutSeasonTeamsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutSeasonTeamsInput, OwnerUncheckedCreateWithoutSeasonTeamsInput>
  }

  export type RosterPlayerCreateWithoutSeasonTeamInput = {
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
  }

  export type RosterPlayerUncheckedCreateWithoutSeasonTeamInput = {
    id?: number
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
  }

  export type RosterPlayerCreateOrConnectWithoutSeasonTeamInput = {
    where: RosterPlayerWhereUniqueInput
    create: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput>
  }

  export type RosterPlayerCreateManySeasonTeamInputEnvelope = {
    data: RosterPlayerCreateManySeasonTeamInput | RosterPlayerCreateManySeasonTeamInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithoutSeasonTeamsInput = {
    update: XOR<OwnerUpdateWithoutSeasonTeamsInput, OwnerUncheckedUpdateWithoutSeasonTeamsInput>
    create: XOR<OwnerCreateWithoutSeasonTeamsInput, OwnerUncheckedCreateWithoutSeasonTeamsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutSeasonTeamsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutSeasonTeamsInput, OwnerUncheckedUpdateWithoutSeasonTeamsInput>
  }

  export type OwnerUpdateWithoutSeasonTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUpdateManyWithoutHomeOwnerNestedInput
    awayMatchups?: MatchupUpdateManyWithoutAwayOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutSeasonTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    homeMatchups?: MatchupUncheckedUpdateManyWithoutHomeOwnerNestedInput
    awayMatchups?: MatchupUncheckedUpdateManyWithoutAwayOwnerNestedInput
  }

  export type RosterPlayerUpsertWithWhereUniqueWithoutSeasonTeamInput = {
    where: RosterPlayerWhereUniqueInput
    update: XOR<RosterPlayerUpdateWithoutSeasonTeamInput, RosterPlayerUncheckedUpdateWithoutSeasonTeamInput>
    create: XOR<RosterPlayerCreateWithoutSeasonTeamInput, RosterPlayerUncheckedCreateWithoutSeasonTeamInput>
  }

  export type RosterPlayerUpdateWithWhereUniqueWithoutSeasonTeamInput = {
    where: RosterPlayerWhereUniqueInput
    data: XOR<RosterPlayerUpdateWithoutSeasonTeamInput, RosterPlayerUncheckedUpdateWithoutSeasonTeamInput>
  }

  export type RosterPlayerUpdateManyWithWhereWithoutSeasonTeamInput = {
    where: RosterPlayerScalarWhereInput
    data: XOR<RosterPlayerUpdateManyMutationInput, RosterPlayerUncheckedUpdateManyWithoutSeasonTeamInput>
  }

  export type RosterPlayerScalarWhereInput = {
    AND?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[]
    OR?: RosterPlayerScalarWhereInput[]
    NOT?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[]
    id?: IntFilter<"RosterPlayer"> | number
    seasonTeamId?: IntFilter<"RosterPlayer"> | number
    slot?: StringFilter<"RosterPlayer"> | string
    name?: StringFilter<"RosterPlayer"> | string
    position?: StringFilter<"RosterPlayer"> | string
    nflTeam?: StringFilter<"RosterPlayer"> | string
    points?: FloatFilter<"RosterPlayer"> | number
    starter?: BoolFilter<"RosterPlayer"> | boolean
  }

  export type SeasonTeamCreateWithoutPlayersInput = {
    season: number
    teamId: string
    teamName: string
    week: number
    place?: number | null
    owner: OwnerCreateNestedOneWithoutSeasonTeamsInput
  }

  export type SeasonTeamUncheckedCreateWithoutPlayersInput = {
    id?: number
    season: number
    ownerId: string
    teamId: string
    teamName: string
    week: number
    place?: number | null
  }

  export type SeasonTeamCreateOrConnectWithoutPlayersInput = {
    where: SeasonTeamWhereUniqueInput
    create: XOR<SeasonTeamCreateWithoutPlayersInput, SeasonTeamUncheckedCreateWithoutPlayersInput>
  }

  export type SeasonTeamUpsertWithoutPlayersInput = {
    update: XOR<SeasonTeamUpdateWithoutPlayersInput, SeasonTeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<SeasonTeamCreateWithoutPlayersInput, SeasonTeamUncheckedCreateWithoutPlayersInput>
    where?: SeasonTeamWhereInput
  }

  export type SeasonTeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: SeasonTeamWhereInput
    data: XOR<SeasonTeamUpdateWithoutPlayersInput, SeasonTeamUncheckedUpdateWithoutPlayersInput>
  }

  export type SeasonTeamUpdateWithoutPlayersInput = {
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
    owner?: OwnerUpdateOneRequiredWithoutSeasonTeamsNestedInput
  }

  export type SeasonTeamUncheckedUpdateWithoutPlayersInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchupCreateManyHomeOwnerInput = {
    id: string
    season: number
    week: number
    awayOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type MatchupCreateManyAwayOwnerInput = {
    id: string
    season: number
    week: number
    homeOwnerId: string
    homeScore: number
    awayScore: number
    isPlayoff?: boolean
  }

  export type SeasonTeamCreateManyOwnerInput = {
    id?: number
    season: number
    teamId: string
    teamName: string
    week: number
    place?: number | null
  }

  export type MatchupUpdateWithoutHomeOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
    awayOwner?: OwnerUpdateOneRequiredWithoutAwayMatchupsNestedInput
  }

  export type MatchupUncheckedUpdateWithoutHomeOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    awayOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchupUncheckedUpdateManyWithoutHomeOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    awayOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchupUpdateWithoutAwayOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
    homeOwner?: OwnerUpdateOneRequiredWithoutHomeMatchupsNestedInput
  }

  export type MatchupUncheckedUpdateWithoutAwayOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchupUncheckedUpdateManyWithoutAwayOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    season?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    homeOwnerId?: StringFieldUpdateOperationsInput | string
    homeScore?: FloatFieldUpdateOperationsInput | number
    awayScore?: FloatFieldUpdateOperationsInput | number
    isPlayoff?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonTeamUpdateWithoutOwnerInput = {
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
    players?: RosterPlayerUpdateManyWithoutSeasonTeamNestedInput
  }

  export type SeasonTeamUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
    players?: RosterPlayerUncheckedUpdateManyWithoutSeasonTeamNestedInput
  }

  export type SeasonTeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    place?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RosterPlayerCreateManySeasonTeamInput = {
    id?: number
    slot: string
    name: string
    position: string
    nflTeam: string
    points: number
    starter: boolean
  }

  export type RosterPlayerUpdateWithoutSeasonTeamInput = {
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RosterPlayerUncheckedUpdateWithoutSeasonTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RosterPlayerUncheckedUpdateManyWithoutSeasonTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    nflTeam?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    starter?: BoolFieldUpdateOperationsInput | boolean
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