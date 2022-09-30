import * as E from "fp-ts/es6/Either";
import { pipe } from "fp-ts/es6/function";
import * as O from "fp-ts/es6/Option";
import type { InvalidStateErrorDomException } from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { CBDomEventListener } from "../../specs/dom/callbacks/CBDomEventListener.mjs";
import type { DDomAddEventListenerOptions } from "../../specs/dom/dictionaries/DDomAddEventListenerOptions.mjs";
import type { DDomEventListenerOptions } from "../../specs/dom/dictionaries/DDomEventListenerOptions.mjs";
import type { IDomEventTarget } from "../../specs/dom/interfaces/IDomEventTarget.mjs";
import { DomEvent } from "./DomEvent.mjs";

export abstract class DomEventTargetBase<N extends EventTarget>
  extends Wrapper<N>
  implements IDomEventTarget<N>
{
  addEventListener<R>(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomAddEventListenerOptions<R>
  ): void {
    this.native.addEventListener(
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
      pipe(
        options,
        O.fromNullable,
        O.map((options) => {
          if (typeof options === "boolean") return options;

          // Make sure signal is unwrapped if it's set.
          if (options.signal) {
            options.signal =
              options.signal instanceof AbortSignal
                ? options.signal
                : options.signal.getNative();
          }

          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- Native signal unwrapped above. */
          return options as Omit<DDomAddEventListenerOptions<R>, "signal"> & {
            signal?: AbortSignal;
          };
        }),
        O.toUndefined
      )
    );
  }

  removeEventListener(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomEventListenerOptions
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

  dispatchEvent(
    event: Event | DomEvent
  ): E.Either<InvalidStateErrorDomException, boolean> {
    return E.tryCatch(
      () =>
        this.native.dispatchEvent(
          event instanceof Wrapper ? event.getNative() : event
        ),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error: unknown) => error as InvalidStateErrorDomException
    );
  }
}
