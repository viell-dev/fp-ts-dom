import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  AbortErrorDomException,
  TimeoutErrorDomException,
} from "@/exceptions/DomException.js";
import type {
  IDomAbortSignal,
  IDomAbortSignalConstructors,
} from "@/specs/dom/interfaces/IDomAbortSignal.js";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";
import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomEvent } from "./DomEvent.js";
import { DomEventTargetBase } from "./DomEventTargetBase.js";

/* The typescript typings are missing the abort and timeout methods. */
type CorrectedAbortSignal = {
  prototype: AbortSignal;
  new (): AbortSignal;
  abort(reason?: unknown): AbortSignal;
  timeout(milliseconds: number): AbortSignal;
};

@StaticImplements<IDomAbortSignalConstructors>()
export class DomAbortSignal<R>
  extends DomEventTargetBase<AbortSignal>
  implements IDomAbortSignal<AbortSignal, R>
{
  static abort<R>(
    reason?: R
  ): DomAbortSignal<R extends undefined ? AbortErrorDomException : R> {
    return pipe(
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- The abort method is missing in the typescript typings. */
      (AbortSignal as CorrectedAbortSignal).abort(reason),
      (signal) => new DomAbortSignal(signal)
    );
  }
  static timeout(
    milliseconds: number
  ): DomAbortSignal<TimeoutErrorDomException> {
    return pipe(
      /* eslint-disable-next-line
          @typescript-eslint/consistent-type-assertions
      -- The timeout method is missing in the typescript typings. */
      (AbortSignal as CorrectedAbortSignal).timeout(milliseconds),
      (signal) => new DomAbortSignal(signal)
    );
  }

  get aborted(): boolean {
    return this.native.aborted;
  }

  get reason(): R {
    return this.native.reason;
  }

  /**
   * @throws
   * The value of {@link reason} is if {@link aborted} is `true`; otherwise,
   * does nothing.
   */
  throwIfAborted(): void {
    this.native.throwIfAborted();
  }

  get onabort(): CBHtmlEventHandler {
    return pipe(
      this.native.onabort,
      O.fromNullable,
      O.map((callback) => (event: IDomEvent<Event>) => {
        return callback.bind(this.getNative(), event.getNative());
      }),
      O.toNullable
    );
  }
  set onabort(value: CBHtmlEventHandler) {
    this.native.onabort = pipe(
      value,
      O.fromNullable,
      O.map((callback) => (event: Event): unknown => {
        return callback.call(this, new DomEvent(event));
      }),
      O.toNullable
    );
  }
}
