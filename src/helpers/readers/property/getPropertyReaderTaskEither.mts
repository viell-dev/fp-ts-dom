import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import * as R from "fp-ts/Reader";
import type * as RTE from "fp-ts/ReaderTaskEither";
import * as TE from "fp-ts/TaskEither";

/** @internal */
export const getPropertyReaderTaskEither = /*#__PURE__*/ <
  T,
  E,
  K extends keyof T,
  A extends T[K] extends Promise<infer B> ? B : never
>(
  key: K
): RTE.ReaderTaskEither<T, E, A> =>
  R.asks((unsafe) =>
    TE.tryCatch(() => unsafeCoerce(unsafe[key]), unsafeCoerce<E>)
  );
