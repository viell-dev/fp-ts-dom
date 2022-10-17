import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RIOO from "@/types/ReaderIOOption.mjs";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getPropertyReaderIOOptionE = /*#__PURE__*/ <
  T,
  K extends keyof T,
  E
>(
  key: K
): RIOO.ReaderIOOption<T, E> =>
  RIO.asks((unsafe) =>
    pipe(
      E.tryCatch(() => unsafe[key], unsafeCoerce<E>),
      O.getLeft
    )
  );
