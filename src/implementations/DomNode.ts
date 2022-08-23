import { StaticImplements } from "../helpers/StaticImplements.js";
import { IDomNode } from "../interfaces/IDomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";

@StaticImplements<IDomNodeConstructor>()
export class DomNode extends DomNodeBase<Node> implements IDomNode<Node> {
  constructor();
  constructor(node: Node);
  constructor(node?: Node) {
    super(node ?? new Node());
  }
}
