import type { IHtmlHTMLElement } from "../interfaces/IHtmlHTMLElement.js";

export interface CBHtmlCustomElementConstructor {
  (): IHtmlHTMLElement<HTMLElement>;
}
