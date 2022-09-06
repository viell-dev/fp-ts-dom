import type { IDomEvent } from "../interfaces/IDomEvent.js";

interface CBDomEventListenerFunction {
  (evt: IDomEvent<Event>): void;
}

interface CBDomEventListenerObject {
  handleEvent(evt: IDomEvent<Event>): void;
}

export type CBDomEventListener =
  | CBDomEventListenerFunction
  | CBDomEventListenerObject;
