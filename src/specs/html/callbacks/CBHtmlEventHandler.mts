import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";

export interface MissingEventHandlerNonNull {
  (event: Event): unknown;
}

export type MissingEventHandler = MissingEventHandlerNonNull | null;

export interface CBHtmlEventHandlerNonNull {
  (event: IDomEvent<Event>): unknown;
}

export type CBHtmlEventHandler = CBHtmlEventHandlerNonNull | null;
