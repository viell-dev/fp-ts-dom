import type { IDomAbstractRange } from "@/specs/dom/interfaces/IDomAbstractRange.js";
import { DomAbstractRangeBase } from "./DomAbstractRangeBase.js";

export class DomAbstractRange
  extends DomAbstractRangeBase<AbstractRange>
  implements IDomAbstractRange<AbstractRange> {}
