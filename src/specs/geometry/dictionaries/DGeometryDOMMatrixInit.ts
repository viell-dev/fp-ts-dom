import type { DGeometry1DOMMatrix2DInit } from "./DGeometry1DOMMatrix2DInit.js";

export interface DGeometry1DOMMatrixInit extends DGeometry1DOMMatrix2DInit {
  m13?: number;
  m14?: number;
  m23?: number;
  m24?: number;
  m31?: number;
  m32?: number;
  m33?: number;
  m34?: number;
  m43?: number;
  m44?: number;
  is2D?: boolean;
}
