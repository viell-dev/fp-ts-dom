import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { DDomCustomEventInit } from "../dictionaries/DDomCustomEventInit.mjs";
import type { IDomEvent, IDomEventConstants } from "./IDomEvent.mjs";

/** @sealed */
export interface IDomCustomEventConstructors
  extends IWrapperConstructors<CustomEvent> {
  new <I extends DDomCustomEventInit<D>, D>(
    type: string,
    eventInitDict?: I
  ): IDomCustomEvent<CustomEvent<D>, D>;
}

export type IDomCustomEventConstants = IDomEventConstants;

export interface IDomCustomEvent<N extends CustomEvent<D>, D>
  extends IDomEvent<N> {
  readonly detail: D;
}
