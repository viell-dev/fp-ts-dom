import type { Values } from "@/helpers/Values.mjs";

export const CHtmlHTMLMediaElementReadyState = {
  HAVE_NOTHING: 0,
  HAVE_METADATA: 1,
  HAVE_CURRENT_DATA: 2,
  HAVE_FUTURE_DATA: 3,
  HAVE_ENOUGH_DATA: 4,
} as const;
export type CHtmlHTMLMediaElementReadyState = Values<
  typeof CHtmlHTMLMediaElementReadyState
>;
