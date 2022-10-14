import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlErrorEventInit extends DDomEventInit {
  message?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: unknown;
}
