import type * as E from "fp-ts/Either";

export interface IStringifier<T extends Error, S extends string = string> {
  toString(): E.Either<T, S>;
}
