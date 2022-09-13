import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomNode,
  IDomNodeConstants,
  IDomNodeConstructors,
} from "@/specs/dom/interfaces/IDomNode.js";
import { DomNodeBase } from "./DomNodeBase.js";

@StaticImplements<IDomNodeConstructors & IDomNodeConstants>()
export class DomNode extends DomNodeBase<Node> implements IDomNode<Node> {}
