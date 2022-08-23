import { InvalidStateErrorDomException } from "@/exceptions/DomException.js";
import { IWrapper, IWrapperConstructors } from "@/wrapper/IWrapper.js";
import * as E from "fp-ts/es6/Either";
import { CBDomEventListener } from "../callbacks/CBDomEventListener.js";
import { DDomAddEventListenerOptions } from "../dictionaries/DDomAddEventListenerOptions.js";
import { DDomEventListenerOptions } from "../dictionaries/DDomEventListenerOptions.js";
import { IDomEvent } from "./IDomEvent.js";

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
