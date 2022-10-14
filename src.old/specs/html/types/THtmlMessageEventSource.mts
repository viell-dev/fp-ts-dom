import type { IHtmlMessagePort } from "../interfaces/IHtmlMessagePort.mjs";
import type { IHtmlWindowProxy } from "../interfaces/IHtmlWindowProxy.mjs";

export type THtmlMessageEventSource =
  | IHtmlWindowProxy<WindowProxy>
  | IHtmlMessagePort<MessagePort>
  | ServiceWorker; // "Service Worker" sepc is out-of-scope.
