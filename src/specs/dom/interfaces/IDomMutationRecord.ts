import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IDomNode } from "./IDomNode.js";
import type { IDomNodeList } from "./IDomNodeList.js";

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
