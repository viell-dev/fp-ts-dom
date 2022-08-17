import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import {
  DomEventInit,
  optionalDomEventInit,
} from "../dictionaries/DomEventInit.js";
import { DomEventPhase } from "../enums/DomEventPhase.js";
import { Optional } from "../helpers/Optional.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import {
  IDomEvent,
  IDomEventConstants,
  IDomEventConstructor,
} from "../interfaces/IDomEvent.js";
import { Dom } from "./Dom.js";
import { DomEventTarget } from "./DomEventTarget.js";

/** Wrapper for native Events */
@StaticImplements<IDomEventConstructor<Event> & IDomEventConstants>()
export class DomEvent extends Dom<Event> implements IDomEvent<Event> {
  /**
   * Wrap up an existing native event.
   *
   * @param event - An event.
   */
  constructor(event: Event);
  /**
   * Wrap up a new native event.
   *
   * @param type - Type of event to create.
   * @param eventInitDict - {@link DomEventInit | Options} for event creation.
   */
  constructor(type: string, eventInitDict?: Optional<DomEventInit>);
  constructor(
    eventOrType: Event | string,
    eventInitDict?: Optional<DomEventInit>
  ) {
    const nativeEvent =
      eventOrType instanceof Event
        ? eventOrType
        : new Event(
            eventOrType,
            pipe(eventInitDict, optionalDomEventInit, O.toUndefined)
          );

    super(nativeEvent);
  }

  /**
   * Returns the type of event, e.g. `"click"`, `"hashchange"`, or `"submit"`.
   */
  get type(): string {
    return this.native.type;
  }

  /** Returns the object to which *event* is dispatched (its target). */
  get target(): O.Option<DomEventTarget> {
    return pipe(
      this.native.target,
      O.fromNullable,
      O.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }

  /**
   * Returns the object whose event listener’s callback is currently being
   * invoked.
   */
  get currentTarget(): O.Option<DomEventTarget> {
    return pipe(
      this.native.currentTarget,
      O.fromNullable,
      O.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }

  /**
   * Returns the invocation target objects of *event*’s path (objects on which
   * listeners will be invoked), except for any nodes in shadow trees of which
   * the shadow root’s mode is `"closed"` that are not reachable from *event*’s
   * {@link currentTarget}.
   */
  composedPath(): DomEventTarget[] {
    return pipe(
      this.native.composedPath(),
      A.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }

  /** Events not currently dispatched are in this phase. */
  static readonly NONE = DomEventPhase.NONE;

  /**
   * When an event is dispatched to an object that participates in a tree it
   * will be in this phase before it reaches its target.
   */
  static readonly CAPTURING_PHASE = DomEventPhase.CAPTURING_PHASE;

  /** When an event is dispatched it will be in this phase on its target. */
  static readonly AT_TARGET = DomEventPhase.AT_TARGET;

  /**
   * When an event is dispatched to an object that participates in a tree it
   * will be in this phase after it reaches its target.
   */
  static readonly BUBBLING_PHASE = DomEventPhase.BUBBLING_PHASE;

  /**
   * Returns the event’s phase, which is one of `NONE`, `CAPTURING_PHASE`,
   * `AT_TARGET`, and `BUBBLING_PHASE`.
   *
   * @defaultValue 0 (NONE)
   *
   * @see {@link DomEventPhase|Event phase enum}
   * @see {@link DomEvent.NONE|Class constant NONE}
   * @see {@link DomEvent.CAPTURING_PHASE|Class constant CAPTURING_PHASE}
   * @see {@link DomEvent.AT_TARGET|Class constant AT_TARGET}
   * @see {@link DomEvent.BUBBLING_PHASE|Class constant BUBBLING_PHASE}
   */
  get eventPhase(): DomEventPhase {
    return this.native.eventPhase;
  }

  /**
   * When dispatched in a tree, invoking this method prevents *event* from
   * reaching any objects other than the current object.
   *
   * @see https://dom.spec.whatwg.org/#concept-event-dispatch
   */
  stopPropagation(): void {
    this.native.stopPropagation();
  }
  stopImmediatePropagation(): void {
    this.native.stopImmediatePropagation();
  }

  get bubbles(): boolean {
    return this.native.bubbles;
  }
  get cancelable(): boolean {
    return this.native.cancelable;
  }
  preventDefault(): void {
    this.native.preventDefault();
  }
  get defaultPrevented(): boolean {
    return this.native.defaultPrevented;
  }
  get composed(): boolean {
    return this.native.composed;
  }

  get isTrusted(): boolean {
    return this.native.isTrusted;
  }
  get timeStamp(): number {
    return this.native.timeStamp;
  }
}
