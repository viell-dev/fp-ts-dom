import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";

export interface ICssomCSSNamespaceRule<N extends CSSNamespaceRule>
  extends ICssomCSSRule<N> {
  readonly namespaceURI: string;
  readonly prefix: string;
}
