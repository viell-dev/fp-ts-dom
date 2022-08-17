import * as E from "fp-ts/es6/Either";
import { pipe } from "fp-ts/es6/function";
import * as O from "fp-ts/es6/Option";
import { DomEventListenerOrDomEventListenerObject } from "../callbacks/DomEventListenerOrDomEventListenerObject.js";
import {
  InvalidStateErrorDomException,
  isDomException,
} from "../exceptions/DomException.js";
import { UnknownException } from "../exceptions/UnknownException.js";
import { optional, Optional } from "../helpers/Optional.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import { IDomEvent } from "../interfaces/IDomEvent.js";
import {
  IDomEventTarget,
  IDomEventTargetConstructor,
} from "../interfaces/IDomEventTarget.js";
import { Dom } from "./Dom.js";
import { DomEvent } from "./DomEvent.js";

@StaticImplements<IDomEventTargetConstructor<EventTarget>>()
export class DomEventTarget
  extends Dom<EventTarget>
  implements IDomEventTarget<EventTarget>
{
  constructor();
  constructor(eventTarget: EventTarget);
  constructor(eventTarget?: EventTarget) {
    super(eventTarget ?? new EventTarget());
  }

  addEventListener(
    type: string,
    callback?: Optional<DomEventListenerOrDomEventListenerObject>,
    options?: Optional<boolean | AddEventListenerOptions>
  ): void {
    return this.native.addEventListener(
      type,
      pipe(
        optional(callback),
        O.map(
          (callback) => (event: Event) =>
            pipe(
              new DomEvent(event),
              typeof callback === "function" ? callback : callback.handleEvent
            )
        ),
        O.toNullable
      ),
      pipe(optional(options), O.toUndefined)
    );
  }

  removeEventListener(
    type: string,
    callback?: Optional<DomEventListenerOrDomEventListenerObject>,
    options?: Optional<boolean | EventListenerOptions>
  ): void {
    return this.native.removeEventListener(
      type,
      pipe(
        optional(callback),
        O.map(
          (callback) => (event: Event) =>
            pipe(
              new DomEvent(event),
              typeof callback === "function" ? callback : callback.handleEvent
            )
        ),
        O.toNullable
      ),
      pipe(optional(options), O.toUndefined)
    );
  }

  dispatchEvent<E extends Event>(
    event: E | IDomEvent<E>
  ): E.Either<InvalidStateErrorDomException | UnknownException, boolean> {
    return E.tryCatch(
      () =>
        this.native.dispatchEvent(
          event instanceof Dom ? event.getNative() : event
        ),
      (error: unknown) =>
        isDomException(error) && error.name === "InvalidStateError"
          ? error
          : new UnknownException(error)
    );
  }
}
