import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type * as O from "fp-ts/Option";

/** @sealed */
export interface MHtmlDocumentOrShadowRoot {
  readonly activeElement: O.Option<IDomElement<Element>>;
}
