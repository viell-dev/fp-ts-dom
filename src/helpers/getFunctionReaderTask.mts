import * as RT from "fp-ts/ReaderTask";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderTask = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RT.ReaderTask<R, A> =>
  RT.asks((unsafe) => unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)));
