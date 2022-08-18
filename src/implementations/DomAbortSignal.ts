import * as E from "fp-ts/Either";
import { Lazy, pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { Optional, optional } from "../helpers/Optional.js";
import { IDomAbortSignal } from "../interfaces/IDomAbortSignal.js";
import { IDomEvent } from "../interfaces/IDomEvent.js";
import { DomEventTargetBase } from "./DomEventTargetBase.js";

export class DomAbortSignal<R = unknown>
  extends DomEventTargetBase<AbortSignal>
  implements IDomAbortSignal<AbortSignal, R>
{
  get aborted(): boolean {
    return this.native.aborted;
  }

  get reason(): R {
    return this.native.reason;
  }

  throwIfAborted(): E.Either<R, void> {
    return E.tryCatch(
      () => this.native.throwIfAborted(),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
         -- Throws signal's abort reason if the signal has been aborted. */
      (error: unknown) => error as R
    );
  }

  get onabort(): O.Option<
    <T extends Event, U = unknown>(
      this: IDomAbortSignal<AbortSignal, U>,
      event: T | IDomEvent<T>
    ) => Lazy<unknown>
  > {
    return pipe(
      this.native.onabort,
      O.fromNullable,
      O.map(
        (fn) =>
          function <T extends Event, U = unknown>(
            this: IDomAbortSignal<AbortSignal, U>,
            event: T | IDomEvent<T>
          ) {
            return fn.bind(
              this.getNative(),
              event instanceof Event ? event : event.getNative()
            );
          }
      )
    );
  }
  set onAbort(
    value: Optional<
      <T extends Event, U = unknown>(
        this: IDomAbortSignal<AbortSignal, U>,
        event: T | IDomEvent<T>
      ) => unknown
    >
  ) {
    this.native.onabort = pipe(
      value,
      optional,
      O.map((fn) => (event: Event): unknown => {
        return fn.bind(this, event);
      }),
      O.toNullable
    );
  }
}
