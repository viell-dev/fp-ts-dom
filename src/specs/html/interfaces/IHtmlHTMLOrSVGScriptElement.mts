import type { ISvg2SVGScriptElement } from "@/specs/svg2/interfaces/ISvg2SVGScriptElement.js";
import type { IHtmlHTMLScriptElement } from "./IHtmlHTMLScriptElement.js";

export type IHtmlHTMLOrSVGScriptElement =
  | IHtmlHTMLScriptElement<HTMLScriptElement>
  | ISvg2SVGScriptElement<SVGScriptElement>;
