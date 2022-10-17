import type * as RIOO from "@/types/ReaderIOOption.mjs";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getPropertyReaderIOOption = /*#__PURE__*/ <T, K extends keyof T>(
  key: K
): RIOO.ReaderIOOption<T, T[K]> =>
  RIO.asks((unsafe) => O.fromNullable(unsafe[key]));
