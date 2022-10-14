import type { IDomEvent } from "../interfaces/IDomEvent.mjs";

interface CBDomEventListenerFunction {
  (event: IDomEvent<Event>): void;
}

interface CBDomEventListenerObject {
  handleEvent(event: IDomEvent<Event>): void;
}

export type CBDomEventListener =
  | CBDomEventListenerFunction
  | CBDomEventListenerObject;
