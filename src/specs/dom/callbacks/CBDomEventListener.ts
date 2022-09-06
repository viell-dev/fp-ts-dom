import type { IDomEvent } from "../interfaces/IDomEvent.js";

interface CBDomEventListenerFunction {
  <T extends Event>(evt: IDomEvent<T>): void;
}

interface CBDomEventListenerObject {
  handleEvent<T extends Event>(evt: IDomEvent<T>): void;
}

export type CBDomEventListener =
  | CBDomEventListenerFunction
  | CBDomEventListenerObject;
