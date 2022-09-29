import { Wrapper } from "@/globals/Wrapper.mjs";
import { CSvg2SVGAngleAngleUnitType } from "@/specs/svg2/constants/CSvg2SVGAngleAngleUnitType.mjs";
import type { ISvg2SVGAngle } from "@/specs/svg2/interfaces/ISvg2SVGAngle.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";

export class Svg2SVGAngle
  extends Wrapper<SVGAngle>
  implements ISvg2SVGAngle<SVGAngle>
{
  // Angle Unit Types
  static readonly SVG_ANGLETYPE_UNKNOWN =
    CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_UNKNOWN;
  static readonly SVG_ANGLETYPE_UNSPECIFIED =
    CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_UNSPECIFIED;
  static readonly SVG_ANGLETYPE_DEG =
    CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_DEG;
  static readonly SVG_ANGLETYPE_RAD =
    CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_RAD;
  static readonly SVG_ANGLETYPE_GRAD =
    CSvg2SVGAngleAngleUnitType.SVG_ANGLETYPE_GRAD;
  get unitType(): CSvg2SVGAngleAngleUnitType {
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
    unitType: CSvg2SVGAngleAngleUnitType,
    valueInSpecifiedUnits: number
  ): void {
    pipe(
      tuple(unitType, valueInSpecifiedUnits),
      tupled(this.native.newValueSpecifiedUnits)
    );
  }
  convertToSpecifiedUnits(unitType: CSvg2SVGAngleAngleUnitType): void {
    pipe(tuple(unitType), tupled(this.native.convertToSpecifiedUnits));
  }
}
