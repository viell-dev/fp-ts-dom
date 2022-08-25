import type {
  AbortErrorDomException,
  TimeoutErrorDomException,
} from "@/exceptions/DomException.js";
import type { CBHtmlEventHandlerNonNull } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomAbortSignalConstructors {
  abort<R = unknown>(
    reason?: R
  ): IDomAbortSignal<
    AbortSignal,
    R extends undefined ? AbortErrorDomException : R
  >;
  timeout(
    milliseconds: number
  ): IDomAbortSignal<AbortSignal, TimeoutErrorDomException>;
}

export interface IDomAbortSignal<N extends AbortSignal, R = unknown>
  extends IDomEventTarget<N> {
  readonly aborted: boolean;
  readonly reason: R;
  throwIfAborted(): E.Either<R, void>;

  onabort: O.Option<CBHtmlEventHandlerNonNull>;
}
