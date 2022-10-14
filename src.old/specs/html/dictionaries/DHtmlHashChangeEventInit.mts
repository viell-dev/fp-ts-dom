import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlHashChangeEventInit extends DDomEventInit {
  oldURL?: string;
  newURL?: string;
}
