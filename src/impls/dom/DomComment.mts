import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import type {
  IDomComment,
  IDomCommentConstructors,
} from "@/specs/dom/interfaces/IDomComment.mjs";
import { DomCharacterDataBase } from "./DomCharacterDataBase.mjs";

@StaticImplements<IDomCommentConstructors>()
export class DomComment
  extends DomCharacterDataBase<Comment>
  implements IDomComment<Comment>
{
  constructor(comment: Comment);
  constructor(data?: string);
  constructor(commentOrData?: Comment | string) {
    const nativeComment =
      commentOrData instanceof Comment
        ? commentOrData
        : new Comment(commentOrData);

    super(nativeComment);
  }
}
