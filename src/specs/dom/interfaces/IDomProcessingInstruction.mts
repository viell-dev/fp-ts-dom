import type { MCssomLinkStyle } from "@/specs/cssom/mixins/MCssomLinkStyle.mjs";
import type { IDomCharacterData } from "./IDomCharacterData.mjs";

export interface IDomProcessingInstruction<N extends ProcessingInstruction>
  extends IDomCharacterData<N>,
    MCssomLinkStyle {
  readonly target: string;
}
