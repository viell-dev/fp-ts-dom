import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.mjs";
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
