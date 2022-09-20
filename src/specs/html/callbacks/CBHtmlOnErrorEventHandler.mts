import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.mjs";

export interface CBHtmlOnErrorEventHandlerNonNull {
  (
    event: Event | IDomEvent<Event> | string,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: unknown
  ): unknown;
}

export type CBHtmlOnErrorEventHandler = CBHtmlOnErrorEventHandlerNonNull | null;
