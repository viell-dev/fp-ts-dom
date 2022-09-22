import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { DGeometryDOMMatrix2DInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrix2DInit.mjs";
import type { MHtmlCanvasPath } from "../mixins/MHtmlCanvasPath.mjs";

export interface IHtmlPath2DConstructors extends IWrapperConstructors<Path2D> {
  new (path?: IHtmlPath2D<Path2D> | string): IHtmlPath2D<Path2D>;
}

export interface IHtmlPath2D<N extends Path2D>
  extends IWrapper<N>,
    MHtmlCanvasPath {
  addPath(
    path: IHtmlPath2D<Path2D>,
    transform?: DGeometryDOMMatrix2DInit
  ): void;
}
