import type { IDomAbortController } from "@/specs/dom/interfaces/IDomAbortController.js";
import { Wrapper } from "../../globals/Wrapper.js";
import { DomAbortSignal } from "./DomAbortSignal.js";

export class DomAbortController
  extends Wrapper<AbortController>
  implements IDomAbortController<AbortController>
{
  get signal(): DomAbortSignal {
    return new DomAbortSignal(this.native.signal);
  }

  abort(reason?: unknown): void {
    this.native.abort(reason);
  }
}
