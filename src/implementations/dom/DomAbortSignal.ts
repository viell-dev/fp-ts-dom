import type { IDomAbortSignal } from "@/specs/dom/interfaces/IDomAbortSignal.js";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";
import type { CBHtmlEventHandlerNonNull } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
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

  get onabort(): CBHtmlEventHandlerNonNull | null {
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
      ),
      O.toNullable
    );
  }
  set onabort(value: CBHtmlEventHandlerNonNull | null) {
    this.native.onabort = pipe(
      value,
      O.fromNullable,
      O.map((fn) => (event: Event): unknown => {
        return fn.call(this, event);
      }),
      O.toNullable
    );
  }
}
