import type { IWrapper } from "@/globals/IWrapper.js";
import type { CSvg2SVGAngleAngleUnitType } from "../constants/CSvg2SVGAngleAngleUnitType.js";

export interface ISvg2SVGAngleConstants {
  // Angle Unit Types
  SVG_ANGLETYPE_UNKNOWN: typeof CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_UNKNOWN;
  SVG_ANGLETYPE_UNSPECIFIED: typeof CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_UNSPECIFIED;
  SVG_ANGLETYPE_DEG: typeof CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_DEG;
  SVG_ANGLETYPE_RAD: typeof CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_RAD;
  SVG_ANGLETYPE_GRAD: typeof CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_GRAD;
}

export interface ISvg2SVGAngle<N extends SVGAngle> extends IWrapper<N> {
  // Angle unit type class constants are declared in the interface above.
  readonly unitType: CSvg2SVGAngleAngleUnitType;
  value: number;
  valueInSpecifiedUnits: number;
  valueAsString: string;

  newValueSpecifiedUnits(
    unitType: CSvg2SVGAngleAngleUnitType,
    valueInSpecifiedUnits: number
  ): void;
  convertToSpecifiedUnits(unitType: CSvg2SVGAngleAngleUnitType): void;
}
