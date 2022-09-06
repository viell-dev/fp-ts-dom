import type { IWrapper } from "@/globals/IWrapper.js";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.js";
import type * as O from "fp-ts/Option";

export interface IHtmlHTMLAllCollection<N extends HTMLAllCollection>
  extends IWrapper<N> {
  readonly length: number;
  /* [index: number]: Element; */
  /* [name: string]: HTMLCollection | Element; */
  namedItem(
    name: string
  ): O.Option<IDomHTMLCollection<HTMLCollection> | IDomElement<Element>>;
  item(
    nameOrIndex?: string
  ): O.Option<IDomHTMLCollection<HTMLCollection> | IDomElement<Element>>;
}
