import * as R from "fp-ts/Reader";
import * as TO from "fp-ts/TaskOption";
import type * as RTO from "../extensions/ReaderTaskOption.mjs";

export const getPropertyReaderTaskOption = /*#__PURE__*/ <R, K extends keyof R>(
  key: K
): RTO.ReaderTaskOption<R, R[K]> =>
  R.asks((unsafe) => TO.fromNullable(unsafe[key]));
