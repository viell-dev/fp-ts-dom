import type { IDomText } from "@/specs/dom/interfaces/IDomText.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { HtmlHTMLSlotElement } from "../html/HtmlHTMLSlotElement.js";
import { DomCharacterDataBase } from "./DomCharacterDataBase.js";
import { DomText } from "./DomText.js";

export abstract class DomTextBase<N extends Text>
  extends DomCharacterDataBase<N>
  implements IDomText<N>
{
  splitText(offset: number): E.Either<RangeError, DomText> {
    return pipe(
      E.tryCatch(
        () => this.native.splitText(offset),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      ),
      E.map((text) => new DomText(text))
    );
  }
  get wholeText(): string {
    return this.native.wholeText;
  }

  get assignedSlot(): O.Option<HtmlHTMLSlotElement> {
    return pipe(
      O.fromNullable(this.native.assignedSlot),
      O.map((element) => new HtmlHTMLSlotElement(element))
    );
  }
}
