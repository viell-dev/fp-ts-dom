import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { IDomNodeList } from "../interfaces/IDomNodeList.js";
import { Dom } from "./Dom.js";
import { DomNode } from "./DomNode.js";

export class DomNodeList
  extends Dom<NodeList>
  implements IDomNodeList<NodeList>
{
  constructor(nodeList: NodeList) {
    super(nodeList);
  }

  item(index: number): O.Option<DomNode> {
    return pipe(
      index,
      this.native.item,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }

  get length(): number {
    return this.native.length;
  }
}
