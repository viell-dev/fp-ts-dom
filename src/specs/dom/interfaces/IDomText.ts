import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { MDomSlottable } from "../mixins/MDomSlottable.js";
import type { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomTextConstructors extends IWrapperConstructors<Text> {
  new (data?: string): IDomText<Text>;
}

export interface IDomText<N extends Text>
  extends IDomCharacterData<N>,
    MDomSlottable {
  splitText(offset: number): E.Either<RangeError, IDomText<Text>>;
  readonly wholeText: string;
}
