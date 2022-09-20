import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IDomAbortSignal } from "./IDomAbortSignal.mjs";

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
