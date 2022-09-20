import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import type { DGeometryDOMPointInit } from "@/specs/geometry/dictionaries/DGeometryDOMPointInit.mjs";
import type { DGeometryDOMQuadInit } from "@/specs/geometry/dictionaries/DGeometryDOMQuadInit.mjs";
import type { DGeometryDOMRectInit } from "@/specs/geometry/dictionaries/DGeometryDOMRectInit.mjs";
import type {
  IGeometryDOMQuad,
  IGeometryDOMQuadConstructors,
} from "@/specs/geometry/interfaces/IGeometryDOMQuad.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { GeometryDOMPoint } from "./GeometryDOMPoint.mjs";
import { GeometryDOMRect } from "./GeometryDOMRect.mjs";

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
    return pipe(
      this.p1Internal,
      O.getOrElse(() => {
        const point = new GeometryDOMPoint(this.native.p1);
        this.p1Internal = O.some(point);
        return point;
      })
    );
  }
  protected p2Internal: O.Option<GeometryDOMPoint> = O.none;
  get p2(): GeometryDOMPoint {
    return pipe(
      this.p2Internal,
      O.getOrElse(() => {
        const point = new GeometryDOMPoint(this.native.p2);
        this.p2Internal = O.some(point);
        return point;
      })
    );
  }
  protected p3Internal: O.Option<GeometryDOMPoint> = O.none;
  get p3(): GeometryDOMPoint {
    return pipe(
      this.p3Internal,
      O.getOrElse(() => {
        const point = new GeometryDOMPoint(this.native.p3);
        this.p3Internal = O.some(point);
        return point;
      })
    );
  }
  protected p4Internal: O.Option<GeometryDOMPoint> = O.none;
  get p4(): GeometryDOMPoint {
    return pipe(
      this.p4Internal,
      O.getOrElse(() => {
        const point = new GeometryDOMPoint(this.native.p4);
        this.p4Internal = O.some(point);
        return point;
      })
    );
  }
  getBounds(): GeometryDOMRect {
    return new GeometryDOMRect(this.native.getBounds());
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
