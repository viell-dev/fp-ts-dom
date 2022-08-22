import { DomCustomEventInit } from "../dictionaries/DomCustomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { IDomConstructor } from "./IDom.js";
import { IDomEvent, IDomEventConstants } from "./IDomEvent.js";

export interface IDomCustomEventConstructor<T = unknown>
  extends IDomConstructor<CustomEvent<T>> {
  new (
    type: string,
    eventInitDict?: Optional<DomCustomEventInit<T>>
  ): IDomCustomEvent<CustomEvent<T>>;
}

export type IDomCustomEventConstants = IDomEventConstants;

export interface IDomCustomEvent<N extends CustomEvent<T>, T = unknown>
  extends IDomEvent<N> {
  readonly detail: T;
}
