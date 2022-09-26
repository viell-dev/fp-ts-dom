import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import type {
  AbortErrorDomException,
  TimeoutErrorDomException,
} from "@/exceptions/DomException.mjs";
import type {
  IDomAbortSignal,
  IDomAbortSignalConstructors,
} from "@/specs/dom/interfaces/IDomAbortSignal.mjs";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";
import type { THtmlEventHandler } from "@/specs/html/types/THtmlEventHandler.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomEvent } from "./DomEvent.mjs";
import { DomEventTargetBase } from "./DomEventTargetBase.mjs";

/* The TypeScript typings are missing the abort and timeout methods. */
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
      -- The abort method is missing in the TypeScript typings. */
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
      -- The timeout method is missing in the TypeScript typings. */
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
   * The value of {@link reason} is thrown if {@link aborted} is `true`.
   */
  throwIfAborted(): void {
    this.native.throwIfAborted();
  }

  get onabort(): THtmlEventHandler {
    return pipe(
      O.fromNullable(this.native.onabort),
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onabort(callback: THtmlEventHandler) {
    this.native.onabort = pipe(
      O.fromNullable(callback),
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
}
