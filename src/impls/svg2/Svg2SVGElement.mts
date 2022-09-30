import type { ISvg2SVGElement } from "../../specs/svg2/interfaces/ISvg2SVGElement.mjs";
import { Svg2SVGElementBase } from "./Svg2SVGElementBase.mjs";

export class Svg2SVGElement
  extends Svg2SVGElementBase<SVGElement>
  implements ISvg2SVGElement<SVGElement> {}
