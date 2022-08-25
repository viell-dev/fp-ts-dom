import type { IWrapper } from "@/global/IWrapper.js";
import type { IHtmlPlugin } from "./IHtmlPlugin.js";

export interface IHtmlMimeType<N extends MimeType> extends IWrapper<N> {
  readonly type: string;
  readonly description: string;
  readonly suffixes: string;
  readonly enabledPlugin: IHtmlPlugin<Plugin>;
}
