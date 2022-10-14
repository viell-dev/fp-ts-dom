import * as RIO from "fp-ts/ReaderIO";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderIO = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: R[K] extends F ? K : never,
  ...args: Parameters<F>
): RIO.ReaderIO<R, ReturnType<F>> =>
  RIO.asks((unsafe) => unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)));
