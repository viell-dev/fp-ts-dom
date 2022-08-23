import * as O from "fp-ts/Option";
import { IDomElement } from "../interfaces/IDomElement.js";

export interface MDomNonElementParentNode {
  getElementById(elementId: string): O.Option<IDomElement<Element>>;
}
