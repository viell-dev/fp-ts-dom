import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";
import type * as RIOO from "../extensions/ReaderIOOption.mjs";

export const getPropertyReaderIOOption = /*#__PURE__*/ <R, K extends keyof R>(
  key: K
): RIOO.ReaderIOOption<R, R[K]> =>
  RIO.asks((unsafe) => O.fromNullable(unsafe[key]));
