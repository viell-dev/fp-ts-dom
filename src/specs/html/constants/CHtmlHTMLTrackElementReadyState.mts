import type { Values } from "@/helpers/Values.mjs";

export const CHtmlHTMLTrackElementReadyState = {
  NONE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
} as const;
export type CHtmlHTMLTrackElementReadyState = Values<
  typeof CHtmlHTMLTrackElementReadyState
>;
