import * as IOE from "fp-ts/IOEither";
import * as R from "fp-ts/Reader";
import type * as RIOE from "../extensions/ReaderIOEither.mjs";
import { unsafeAssert } from "./unsafeAssert.mjs";

export const getPropertyReaderIOEither = /*#__PURE__*/ <
  R,
  K extends keyof R,
  E
>(
  key: K
): RIOE.ReaderIOEither<R, E, R[K]> =>
  R.asks((unsafe) => IOE.tryCatch(() => unsafe[key], unsafeAssert<E>));
