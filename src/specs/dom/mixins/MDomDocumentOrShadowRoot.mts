import type { MCssomDocumentOrShadowRoot } from "@/specs/cssom/mixins/MCssomDocumentOrShadowRoot.mjs";
import type { MHtmlDocumentOrShadowRoot } from "@/specs/html/mixins/MHtmlDocumentOrShadowRoot.mjs";

/** @sealed */
export interface MDomDocumentOrShadowRoot
  extends MHtmlDocumentOrShadowRoot,
    MCssomDocumentOrShadowRoot {}
