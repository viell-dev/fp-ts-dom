import type { IDomAbstractRange } from "../../specs/dom/interfaces/IDomAbstractRange.mjs";
import { DomAbstractRangeBase } from "./DomAbstractRangeBase.mjs";

export class DomAbstractRange
  extends DomAbstractRangeBase<AbstractRange>
  implements IDomAbstractRange<AbstractRange> {}
