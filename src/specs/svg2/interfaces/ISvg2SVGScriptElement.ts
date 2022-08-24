import * as O from "fp-ts/Option";

export interface ISvg2SVGScriptElement<N extends SVGScriptElement>
  extends ISvg2SVGElement<N>,
    MSvg2SVGURIReference {
  type: string;
  crossOrigin: O.Option<string>;
}
