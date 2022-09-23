import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";
import type { THtmlOnBeforeUnloadEventHandler } from "../types/THtmlOnBeforeUnloadEventHandler.mjs";

export interface MHtmlWindowEventHandlers {
  onafterprint: THtmlEventHandler;
  onbeforeprint: THtmlEventHandler;
  onbeforeunload: THtmlOnBeforeUnloadEventHandler;
  onhashchange: THtmlEventHandler;
  onlanguagechange: THtmlEventHandler;
  onmessage: THtmlEventHandler;
  onmessageerror: THtmlEventHandler;
  onoffline: THtmlEventHandler;
  ononline: THtmlEventHandler;
  onpagehide: THtmlEventHandler;
  onpageshow: THtmlEventHandler;
  onpopstate: THtmlEventHandler;
  onrejectionhandled: THtmlEventHandler;
  onstorage: THtmlEventHandler;
  onunhandledrejection: THtmlEventHandler;
  onunload: THtmlEventHandler;
}
