import type { IDomProcessingInstruction } from "@/specs/dom/interfaces/IDomProcessingInstruction.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { CssomCSSStyleSheet } from "../cssom/CssomCSSStyleSheet.mjs";
import { DomCharacterDataBase } from "./DomCharacterDataBase.mjs";

export class DomProcessingInstruction
  extends DomCharacterDataBase<ProcessingInstruction>
  implements IDomProcessingInstruction<ProcessingInstruction>
{
  get target(): string {
    return this.native.target;
  }
  get sheet(): O.Option<CssomCSSStyleSheet> {
    return pipe(
      O.fromNullable(this.native.sheet),
      O.map((sheet) => new CssomCSSStyleSheet(sheet))
    );
  }
}
