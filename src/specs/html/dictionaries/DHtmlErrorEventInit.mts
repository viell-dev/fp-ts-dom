import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";

export interface DHtmlErrorEventInit extends DDomEventInit {
  message?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: unknown;
}
