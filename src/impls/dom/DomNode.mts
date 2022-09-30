import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type {
  IDomNode,
  IDomNodeConstants,
} from "../../specs/dom/interfaces/IDomNode.mjs";
import { DomNodeBase } from "./DomNodeBase.mjs";

@StaticImplements<IDomNodeConstants>()
export class DomNode extends DomNodeBase<Node> implements IDomNode<Node> {}
