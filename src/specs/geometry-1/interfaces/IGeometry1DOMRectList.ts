import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IGeomtery1DOMRect } from "./IGeomtery1DOMRect.js";

/** @deprecated Use an array instead. */
export interface IGeomtery1DOMRectList<N extends DOMRectList>
  extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IGeomtery1DOMRect<DOMRect>>;
  // [index: number]: O.Option<IGeomtery1DOMRect<DOMRect>>;
}
