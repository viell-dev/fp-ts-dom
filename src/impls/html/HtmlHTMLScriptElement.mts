import type { IHtmlHTMLScriptElement } from "@/specs/html/interfaces/IHtmlHTMLScriptElement.mjs";
import * as O from "fp-ts/Option";
import { DomDOMTokenList } from "../dom/DomDOMTokenList.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLScriptElement
  extends HtmlHTMLElementBase<HTMLScriptElement>
  implements IHtmlHTMLScriptElement<HTMLScriptElement>
{
  get src(): string {
    return this.native.src;
  }
  set src(src) {
    this.native.src = src;
  }
  get type(): string {
    return this.native.type;
  }
  set type(type) {
    this.native.type = type;
  }
  get noModule(): boolean {
    return this.native.noModule;
  }
  set noModule(noModule) {
    this.native.noModule = noModule;
  }
  get async(): boolean {
    return this.native.async;
  }
  set async(async) {
    this.native.async = async;
  }
  get defer(): boolean {
    return this.native.defer;
  }
  set defer(defer) {
    this.native.defer = defer;
  }
  get crossOrigin(): O.Option<string> {
    return O.fromNullable(this.native.crossOrigin);
  }
  set crossOrigin(crossOrigin) {
    this.native.crossOrigin = O.toNullable(crossOrigin);
  }
  get text(): string {
    return this.native.text;
  }
  set text(text) {
    this.native.text = text;
  }
  get integrity(): string {
    return this.native.integrity;
  }
  set integrity(integrity) {
    this.native.integrity = integrity;
  }
  get referrerPolicy(): string {
    return this.native.referrerPolicy;
  }
  set referrerPolicy(referrerPolicy) {
    this.native.referrerPolicy = referrerPolicy;
  }
  get blocking(): DomDOMTokenList {
    return new DomDOMTokenList(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- blocking is missing in the TypeScript types. */
      (this.native as HTMLScriptElement & { blocking: DOMTokenList }).blocking
    );
  }
}
