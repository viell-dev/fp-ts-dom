import type { ICssomCSSGroupingRule } from "./ICssomCSSGroupingRule.mjs";
import type { ICssomCSSStyleDeclaration } from "./ICssomCSSStyleDeclaration.mjs";

export interface ICssomCSSPageRule<N extends CSSPageRule>
  extends ICssomCSSGroupingRule<N> {
  selectorText: string;
  readonly style: ICssomCSSStyleDeclaration<CSSStyleDeclaration>;
}
