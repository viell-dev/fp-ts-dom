import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { ICssomCSSStyleSheet } from "./ICssomCSSStyleSheet.mjs";

export interface ICssomCSSRule<N extends CSSRule> extends IWrapper<N> {
  cssText: string;
  parentRule: O.Option<ICssomCSSRule<CSSRule>>;
  parentStyleSheet: O.Option<ICssomCSSStyleSheet<CSSStyleSheet>>;
}
