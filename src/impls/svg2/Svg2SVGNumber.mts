import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ISvg2SVGNumber } from "@/specs/svg2/interfaces/ISvg2SVGNumber.mjs";

export class Svg2SVGNumber
  extends Wrapper<SVGNumber>
  implements ISvg2SVGNumber<SVGNumber>
{
  get value(): number {
    return this.native.value;
  }
  set value(value) {
    this.native.value = value;
  }
}
