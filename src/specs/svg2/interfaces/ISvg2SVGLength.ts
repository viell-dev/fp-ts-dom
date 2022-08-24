import { IWrapper } from "@/wrapper/IWrapper.js";

export interface ISvg2SVGLength<N extends SVGLength> extends IWrapper<N> {
  readonly unitType: number; // TODO Length Unit Types class constants.
  value: number;
  valueInSpecifiedUnits: number;
  valueAsString: string;

  newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
  convertToSpecifiedUnits(unitType: number): void;
}
