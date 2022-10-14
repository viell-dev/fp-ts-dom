import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomMutationRecord<N extends MutationRecord>
  extends IWrapper<N> {
  readonly type: string;
  readonly target: IDomNode<Node>;
  readonly addedNodes: IDomNode<Node>[];
  readonly removedNodes: IDomNode<Node>[];
  readonly previousSibling: O.Option<IDomNode<Node>>;
  readonly nextSibling: O.Option<IDomNode<Node>>;
  readonly attributeName: O.Option<string>;
  readonly attributeNamespace: O.Option<string>;
  readonly oldValue: O.Option<string>;
}
