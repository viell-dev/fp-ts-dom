import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { DGeometryDOMMatrix2DInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrix2DInit.mjs";

export interface IHtmlCanvasPattern<N extends CanvasPattern>
  extends IWrapper<N> {
  // opaque object
  setTransformation(transform?: DGeometryDOMMatrix2DInit): void;
}
