import type {} from "fp-ts/Reader";
import * as RT from "fp-ts/ReaderT";
import * as TO from "fp-ts/TaskOption";

export interface ReaderTaskOption<R, A> {
  (r: R): TO.TaskOption<A>;
}

export const URI = "ReaderTaskOption";

export type URI = typeof URI;

declare module "fp-ts/HKT" {
  interface URItoKind1<R, A> {
    readonly [URI]: ReaderTaskOption<R, A>;
  }
}

export const of = /*#__PURE__*/ RT.of(TO.Pointed);
export const map = /*#__PURE__*/ RT.map(TO.Functor);
export const ap = /*#__PURE__*/ RT.ap(TO.ApplyPar);
export const chain = /*#__PURE__*/ RT.chain(TO.Chain);
export const fromReader = /*#__PURE__*/ RT.fromReader(TO.Pointed);
