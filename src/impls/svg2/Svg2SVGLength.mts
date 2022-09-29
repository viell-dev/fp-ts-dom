import { Wrapper } from "@/globals/Wrapper.mjs";
import { CSvg2SVGLengthLengthUnitType } from "@/specs/svg2/constants/CSvg2SVGLengthLengthUnitType.mjs";
import type { ISvg2SVGLength } from "@/specs/svg2/interfaces/ISvg2SVGLength.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";

export class Svg2SVGLength
  extends Wrapper<SVGLength>
  implements ISvg2SVGLength<SVGLength>
{
  // Length Unit Types
  static readonly SVG_LENGTHTYPE_UNKNOWN =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_UNKNOWN;
  static readonly SVG_LENGTHTYPE_NUMBER =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_NUMBER;
  static readonly SVG_LENGTHTYPE_PERCENTAGE =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PERCENTAGE;
  static readonly SVG_LENGTHTYPE_EMS =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_EMS;
  static readonly SVG_LENGTHTYPE_EXS =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_EXS;
  static readonly SVG_LENGTHTYPE_PX =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PX;
  static readonly SVG_LENGTHTYPE_CM =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_CM;
  static readonly SVG_LENGTHTYPE_MM =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_MM;
  static readonly SVG_LENGTHTYPE_IN =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_IN;
  static readonly SVG_LENGTHTYPE_PT =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PT;
  static readonly SVG_LENGTHTYPE_PC =
    CSvg2SVGLengthLengthUnitType.SVG_LENGTHTYPE_PC;
  get unitType(): CSvg2SVGLengthLengthUnitType {
    return this.native.unitType;
  }
  get value(): number {
    return this.native.value;
  }
  set value(value) {
    this.native.value = value;
  }
  get valueInSpecifiedUnits(): number {
    return this.native.valueInSpecifiedUnits;
  }
  set valueInSpecifiedUnits(valueInSpecifiedUnits) {
    this.native.valueInSpecifiedUnits = valueInSpecifiedUnits;
  }
  get valueAsString(): string {
    return this.native.valueAsString;
  }
  set valueAsString(valueAsString) {
    this.native.valueAsString = valueAsString;
  }

  newValueSpecifiedUnits(
    unitType: CSvg2SVGLengthLengthUnitType,
    valueInSpecifiedUnits: number
  ): void {
    pipe(
      tuple(unitType, valueInSpecifiedUnits),
      tupled(this.native.newValueSpecifiedUnits)
    );
  }
  convertToSpecifiedUnits(unitType: CSvg2SVGLengthLengthUnitType): void {
    pipe(tuple(unitType), tupled(this.native.convertToSpecifiedUnits));
  }
}
