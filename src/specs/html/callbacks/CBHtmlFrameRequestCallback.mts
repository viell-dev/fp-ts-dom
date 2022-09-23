import type { THrTimeDOMHighResTimeStamp } from "@/specs/hr-time/types/THrTimeDOMHighResTimeStamp.mjs";

export interface CBHtmlFrameRequestCallback {
  (time: THrTimeDOMHighResTimeStamp): void;
}
