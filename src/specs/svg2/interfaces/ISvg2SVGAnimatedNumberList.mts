import type { IWrapper } from "../../../globals/IWrapper.mjs";

import type { ISvg2SVGNumberList } from "./ISvg2SVGNumberList.mjs";

export interface ISvg2SVGAnimatedNumberList<N extends SVGAnimatedNumberList>
  extends IWrapper<N> {
  readonly baseVal: ISvg2SVGNumberList<SVGNumberList>;
  readonly animVal: ISvg2SVGNumberList<SVGNumberList>;
}
