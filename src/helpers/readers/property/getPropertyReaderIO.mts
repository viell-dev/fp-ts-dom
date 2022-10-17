import * as RIO from "fp-ts/ReaderIO";

/** @internal */
export const getPropertyReaderIO = /*#__PURE__*/ <T, K extends keyof T>(
  key: K
): RIO.ReaderIO<T, T[K]> => RIO.asks((unsafe) => unsafe[key]);
