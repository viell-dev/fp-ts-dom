import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type { IDomAbortSignal } from "./IDomAbortSignal.js";

/** @sealed */
export interface IDomAbortControllerConstructor
  extends IWrapperConstructors<AbortController> {
  new (): IDomAbortController<AbortController>;
}

export interface IDomAbortController<N extends AbortController, R = unknown>
  extends IWrapper<N> {
  readonly signal: IDomAbortSignal<AbortSignal, R>;

  abort(reason?: R): void;
}
