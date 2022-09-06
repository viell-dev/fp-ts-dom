import type { IWrapperConstructors } from "@/globals/IWrapper.js";
import type { DDomCustomEventInit } from "../dictionaries/DDomCustomEventInit.js";
import type { IDomEvent } from "./IDomEvent.js";

/** @sealed */
export interface IDomCustomEventConstructors
  extends IWrapperConstructors<CustomEvent> {
  new <T extends DDomCustomEventInit<D>, D>(
    type: string,
    eventInitDict?: T
  ): IDomCustomEvent<CustomEvent<D>, D>;
}

export interface IDomCustomEvent<N extends CustomEvent<D>, D>
  extends IDomEvent<N> {
  readonly detail: D;
}
