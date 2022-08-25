import type { DHtmlFocusOptions } from "../dictionaries/DHtmlFocusOptions.js";
import type { IHtmlDOMStringMap } from "../interfaces/IHtmlDOMStringMap.js";

export interface MHtmlHTMLOrSVGElement {
  dataset: IHtmlDOMStringMap<DOMStringMap>;
  nonce: string;

  autofocus: boolean;
  tabIndex: number;
  focus(options?: DHtmlFocusOptions): void;
  blur(): void;
}
