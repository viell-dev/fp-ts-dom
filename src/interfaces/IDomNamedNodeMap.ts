import * as O from "fp-ts/Option";
import { IDom } from "./IDom.js";
import { IDomAttr } from "./IDomAttr.js";

export interface IDomNamedNodeMap<N extends NamedNodeMap> extends IDom<N> {
  readonly length: number;
  item(index: number): O.Option<IDomAttr<Attr>>;
  getNamedItem(qualifiedName: string): O.Option<IDomAttr<Attr>>;
  getNamedItemNS(
    namespace: string | null,
    localName: string
  ): O.Option<IDomAttr<Attr>>;
  setNamedItem(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  setNamedItemNS(attr: Attr | IDomAttr<Attr>): O.Option<IDomAttr<Attr>>;
  removeNamedItem(qualifiedName: string): IDomAttr<Attr>;
  removeNamedItemNS(
    namespace: string | null,
    localName: string
  ): IDomAttr<Attr>;
}
