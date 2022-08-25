import type { MDomSlottable } from "../mixins/MDomSlottable.js";
import type { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomText<N extends Text>
  extends IDomCharacterData<N>,
    MDomSlottable {
  splitText(offset: number): IDomText<Text>;
  readonly wholeText: string;
}
