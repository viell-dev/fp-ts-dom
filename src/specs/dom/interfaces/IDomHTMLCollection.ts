import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import { IDomElement } from "./IDomElement.js";

export interface IDomHTMLCollection<N extends HTMLCollection>
  extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IDomElement<Element>>;
  // TODO: Can we impl `[index: number]: O.Option<IDomElement<Element>>` somehow?
  namedItem(name: string): O.Option<IDomElement<Element>>;
  // TODO: Can we impl `[index: string]: O.Option<IDomElement<Element>>` somehow?
}
