import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type { MHtmlHTMLHyperlinkElementUtils } from "../mixins/MHtmlHTMLHyperlinkElementUtils.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLAnchorElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLAnchorElement>;

export interface IHtmlHTMLAnchorElement<N extends HTMLAnchorElement>
  extends IHtmlHTMLElement<N>,
    MHtmlHTMLHyperlinkElementUtils {
  target: string;
  download: string;
  ping: string;
  rel: string;
  readonly relList: IDomDOMTokenList<DOMTokenList>;
  hreflang: string;
  type: string;

  text: string;

  referrerPolicy: string;
}
