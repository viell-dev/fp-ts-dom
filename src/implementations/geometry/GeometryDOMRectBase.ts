import { Wrapper } from "@/global/Wrapper.js";
import type { IGeometry1DOMRectReadOnly } from "@/specs/geometry-1/interfaces/IGeometry1DOMRectReadOnly.js";

export abstract class Geometry1DOMRectBase<N extends DOMRectReadOnly>
  extends Wrapper<N>
  implements IGeometry1DOMRectReadOnly<N>
{
  get x(): number {
    return this.native.x;
  }
  get y(): number {
    return this.native.y;
  }
  get width(): number {
    return this.native.width;
  }
  get height(): number {
    return this.native.height;
  }
  get top(): number {
    return this.native.top;
  }
  get right(): number {
    return this.native.right;
  }
  get bottom(): number {
    return this.native.bottom;
  }
  get left(): number {
    return this.native.left;
  }

  toJSON(): {} {
    return this.native.toJSON();
  }
}
