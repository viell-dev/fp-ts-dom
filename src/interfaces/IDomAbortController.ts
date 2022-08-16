import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomAbortSignal } from "./IDomAbortSignal.js";

export interface IDomAbortControllerConstructor<N extends AbortController>
  extends IDomConstructor<AbortController, IDomAbortController<N>> {
  new (): IDomAbortController<N>;
}

export interface IDomAbortController<N extends AbortController>
  extends IDom<N> {
  readonly signal: IDomAbortSignal;

  abort(reason?: Optional<unknown>): void;
}
