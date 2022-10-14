import * as R from "fp-ts/Reader";
import type * as RTE from "fp-ts/ReaderTaskEither";
import * as TE from "fp-ts/TaskEither";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getPropertyReaderTaskEither = /*#__PURE__*/ <
  R,
  E,
  K extends keyof R,
  A extends R[K] extends Promise<infer B> ? B : never
>(
  key: K
): RTE.ReaderTaskEither<R, E, A> =>
  R.asks((unsafe) =>
    TE.tryCatch(() => unsafeAssert(unsafe[key]), unsafeAssert<E>)
  );
