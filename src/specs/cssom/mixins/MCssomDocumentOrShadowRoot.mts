import type { ICssomStyleSheetList } from "../interfaces/ICssomStyleSheetList.mjs";

/** @sealed */
export interface MCssomDocumentOrShadowRoot {
  readonly styleSheets: ICssomStyleSheetList<StyleSheetList>;
}
