import { Wrapper } from "@/globals/Wrapper.js";
import type { IDomAbstractRange } from "@/specs/dom/interfaces/IDomAbstractRange.js";
import { DomNode } from "./DomNode.js";

export abstract class DomAbstractRangeBase<N extends AbstractRange>
  extends Wrapper<N>
  implements IDomAbstractRange<N>
{
  get startContainer(): DomNode {
    return new DomNode(this.native.startContainer);
  }
  get startOffset(): number {
    return this.native.startOffset;
  }
  get endContainer(): DomNode {
    return new DomNode(this.native.endContainer);
  }
  get endOffset(): number {
    return this.native.endOffset;
  }
  get collapsed(): boolean {
    return this.native.collapsed;
  }
}
