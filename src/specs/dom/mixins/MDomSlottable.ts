import { IHtmlHTMLSlotElement } from "@/specs/html/interfaces/IHtmlHTMLSlotElement.js";
import * as O from "fp-ts/Option";

export interface MDomSlottable {
  readonly assignedSlot: O.Option<IHtmlHTMLSlotElement<HTMLSlotElement>>;
}
