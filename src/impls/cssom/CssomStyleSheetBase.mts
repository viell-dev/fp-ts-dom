import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ICssomStyleSheet } from "@/specs/cssom/interfaces/ICssomStyleSheet.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
/*import { DomElement } from "../dom/DomElement.mjs";
import { DomProcessingInstruction } from "../dom/DomProcessingInstruction.mjs";*/
import { CssomCSSStyleSheet } from "./CssomCSSStyleSheet.mjs";
import { CssomMediaList } from "./CssomMediaList.mjs";

export abstract class CssomStyleSheetBase<N extends StyleSheet>
  extends Wrapper<N>
  implements ICssomStyleSheet<N>
{
  get type(): string {
    return this.native.type;
  }

  get href(): O.Option<string> {
    return O.fromNullable(this.native.href);
  }

  /*get ownerNode(): O.Option<DomElement | DomProcessingInstruction> {
    return pipe(
      O.fromNullable(this.native.ownerNode),
      O.map((node) =>
        node instanceof Element
          ? new DomElement(node)
          : new DomProcessingInstruction(node)
      )
    );
  }*/

  get parentStyleSheet(): O.Option<CssomCSSStyleSheet> {
    return pipe(
      O.fromNullable(this.native.parentStyleSheet),
      O.map((sheet) => new CssomCSSStyleSheet(sheet))
    );
  }

  get title(): O.Option<string> {
    return O.fromNullable(this.native.title);
  }

  get media(): CssomMediaList {
    return new CssomMediaList(this.native.media);
  }

  get disabled(): boolean {
    return this.native.disabled;
  }

  set disabled(value: boolean) {
    this.native.disabled = value;
  }
}
