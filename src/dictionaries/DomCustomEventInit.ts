import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { optional, Optional } from "../helpers/Optional.js";
import { DomEventInit, mapDomEventInitToEventInit } from "./DomEventInit.js";

export interface DomCustomEventInit<T = unknown> extends DomEventInit {
  detail?: Optional<T>;
}

/**
 * Map {@link DomCustomEventInit} to {@link O.Option} of `CustomEventInit`
 *
 * @param domCustomEventInit - {@link DomCustomEventInit} object to map.
 *
 * @internal
 */
export const mapDomCustomEventInitToCustomEventInit: <T = unknown>(
  domCustomEventInit: DomCustomEventInit<T>
) => O.Option<CustomEventInit<T>> = (domCustomEventInit) => {
  const maybeEventInit = mapDomEventInitToEventInit(domCustomEventInit);
  const eventInit = O.isSome(maybeEventInit) ? maybeEventInit : {};

  const customEventInit: CustomEventInit = { ...eventInit };

  const detail = optional(domCustomEventInit.detail);
  if (O.isSome(detail)) customEventInit.detail = detail.value;

  return Object.keys(customEventInit).length > 0
    ? O.some(customEventInit)
    : O.none;
};

/**
 * Convert optional {@link DomCustomEventInit} to {@link O.Option} of
 * `CustomEventInit`.
 *
 * @param domCustomEventInit - Optional {@link DomCustomEventInit}.
 *
 * @internal
 */
export const optionalDomCustomEventInit = <T = unknown>(
  domCustomEventInit: Optional<DomCustomEventInit<T>>
): O.Option<CustomEventInit<T>> =>
  pipe(
    domCustomEventInit,
    optional,
    O.map(mapDomCustomEventInitToCustomEventInit),
    O.flatten
  );
