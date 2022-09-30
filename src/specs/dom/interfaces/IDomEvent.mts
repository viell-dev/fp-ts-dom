import type * as O from "fp-ts/Option";
import type {
  IWrapper,
  IWrapperConstructors,
} from "../../../globals/IWrapper.mjs";
import type { THrTimeDOMHighResTimeStamp } from "../../hr-time/types/THrTimeDOMHighResTimeStamp.mjs";
import type { CDomEventEventPhase } from "../constants/CDomEventEventPhase.mjs";
import type { DDomEventInit } from "../dictionaries/DDomEventInit.mjs";
import type { IDomEventTarget } from "./IDomEventTarget.mjs";

/** @sealed */
export interface IDomEventConstructors extends IWrapperConstructors<Event> {
  new (type: string, eventInitDict?: DDomEventInit): IDomEvent<Event>;
}

export interface IDomEventConstants {
  readonly NONE: typeof CDomEventEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof CDomEventEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof CDomEventEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof CDomEventEventPhase.BUBBLING_PHASE;
}

export interface IDomEvent<N extends Event> extends IWrapper<N> {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget<EventTarget>>;
  readonly currentTarget: O.Option<IDomEventTarget<EventTarget>>;
  composedPath(): IDomEventTarget<EventTarget>[];

  // Event phase class constants are declared in the interface above.
  readonly eventPhase: CDomEventEventPhase;

  stopPropagation(): void;
  stopImmediatePropagation(): void;

  readonly bubbles: boolean;
  readonly cancelable: boolean;
  preventDefault(): void;
  readonly defaultPrevented: boolean;
  readonly composed: boolean;

  /** @sealed */
  readonly isTrusted: boolean;
  readonly timeStamp: THrTimeDOMHighResTimeStamp;
}
