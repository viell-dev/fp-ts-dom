import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IGeometryDOMMatrix } from "../../geometry/interfaces/IGeometryDOMMatrix.mjs";
import type { IGeometryDOMMatrixReadOnly } from "../../geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";

export interface ISvg2SVGTransform<N extends SVGTransform> extends IWrapper<N> {
  readonly type: number; // TODO transform type class constants
  readonly matrix: IGeometryDOMMatrix<DOMMatrix>;
  readonly angle: number;

  setMatrix(
    matrix: DOMMatrixReadOnly | IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): void;
  setTranslate(tx: number, ty: number): void;
  setScale(sx: number, sy: number): void;
  setRotate(angle: number, cx: number, cy: number): void;
  setSkewX(angle: number): void;
  setSkewY(angle: number): void;
}
