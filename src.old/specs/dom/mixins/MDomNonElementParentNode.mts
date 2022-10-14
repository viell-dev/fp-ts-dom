import type * as O from "fp-ts/Option";
import type { IDomElement } from "../interfaces/IDomElement.mjs";

export interface MDomNonElementParentNode {
  getElementById(elementId: string): O.Option<IDomElement<Element>>;
}
