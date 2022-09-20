import type { ISerializable } from "@/globals/ISerializable.mjs";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.mjs";
import type { DGeometryDOMQuadInit } from "../dictionaries/DGeometryDOMQuadInit.mjs";
import type { DGeometryDOMRectInit } from "../dictionaries/DGeometryDOMRectInit.mjs";
import type { IGeometryDOMPoint } from "./IGeometryDOMPoint.mjs";
import type { IGeometryDOMRect } from "./IGeometryDOMRect.mjs";

export interface IGeometryDOMQuadConstructors
  extends IWrapperConstructors<DOMQuad> {
  new (
    p1?: DGeometryDOMPointInit,
    p2?: DGeometryDOMPointInit,
    p3?: DGeometryDOMPointInit,
    p4?: DGeometryDOMPointInit
  ): IGeometryDOMQuad<DOMQuad>;

  fromRect(other?: DGeometryDOMRectInit): IGeometryDOMQuad<DOMQuad>;
  fromQuad(other?: DGeometryDOMQuadInit): IGeometryDOMQuad<DOMQuad>;
}

export interface IGeometryDOMQuad<N extends DOMQuad>
  extends IWrapper<N>,
    ISerializable {
  readonly p1: IGeometryDOMPoint<DOMPoint>;
  readonly p2: IGeometryDOMPoint<DOMPoint>;
  readonly p3: IGeometryDOMPoint<DOMPoint>;
  readonly p4: IGeometryDOMPoint<DOMPoint>;
  getBounds(): IGeometryDOMRect<DOMRect>;
}
