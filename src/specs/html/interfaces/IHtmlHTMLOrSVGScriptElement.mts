import type { ISvg2SVGScriptElement } from "@/specs/svg2/interfaces/ISvg2SVGScriptElement.mjs";
import type { IHtmlHTMLScriptElement } from "./IHtmlHTMLScriptElement.mjs";

export type IHtmlHTMLOrSVGScriptElement =
  | IHtmlHTMLScriptElement<HTMLScriptElement>
  | ISvg2SVGScriptElement<SVGScriptElement>;
