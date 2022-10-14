import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type { DDomEventInit } from "../../specs/dom/dictionaries/DDomEventInit.mjs";
import type {
  IDomEvent,
  IDomEventConstants,
  IDomEventConstructors,
} from "../../specs/dom/interfaces/IDomEvent.mjs";
import { DomEventBase } from "./DomEventBase.mjs";

@StaticImplements<IDomEventConstructors & IDomEventConstants>()
export class DomEvent extends DomEventBase<Event> implements IDomEvent<Event> {
  constructor(event: Event);
  constructor(type: string, eventInitDict?: DDomEventInit);
  constructor(eventOrType: Event | string, eventInitDict?: DDomEventInit) {
    const nativeEvent =
      eventOrType instanceof Event
        ? eventOrType
        : new Event(eventOrType, eventInitDict);

    super(nativeEvent);
  }
}
