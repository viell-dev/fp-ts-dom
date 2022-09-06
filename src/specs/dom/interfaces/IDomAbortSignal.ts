import type {
  AbortErrorDomException,
  TimeoutErrorDomException,
} from "@/exceptions/DomException.js";
import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";

/** @sealed */
export interface IDomAbortSignalConstructors {
  abort<T extends AbortSignal, R = unknown>(
    reason?: R
  ): IDomAbortSignal<T, R extends undefined ? AbortErrorDomException : R>;
  timeout<T extends AbortSignal>(
    milliseconds: number
  ): IDomAbortSignal<T, TimeoutErrorDomException>;
}

export interface IDomAbortSignal<N extends AbortSignal, R = unknown>
  extends IDomEventTarget<N> {
  readonly aborted: boolean;
  readonly reason: R;
  /**
   * @throws
   * The value of {@link reason} is thrown if {@link aborted} is `true`;
   * otherwise, does nothing.
   */
  throwIfAborted(): void;

  onabort: CBHtmlEventHandler;
}
