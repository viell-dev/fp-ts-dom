import type { Values } from "@/helpers/Values.mjs";

export const CHtmlHTMLMediaElementNetworkState = {
  NETWORK_EMPTY: 0,
  NETWORK_IDLE: 1,
  NETWORK_LOADING: 2,
  NETWORK_NO_SOURCE: 3,
} as const;
export type CHtmlHTMLMediaElementNetworkState = Values<
  typeof CHtmlHTMLMediaElementNetworkState
>;
