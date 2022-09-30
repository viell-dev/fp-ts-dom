import type { ISvg2SVGGraphicsElement } from "../../specs/svg2/interfaces/ISvg2SVGGraphicsElement.mjs";
import { Svg2SVGGraphicsElementBase } from "./Svg2SVGGraphicsElementBase.mjs";

export class Svg2SVGGraphicsElement
  extends Svg2SVGGraphicsElementBase<SVGGraphicsElement>
  implements ISvg2SVGGraphicsElement<SVGGraphicsElement> {}
