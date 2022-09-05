import type { ISerializable } from "@/global/ISerializable.js";
import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { DGeometryDOMPointInit } from "../dictionaries/DGeometryDOMPointInit.js";
import type { DGeometryDOMQuadInit } from "../dictionaries/DGeometryDOMQuadInit.js";
import type { DGeometryDOMRectInit } from "../dictionaries/DGeometryDOMRectInit.js";
import type { IGeometryDOMPoint } from "./IGeometryDOMPoint.js";
import type { IGeometryDOMRect } from "./IGeometryDOMRect.js";

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
