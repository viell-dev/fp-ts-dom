import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type * as O from "fp-ts/Option";
import type { ISvg2SVGSVGElement } from "./ISvg2SVGSVGElement.mjs";

export interface ISvg2Document<N extends Document> extends IDomDocument<N> {
  readonly rootElement: O.Option<ISvg2SVGSVGElement<SVGSVGElement>>;
}
