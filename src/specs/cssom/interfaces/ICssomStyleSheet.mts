import type { IWrapper } from "@/globals/IWrapper.mjs";
/*import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomProcessingInstruction } from "@/specs/dom/interfaces/IDomProcessingInstruction.mjs";*/
import type * as O from "fp-ts/Option";
import type { ICssomCSSStyleSheet } from "./ICssomCSSStyleSheet.mjs";
import type { ICssomMediaList } from "./ICssomMediaList.mjs";

export interface ICssomStyleSheet<N extends StyleSheet> extends IWrapper<N> {
  readonly type: string;
  readonly href: O.Option<string>;
  /*readonly ownerNode: O.Option<
    IDomElement<Element> | IDomProcessingInstruction<ProcessingInstruction>
  >;*/
  readonly parentStyleSheet: O.Option<ICssomCSSStyleSheet<CSSStyleSheet>>;
  readonly title: O.Option<string>;
  readonly media: ICssomMediaList<MediaList>;
  disabled: boolean;
}
