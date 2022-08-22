import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";
import { IDomElement } from "./IDomElement.js";

export interface IDomHTMLCollection<N extends HTMLCollection> extends IDom<N> {
  readonly length: number;
  item(index: number): O.Option<IDomElement<Element>>;
  namedItem(name: string): O.Option<IDomElement<Element>>;
}
