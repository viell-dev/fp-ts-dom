import type * as O from "fp-ts/Option";
import type { IDomEvent } from "../../dom/interfaces/IDomEvent.mjs";

export interface CBHtmlOnBeforeUnloadEventHandlerNonNull {
  (event: IDomEvent<Event>): O.Option<string>;
}
