import type { ISvg2SVGImageElement } from "@/specs/svg2/interfaces/ISvg2SVGImageElement.mjs";
import type { IHtmlHTMLImageElement } from "../interfaces/IHtmlHTMLImageElement.mjs";

export type THtmlHTMLOrSVGImageElement =
  | IHtmlHTMLImageElement<HTMLImageElement>
  | ISvg2SVGImageElement<SVGImageElement>;
