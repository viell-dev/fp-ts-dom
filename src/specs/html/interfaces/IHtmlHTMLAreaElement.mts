import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type { MHtmlHTMLHyperlinkElementUtils } from "../mixins/MHtmlHTMLHyperlinkElementUtils.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLAreaElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLAreaElement>;

export interface IHtmlHTMLAreaElement<N extends HTMLAreaElement>
  extends IHtmlHTMLElement<N>,
    MHtmlHTMLHyperlinkElementUtils {
  alt: string;
  coors: string;
  shape: string;
  target: string;
  download: string;
  ping: string;
  rel: string;
  readonly relList: IDomDOMTokenList<DOMTokenList>;
  referrerPolicy: string;
}
