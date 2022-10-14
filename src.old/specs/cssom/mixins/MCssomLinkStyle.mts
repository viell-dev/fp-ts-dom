import type * as O from "fp-ts/Option";
import type { ICssomCSSStyleSheet } from "../interfaces/ICssomCSSStyleSheet.mjs";

/** @sealed */
export interface MCssomLinkStyle {
  readonly sheet: O.Option<ICssomCSSStyleSheet<CSSStyleSheet>>;
}
