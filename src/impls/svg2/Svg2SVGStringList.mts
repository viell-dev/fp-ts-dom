import { pipe, tuple, tupled } from "fp-ts/function";
import { Wrapper } from "../../globals/Wrapper.mjs";
import type { ISvg2SVGStringList } from "../../specs/svg2/interfaces/ISvg2SVGStringList.mjs";

export class Svg2SVGStringList
  extends Wrapper<SVGStringList>
  implements ISvg2SVGStringList<SVGStringList>
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
  initialize(newItem: string): string {
    return pipe(tuple(newItem), tupled(this.native.initialize));
  }
  getItem(index: number): string {
    return pipe(tuple(index), tupled(this.native.getItem));
  }
  // [index: number]: SVGTransform
  insertItemBefore(newItem: string, index: number): string {
    return pipe(tuple(newItem, index), tupled(this.native.insertItemBefore));
  }
  replaceItem(newItem: string, index: number): string {
    return pipe(tuple(newItem, index), tupled(this.native.replaceItem));
  }
  removeItem(index: number): string {
    return pipe(tuple(index), tupled(this.native.removeItem));
  }
  appendItem(newItem: string): string {
    return pipe(tuple(newItem), tupled(this.native.appendItem));
  }
}
