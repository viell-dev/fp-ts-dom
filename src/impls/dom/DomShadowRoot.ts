import type { EDomShadowRootMode } from "@/specs/dom/enums/EDomShadowRootMode.js";
import type { EDomSlotAssignmentMode } from "@/specs/dom/enums/EDomSlotAssignmentMode.js";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";
import type { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.js";
import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomDocumentFragmentBase } from "./DomDocumentFragmentBase.js";
import { DomElement } from "./DomElement.js";
import { DomEvent } from "./DomEvent.js";

export class DomShadowRoot
  extends DomDocumentFragmentBase<ShadowRoot>
  implements IDomShadowRoot<ShadowRoot>
{
  get mode(): EDomShadowRootMode {
    return this.native.mode;
  }
  get delegatesFocus(): boolean {
    return this.native.delegatesFocus;
  }
  get slotAssignment(): EDomSlotAssignmentMode {
    return this.native.slotAssignment;
  }
  get host(): DomElement {
    return new DomElement(this.native.host);
  }
  get onslotchange(): CBHtmlEventHandler {
    return pipe(
      O.fromNullable(this.native.onslotchange),
      O.map((callback) => (event: IDomEvent<Event>) => {
        return callback.bind(this.getNative(), event.getNative());
      }),
      O.toNullable
    );
  }
  set onslotchange(callback: CBHtmlEventHandler) {
    this.native.onslotchange = pipe(
      O.fromNullable(callback),
      O.map((callback) => (event: Event): unknown => {
        return callback.call(this, new DomEvent(event));
      }),
      O.toNullable
    );
  }

  get activeElement(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.activeElement),
      O.map((element) => new DomElement(element))
    );
  }
}
