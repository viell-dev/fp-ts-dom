import type { InvalidStateErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/es6/Either";
import type { CBDomEventListener } from "../callbacks/CBDomEventListener.js";
import type { DDomAddEventListenerOptions } from "../dictionaries/DDomAddEventListenerOptions.js";
import type { DDomEventListenerOptions } from "../dictionaries/DDomEventListenerOptions.js";
import type { IDomEvent } from "./IDomEvent.js";

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
