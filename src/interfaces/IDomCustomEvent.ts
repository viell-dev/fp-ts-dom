import { DomCustomEventInit } from "../dictionaries/DomCustomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";

export interface IDomCustomEventConstructor<N extends CustomEvent>
  extends IDomConstructor<CustomEvent, IDomCustomEvent<N>> {
  new (
    type: string,
    eventInitDict?: Optional<DomCustomEventInit>
  ): IDomCustomEvent<N>;
}

export interface IDomCustomEvent<N extends CustomEvent> extends IDom<N> {
  readonly detail: unknown;
}
