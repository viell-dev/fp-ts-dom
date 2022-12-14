import type { ISvg2SVGElement } from "../interfaces/ISvg2SVGElement.mjs";
import type { ISvg2SVGUseElement } from "../interfaces/ISvg2SVGUseElement.mjs";

export interface MSvg2SVGElementInstance {
  readonly correspondingElement: ISvg2SVGElement<SVGElement>;
  readonly correspondingUseElement: ISvg2SVGUseElement<SVGUseElement>;
}
