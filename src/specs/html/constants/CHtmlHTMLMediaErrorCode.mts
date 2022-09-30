import type { Values } from "../../../helpers/Values.mjs";

export const CHtmlHTMLMediaErrorCode = {
  MEDIA_ERR_ABORTED: 1,
  MEDIA_ERR_NETWORK: 2,
  MEDIA_ERR_DECODE: 3,
  MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
} as const;
export type CHtmlHTMLMediaErrorCode = Values<typeof CHtmlHTMLMediaErrorCode>;
