import { IDomDocumentFragment } from "./IDomDocumentFragment.js";
import { IDomElement } from "./IDomElement.js";
import { IDomEvent } from "./IDomEvent.js";

export interface IDomShadowRoot<N extends ShadowRoot>
  extends IDomDocumentFragment<N> {
  readonly mode: ShadowRootMode;
  readonly delegatesFocus: boolean;
  readonly slotAssignment: SlotAssignmentMode;
  readonly host: IDomElement<Element>;
  onslotchange: ((this: N, event: Event | IDomEvent<Event>) => unknown) | null;
}
