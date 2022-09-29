import type { NotFoundErrorDomException } from "@/exceptions/DomException.mjs";
import { getNativeOrNullable } from "@/helpers/getNative.mjs";
import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "@/specs/html/interfaces/IHtmlHTMLFormElement.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "../dom/DomElement.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLFormElement
  extends HtmlHTMLElementBase<HTMLFormElement>
  implements IHtmlHTMLFormElement<HTMLFormElement>
{
  get acceptCharset(): string {
    return this.native.acceptCharset;
  }
  set acceptCharset(acceptCharset: string) {
    this.native.acceptCharset = acceptCharset;
  }
  get action(): string {
    return this.native.action;
  }
  set action(action: string) {
    this.native.action = action;
  }
  get autocomplete(): string {
    return this.native.autocomplete;
  }
  set autocomplete(autocomplete: string) {
    this.native.autocomplete = autocomplete;
  }
  get enctype(): string {
    return this.native.enctype;
  }
  set enctype(enctype: string) {
    this.native.enctype = enctype;
  }
  get encoding(): string {
    return this.native.encoding;
  }
  set encoding(encoding: string) {
    this.native.encoding = encoding;
  }
  get method(): string {
    return this.native.method;
  }
  set method(method: string) {
    this.native.method = method;
  }
  get name(): string {
    return this.native.name;
  }
  set name(name: string) {
    this.native.name = name;
  }
  get noValidate(): boolean {
    return this.native.noValidate;
  }
  set noValidate(noValidate: boolean) {
    this.native.noValidate = noValidate;
  }
  get target(): string {
    return this.native.target;
  }
  set target(target: string) {
    this.native.target = target;
  }

  get elements(): DomElement[] {
    return pipe(
      Array.from(this.native.elements),
      A.map((element) => new DomElement(element))
    );
  }

  get length(): number {
    return this.native.length;
  }

  submit(): void {
    this.native.submit();
  }
  requestSubmit(
    submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null
  ): O.Option<TypeError | NotFoundErrorDomException> {
    return pipe(
      tuple(getNativeOrNullable(submitter)),
      E.tryCatchK(
        tupled(this.native.requestSubmit),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as TypeError | NotFoundErrorDomException
      ),
      O.getLeft
    );
  }
  reset(): void {
    this.native.reset();
  }
  checkValidity(): boolean {
    return this.native.checkValidity();
  }
  reportValidity(): boolean {
    return this.native.reportValidity();
  }
}
