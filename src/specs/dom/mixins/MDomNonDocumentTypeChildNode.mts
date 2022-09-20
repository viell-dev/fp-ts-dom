import type * as O from "fp-ts/Option";
import type { IDomElement } from "../interfaces/IDomElement.mjs";

export interface MDomNonDocumentTypeChildNode {
  readonly previousElementSibling: O.Option<IDomElement<Element>>;
  readonly nextElementSibling: O.Option<IDomElement<Element>>;
}
