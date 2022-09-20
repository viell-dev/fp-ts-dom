import type { EDomShadowRootMode } from "@/specs/dom/enums/EDomShadowRootMode.mjs";
import type { EDomSlotAssignmentMode } from "@/specs/dom/enums/EDomSlotAssignmentMode.mjs";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";
import type { IDomShadowRoot } from "@/specs/dom/interfaces/IDomShadowRoot.mjs";
import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomDocumentFragmentBase } from "./DomDocumentFragmentBase.mjs";
import { DomElement } from "./DomElement.mjs";
import { DomEvent } from "./DomEvent.mjs";

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
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onslotchange(callback: CBHtmlEventHandler) {
    this.native.onslotchange = pipe(
      O.fromNullable(callback),
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
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
