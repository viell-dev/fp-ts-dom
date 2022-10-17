import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import * as R from "fp-ts/Reader";
import type * as RTE from "fp-ts/ReaderTaskEither";
import * as TE from "fp-ts/TaskEither";

/** @internal */
export const getMethodReaderTaskEither = /*#__PURE__*/ <
  T,
  E,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RTE.ReaderTaskEither<T, E, A> =>
  R.asks((unsafe) =>
    TE.tryCatch(
      () => unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)),
      unsafeCoerce<E>
    )
  );
