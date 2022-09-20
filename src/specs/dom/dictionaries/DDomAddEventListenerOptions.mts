import type { IDomAbortSignal } from "../interfaces/IDomAbortSignal.mjs";
import type { DDomEventListenerOptions } from "./DDomEventListenerOptions.mjs";

export interface DDomAddEventListenerOptions<R>
  extends DDomEventListenerOptions {
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal | IDomAbortSignal<AbortSignal, R>;
}
