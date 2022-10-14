import * as R from "fp-ts/Reader";
import type * as RTE from "fp-ts/ReaderTaskEither";
import * as TE from "fp-ts/TaskEither";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderTaskEither = /*#__PURE__*/ <
  R,
  E,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RTE.ReaderTaskEither<R, E, A> =>
  R.asks((unsafe) =>
    TE.tryCatch(
      () => unsafeAssert(unsafeAssert<F>(unsafe[key])(...args)),
      unsafeAssert<E>
    )
  );
