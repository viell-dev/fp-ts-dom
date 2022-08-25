import type * as O from "fp-ts/Option";
import type { IDomElement } from "./IDomElement.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomAttr<N extends Attr> extends IDomNode<N> {
  readonly namespaceURI: O.Option<string>;
  readonly prefix: O.Option<string>;
  readonly localName: string;
  readonly name: string;
  value: string;

  readonly ownerElement: O.Option<IDomElement<Element>>;
}
