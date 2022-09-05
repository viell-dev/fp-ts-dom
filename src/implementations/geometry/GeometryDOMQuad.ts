import { StaticImplements } from "@/decorators/StaticImplements.js";
import { Wrapper } from "@/global/Wrapper.js";
import type { DGeometry1DOMPointInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMPointInit.js";
import type { DGeometry1DOMQuadInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMQuadInit.js";
import type { DGeometry1DOMRectInit } from "@/specs/geometry-1/dictionaries/DGeometry1DOMRectInit.js";
import type {
  IGeometry1DOMQuad,
  IGeometry1DOMQuadConstructors,
} from "@/specs/geometry-1/interfaces/IGeometry1DOMQuad.js";
import * as O from "fp-ts/Option";
import { Geometry1DOMPoint } from "./Geometry1DOMPoint.js";
import { Geometry1DOMRect } from "./Geometry1DOMRect.js";

@StaticImplements<IGeometry1DOMQuadConstructors>()
export class Geometry1DOMQuad
  extends Wrapper<DOMQuad>
  implements IGeometry1DOMQuad<DOMQuad>
{
  constructor(domQuad: DOMQuad);
  constructor(
    p1?: DGeometry1DOMPointInit,
    p2?: DGeometry1DOMPointInit,
    p3?: DGeometry1DOMPointInit,
    p4?: DGeometry1DOMPointInit
  );
  constructor(
    domQuadOrP1?: DOMQuad | DGeometry1DOMPointInit,
    p2?: DGeometry1DOMPointInit,
    p3?: DGeometry1DOMPointInit,
    p4?: DGeometry1DOMPointInit
  ) {
    const nativeDomQuad =
      domQuadOrP1 instanceof DOMQuad
        ? domQuadOrP1
        : new DOMQuad(domQuadOrP1, p2, p3, p4);

    super(nativeDomQuad);
  }

  static fromRect(other?: DGeometry1DOMRectInit): Geometry1DOMQuad {
    return new Geometry1DOMQuad(DOMQuad.fromRect(other));
  }
  static fromQuad(other?: DGeometry1DOMQuadInit): Geometry1DOMQuad {
    return new Geometry1DOMQuad(DOMQuad.fromQuad(other));
  }

  protected p1Internal: O.Option<Geometry1DOMPoint> = O.none;
  get p1(): Geometry1DOMPoint {
    if (O.isNone(this.p1Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p1Internal = O.some(
        new Geometry1DOMPoint(this.native.p1)
      ) as O.Some<Geometry1DOMPoint>;
    }

    return this.p1Internal.value;
  }
  protected p2Internal: O.Option<Geometry1DOMPoint> = O.none;
  get p2(): Geometry1DOMPoint {
    if (O.isNone(this.p2Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p2Internal = O.some(
        new Geometry1DOMPoint(this.native.p2)
      ) as O.Some<Geometry1DOMPoint>;
    }

    return this.p2Internal.value;
  }
  protected p3Internal: O.Option<Geometry1DOMPoint> = O.none;
  get p3(): Geometry1DOMPoint {
    if (O.isNone(this.p3Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p3Internal = O.some(
        new Geometry1DOMPoint(this.native.p3)
      ) as O.Some<Geometry1DOMPoint>;
    }

    return this.p3Internal.value;
  }
  protected p4Internal: O.Option<Geometry1DOMPoint> = O.none;
  get p4(): Geometry1DOMPoint {
    if (O.isNone(this.p4Internal)) {
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- `O.some` always returns an `O.Some`. */
      this.p4Internal = O.some(
        new Geometry1DOMPoint(this.native.p4)
      ) as O.Some<Geometry1DOMPoint>;
    }

    return this.p4Internal.value;
  }
  getBounds(): Geometry1DOMRect {
    return new Geometry1DOMRect(this.native.getBounds());
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
