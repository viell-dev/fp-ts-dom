import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { IDomCharacterData } from "./IDomCharacterData.mjs";

export interface IDomCommentConstructors extends IWrapperConstructors<Comment> {
  new (data?: string): IDomComment<Comment>;
}

export type IDomComment<N extends Comment> = IDomCharacterData<N>;
