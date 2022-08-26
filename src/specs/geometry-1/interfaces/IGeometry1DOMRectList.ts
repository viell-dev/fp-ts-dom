import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IGeometry1DOMRect } from "./IGeometry1DOMRect.js";

/** @deprecated Use an array instead. */
export interface IGeometry1DOMRectList<N extends DOMRectList>
  extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IGeometry1DOMRect<DOMRect>>;
  // [index: number]: O.Option<IGeometry1DOMRect<DOMRect>>;
}
