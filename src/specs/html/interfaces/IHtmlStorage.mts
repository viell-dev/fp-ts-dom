import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlStorage<N extends Storage> extends IWrapper<N> {
  readonly length: number;
  key(index: number): string | null;
  getItem(key: string): string | null;
  //[key: NotKeyOf<IHtmlStorage<N>>]: string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}
