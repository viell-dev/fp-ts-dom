import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";

export interface IDomDOMTokenList<N extends DOMTokenList> extends IDom<N> {
  readonly length: number;
  item(index: number): O.Option<string>;
  contains(token: string): boolean;
  add(...tokens: string[]): void;
  remove(...tokens: string[]): void;
  toggle(token: string, force?: boolean): boolean;
  replace(token: string, newToken: string): boolean;
  supports(token: string): boolean;
  value: string;
}
