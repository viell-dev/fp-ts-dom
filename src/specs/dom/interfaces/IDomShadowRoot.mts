import type { THtmlEventHandler } from "../../html/types/THtmlEventHandler.mjs";
import type { EDomShadowRootMode } from "../enums/EDomShadowRootMode.mjs";
import type { EDomSlotAssignmentMode } from "../enums/EDomSlotAssignmentMode.mjs";
import type { MDomDocumentOrShadowRoot } from "../mixins/MDomDocumentOrShadowRoot.mjs";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.mjs";
import type { IDomElement } from "./IDomElement.mjs";

export interface IDomShadowRoot<N extends ShadowRoot>
  extends IDomDocumentFragment<N>,
    MDomDocumentOrShadowRoot {
  readonly mode: EDomShadowRootMode;
  readonly delegatesFocus: boolean;
  readonly slotAssignment: EDomSlotAssignmentMode;
  readonly host: IDomElement<Element>;
  onslotchange: THtmlEventHandler;
}
