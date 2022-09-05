import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { DGeometryDOMPointInit } from "@/specs/geometry/dictionaries/DGeometryDOMPointInit.js";
import type {
  IGeometryDOMPointReadOnly,
  IGeometryDOMPointReadOnlyConstructors,
} from "@/specs/geometry/interfaces/IGeometryDOMPointReadOnly.js";
import { GeometryDOMPointBase } from "./GeometryDOMPointBase.js";

@StaticImplements<IGeometryDOMPointReadOnlyConstructors>()
export class GeometryDOMPointReadOnly
  extends GeometryDOMPointBase<DOMPointReadOnly>
  implements IGeometryDOMPointReadOnly<DOMPointReadOnly>
{
  constructor(domPointReadOnly: DOMPointReadOnly);
  constructor(x?: number, y?: number, z?: number, w?: number);
  constructor(
    domPointReadOnlyOrX?: DOMPoint | number,
    y?: number,
    z?: number,
    w?: number
  ) {
    const nativeDomPointReadOnly =
      domPointReadOnlyOrX instanceof DOMPointReadOnly
        ? domPointReadOnlyOrX
        : new DOMPointReadOnly(domPointReadOnlyOrX, y, z, w);

    super(nativeDomPointReadOnly);
  }

  static fromPoint(other?: DGeometryDOMPointInit): GeometryDOMPointReadOnly {
    return new GeometryDOMPointReadOnly(DOMPointReadOnly.fromPoint(other));
  }
}
