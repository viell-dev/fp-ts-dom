import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { ICssomCSSStyleSheet } from "./ICssomCSSStyleSheet.mjs";

export interface ICssomStyleSheetList<N extends StyleSheetList>
  extends IWrapper<N> {
  item(index: number): O.Option<ICssomCSSStyleSheet<CSSStyleSheet>>;
  //[index: number]: ICssomCSSStyleSheet<StyleSheet>;
  readonly length: number;
}
