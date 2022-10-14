import * as R from "fp-ts/Reader";
import * as TO from "fp-ts/TaskOption";
import type * as RTO from "../extensions/ReaderTaskOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderTaskOption = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never
>(
  key: K,
  ...args: Parameters<F>
): RTO.ReaderTaskOption<R, ReturnType<F>> =>
  R.asks((unsafe) =>
    TO.fromNullable(unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)))
  );
