import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { optional, Optional } from "../helpers/Optional.js";
import { IDomAbortController } from "../interfaces/IDomAbortController.js";
import { Dom } from "./Dom.js";
import { DomAbortSignal } from "./DomAbortSignal.js";

export class DomAbortController
  extends Dom<AbortController>
  implements IDomAbortController<AbortController>
{
  get signal(): DomAbortSignal {
    return new DomAbortSignal(this.native.signal);
  }

  abort(reason?: Optional<unknown>): void {
    this.native.abort(pipe(reason, optional, O.toUndefined));
  }
}
