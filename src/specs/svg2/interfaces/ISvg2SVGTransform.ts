import { IGeometry1DOMMatrix } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrix.js";
import { IGeometry1DOMMatrixReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMMatrixReadOnly.js";
import { IWrapper } from "@/wrapper/IWrapper.js";

export interface ISvg2SVGTransform<N extends SVGTransform> extends IWrapper<N> {
  readonly type: number; // TODO transform type class constants
  readonly matrix: IGeometry1DOMMatrix<DOMMatrix>;
  readonly angle: number;

  setMatrix(
    matrix: DOMMatrixReadOnly | IGeometry1DOMMatrixReadOnly<DOMMatrixReadOnly>
  ): void;
  setTranslate(tx: number, ty: number): void;
  setScale(sx: number, sy: number): void;
  setRotate(angle: number, cx: number, cy: number): void;
  setSkewX(angle: number): void;
  setSkewY(angle: number): void;
}
