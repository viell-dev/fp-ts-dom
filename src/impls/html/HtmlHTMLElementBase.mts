import type { NoModificationAllowedErrorDomException } from "@/exceptions/DomException.mjs";
import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElementBase } from "../dom/DomElementBase.mjs";
import { HtmlElementInternals } from "./HtmlElementInternals.mjs";

export abstract class HtmlHTMLElementBase<N extends HTMLElement>
  extends DomElementBase<N>
  implements IHtmlHTMLElement<N>
{
  get title(): string {
    return this.native.title;
  }
  set title(title: string) {
    this.native.title = title;
  }
  get lang(): string {
    return this.native.lang;
  }
  set lang(lang: string) {
    this.native.lang = lang;
  }
  get translate(): boolean {
    return this.native.translate;
  }
  set translate(translate: boolean) {
    this.native.translate = translate;
  }
  get dir(): string {
    return this.native.dir;
  }
  set dir(dir: string) {
    this.native.dir = dir;
  }

  /** Use {@link setHidden} to set. */
  get hidden(): "until-found" | boolean {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, it returns either the string "until-found" or a
        boolean. */
    return this.native.hidden as "until-found" | boolean;
  }
  setHidden(hidden: boolean | number | string | null): void {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, it accepts either a boolean, number, string or
        null when setting. */
    (this.native.hidden as boolean | number | string | null) = hidden;
  }
  get inert(): boolean {
    return this.native.inert;
  }
  set inert(inert: boolean) {
    this.native.inert = inert;
  }
  click(): void {
    this.native.click();
  }
  get accessKey(): string {
    return this.native.accessKey;
  }
  set accessKey(accessKey: string) {
    this.native.accessKey = accessKey;
  }
  get accessKeyLabel(): string {
    return this.native.accessKeyLabel;
  }
  get draggable(): boolean {
    return this.native.draggable;
  }
  set draggable(draggable: boolean) {
    this.native.draggable = draggable;
  }
  get spellcheck(): boolean {
    return this.native.spellcheck;
  }
  set spellcheck(spellcheck: boolean) {
    this.native.spellcheck = spellcheck;
  }
  get autocapitalize(): string {
    return this.native.autocapitalize;
  }
  set autocapitalize(autocapitalize: string) {
    this.native.autocapitalize = autocapitalize;
  }

  get innerText(): string {
    return this.native.innerHTML;
  }
  set innerText(innerText: string) {
    this.native.innerText = innerText;
  }
  /** Use {@link setOuterText} to set. */
  get outerText(): string {
    return this.native.outerText;
  }
  setOuterText(
    outerText: string
  ): O.Option<NoModificationAllowedErrorDomException> {
    return pipe(
      tuple(outerText),
      E.tryCatchK(
        tupled((outerText) => (this.native.outerText = outerText)),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error: unknown) => error as NoModificationAllowedErrorDomException
      ),
      O.getLeft
    );
  }

  attachInternals(): HtmlElementInternals {
    return new HtmlElementInternals(this.native.attachInternals());
  }
}
