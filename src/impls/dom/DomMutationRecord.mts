import { Wrapper } from "@/globals/Wrapper.mjs";
import type { IDomMutationRecord } from "@/specs/dom/interfaces/IDomMutationRecord.mjs";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomNode } from "./DomNode.mjs";

export class DomMutationRecord
  extends Wrapper<MutationRecord>
  implements IDomMutationRecord<MutationRecord>
{
  get type(): string {
    return this.native.type;
  }
  get target(): DomNode {
    return new DomNode(this.native.target);
  }
  get addedNodes(): DomNode[] {
    return pipe(
      this.native.addedNodes,
      (nodeList) => Array.from(nodeList),
      A.map((node) => new DomNode(node))
    );
  }
  get removedNodes(): DomNode[] {
    return pipe(
      this.native.removedNodes,
      (nodeList) => Array.from(nodeList),
      A.map((node) => new DomNode(node))
    );
  }
  get previousSibling(): O.Option<DomNode> {
    return pipe(
      this.native.previousSibling,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get nextSibling(): O.Option<DomNode> {
    return pipe(
      this.native.nextSibling,
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  get attributeName(): O.Option<string> {
    return pipe(this.native.attributeName, O.fromNullable);
  }
  get oldValue(): O.Option<string> {
    return pipe(this.native.oldValue, O.fromNullable);
  }
}
