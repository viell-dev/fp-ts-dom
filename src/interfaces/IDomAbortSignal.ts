import { IDom } from "./IDom.js";
import { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomAbortSignal<N extends AbortSignal>
  extends IDom<N>,
    IDomEventTarget<N> {
  readonly aborted: boolean;
}
