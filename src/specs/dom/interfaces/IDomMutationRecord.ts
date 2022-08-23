import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import { IDomNode } from "./IDomNode.js";
import { IDomNodeList } from "./IDomNodeList.js";

export interface IDomMutationRecord<N extends MutationRecord>
  extends IWrapper<N> {
  readonly type: string;
  readonly target: IDomNode<Node>;
  readonly addedNodes: IDomNodeList<NodeList>;
  readonly removedNodes: IDomNodeList<NodeList>;
  readonly previousSibling: O.Option<IDomNode<Node>>;
  readonly nextSibling: O.Option<IDomNode<Node>>;
  readonly attributeName: O.Option<string>;
  readonly attributeNamespace: O.Option<string>;
  readonly oldValue: O.Option<string>;
}
