import type * as E from "fp-ts/Either";

export interface IStringifier<
  S extends string = string,
  T extends Error | null = null
> {
  toString(): T extends Error ? E.Either<T, S> : S;
}
