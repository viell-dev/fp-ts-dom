import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlPopStateEventInit extends DDomEventInit {
  state?: unknown;
}
