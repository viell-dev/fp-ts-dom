import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomComment,
  IDomCommentConstructors,
} from "@/specs/dom/interfaces/IDomComment.js";
import { DomCharacterDataBase } from "./DomCharacterDataBase.js";

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
