import type { ICssomCSSRule } from "./ICssomCSSRule.mjs";
import type { ICssomCSSStyleSheet } from "./ICssomCSSStyleSheet.mjs";
import type { ICssomMediaList } from "./ICssomMediaList.mjs";

export interface ICssomCSSImportRule<N extends CSSImportRule>
  extends ICssomCSSRule<N> {
  readonly media: ICssomMediaList<MediaList>;
  readonly styleSheet: ICssomCSSStyleSheet<CSSStyleSheet>;
}
