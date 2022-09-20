import { Wrapper } from "@/globals/Wrapper.mjs";
import type { IGeometryDOMRectReadOnly } from "@/specs/geometry/interfaces/IGeometryDOMRectReadOnly.mjs";

export abstract class GeometryDOMRectBase<N extends DOMRectReadOnly>
  extends Wrapper<N>
  implements IGeometryDOMRectReadOnly<N>
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
