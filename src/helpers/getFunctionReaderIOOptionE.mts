import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";
import type * as RIOO from "../extensions/ReaderIOOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderIOOptionE = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E
>(
  key: K,
  ...args: Parameters<F>
): RIOO.ReaderIOOption<R, E> =>
  RIO.asks((unsafe) =>
    pipe(
      E.tryCatch(
        () => unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)),
        unsafeAssert<E>
      ),
      O.getLeft
    )
  );
