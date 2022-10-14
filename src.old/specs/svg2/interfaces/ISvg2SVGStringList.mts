import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface ISvg2SVGStringList<N extends SVGStringList>
  extends IWrapper<N> {
  readonly length: number;
  readonly numberOfItems: number;

  clear(): void;
  initialize(newItem: string): string;
  getItem(index: number): string;
  // [index: number]: string
  insertItemBefore(newItem: string, index: number): string;
  replaceItem(newItem: string, index: number): string;
  removeItem(index: number): string;
  appendItem(newItem: string): string;
}
