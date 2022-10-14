import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlPopStateEventInit extends DDomEventInit {
  state?: unknown;
}
