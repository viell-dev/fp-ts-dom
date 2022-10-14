import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IHtmlPlugin } from "./IHtmlPlugin.mjs";

export interface IHtmlPluginArray<N extends PluginArray> extends IWrapper<N> {
  refresh(): void;
  readonly length: number;
  item(index: number): O.Option<IHtmlPlugin<Plugin>>;
  // [index: number]: O.Option<IHtmlPlugin<Plugin>>;
  namedItem(name: string): O.Option<IHtmlPlugin<Plugin>>;
  // [name: string]: O.Option<IHtmlPlugin<Plugin>>;
}
