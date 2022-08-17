import * as O from "fp-ts/Option";
import { DomEventPhase } from "../enums/DomEventPhase.js";
import { DomEventInit } from "../dictionaries/DomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { IDom, IDomConstructor } from "./IDom.js";
import { IDomEventTarget } from "./IDomEventTarget.js";

/** Constructors for {@link IDomEvent}. */
export interface IDomEventConstructor extends IDomConstructor<Event> {
  /**
   * Returns a new *event* whose `type` attribute value is set to *type*. The
   * *eventInitDict* argument allows for setting the `bubbles`, `cancelable`
   * and `composed` attributes via object members of the same name.
   */
  new (type: string, eventInitDict?: Optional<DomEventInit>): IDomEvent<Event>;
}

/** Constants for {@link IDomEvent} .*/
export interface IDomEventConstants {
  /**
   * Events not currently dispatched are in this phase.
   */
  readonly NONE: typeof DomEventPhase.NONE;

  /**
   * When an event is dispatched to an object that participates in a tree it
   * will be in this phase before it reaches its target.
   */
  readonly CAPTURING_PHASE: typeof DomEventPhase.CAPTURING_PHASE;

  /**
   * When an event is dispatched it will be in this phase on its target.
   */
  readonly AT_TARGET: typeof DomEventPhase.AT_TARGET;

  /**
   * When an event is dispatched to an object that participates in a tree it
   * will be in this phase after it reaches its target.
   */
  readonly BUBBLING_PHASE: typeof DomEventPhase.BUBBLING_PHASE;
}

/** Wrapper for native `Event` objects. */
export interface IDomEvent<N extends Event> extends IDom<N> {
  /**
   * Returns the type of *event*, e.g. "`click`", "`hashchange`", or "`submit`".
   *
   * @remarks
   * The *type* attribute is set by the `type` argument in the constructor.
   *
   * @defaultValue An empty string.
   */
  readonly type: string;

  /**
   * Returns the object to which *event* is dispatched (its target).
   *
   * @defaultValue {@link O.None}
   */
  readonly target: O.Option<IDomEventTarget<EventTarget>>;

  /**
   * Returns the object whose event listener’s callback is currently being
   * invoked.
   *
   * @defaultValue {@link O.None}
   */
  readonly currentTarget: O.Option<IDomEventTarget<EventTarget>>;

  /**
   * Returns the invocation target objects of *event*’s path (objects on which
   * listeners will be invoked), except for any nodes in shadow trees of which
   * the shadow root’s mode is "`closed`" that are not reachable from *event*’s
   * {@link currentTarget}.
   *
   * @defaultValue An empty array.
   */
  composedPath: () => IDomEventTarget<EventTarget>[];

  /**
   *
   */
  readonly eventPhase: DomEventPhase;

  /**
   *
   */
  stopPropagation: () => void;

  /**
   *
   */
  stopImmediatePropagation: () => void;

  /**
   *
   */
  readonly bubbles: boolean;

  /**
   *
   */
  readonly cancelable: boolean;

  /**
   *
   */
  preventDefault: () => void;

  /**
   *
   */
  readonly defaultPrevented: boolean;

  /**
   *
   */
  readonly composed: boolean;

  /**
   *
   */
  readonly isTrusted: boolean;

  /**
   *
   */
  readonly timeStamp: number;
}
