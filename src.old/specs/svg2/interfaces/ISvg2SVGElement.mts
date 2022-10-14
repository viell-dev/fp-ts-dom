import type * as O from "fp-ts/Option";
import type { MCssomElementCSSInlineStyle } from "../../cssom/mixins/MCssomElementCSSInlineStyle.mjs";
import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type { MHtmlDocumentAndElementEventHandlers } from "../../html/mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlGlobalEventHandlers } from "../../html/mixins/MHtmlGlobalEventHandlers.mjs";
import type { MHtmlHTMLOrSVGElement } from "../../html/mixins/MHtmlHTMLOrSVGElement.mjs";
import type { MSvg2SVGElementInstance } from "../mixins/MSvg2SVGElementInstance.mjs";
import type { ISvg2SVGSVGElement } from "./ISvg2SVGSVGElement.mjs";

export interface ISvg2SVGElement<N extends SVGElement>
  extends IDomElement<N, undefined>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers,
    MSvg2SVGElementInstance,
    MHtmlHTMLOrSVGElement,
    MCssomElementCSSInlineStyle {
  readonly ownerSVGElement: O.Option<ISvg2SVGSVGElement<SVGSVGElement>>;
  readonly viewportElement: O.Option<ISvg2SVGElement<SVGElement>>;
}
