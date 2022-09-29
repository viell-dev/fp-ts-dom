import { Wrapper } from "@/globals/Wrapper.mjs";
import { getNative } from "@/helpers/getNative.mjs";
import type { IGeometryDOMMatrixReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";
import type { ISvg2SVGTransform } from "@/specs/svg2/interfaces/ISvg2SVGTransform.mjs";
import type { ISvg2SVGTransformList } from "@/specs/svg2/interfaces/ISvg2SVGTransformList.mjs";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { Svg2SVGTransform } from "./Svg2SVGTransform.mjs";

export class Svg2SVGTransformList
  extends Wrapper<SVGTransformList>
  implements ISvg2SVGTransformList<SVGTransformList>
{
  get length(): number {
    return this.native.length;
  }
  get numberOfItems(): number {
    return this.native.numberOfItems;
  }

  clear(): void {
    this.native.clear();
  }
  initialize(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(newItem)),
      tupled(this.native.initialize),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  getItem(index: number): Svg2SVGTransform {
    return pipe(
      tuple(index),
      tupled(this.native.getItem),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  // [index: number]: SVGTransform
  insertItemBefore(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>,
    index: number
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(newItem), index),
      tupled(this.native.insertItemBefore),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  replaceItem(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>,
    index: number
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(newItem), index),
      tupled(this.native.replaceItem),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  removeItem(index: number): Svg2SVGTransform {
    return pipe(
      tuple(index),
      tupled(this.native.removeItem),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  appendItem(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(newItem)),
      tupled(this.native.appendItem),
      (transform) => new Svg2SVGTransform(transform)
    );
  }

  createSVGTransformFromMatrix(
    matrix: DOMMatrixReadOnly | IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): Svg2SVGTransform {
    return pipe(
      tuple(getNative(matrix)),
      tupled(this.native.createSVGTransformFromMatrix),
      (transform) => new Svg2SVGTransform(transform)
    );
  }
  consolidate(): O.Option<Svg2SVGTransform> {
    return pipe(
      O.fromNullable(this.native.consolidate()),
      O.map((transform) => new Svg2SVGTransform(transform))
    );
  }
}
