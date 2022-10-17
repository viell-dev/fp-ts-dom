import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import * as RT from "fp-ts/ReaderTask";

/** @internal */
export const getMethodReaderTask = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RT.ReaderTask<T, A> =>
  RT.asks((unsafe) => unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)));
