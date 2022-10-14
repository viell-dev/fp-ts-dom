import * as RT from "fp-ts/ReaderTask";

export const getPropertyReaderTask = /*#__PURE__*/ <R, K extends keyof R>(
  key: K
): RT.ReaderTask<R, R[K]> => RT.asks((unsafe) => unsafe[key]);
