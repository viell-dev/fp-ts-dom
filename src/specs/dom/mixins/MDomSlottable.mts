import type * as O from "fp-ts/Option";
import type { IHtmlHTMLSlotElement } from "../../html/interfaces/IHtmlHTMLSlotElement.mjs";

export interface MDomSlottable {
  readonly assignedSlot: O.Option<IHtmlHTMLSlotElement<HTMLSlotElement>>;
}
