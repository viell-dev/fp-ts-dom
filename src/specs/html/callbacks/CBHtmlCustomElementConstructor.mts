import type { IHtmlHTMLElement } from "../interfaces/IHtmlHTMLElement.mjs";

export interface CBHtmlCustomElementConstructor {
  (): IHtmlHTMLElement<HTMLElement>;
}
