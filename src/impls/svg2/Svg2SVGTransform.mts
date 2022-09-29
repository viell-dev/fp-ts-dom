import { Wrapper } from "@/globals/Wrapper.mjs";
import { getNative } from "@/helpers/getNative.mjs";
import type { IGeometryDOMMatrixReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";
import type { ISvg2SVGTransform } from "@/specs/svg2/interfaces/ISvg2SVGTransform.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";
import { GeometryDOMMatrix } from "../geometry/GeometryDOMMatrix.mjs";

export class Svg2SVGTransform
  extends Wrapper<SVGTransform>
  implements ISvg2SVGTransform<SVGTransform>
{
  get type(): number {
    return this.native.type;
  }
  get matrix(): GeometryDOMMatrix {
    return new GeometryDOMMatrix(this.native.matrix);
  }
  get angle(): number {
    return this.native.angle;
  }

  setMatrix(
    matrix: DOMMatrixReadOnly | IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): void {
    pipe(tuple(getNative(matrix)), tupled(this.native.setMatrix));
  }
  setTranslate(tx: number, ty: number): void {
    pipe(tuple(tx, ty), tupled(this.native.setTranslate));
  }
  setScale(sx: number, sy: number): void {
    pipe(tuple(sx, sy), tupled(this.native.setScale));
  }
  setRotate(angle: number, cx: number, cy: number): void {
    pipe(tuple(angle, cx, cy), tupled(this.native.setRotate));
  }
  setSkewX(angle: number): void {
    pipe(tuple(angle), tupled(this.native.setSkewX));
  }
  setSkewY(angle: number): void {
    pipe(tuple(angle), tupled(this.native.setSkewY));
  }
}
