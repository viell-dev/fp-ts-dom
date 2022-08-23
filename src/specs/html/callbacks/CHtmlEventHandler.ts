import { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";

export interface CHtmlEventHandlerNonNull {
  (event: Event | IDomEvent<Event>): unknown;
}

export type CHtmlEventHandler = CHtmlEventHandlerNonNull | null;
