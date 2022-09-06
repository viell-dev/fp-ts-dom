import type { IWrapper } from "@/globals/IWrapper.js";
import type { IGeometryDOMMatrixReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMMatrixReadOnly.js";
import type * as O from "fp-ts/Option";
import type { ISvg2SVGTransform } from "./ISvg2SVGTransform.js";

export interface ISvg2SVGTransformList<N extends SVGTransformList>
  extends IWrapper<N> {
  readonly length: number;
  readonly numberOfItems: number;

  clear(): void;
  initialize(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>
  ): ISvg2SVGTransform<SVGTransform>;
  getItem(index: number): ISvg2SVGTransform<SVGTransform>;
  // [index: number]: SVGTransform
  insertItemBefore(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>,
    index: number
  ): ISvg2SVGTransform<SVGTransform>;
  replaceItem(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>,
    index: number
  ): ISvg2SVGTransform<SVGTransform>;
  removeItem(index: number): ISvg2SVGTransform<SVGTransform>;
  appendItem(
    newItem: SVGTransform | ISvg2SVGTransform<SVGTransform>
  ): ISvg2SVGTransform<SVGTransform>;

  createSVGTransformationFromMatrix(
    matrix: IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): ISvg2SVGTransform<SVGTransform>;
  consolidate(): O.Option<ISvg2SVGTransform<SVGTransform>>;
}
