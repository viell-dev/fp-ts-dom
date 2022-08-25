import type { MDomDocumentOrShadowRoot } from "../mixins/MDomDocumentOrShadowRoot.js";
import type { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import type { IDomElement } from "./IDomElement.js";
import type { IDomEvent } from "./IDomEvent.js";

export interface IDomShadowRoot<N extends ShadowRoot>
  extends IDomDocumentFragment<N>,
    MDomDocumentOrShadowRoot {
  readonly mode: ShadowRootMode;
  readonly delegatesFocus: boolean;
  readonly slotAssignment: SlotAssignmentMode;
  readonly host: IDomElement<Element>;
  onslotchange: ((this: N, event: Event | IDomEvent<Event>) => unknown) | null;
}
