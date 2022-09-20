import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";

export interface ICssomCSSRuleList<N extends CSSRuleList> extends IWrapper<N> {
  item(index: number): O.Option<ICssomCSSRule<CSSRule>>;
  [index: number]: ICssomCSSRule<CSSRule>;
}
