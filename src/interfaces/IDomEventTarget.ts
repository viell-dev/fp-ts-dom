import * as E from "fp-ts/es6/Either";
import { DomEventListenerOrDomEventListenerObject } from "../callbacks/DomEventListenerOrDomEventListenerObject.js";
import { DomAddEventListenerOptions } from "../dictionaries/DomAddEventListenerOptions.js";
import { DomEventListenerOptions } from "../dictionaries/DomEventListenerOptions.js";
import { InvalidStateErrorDomException } from "../exceptions/DomException.js";
import { UnknownException } from "../exceptions/UnknownException.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomEvent } from "./IDomEvent.js";

export interface IDomEventTargetConstructor<N extends EventTarget>
  extends IDomConstructor<EventTarget, IDomEventTarget<N>> {
  new (): IDomEventTarget<N>;
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

  dispatchEvent<E extends Event>(
    event: E | IDomEvent<E>
  ): E.Either<InvalidStateErrorDomException | UnknownException, boolean>;
}
