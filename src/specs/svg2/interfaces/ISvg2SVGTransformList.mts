import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IGeometryDOMMatrixReadOnly } from "../../geometry/interfaces/IGeometryDOMMatrixReadOnly.mjs";
import type { ISvg2SVGTransform } from "./ISvg2SVGTransform.mjs";

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

  createSVGTransformFromMatrix(
    matrix: DOMMatrixReadOnly | IGeometryDOMMatrixReadOnly<DOMMatrixReadOnly>
  ): ISvg2SVGTransform<SVGTransform>;
  consolidate(): O.Option<ISvg2SVGTransform<SVGTransform>>;
}
