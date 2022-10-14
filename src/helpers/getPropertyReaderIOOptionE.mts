import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";
import type * as RIOO from "../extensions/ReaderIOOption.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getPropertyReaderIOOptionE = /*#__PURE__*/ <
  R,
  K extends keyof R,
  E
>(
  key: K
): RIOO.ReaderIOOption<R, E> =>
  RIO.asks((unsafe) =>
    pipe(
      E.tryCatch(() => unsafe[key], unsafeAssert<E>),
      O.getLeft
    )
  );
