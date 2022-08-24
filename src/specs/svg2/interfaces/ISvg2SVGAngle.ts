import { IWrapper } from "@/wrapper/IWrapper.js";

export interface ISvg2SVGAngle<N extends SVGAngle> extends IWrapper<N> {
  readonly unitType: number; // TODO Angle Unit Types class constants.
  value: number;
  valueInSpecifiedUnits: number;
  valueAsString: string;

  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
  convertToSpecifiedUnits(unitType: number): void;
}
