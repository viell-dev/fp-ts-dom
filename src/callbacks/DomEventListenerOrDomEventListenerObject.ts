import { DomEventListener } from "./DomEventListener.js";
import { DomEventListenerObject } from "./DomEventListenerObject.js";

export type DomEventListenerOrDomEventListenerObject =
  | DomEventListener
  | DomEventListenerObject;
