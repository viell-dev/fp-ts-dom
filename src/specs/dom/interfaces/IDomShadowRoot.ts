import type { CBHtmlEventHandler } from "@/specs/html/callbacks/CBHtmlEventHandler.js";
import type { EDomShadowRootMode } from "../enums/EDomShadowRootMode.js";
import type { EDomSlotAssignmentMode } from "../enums/EDomSlotAssignmentMode.js";
import type { MDomDocumentOrShadowRoot } from "../mixins/MDomDocumentOrShadowRoot.js";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import type { IDomElement } from "./IDomElement.js";

export interface IDomShadowRoot<N extends ShadowRoot>
  extends IDomDocumentFragment<N>,
    MDomDocumentOrShadowRoot {
  readonly mode: EDomShadowRootMode;
  readonly delegatesFocus: boolean;
  readonly slotAssignment: EDomSlotAssignmentMode;
  readonly host: IDomElement<Element>;
  onslotchange: CBHtmlEventHandler;
}
