import type { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomProcessingInstruction<N extends ProcessingInstruction>
  extends IDomCharacterData<N> {
  readonly target: string;
}
