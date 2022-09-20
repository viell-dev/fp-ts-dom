import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { MHtmlDocumentAndElementEventHandlers } from "@/specs/html/mixins/MHtmlDocumentAndElementEventHandlers.js";
import type { MHtmlGlobalEventHandlers } from "@/specs/html/mixins/MHtmlGlobalEventHandlers.js";
import type { MHtmlHTMLOrSVGElement } from "@/specs/html/mixins/MHtmlHTMLOrSVGElement.js";
import type * as O from "fp-ts/Option";
import type { MSvg2SVGElementInstance } from "../mixins/MSvg2SVGElementInstance.js";
import type { ISvg2SVGAnimatedString } from "./ISvg2SVGAnimatedString.js";
import type { ISvg2SVGSVGElement } from "./ISvg2SVGSVGElement.js";

export interface ISvg2SVGElement<N extends SVGElement>
  extends IDomElement<N, ISvg2SVGAnimatedString<SVGAnimatedString>>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers,
    MSvg2SVGElementInstance,
    MHtmlHTMLOrSVGElement {
  readonly className: ISvg2SVGAnimatedString<SVGAnimatedString>;

  readonly ownerSVGElement: O.Option<ISvg2SVGSVGElement<SVGSVGElement>>;
  readonly viewportElement: O.Option<ISvg2SVGElement<SVGElement>>;
}
