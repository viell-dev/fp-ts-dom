import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGPreserveAspectRatio<N extends SVGPreserveAspectRatio>
  extends IWrapper<N> {
  align: number; // TODO alignment type constants
  meetOrSlice: number; // TODO meet-or-slice constants
}
