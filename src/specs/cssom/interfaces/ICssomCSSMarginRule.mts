import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";
import type { ICssomCSSStyleDeclaration } from "./ICssomCSSStyleDeclaration.mjs";

/** `CSSMarginRule` is missing in typescript typings. */
export interface MissingCSSMarginRule extends CSSRule {
  readonly name: string;
  readonly style: CSSStyleDeclaration;
}

export interface ICssomCSSMarginRule<N extends MissingCSSMarginRule>
  extends ICssomCSSRule<N> {
  readonly name: string;
  readonly style: ICssomCSSStyleDeclaration<CSSStyleDeclaration>;
}
