import type { IDomProcessingInstruction } from "@/specs/dom/interfaces/IDomProcessingInstruction.js";
import { DomCharacterDataBase } from "./DomCharacterDataBase.js";

export class DomProcessingInstruction
  extends DomCharacterDataBase<ProcessingInstruction>
  implements IDomProcessingInstruction<ProcessingInstruction>
{
  get target(): string {
    return this.native.target;
  }
}
