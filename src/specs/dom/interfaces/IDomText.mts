import type * as E from "fp-ts/Either";
import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { MDomSlottable } from "../mixins/MDomSlottable.mjs";
import type { IDomCharacterData } from "./IDomCharacterData.mjs";

export interface IDomTextConstructors extends IWrapperConstructors<Text> {
  new (data?: string): IDomText<Text>;
}

export interface IDomText<N extends Text>
  extends IDomCharacterData<N>,
    MDomSlottable {
  splitText(offset: number): E.Either<RangeError, IDomText<Text>>;
  readonly wholeText: string;
}
