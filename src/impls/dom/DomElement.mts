import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { DomElementBase } from "./DomElementBase.js";

export class DomElement
  extends DomElementBase<Element>
  implements IDomElement<Element> {}
