import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlPromiseRejectionEventInit extends DDomEventInit {
  promise: Promise<unknown>;
  reason?: unknown;
}
