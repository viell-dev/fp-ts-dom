import type { IDomEvent } from "../../dom/interfaces/IDomEvent.mjs";

export interface CBHtmlOnErrorEventHandlerNonNull {
  (
    event: IDomEvent<Event> | string,
    source?: string,
    lineno?: number,
    colno?: number,
    error?: Error // TODO: check the specs, IDL said any but TS says Error.
  ): unknown;
}
