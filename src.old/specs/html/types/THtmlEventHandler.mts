import type {
  CBHtmlEventHandlerNonNull,
  MissingEventHandlerNonNull,
} from "../callbacks/CBHtmlEventHandlerNonNull.mjs";

export type MissingEventHandler = MissingEventHandlerNonNull | null;

export type THtmlEventHandler = CBHtmlEventHandlerNonNull | null;
