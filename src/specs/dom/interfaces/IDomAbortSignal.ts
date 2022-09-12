import type {
  AbortErrorDomException,
  TimeoutErrorDomException,
} from "@/exceptions/DomException.js";
import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";

/** @sealed */
export interface IDomAbortSignalConstructors
  extends IWrapperConstructors<AbortSignal> {
  abort<R>(
    reason?: R
  ): IDomAbortSignal<
    AbortSignal,
    R extends undefined ? AbortErrorDomException : R
  >;
  timeout(
    milliseconds: number
  ): IDomAbortSignal<AbortSignal, TimeoutErrorDomException>;
}

export interface IDomAbortSignal<N extends AbortSignal, R>
  extends IDomEventTarget<N> {
  readonly aborted: boolean;
  readonly reason: R;
  /**
   * @throws
   * The value of {@link reason} is if {@link aborted} is `true`; otherwise,
   * does nothing.
   */
  throwIfAborted(): void;

  onabort: CBHtmlEventHandler;
}
