import { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomText<N extends Text> extends IDomCharacterData<N> {
  splitText(offset: number): IDomText<Text>;
  readonly wholeText: string;
}
