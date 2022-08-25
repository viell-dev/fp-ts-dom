import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometry1DOMPointInit } from "../dictionaries/DGeometry1DOMPointInit.js";
import type { DGeometry1DOMQuadInit } from "../dictionaries/DGeometry1DOMQuadInit.js";
import type { DGeometry1DOMRectInit } from "../dictionaries/DGeometry1DOMRectInit.js";
import type { IGeometry1DOMRect } from "./IGeometry1DOMRect.js";
import type { IGeomtery1DOMPoint } from "./IGeomtery1DOMPoint.js";

export interface IGeometry1DOMQuadConstructors
  extends IWrapperConstructors<DOMQuad> {
  new (
    p1?: DGeometry1DOMPointInit,
    p2?: DGeometry1DOMPointInit,
    p3?: DGeometry1DOMPointInit,
    p4?: DGeometry1DOMPointInit
  ): IGeometry1DOMQuad<DOMQuad>;

  fromRect(other?: DGeometry1DOMRectInit): IGeometry1DOMQuad<DOMQuad>;
  fromQuad(other?: DGeometry1DOMQuadInit): IGeometry1DOMQuad<DOMQuad>;
}

export interface IGeometry1DOMQuad<N extends DOMQuad>
  extends IWrapper<N>,
    ISerializable {
  readonly p1: IGeomtery1DOMPoint<DOMPoint>;
  readonly p2: IGeomtery1DOMPoint<DOMPoint>;
  readonly p3: IGeomtery1DOMPoint<DOMPoint>;
  readonly p4: IGeomtery1DOMPoint<DOMPoint>;
  getBounds(): IGeometry1DOMRect<DOMRect>;
}
