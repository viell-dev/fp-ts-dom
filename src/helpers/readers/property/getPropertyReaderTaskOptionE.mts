import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RTO from "@/types/ReaderTaskOption.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";

/** @internal */
export const getPropertyReaderTaskOptionE = /*#__PURE__*/ <
  T,
  K extends keyof T,
  E,
  A extends T[K] extends Promise<infer B> ? B : never
>(
  key: K
): RTO.ReaderTaskOption<T, E> =>
  R.asks((unsafe) =>
    pipe(
      TE.tryCatch(() => unsafeCoerce<Promise<A>>(unsafe[key]), unsafeCoerce<E>),
      T.map(O.getLeft)
    )
  );
