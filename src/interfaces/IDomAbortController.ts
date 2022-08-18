import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomAbortSignal } from "./IDomAbortSignal.js";

export interface IDomAbortControllerConstructor
  extends IDomConstructor<AbortController> {
  new (): IDomAbortController<AbortController>;
}

export interface IDomAbortController<N extends AbortController>
  extends IDom<N> {
  readonly signal: IDomAbortSignal<AbortSignal>;

  abort(reason?: Optional<unknown>): void;
}
