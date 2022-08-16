import * as O from "fp-ts/Option";
import { DomEventPhase } from "../constants/DomEventPhase.js";
import { DomEventInit } from "../dictionaries/DomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomEventConstructor<N extends Event>
  extends IDomConstructor<Event, IDomEvent<N>> {
  new (type: string, eventInitDict?: Optional<DomEventInit>): IDomEvent<N>;
}

export interface IDomEvent<N extends Event> extends IDom<N> {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget>;
  readonly currentTarget: O.Option<IDomEventTarget>;
  composedPath: () => IDomEventTarget[];

  readonly NONE: typeof DomEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof DomEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof DomEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof DomEventPhase.BUBBLING_PHASE;
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
