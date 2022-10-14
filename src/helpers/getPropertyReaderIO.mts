import * as RIO from "fp-ts/ReaderIO";

export const getPropertyReaderIO = /*#__PURE__*/ <R, K extends keyof R>(
  key: K
): RIO.ReaderIO<R, R[K]> => RIO.asks((unsafe) => unsafe[key]);
