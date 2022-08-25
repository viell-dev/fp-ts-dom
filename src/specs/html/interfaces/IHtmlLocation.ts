import type { IWrapper } from "@/global/IWrapper.js";
import type { IHtmlDOMStringList } from "./IHtmlDOMStringList.js";

export interface IHtmlLocation<N extends Location> extends IWrapper<N> {
  href: string;
  readonly origin: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;

  assign(url: string): void;
  replace(url: string): void;
  reload(): void;

  readonly ancestorOrigins: IHtmlDOMStringList<DOMStringList>;
}
