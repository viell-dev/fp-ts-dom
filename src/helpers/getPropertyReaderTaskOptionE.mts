import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import type * as RTO from "../extensions/ReaderTaskOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getPropertyReaderTaskOptionE = /*#__PURE__*/ <
  R,
  K extends keyof R,
  E,
  A extends R[K] extends Promise<infer B> ? B : never
>(
  key: K
): RTO.ReaderTaskOption<R, E> =>
  R.asks((unsafe) =>
    pipe(
      TE.tryCatch(() => unsafeAssert<Promise<A>>(unsafe[key]), unsafeAssert<E>),
      T.map(O.getLeft)
    )
  );
