import * as IOO from "fp-ts/IOOption";
import type {} from "fp-ts/Reader";
import * as RT from "fp-ts/ReaderT";

export interface ReaderIOOption<R, A> {
  (r: R): IOO.IOOption<A>;
}

export const URI = "ReaderIOOption";

export type URI = typeof URI;

declare module "fp-ts/HKT" {
  interface URItoKind1<R, A> {
    readonly [URI]: ReaderIOOption<R, A>;
  }
}

export const of = /*#__PURE__*/ RT.of(IOO.Pointed);
export const map = /*#__PURE__*/ RT.map(IOO.Functor);
export const ap = /*#__PURE__*/ RT.ap(IOO.Apply);
export const chain = /*#__PURE__*/ RT.chain(IOO.Chain);
export const fromReader = /*#__PURE__*/ RT.fromReader(IOO.Pointed);
