import { IDomEvent } from "../interfaces/IDomEvent.js";

interface CBDomEventListenerFunction {
  (evt: Event | IDomEvent<Event>): void;
}

interface CBDomEventListenerObject {
  handleEvent(evt: Event | IDomEvent<Event>): void;
}

export type CBDomEventListener =
  | CBDomEventListenerFunction
  | CBDomEventListenerObject;
