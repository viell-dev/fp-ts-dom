import { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomProccessingInstruction<N extends ProcessingInstruction>
  extends IDomCharacterData<N> {
  readonly target: string;
}
