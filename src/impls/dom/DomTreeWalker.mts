import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { CBDomNodeFilter } from "../../specs/dom/callbacks/CBDomNodeFilter.mjs";
import type { CDomNodeFilterFilter } from "../../specs/dom/constants/CDomNodeFilterFilter.mjs";
import type { CDomNodeFilterWhatToShow } from "../../specs/dom/constants/CDomNodeFilterWhatToShow.mjs";
import type { IDomNode } from "../../specs/dom/interfaces/IDomNode.mjs";
import type { IDomTreeWalker } from "../../specs/dom/interfaces/IDomTreeWalker.mjs";
import { DomNode } from "./DomNode.mjs";

export class DomTreeWalker
  extends Wrapper<TreeWalker>
  implements IDomTreeWalker<TreeWalker>
{
  get root(): DomNode {
    return new DomNode(this.native.root);
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
  get currentNode(): DomNode {
    return new DomNode(this.native.currentNode);
  }
  set currentNode(currentNode: Node | IDomNode<Node>) {
    this.native.currentNode =
      currentNode instanceof Node ? currentNode : currentNode.getNative();
  }

  parentNode(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.parentNode()),
      O.map((node) => new DomNode(node))
    );
  }
  firstChild(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.firstChild()),
      O.map((node) => new DomNode(node))
    );
  }
  lastChild(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.lastChild()),
      O.map((node) => new DomNode(node))
    );
  }
  previousSibling(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.previousSibling()),
      O.map((node) => new DomNode(node))
    );
  }
  nextSibling(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.nextSibling()),
      O.map((node) => new DomNode(node))
    );
  }
  previousNode(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.previousNode()),
      O.map((node) => new DomNode(node))
    );
  }
  nextNode(): O.Option<DomNode> {
    return pipe(
      O.fromNullable(this.native.nextNode()),
      O.map((node) => new DomNode(node))
    );
  }
}
