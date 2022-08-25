import type * as O from "fp-ts/Option";
import type { IDomElement } from "../interfaces/IDomElement.js";

export interface MDomNonElementParentNode {
  getElementById(elementId: string): O.Option<IDomElement<Element>>;
}
