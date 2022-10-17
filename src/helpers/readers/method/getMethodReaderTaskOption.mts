import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RTO from "@/types/ReaderTaskOption.mjs";
import * as R from "fp-ts/Reader";
import * as TO from "fp-ts/TaskOption";

/** @internal */
export const getMethodReaderTaskOption = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: K,
  ...args: Parameters<F>
): RTO.ReaderTaskOption<T, ReturnType<F>> =>
  R.asks((unsafe) =>
    TO.fromNullable(unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)))
  );
