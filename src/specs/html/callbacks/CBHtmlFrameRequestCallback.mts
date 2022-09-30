import type { THrTimeDOMHighResTimeStamp } from "../../hr-time/types/THrTimeDOMHighResTimeStamp.mjs";

export interface CBHtmlFrameRequestCallback {
  (time: THrTimeDOMHighResTimeStamp): void;
}
