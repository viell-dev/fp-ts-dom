import * as E from "fp-ts/es6/Either";
import * as O from "fp-ts/es6/Option";
import { DomEventListenerOrDomEventListenerObject } from "../callbacks/DomEventListenerOrDomEventListenerObject.js";
import { InvalidStateErrorDomException } from "../exceptions/DomException.js";
import { IDomEvent } from "./IDomEvent.js";

export interface IDomEventTargetConstructor {
  new (): IDomEventTarget;
  new (eventTarget: EventTarget): IDomEventTarget;
}

export interface IDomEventTarget {
  addEventListener(
    type: string,
    callback: O.Option<DomEventListenerOrDomEventListenerObject>,
    options: O.Option<boolean | AddEventListenerOptions>
  ): void;

  removeEventListener(
    type: string,
    callback: O.Option<DomEventListenerOrDomEventListenerObject>,
    options: O.Option<boolean | EventListenerOptions>
  ): void;

  dispatchEvent(
    event: IDomEvent
  ): E.Either<InvalidStateErrorDomException, boolean>;
}
