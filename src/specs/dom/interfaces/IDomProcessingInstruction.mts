import type { IDomCharacterData } from "./IDomCharacterData.mjs";

export interface IDomProcessingInstruction<N extends ProcessingInstruction>
  extends IDomCharacterData<N> {
  readonly target: string;
}
