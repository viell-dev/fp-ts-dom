import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RTO from "@/types/ReaderTaskOption.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";

/** @internal */
export const getMethodReaderTaskOptionE = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RTO.ReaderTaskOption<T, E> =>
  R.asks((unsafe) =>
    pipe(
      TE.tryCatch(
        () => unsafeCoerce<Promise<A>>(unsafeCoerce<F>(unsafe[key])(...args)),
        unsafeCoerce<E>
      ),
      T.map(O.getLeft)
    )
  );
