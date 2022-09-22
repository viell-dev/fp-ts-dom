import type { DGeometryDOMMatrix2DInit } from "@/specs/geometry/dictionaries/DGeometryDOMMatrix2DInit.mjs";
import type { IGeometryDOMMatrix } from "@/specs/geometry/interfaces/IGeometryDOMMatrix.mjs";

export interface MHtmlCanvasTransform {
  // transformations (default transform is the identity matrix)
  scale(x: number, y: number): void;
  rotate(angle: number): void;
  translate(x: number, y: number): void;
  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): void;

  getTransform(): IGeometryDOMMatrix<DOMMatrix>;
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): void;
  setTransform(transform?: DGeometryDOMMatrix2DInit): void;
  resetTransform(): void;
}
