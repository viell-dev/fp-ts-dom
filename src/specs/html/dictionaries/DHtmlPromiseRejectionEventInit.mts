import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlPromiseRejectionEventInit extends DDomEventInit {
  promise: Promise<unknown>;
  reason?: unknown;
}
