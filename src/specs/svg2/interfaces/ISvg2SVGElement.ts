import { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { MHtmlDocumentAndElementEventHandlers } from "@/specs/html/mixins/MHtmlDocumentAndElementEventHandlers.js";
import { MHtmlGlobalEventHandlers } from "@/specs/html/mixins/MHtmlGlobalEventHandlers.js";
import { MHtmlHTMLOrSVGElement } from "@/specs/html/mixins/MHtmlHTMLOrSVGElement.js";
import * as O from "fp-ts/Option";
import { ISvg2SVGAnimatedString } from "./ISvg2SVGAnimatedString.js";
import { ISvg2SVGSVGElement } from "./ISvg2SVGSVGElement.js";

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
