import type * as O from "fp-ts/Option";
import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";

/** @sealed */
export interface MHtmlDocumentOrShadowRoot {
  readonly activeElement: O.Option<IDomElement<Element>>;
}
