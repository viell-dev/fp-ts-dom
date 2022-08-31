import type { IDomEvent } from "@/specs/dom/interfaces/IDomEvent.js";
import type * as O from "fp-ts/Option";

export interface CBHtmlOnBeforeUnloadEventHandlerNonNull {
  (event: Event | IDomEvent<Event>): O.Option<string>;
}

export type CBHtmlOnBeforeUnloadEventHandler =
  CBHtmlOnBeforeUnloadEventHandlerNonNull | null;