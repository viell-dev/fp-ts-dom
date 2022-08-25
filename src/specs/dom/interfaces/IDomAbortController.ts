import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { IDomAbortSignal } from "./IDomAbortSignal.js";

export interface IDomAbortControllerConstructor
  extends IWrapperConstructors<AbortController> {
  new (): IDomAbortController<AbortController>;
}

export interface IDomAbortController<N extends AbortController>
  extends IWrapper<N> {
  readonly signal: IDomAbortSignal<AbortSignal>;

  abort(reason?: unknown): void;
}
