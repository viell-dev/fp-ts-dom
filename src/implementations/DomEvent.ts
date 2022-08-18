import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import {
  DomEventInit,
  optionalDomEventInit,
} from "../dictionaries/DomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import {
  IDomEvent,
  IDomEventConstants,
  IDomEventConstructor,
} from "../interfaces/IDomEvent.js";
import { DomEventBase } from "./DomEventBase.js";

@StaticImplements<IDomEventConstructor & IDomEventConstants>()
export class DomEvent extends DomEventBase<Event> implements IDomEvent<Event> {
  constructor(event: Event);
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
}
