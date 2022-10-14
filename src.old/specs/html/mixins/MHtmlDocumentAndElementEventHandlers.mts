import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";

export interface MHtmlDocumentAndElementEventHandlers {
  oncopy: THtmlEventHandler;
  oncut: THtmlEventHandler;
  onpaste: THtmlEventHandler;
}
