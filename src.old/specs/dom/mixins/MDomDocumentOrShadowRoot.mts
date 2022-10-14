import type { MCssomDocumentOrShadowRoot } from "../../cssom/mixins/MCssomDocumentOrShadowRoot.mjs";
import type { MHtmlDocumentOrShadowRoot } from "../../html/mixins/MHtmlDocumentOrShadowRoot.mjs";

/** @sealed */
export interface MDomDocumentOrShadowRoot
  extends MHtmlDocumentOrShadowRoot,
    MCssomDocumentOrShadowRoot {}
