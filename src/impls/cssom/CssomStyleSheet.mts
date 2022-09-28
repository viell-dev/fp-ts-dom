import type { ICssomStyleSheet } from "@/specs/cssom/interfaces/ICssomStyleSheet.mjs";
import { CssomStyleSheetBase } from "./CssomStyleSheetBase.mjs";

export class CssomStyleSheet
  extends CssomStyleSheetBase<StyleSheet>
  implements ICssomStyleSheet<StyleSheet> {}
