import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";
import type { IHtmlMessagePort } from "../interfaces/IHtmlMessagePort.mjs";
import type { THtmlMessageEventSource } from "../types/THtmlMessageEventSource.mjs";

export interface DHtmlMessageEventInit extends DDomEventInit {
  data?: unknown;
  origin?: string;
  lastEventId?: string;
  source?: THtmlMessageEventSource;
  ports?: (MessagePort | IHtmlMessagePort<MessagePort>)[];
}
