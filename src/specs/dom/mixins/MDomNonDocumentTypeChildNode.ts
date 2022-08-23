import * as O from "fp-ts/Option";
import { IDomElement } from "../interfaces/IDomElement.js";

export interface MDomNonDocumentTypeChildNode {
  readonly previousElementSibling: O.Option<IDomElement<Element>>;
  readonly nextElementSibling: O.Option<IDomElement<Element>>;
}
