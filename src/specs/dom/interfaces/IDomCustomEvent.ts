import type { IWrapperConstructors } from "@/global/IWrapper.js";
import type { DDomCustomEventInit } from "../dictionaries/DDomCustomEventInit.js";
import type { IDomEvent, IDomEventConstants } from "./IDomEvent.js";

export interface IDomCustomEventConstructor
  extends IWrapperConstructors<CustomEvent> {
  new (
    type: string,
    eventInitDict?: DDomCustomEventInit
  ): IDomCustomEvent<CustomEvent>;
}

export type IDomCustomEventConstants = IDomEventConstants;

export interface IDomCustomEvent<N extends CustomEvent<T>, T = unknown>
  extends IDomEvent<N> {
  readonly detail: T;

  /** @deprecated Use `new` instead. */
  initCustomEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: T
  ): void;
}
