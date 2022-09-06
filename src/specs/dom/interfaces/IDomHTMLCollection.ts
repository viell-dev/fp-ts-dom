import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IDomElement } from "./IDomElement.js";

export interface IDomHTMLCollection<
  N extends HTMLCollectionBase, // typescript made a base
  NI = IDomElement<Element> // we just use a generic
> extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IDomElement<Element>>;
  // [index: number]: O.Option<IDomElement<Element>>
  namedItem(name: string): O.Option<NI>;
  // [index: string]: O.Option<NI>
}
