import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { IHtmlMimeType } from "./IHtmlMimeType.mjs";

export interface IHtmlPlugin<N extends Plugin> extends IWrapper<N> {
  readonly name: string;
  readonly description: string;
  readonly filename: string;
  readonly length: number;
  item(index: number): O.Option<IHtmlMimeType<MimeType>>;
  // [index: number]: O.Option<IHtmlMimeType<MimeType>>;
  namedItem(name: string): O.Option<IHtmlMimeType<MimeType>>;
  // [name: string]: O.Option<IHtmlMimeType<MimeType>>;
}
