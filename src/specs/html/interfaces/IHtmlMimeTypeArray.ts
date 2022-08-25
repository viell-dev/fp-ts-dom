import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IHtmlMimeType } from "./IHtmlMimeType.js";

export interface IHtmlMimeTypeArray<N extends MimeTypeArray>
  extends IWrapper<N> {
  readonly length: number;
  item(index: number): O.Option<IHtmlMimeType<MimeType>>;
  // [index: number]: O.Option<IHtmlMimeType<MimeType>>;
  namedItem(name: string): O.Option<IHtmlMimeType<MimeType>>;
  // [name: string]: O.Option<IHtmlMimeType<MimeType>>;
}
