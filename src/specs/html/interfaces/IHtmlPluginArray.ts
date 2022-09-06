import type { IWrapper } from "@/globals/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { IHtmlPlugin } from "./IHtmlPlugin.js";

export interface IHtmlPluginArray<N extends PluginArray> extends IWrapper<N> {
  refresh(): void;
  readonly length: number;
  item(index: number): O.Option<IHtmlPlugin<Plugin>>;
  // [index: number]: O.Option<IHtmlPlugin<Plugin>>;
  namedItem(name: string): O.Option<IHtmlPlugin<Plugin>>;
  // [name: string]: O.Option<IHtmlPlugin<Plugin>>;
}
