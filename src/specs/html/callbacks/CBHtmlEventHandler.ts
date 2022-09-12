import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";

export interface CBHtmlEventHandlerNonNull {
  (event: IDomEvent<Event>): unknown;
}

export type CBHtmlEventHandler = CBHtmlEventHandlerNonNull | null;
