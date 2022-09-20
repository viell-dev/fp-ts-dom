import type { IDomCDATASection } from "@/specs/dom/interfaces/IDomCDATASection.js";
import { DomTextBase } from "./DomTextBase.js";

export class DomCDATASection
  extends DomTextBase<CDATASection>
  implements IDomCDATASection<CDATASection> {}
