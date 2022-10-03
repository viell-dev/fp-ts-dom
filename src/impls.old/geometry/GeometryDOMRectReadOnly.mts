import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type { DGeometryDOMRectInit } from "../../specs/geometry/dictionaries/DGeometryDOMRectInit.mjs";
import type {
  IGeometryDOMRectReadOnly,
  IGeometryDOMRectReadOnlyConstructors,
} from "../../specs/geometry/interfaces/IGeometryDOMRectReadOnly.mjs";
import { GeometryDOMRectBase } from "./GeometryDOMRectBase.mjs";

@StaticImplements<IGeometryDOMRectReadOnlyConstructors>()
export class GeometryDOMRectReadOnly
  extends GeometryDOMRectBase<DOMRectReadOnly>
  implements IGeometryDOMRectReadOnly<DOMRectReadOnly>
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

  static fromRect(other: DGeometryDOMRectInit): GeometryDOMRectReadOnly {
    return new GeometryDOMRectReadOnly(DOMRectReadOnly.fromRect(other));
  }
}
