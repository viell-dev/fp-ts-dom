import { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.js";
import {
  IDomEvent,
  IDomEventConstants,
} from "@/specs/dom/interfaces/IDomEvent.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import { DomEventBase } from "./DomEventBase.js";

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
