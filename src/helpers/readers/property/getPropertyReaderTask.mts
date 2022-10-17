import * as RT from "fp-ts/ReaderTask";

/** @internal */
export const getPropertyReaderTask = /*#__PURE__*/ <T, K extends keyof T>(
  key: K
): RT.ReaderTask<T, T[K]> => RT.asks((unsafe) => unsafe[key]);
