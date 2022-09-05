import { StaticImplements } from "@/decorators/StaticImplements.js";
import type { DGeometry1DOMPointInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMPointInit.js";
import type {
  IGeometry1DOMPointReadOnly,
  IGeometry1DOMPointReadOnlyConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMPointReadOnly.js";
import { Geometry1DOMPointBase } from "./Geometry1DOMPointBase.js";

@StaticImplements<IGeometry1DOMPointReadOnlyConstructors>()
export class Geometry1DOMPointReadOnly
  extends Geometry1DOMPointBase<DOMPointReadOnly>
  implements IGeometry1DOMPointReadOnly<DOMPointReadOnly>
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

  static fromPoint(other?: DGeometry1DOMPointInit): Geometry1DOMPointReadOnly {
    return new Geometry1DOMPointReadOnly(DOMPointReadOnly.fromPoint(other));
  }
}
