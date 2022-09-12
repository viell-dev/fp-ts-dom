import type { IDomEvent } from "../interfaces/IDomEvent.js";

interface CBDomEventListenerFunction {
  (event: IDomEvent<Event>): void;
}

interface CBDomEventListenerObject {
  handleEvent(event: IDomEvent<Event>): void;
}

export type CBDomEventListener =
  | CBDomEventListenerFunction
  | CBDomEventListenerObject;
