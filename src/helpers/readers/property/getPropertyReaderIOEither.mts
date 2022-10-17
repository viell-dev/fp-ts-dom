import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type * as RIOE from "@/types/ReaderIOEither.mjs";
import * as IOE from "fp-ts/IOEither";
import * as R from "fp-ts/Reader";

/** @internal */
export const getPropertyReaderIOEither = /*#__PURE__*/ <
  T,
  K extends keyof T,
  E
>(
  key: K
): RIOE.ReaderIOEither<T, E, T[K]> =>
  R.asks((unsafe) => IOE.tryCatch(() => unsafe[key], unsafeCoerce<E>));
