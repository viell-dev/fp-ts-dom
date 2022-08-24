import { IWrapper } from "@/wrapper/IWrapper.js";
import { EHtmlScrollRestoration } from "../enums/EHtmlScrollRestoration.js";

export interface IHtmlHistory<N extends History> extends IWrapper<N> {
  readonly length: number;
  scrollRestoration: EHtmlScrollRestoration;
  state: unknown;
  go(delta?: number): void;
  back(): void;
  forward(): void;
  pushState(data: unknown, unused: string, url?: string | null): void;
  replaceState(data: unknown, unused: string, url?: string | null): void;
}
