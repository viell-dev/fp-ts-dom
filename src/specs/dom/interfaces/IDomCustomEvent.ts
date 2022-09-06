import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DDomCustomEventInit } from "../dictionaries/DDomCustomEventInit.js";
import type { IDomEvent } from "./IDomEvent.js";

/** @sealed */
export interface IDomCustomEventConstructors
  extends IWrapperConstructors<CustomEvent> {
  new <I extends DDomCustomEventInit<D>, T extends CustomEvent<D>, D>(
    type: string,
    eventInitDict?: I
  ): IDomCustomEvent<T, D>;
}

export interface IDomCustomEvent<N extends CustomEvent<D>, D>
  extends IDomEvent<N> {
  readonly detail: D;
}
