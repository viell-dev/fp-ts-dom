import type * as E from "fp-ts/es6/Either";
import type { InvalidStateErrorDomException } from "../../../exceptions/DomException.mjs";
import type {
  IWrapper,
  IWrapperConstructors,
} from "../../../globals/IWrapper.mjs";
import type { CBDomEventListener } from "../callbacks/CBDomEventListener.mjs";
import type { DDomAddEventListenerOptions } from "../dictionaries/DDomAddEventListenerOptions.mjs";
import type { DDomEventListenerOptions } from "../dictionaries/DDomEventListenerOptions.mjs";
import type { IDomEvent } from "./IDomEvent.mjs";

/** @sealed */
export interface IDomEventTargetConstructor
  extends IWrapperConstructors<EventTarget> {
  new (): IDomEventTarget<EventTarget>;
}

export interface IDomEventTarget<N extends EventTarget> extends IWrapper<N> {
  addEventListener<R = unknown>(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomAddEventListenerOptions<R>
  ): void;
  removeEventListener(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomEventListenerOptions
  ): void;
  dispatchEvent(
    event: Event | IDomEvent<Event>
  ): E.Either<InvalidStateErrorDomException, boolean>;
}
