import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";

export interface MHtmlDocumentAndElementEventHandlers {
  oncopy: CBHtmlEventHandler;
  oncut: CBHtmlEventHandler;
  onpaste: CBHtmlEventHandler;
}
