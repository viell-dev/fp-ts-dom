import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { DGeometry1DOMRectInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMRectInit.js";
import type {
  IGeometry1DOMRectReadOnly,
  IGeometry1DOMRectReadOnlyConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMRectReadOnly.js";
import { Geometry1DOMRectBase } from "./Geometry1DOMRectBase.js";

@StaticImplements<IGeometry1DOMRectReadOnlyConstructors>()
export class Geometry1DOMRectReadOnly
  extends Geometry1DOMRectBase<DOMRectReadOnly>
  implements IGeometry1DOMRectReadOnly<DOMRectReadOnly>
{
  constructor(domRectReadOnly: DOMRectReadOnly);
  constructor(x?: number, y?: number, width?: number, height?: number);
  constructor(
    domRectReadOnlyOrX?: DOMRectReadOnly | number,
    y?: number,
    width?: number,
    height?: number
  ) {
    const nativeDomRectReadOnly =
      domRectReadOnlyOrX instanceof DOMRectReadOnly
        ? domRectReadOnlyOrX
        : new DOMRectReadOnly(domRectReadOnlyOrX, y, width, height);

    super(nativeDomRectReadOnly);
  }

  static fromRect(other: DGeometry1DOMRectInit): Geometry1DOMRectReadOnly {
    return new Geometry1DOMRectReadOnly(DOMRectReadOnly.fromRect(other));
  }
}
