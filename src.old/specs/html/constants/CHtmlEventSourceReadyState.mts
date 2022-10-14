import type { Values } from "../../../helpers/Values.mjs";

export const CHtmlEventSourceReadyState = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSED: 2,
} as const;
export type CHtmlEventSourceReadyState = Values<
  typeof CHtmlEventSourceReadyState
>;
