import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import { DomElementBase } from "./DomElementBase.mjs";

export class DomElement
  extends DomElementBase<Element>
  implements IDomElement<Element> {}
