import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { optional, Optional } from "../helpers/Optional.js";

export interface DomEventInit {
  bubbles?: Optional<boolean>;
  cancelable?: Optional<boolean>;
  composed?: Optional<boolean>;
}

/**
 * Convert optional {@link DomEventInit} to {@link O.Option} of EventInit.
 *
 * @param domEventInit - Optional {@link DomEventInit}.
 *
 * @internal
 */
export const optionalDomEventInit = (
  domEventInit: Optional<DomEventInit>
): O.Option<EventInit> =>
  pipe(
    domEventInit,
    optional,
    O.map((domEventInit) => {
      const eventInit: EventInit = {};

      const bubbles = optional(domEventInit.bubbles);
      if (O.isSome(bubbles)) eventInit.bubbles = bubbles.value;

      const cancelable = optional(domEventInit.cancelable);
      if (O.isSome(cancelable)) eventInit.cancelable = cancelable.value;

      const composed = optional(domEventInit.composed);
      if (O.isSome(composed)) eventInit.composed = composed.value;

      return Object.keys(eventInit).length > 0 ? O.some(eventInit) : O.none;
    }),
    O.flatten
  );
