import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { CSvg2SVGUnitTypesUnitType } from "../constants/CSvg2SVGUnitTypesUnitType.mjs";

export interface ISvg2SVGUnitTypesConstants {
  // Unit Types
  SVG_UNIT_TYPE_UNKNOWN: typeof CSvg2SVGUnitTypesUnitType.SVG_UNIT_TYPE_UNKNOWN;
  SVG_UNIT_TYPE_USERSPACEONUSE: typeof CSvg2SVGUnitTypesUnitType.SVG_UNIT_TYPE_USERSPACEONUSE;
  SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: typeof CSvg2SVGUnitTypesUnitType.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;
}

// Unit type class constants are declared in the interface above.
export type ISvg2SVGUnitTypes<N extends SVGUnitTypes> = IWrapper<N>;
