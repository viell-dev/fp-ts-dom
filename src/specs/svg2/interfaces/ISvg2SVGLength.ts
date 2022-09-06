import type { IWrapper } from "@/globals/IWrapper.js";
import type { CSvg2SVGLengthLengthUnitType } from "../constants/CSvg2SVGLengthLengthUnitType.js";

export interface ISvg2SVGLengthConstants {
  // Length Unit Types
  SVG_LENGTHTYPE_UNKNOWN: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_UNKNOWN;
  SVG_LENGTHTYPE_NUMBER: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_NUMBER;
  SVG_LENGTHTYPE_PERCENTAGE: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PERCENTAGE;
  SVG_LENGTHTYPE_EMS: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_EMS;
  SVG_LENGTHTYPE_EXS: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_EXS;
  SVG_LENGTHTYPE_PX: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PX;
  SVG_LENGTHTYPE_CM: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_CM;
  SVG_LENGTHTYPE_MM: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_MM;
  SVG_LENGTHTYPE_IN: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_IN;
  SVG_LENGTHTYPE_PT: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PT;
  SVG_LENGTHTYPE_PC: typeof CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PC;
}

export interface ISvg2SVGLength<N extends SVGLength> extends IWrapper<N> {
  // Length unit type class constants are declared in the interface above.
  readonly unitType: CSvg2SVGLengthLengthUnitType;
  value: number;
  valueInSpecifiedUnits: number;
  valueAsString: string;

  newValueSpecifiedUnits(
    unitType: CSvg2SVGLengthLengthUnitType,
    valueInSpecifiedUnits: number
  ): void;
  convertToSpecifiedUnits(unitType: CSvg2SVGLengthLengthUnitType): void;
}
