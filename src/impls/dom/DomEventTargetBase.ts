import { InvalidStateErrorDomException } from "@/exceptions/DomException.js";
import { Wrapper } from "@/globals/Wrapper.js";
import { CBDomEventListener } from "@/specs/dom/callbacks/CBDomEventListener.js";
import { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.js";
import * as E from "fp-ts/es6/Either";
import { pipe } from "fp-ts/es6/function";
import * as O from "fp-ts/es6/Option";
import { DomEvent } from "./DomEvent.js";

export abstract class DomEventTargetBase<N extends EventTarget>
  extends Wrapper<N>
  implements IDomEventTarget<N>
{
  addEventListener(
    type: string,
    callback?: CBDomEventListener,
    options?: boolean | AddEventListenerOptions
  ): void {
    return this.native.addEventListener(
      type,
      pipe(
        callback,
        O.fromNullable,
        O.map(
          (callback) => (event: Event) =>
            pipe(
              new DomEvent(event),
              typeof callback === "function" ? callback : callback.handleEvent
            )
        ),
        O.toNullable
      ),
      options
    );
  }

  removeEventListener(
    type: string,
    callback?: DomEventListenerOrDomEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void {
    return this.native.removeEventListener(
      type,
      pipe(
        callback,
        O.fromNullable,
        O.map(
          (callback) => (event: Event) =>
            pipe(
              new DomEvent(event),
              typeof callback === "function" ? callback : callback.handleEvent
            )
        ),
        O.toNullable
      ),
      options
    );
  }

  dispatchEvent<T extends Event>(
    event: T | IDomEvent<T>
  ): E.Either<InvalidStateErrorDomException, boolean> {
    return E.tryCatch(
      () =>
        this.native.dispatchEvent(
          event instanceof Wrapper ? event.getNative() : event
        ),
      (error: unknown) => error as InvalidStateErrorDomException
    );
  }
}
