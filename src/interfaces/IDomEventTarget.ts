import * as E from "fp-ts/es6/Either";
import { DomEventListenerOrDomEventListenerObject } from "../callbacks/DomEventListenerOrDomEventListenerObject.js";
import { DomAddEventListenerOptions } from "../dictionaries/DomAddEventListenerOptions.js";
import { DomEventListenerOptions } from "../dictionaries/DomEventListenerOptions.js";
import { InvalidStateErrorDomException } from "../exceptions/DomException.js";
import { UnknownException } from "../exceptions/UnknownException.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomEvent } from "./IDomEvent.js";

export interface IDomEventTargetConstructor
  extends IDomConstructor<EventTarget> {
  new (): IDomEventTarget<EventTarget>;
}

export interface IDomEventTarget<N extends EventTarget> extends IDom<N> {
  addEventListener(
    type: string,
    callback?: Optional<DomEventListenerOrDomEventListenerObject>,
    options?: Optional<boolean | DomAddEventListenerOptions>
  ): void;
  removeEventListener(
    type: string,
    callback?: Optional<DomEventListenerOrDomEventListenerObject>,
    options?: Optional<boolean | DomEventListenerOptions>
  ): void;
  dispatchEvent<T extends Event>(
    event: T | IDomEvent<T>
  ): E.Either<InvalidStateErrorDomException | UnknownException, boolean>;
}
