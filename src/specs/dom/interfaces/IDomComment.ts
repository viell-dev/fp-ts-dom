import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { IDomCharacterData } from "./IDomCharacterData.js";

export interface IDomCommentConstructors extends IWrapperConstructors<Comment> {
  new (data?: string): IDomComment<Comment>;
}

export type IDomComment<N extends Comment> = IDomCharacterData<N>;
