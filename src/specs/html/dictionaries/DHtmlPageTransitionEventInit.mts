import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlHashChangeEventInit extends DDomEventInit {
  persisted?: boolean;
}
