import * as IOE from "fp-ts/IOEither";
import * as R from "fp-ts/Reader";
import type * as RIOE from "../extensions/ReaderIOEither.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderTaskEither = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E
>(
  key: K,
  ...args: Parameters<F>
): RIOE.ReaderIOEither<R, E, ReturnType<F>> =>
  R.asks((unsafe) =>
    IOE.tryCatch(
      () => unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)),
      unsafeAssert<E>
    )
  );
