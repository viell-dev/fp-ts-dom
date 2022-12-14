import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type {
  IDomAbortController,
  IDomAbortControllerConstructors,
} from "../../specs/dom/interfaces/IDomAbortController.mjs";
import { DomAbortSignal } from "./DomAbortSignal.mjs";

@StaticImplements<IDomAbortControllerConstructors>()
export class DomAbortController<R>
  extends Wrapper<AbortController>
  implements IDomAbortController<AbortController, R>
{
  constructor();
  constructor(abortController: AbortController);
  constructor(abortController?: AbortController) {
    const nativeAbortController =
      abortController instanceof AbortController
        ? abortController
        : new AbortController();

    super(nativeAbortController);
  }

  private signalInternal: O.Option<DomAbortSignal<R>> = O.none;
  get signal(): DomAbortSignal<R> {
    return pipe(
      this.signalInternal,
      O.getOrElse(() => {
        const signal = new DomAbortSignal<R>(this.native.signal);
        this.signalInternal = O.some(signal);
        return signal;
      })
    );
  }

  abort(reason?: R): void {
    this.native.abort(reason);
  }
}
