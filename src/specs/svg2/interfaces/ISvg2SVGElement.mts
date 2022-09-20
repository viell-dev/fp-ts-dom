import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { MHtmlDocumentAndElementEventHandlers } from "@/specs/html/mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlGlobalEventHandlers } from "@/specs/html/mixins/MHtmlGlobalEventHandlers.mjs";
import type { MHtmlHTMLOrSVGElement } from "@/specs/html/mixins/MHtmlHTMLOrSVGElement.mjs";
import type * as O from "fp-ts/Option";
import type { MSvg2SVGElementInstance } from "../mixins/MSvg2SVGElementInstance.mjs";
import type { ISvg2SVGAnimatedString } from "./ISvg2SVGAnimatedString.mjs";
import type { ISvg2SVGSVGElement } from "./ISvg2SVGSVGElement.mjs";

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
