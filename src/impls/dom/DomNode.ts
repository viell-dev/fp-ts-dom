import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomNode,
  IDomNodeConstants,
} from "@/specs/dom/interfaces/IDomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";

@StaticImplements<IDomNodeConstants>()
export class DomNode extends DomNodeBase<Node> implements IDomNode<Node> {}
