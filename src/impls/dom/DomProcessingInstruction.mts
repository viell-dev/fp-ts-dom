import type { IDomProcessingInstruction } from "@/specs/dom/interfaces/IDomProcessingInstruction.mjs";
import { DomCharacterDataBase } from "./DomCharacterDataBase.mjs";

export class DomProcessingInstruction
  extends DomCharacterDataBase<ProcessingInstruction>
  implements IDomProcessingInstruction<ProcessingInstruction>
{
  get target(): string {
    return this.native.target;
  }
}
