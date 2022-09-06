import type { IDomAbortSignal } from "../interfaces/IDomAbortSignal.js";
import type { DDomEventListenerOptions } from "./DDomEventListenerOptions.js";

export interface DDomAddEventListenerOptions<R = unknown>
  extends DDomEventListenerOptions {
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal | IDomAbortSignal<AbortSignal, R>;
}
