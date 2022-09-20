import type { ISvg2SVGScriptElement } from "@/specs/svg2/interfaces/ISvg2SVGScriptElement.mjs";
import type { IHtmlHTMLScriptElement } from "../interfaces/IHtmlHTMLScriptElement.mjs";

export type THtmlHTMLOrSVGScriptElement =
  | IHtmlHTMLScriptElement<HTMLScriptElement>
  | ISvg2SVGScriptElement<SVGScriptElement>;
