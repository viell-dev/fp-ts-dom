import { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.js";

export interface MHtmlDocumentAndElementEventHandlers {
  oncopy: CBHtmlEventHandler;
  oncut: CBHtmlEventHandler;
  onpaste: CBHtmlEventHandler;
}
