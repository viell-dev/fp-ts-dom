import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";
import type { ICssomCSSStyleDeclaration } from "./ICssomCSSStyleDeclaration.mjs";

export interface ICssomCSSStyleRule<N extends CSSStyleRule>
  extends ICssomCSSRule<N> {
  selectorText: string;
  readonly style: ICssomCSSStyleDeclaration<CSSStyleDeclaration>;
}
