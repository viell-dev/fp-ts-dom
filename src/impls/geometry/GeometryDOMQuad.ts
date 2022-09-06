import { StaticImplements } from "@/decorators/StaticImplements.js";
import { Wrapper } from "@/globals/Wrapper.js";
import type { DGeometryDOMPointInit } from "@/specs/geometry/dictionaries/DGeometryDOMPointInit.js";
import type { DGeometryDOMQuadInit } from "@/specs/geometry/dictionaries/DGeometryDOMQuadInit.js";
import type { DGeometryDOMRectInit } from "@/specs/geometry/dictionaries/DGeometryDOMRectInit.js";
import type {
  IGeometryDOMQuad,
  IGeometryDOMQuadConstructors,
} from "@/specs/geometry/interfaces/IGeometryDOMQuad.js";
import * as O from "fp-ts/Option";
import { GeometryDOMPoint } from "./GeometryDOMPoint.js";
import { GeometryDOMRect } from "./GeometryDOMRect.js";

@StaticImplements<IGeometryDOMQuadConstructors>()
export class GeometryDOMQuad
  extends Wrapper<DOMQuad>
  implements IGeometryDOMQuad<DOMQuad>
{
  constructor(domQuad: DOMQuad);
  constructor(
    p1?: DGeometryDOMPointInit,
    p2?: DGeometryDOMPointInit,
    p3?: DGeometryDOMPointInit,
    p4?: DGeometryDOMPointInit
  );
  constructor(
    domQuadOrP1?: DOMQuad | DGeometryDOMPointInit,
    p2?: DGeometryDOMPointInit,
    p3?: DGeometryDOMPointInit,
    p4?: DGeometryDOMPointInit
  ) {
    const nativeDomQuad =
      domQuadOrP1 instanceof DOMQuad
        ? domQuadOrP1
        : new DOMQuad(domQuadOrP1, p2, p3, p4);

    super(nativeDomQuad);
  }

  static fromRect(other?: DGeometryDOMRectInit): GeometryDOMQuad {
    return new GeometryDOMQuad(DOMQuad.fromRect(other));
  }
  static fromQuad(other?: DGeometryDOMQuadInit): GeometryDOMQuad {
    return new GeometryDOMQuad(DOMQuad.fromQuad(other));
  }

  protected p1Internal: O.Option<GeometryDOMPoint> = O.none;
  get p1(): GeometryDOMPoint {
    if (O.isNone(this.p1Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p1Internal = O.some(
        new GeometryDOMPoint(this.native.p1)
      ) as O.Some<GeometryDOMPoint>;
    }

    return this.p1Internal.value;
  }
  protected p2Internal: O.Option<GeometryDOMPoint> = O.none;
  get p2(): GeometryDOMPoint {
    if (O.isNone(this.p2Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p2Internal = O.some(
        new GeometryDOMPoint(this.native.p2)
      ) as O.Some<GeometryDOMPoint>;
    }

    return this.p2Internal.value;
  }
  protected p3Internal: O.Option<GeometryDOMPoint> = O.none;
  get p3(): GeometryDOMPoint {
    if (O.isNone(this.p3Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p3Internal = O.some(
        new GeometryDOMPoint(this.native.p3)
      ) as O.Some<GeometryDOMPoint>;
    }

    return this.p3Internal.value;
  }
  protected p4Internal: O.Option<GeometryDOMPoint> = O.none;
  get p4(): GeometryDOMPoint {
    if (O.isNone(this.p4Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p4Internal = O.some(
        new GeometryDOMPoint(this.native.p4)
      ) as O.Some<GeometryDOMPoint>;
    }

    return this.p4Internal.value;
  }
  getBounds(): GeometryDOMRect {
    return new GeometryDOMRect(this.native.getBounds());
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
