import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type { IDomAbortSignal } from "./IDomAbortSignal.js";

/** @sealed */
export interface IDomAbortControllerConstructors
  extends IWrapperConstructors<AbortController> {
  new (): IDomAbortController<AbortController, unknown>;
}

export interface IDomAbortController<N extends AbortController, R>
  extends IWrapper<N> {
  readonly signal: IDomAbortSignal<AbortSignal, R>;

  abort(reason?: R): void;
}
