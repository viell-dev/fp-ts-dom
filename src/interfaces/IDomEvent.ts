import * as O from "fp-ts/Option";
import { DomEventPhase } from "../enums/DomEventPhase.js";
import { DomEventInit } from "../dictionaries/DomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomEventConstructor<N extends Event>
  extends IDomConstructor<Event> {
  new (type: string, eventInitDict?: Optional<DomEventInit>): IDomEvent<N>;
}

export interface IDomEventConstants {
  readonly NONE: typeof DomEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof DomEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof DomEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof DomEventPhase.BUBBLING_PHASE;
}

export interface IDomEvent<N extends Event> extends IDom<N> {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget<EventTarget>>;
  readonly currentTarget: O.Option<IDomEventTarget<EventTarget>>;
  composedPath: () => IDomEventTarget<EventTarget>[];

  readonly eventPhase: DomEventPhase;

  stopPropagation: () => void;
  stopImmediatePropagation: () => void;

  readonly bubbles: boolean;
  readonly cancelable: boolean;
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
  readonly composed: boolean;

  readonly isTrusted: boolean;
  readonly timeStamp: number;
}
