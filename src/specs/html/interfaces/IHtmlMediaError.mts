import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { CHtmlHTMLMediaErrorCode } from "../constants/CHtmlHTMLMediaErrorCode.mjs";

export interface IHtmlMediaErrorConstants {
  MEDIA_ERR_ABORTED: typeof CHtmlHTMLMediaErrorCode.MEDIA_ERR_ABORTED;
  MEDIA_ERR_NETWORK: typeof CHtmlHTMLMediaErrorCode.MEDIA_ERR_NETWORK;
  MEDIA_ERR_DECODE: typeof CHtmlHTMLMediaErrorCode.MEDIA_ERR_DECODE;
  MEDIA_ERR_SRC_NOT_SUPPORTED: typeof CHtmlHTMLMediaErrorCode.MEDIA_ERR_SRC_NOT_SUPPORTED;
}

export interface IHtmlMediaError<N extends MediaError> extends IWrapper<N> {
  // Code class constants are declared in the interface above.
  readonly code: CHtmlHTMLMediaErrorCode;
  readonly message: string;
}
