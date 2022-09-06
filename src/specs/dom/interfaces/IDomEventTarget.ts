import type { InvalidStateErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/es6/Either";
import type { CBDomEventListener } from "../callbacks/CBDomEventListener.js";
import type { DDomAddEventListenerOptions } from "../dictionaries/DDomAddEventListenerOptions.js";
import type { DDomEventListenerOptions } from "../dictionaries/DDomEventListenerOptions.js";
import type { IDomEvent } from "./IDomEvent.js";

export interface IDomEventTargetConstructor
  extends IWrapperConstructors<EventTarget> {
  new (): IDomEventTarget<EventTarget>;
}

export interface IDomEventTarget<N extends EventTarget> extends IWrapper<N> {
  addEventListener(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomAddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    callback: CBDomEventListener | null,
    options?: boolean | DDomEventListenerOptions
  ): void;
  dispatchEvent<T extends Event>(
    event: T | IDomEvent<T>
  ): E.Either<InvalidStateErrorDomException, boolean>;
}
