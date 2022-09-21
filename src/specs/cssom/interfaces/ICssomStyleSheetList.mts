import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { ICssomStyleSheet } from "./ICssomStyleSheet.mjs";

export interface ICssomStyleSheetList<N extends StyleSheetList>
  extends IWrapper<N> {
  item(index: number): O.Option<ICssomStyleSheet<StyleSheet>>;
  [index: number]: ICssomStyleSheet<StyleSheet>;
  readonly length: number;
}
