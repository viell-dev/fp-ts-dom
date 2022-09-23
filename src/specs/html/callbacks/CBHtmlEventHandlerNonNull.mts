import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";

export interface MissingEventHandlerNonNull {
  (event: Event): unknown;
}

export interface CBHtmlEventHandlerNonNull {
  (event: IDomEvent<Event>): unknown;
}
