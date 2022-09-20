import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { CBHtmlOnBeforeUnloadEventHandler } from "../callbacks/CBHtmlOnBeforeUnloadEventHandler.mjs";

export interface MHtmlWindowEventHandlers {
  onafterprint: CBHtmlEventHandler;
  onbeforeprint: CBHtmlEventHandler;
  onbeforeunload: CBHtmlOnBeforeUnloadEventHandler;
  onhashchange: CBHtmlEventHandler;
  onlanguagechange: CBHtmlEventHandler;
  onmessage: CBHtmlEventHandler;
  onmessageerror: CBHtmlEventHandler;
  onoffline: CBHtmlEventHandler;
  ononline: CBHtmlEventHandler;
  onpagehide: CBHtmlEventHandler;
  onpageshow: CBHtmlEventHandler;
  onpopstate: CBHtmlEventHandler;
  onrejectionhandled: CBHtmlEventHandler;
  onstorage: CBHtmlEventHandler;
  onunhandledrejection: CBHtmlEventHandler;
  onunload: CBHtmlEventHandler;
}
