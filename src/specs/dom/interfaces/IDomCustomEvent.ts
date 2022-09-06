import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DDomCustomEventInit } from "../dictionaries/DDomCustomEventInit.js";
import type { IDomEvent, IDomEventConstants } from "./IDomEvent.js";

export interface IDomCustomEventConstructors
  extends IWrapperConstructors<CustomEvent> {
  new <T extends DDomCustomEventInit<D>, D>(
    type: string,
    eventInitDict?: T
  ): IDomCustomEvent<CustomEvent<D>, D>;
}

export type IDomCustomEventConstants = IDomEventConstants;

export interface IDomCustomEvent<N extends CustomEvent<D>, D>
  extends IDomEvent<N> {
  readonly detail: D;

  /** @deprecated Use `new` instead. */
  initCustomEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: D
  ): void;
}
