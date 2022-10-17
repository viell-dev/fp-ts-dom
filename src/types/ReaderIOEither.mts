import * as IOE from "fp-ts/IOEither";
import type {} from "fp-ts/Reader";
import * as RT from "fp-ts/ReaderT";

export interface ReaderIOEither<R, E, A> {
  (r: R): IOE.IOEither<E, A>;
}

declare module "fp-ts/HKT" {
  interface URItoKind3<R, E, A> {
    readonly ReaderIOEither: ReaderIOEither<R, E, A>;
  }
}

export const of = /*#__PURE__*/ RT.of(IOE.Pointed);
export const map = /*#__PURE__*/ RT.map(IOE.Functor);
export const ap = /*#__PURE__*/ RT.ap(IOE.ApplyPar);
export const chain = /*#__PURE__*/ RT.chain(IOE.Chain);
export const fromReader = /*#__PURE__*/ RT.fromReader(IOE.Pointed);
