import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";
import type * as O from "fp-ts/Option";
import type { DHtmlSubmitEventInit } from "../dictionaries/DHtmlSubmitEventInit.mjs";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";

export interface IHtmlSubmitEventConstructors
  extends IWrapperConstructors<SubmitEvent> {
  new (
    type: string,
    eventInitDict?: DHtmlSubmitEventInit
  ): IHtmlSubmitEvent<SubmitEvent>;
}

export interface IHtmlSubmitEvent<N extends SubmitEvent> extends IDomEvent<N> {
  readonly submitter: O.Option<IHtmlHTMLElement<HTMLElement>>;
}
