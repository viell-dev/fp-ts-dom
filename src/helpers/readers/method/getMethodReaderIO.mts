import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getMethodReaderIO = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: T[K] extends F ? K : never,
  ...args: Parameters<F>
): RIO.ReaderIO<T, ReturnType<F>> =>
  RIO.asks((unsafe) => unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)));
