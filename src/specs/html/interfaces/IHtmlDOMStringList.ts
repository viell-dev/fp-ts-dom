import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";

export interface IHtmlDOMStringList<N extends DOMStringList>
  extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<string>;
  // [index: number]: O.Option<string>;
  contains(string: string): boolean;
}
