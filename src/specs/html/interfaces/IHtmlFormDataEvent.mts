import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { IDomEvent } from "../../dom/interfaces/IDomEvent.mjs";
import type { DHtmlFormDataEventInit } from "../dictionaries/DHtmlFormDataEventInit.mjs";

export interface IHtmlFormDataEventConstructors
  extends IWrapperConstructors<FormDataEvent> {
  new (
    type: string,
    eventInitDict: DHtmlFormDataEventInit
  ): IHtmlFormDataEvent<FormDataEvent>;
}

export interface IHtmlFormDataEvent<N extends FormDataEvent>
  extends IDomEvent<N> {
  readonly formData: FormData; // "XMLHttpRequest" spec is out-of-scope.
}
