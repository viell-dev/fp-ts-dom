import type * as RTO from "@/types/ReaderTaskOption.mjs";
import * as R from "fp-ts/Reader";
import * as TO from "fp-ts/TaskOption";

/** @internal */
export const getPropertyReaderTaskOption = /*#__PURE__*/ <T, K extends keyof T>(
  key: K
): RTO.ReaderTaskOption<T, T[K]> =>
  R.asks((unsafe) => TO.fromNullable(unsafe[key]));
