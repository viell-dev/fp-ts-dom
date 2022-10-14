import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IHtmlPlugin } from "./IHtmlPlugin.mjs";

export interface IHtmlMimeType<N extends MimeType> extends IWrapper<N> {
  readonly type: string;
  readonly description: string;
  readonly suffixes: string;
  readonly enabledPlugin: IHtmlPlugin<Plugin>;
}
