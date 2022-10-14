import type { ICssomCSSStyleSheet } from "../interfaces/ICssomCSSStyleSheet.mjs";
import type { ICssomStyleSheetList } from "../interfaces/ICssomStyleSheetList.mjs";

/** @sealed */
export interface MCssomDocumentOrShadowRoot {
  readonly styleSheets: ICssomStyleSheetList<StyleSheetList>;
  adoptedStyleSheets: ICssomCSSStyleSheet<CSSStyleSheet>[];
}
