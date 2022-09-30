import { Wrapper } from "../../globals/Wrapper.mjs";
import type { ISvg2SVGPreserveAspectRatio } from "../../specs/svg2/interfaces/ISvg2SVGPreserveAspectRatio.mjs";

export class Svg2SVGPreserveAspectRatio
  extends Wrapper<SVGPreserveAspectRatio>
  implements ISvg2SVGPreserveAspectRatio<SVGPreserveAspectRatio>
{
  get align(): number {
    return this.native.align;
  }
  set align(align) {
    this.native.align = align;
  }
  get meetOrSlice(): number {
    return this.native.meetOrSlice;
  }
  set meetOrSlice(meetOrSlice) {
    this.native.meetOrSlice = meetOrSlice;
  }
}
