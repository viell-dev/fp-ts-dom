import type { IDomCDATASection } from "@/specs/dom/interfaces/IDomCDATASection.mjs";
import { DomTextBase } from "./DomTextBase.mjs";

export class DomCDATASection
  extends DomTextBase<CDATASection>
  implements IDomCDATASection<CDATASection> {}
