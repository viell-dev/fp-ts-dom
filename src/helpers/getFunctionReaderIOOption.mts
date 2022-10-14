import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";
import type * as RIOO from "../extensions/ReaderIOOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderIOOption = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: K,
  ...args: Parameters<F>
): RIOO.ReaderIOOption<R, ReturnType<F>> =>
  RIO.asks((unsafe) =>
    O.fromNullable(unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)))
  );
