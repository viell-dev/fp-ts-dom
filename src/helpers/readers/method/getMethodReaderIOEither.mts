import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RIOE from "@/types/ReaderIOEither.mjs";
import * as IOE from "fp-ts/IOEither";
import * as R from "fp-ts/Reader";

/** @internal */
export const getMethodReaderTaskEither = /*#__PURE__*/ <
  T,
  K extends keyof T,
  F extends T[K] extends (...args: infer C) => infer D
    ? (...args: C) => D
    : never,
  E
>(
  key: K,
  ...args: Parameters<F>
): RIOE.ReaderIOEither<T, E, ReturnType<F>> =>
  R.asks((unsafe) =>
    IOE.tryCatch(
      () => unsafeCoerce(unsafeCoerce<F>(unsafe[key])(...args)),
      unsafeCoerce<E>
    )
  );
