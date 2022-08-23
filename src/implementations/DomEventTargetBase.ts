import {
  InvalidStateErrorDomException,
  isDomException,
} from "@/exceptions/DomException.js";
import { UnknownException } from "@/exceptions/UnknownException.js";
import * as E from "fp-ts/es6/Either";
import { pipe } from "fp-ts/es6/function";
import * as O from "fp-ts/es6/Option";
import { DomEventListenerOrDomEventListenerObject } from "../callbacks/DomEventListenerOrDomEventListenerObject.js";
import { optional, Optional } from "../helpers/Optional.js";
import { IDomEvent } from "../interfaces/IDomEvent.js";
import { IDomEventTarget } from "../interfaces/IDomEventTarget.js";
import { Wrapper } from "../wrapper/Wrapper.js";
import { DomEvent } from "./DomEvent.js";

export abstract class DomEventTargetBase<N extends EventTarget>
  extends Wrapper<N>
  implements IDomEventTarget<N>
{
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

  dispatchEvent<T extends Event>(
    event: T | IDomEvent<T>
  ): E.Either<InvalidStateErrorDomException | UnknownException, boolean> {
    return E.tryCatch(
      () =>
        this.native.dispatchEvent(
          event instanceof Wrapper ? event.getNative() : event
        ),
      (error: unknown) =>
        isDomException(error) && error.name === "InvalidStateError"
          ? error
          : new UnknownException(error)
    );
  }
}
