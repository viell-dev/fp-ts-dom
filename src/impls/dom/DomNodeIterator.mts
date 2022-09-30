import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { CBDomNodeFilter } from "../../specs/dom/callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterFilter } from "../../specs/dom/constants/CDomNodeFilterFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../../specs/dom/constants/CDomNodeFilterWhatToShow.mjs";
import type { IDomNode } from "../../specs/dom/interfaces/IDomNode.mjs";
import type { IDomNodeIterator } from "../../specs/dom/interfaces/IDomNodeIterator.mjs";
import { DomNode } from "./DomNode.mjs";

export class DomNodeIterator
  extends Wrapper<NodeIterator>
  implements IDomNodeIterator<NodeIterator>
{
  get root(): DomNode {
    return new DomNode(this.native.root);
  }
  get referenceNode(): DomNode {
    return new DomNode(this.native.referenceNode);
  }
  get pointerBeforeReferenceNode(): boolean {
    return this.native.pointerBeforeReferenceNode;
  }
  get whatToShow(): CDomNodeFilterWhatToShow {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec; this parameter only returns 0xffffffff (show all),
        0x1 (show element), 0x2 (show attribute), 0x4 (show text),
        0x8 (show cdata section), 0x40 (show processing instruction),
        0x80 (show comment), 0x100 (show document), 0x200 (show document type)
        or 0x400 (show document fragment) */
    return this.native.whatToShow as CDomNodeFilterWhatToShow;
  }
  get filter(): O.Option<CBDomNodeFilter> {
    return pipe(
      O.fromNullable(this.native.filter),
      O.map((nodeFilter) => {
        const callback =
          typeof nodeFilter === "function" ? nodeFilter : nodeFilter.acceptNode;
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec; this callback only returns 1 (accept),
            2 (reject) or 3 (skip) */
        return callback as (node: Node) => CDomNodeFilterFilter;
      }),
      O.map(
        (callback) => (node: IDomNode<Node>) =>
          callback.bind(this.getNative(), node.getNative())()
      )
    );
  }

  nextNode(): O.Option<DomNode> {
    return pipe(
      this.native.nextNode(),
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
  previousNode(): O.Option<DomNode> {
    return pipe(
      this.native.previousNode(),
      O.fromNullable,
      O.map((node) => new DomNode(node))
    );
  }
}
