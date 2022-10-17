import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RIOO from "@/types/ReaderIOOption.mjs";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getMethodReaderIOOptionE = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E
>(
  key: K,
  ...args: Parameters<F>
): RIOO.ReaderIOOption<T, E> =>
  RIO.asks((unsafe) =>
    pipe(
      E.tryCatch(
        () => unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)),
        unsafeCoerce<E>
      ),
      O.getLeft
    )
  );
