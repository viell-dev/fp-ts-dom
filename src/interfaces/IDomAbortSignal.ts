import * as E from "fp-ts/Either";
import * as O from "fp-ts/Option";
import { IDomEvent } from "./IDomEvent.js";
import { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomAbortSignalConstructors {
  abort(reason: unknown): IDomAbortSignal<AbortSignal>;
  timeout(milliseconds: number): IDomAbortSignal<AbortSignal>;
}

export interface IDomAbortSignal<N extends AbortSignal, R = unknown>
  extends IDomEventTarget<N> {
  readonly aborted: boolean;
  readonly reason: R;
  throwIfAborted(): E.Either<R, void>;

  onabort: O.Option<
    <T extends Event>(
      this: IDomAbortSignal<N, R>,
      event: T | IDomEvent<T>
    ) => unknown
  >;
}
