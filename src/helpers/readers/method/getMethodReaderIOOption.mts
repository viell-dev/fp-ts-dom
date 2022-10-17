import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RIOO from "@/types/ReaderIOOption.mjs";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getMethodReaderIOOption = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: K,
  ...args: Parameters<F>
): RIOO.ReaderIOOption<T, ReturnType<F>> =>
  RIO.asks((unsafe) =>
    O.fromNullable(unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)))
  );
