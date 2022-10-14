import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import type * as RTO from "../extensions/ReaderTaskOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getFunctionReaderTaskOptionE = /*#__PURE__*/ <
  R,
  K extends keyof R,
  F extends R[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E,
  A extends ReturnType<F> extends Promise<infer B> ? B : never
>(
  key: K,
  ...args: Parameters<F>
): RTO.ReaderTaskOption<R, E> =>
  R.asks((unsafe) =>
    pipe(
      TE.tryCatch(
        () => unsafeAssert<Promise<A>>(unsafeAssert<F>(unsafe[key])(...args)),
        unsafeAssert<E>
      ),
      T.map(O.getLeft)
    )
  );
