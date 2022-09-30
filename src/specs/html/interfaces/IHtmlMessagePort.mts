import type { IDomEventTarget } from "../../dom/interfaces/IDomEventTarget.mjs";
import type { DHtmlStructuredSerializeOptions } from "../dictionaries/DHtmlStructuredSerializeOptions.mjs";
import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";

export interface IHtmlMessagePort<N extends MessagePort>
  extends IDomEventTarget<N> {
  postMessage(message: unknown, transfer: {}[]): void;
  postMessage(
    message: unknown,
    options?: DHtmlStructuredSerializeOptions
  ): void;
  start(): void;
  close(): void;

  onmessage: THtmlEventHandler;
  onmessageerror: THtmlEventHandler;
}
