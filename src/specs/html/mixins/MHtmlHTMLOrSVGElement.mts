import type { DHtmlFocusOptions } from "../dictionaries/DHtmlFocusOptions.mjs";
import type { IHtmlDOMStringMap } from "../interfaces/IHtmlDOMStringMap.mjs";

export interface MHtmlHTMLOrSVGElement {
  readonly dataset: IHtmlDOMStringMap<DOMStringMap>;
  nonce: string;

  autofocus: boolean;
  tabIndex: number;
  focus(options?: DHtmlFocusOptions): void;
  blur(): void;
}
