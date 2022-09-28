import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomStyleSheetList } from "@/specs/cssom/interfaces/ICssomStyleSheetList.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { CssomCSSStyleSheet } from "./CssomCSSStyleSheet.mjs";

export class CssomStyleSheetList
  extends Wrapper<StyleSheetList>
  implements ICssomStyleSheetList<StyleSheetList>
{
  item(index: number): O.Option<CssomCSSStyleSheet> {
    return pipe(
      tuple(index),
      O.fromNullableK(tupled(this.native.item)),
      O.map((sheet) => new CssomCSSStyleSheet(sheet))
    );
  }
  get length(): number {
    return this.native.length;
  }
}
