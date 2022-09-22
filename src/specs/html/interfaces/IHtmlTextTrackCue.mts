import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { IHtmlTextTrack } from "./IHtmlTextTrack.mjs";

export interface IHtmlTextTrackCue<N extends TextTrackCue>
  extends IDomEventTarget<N> {
  readonly track: O.Option<IHtmlTextTrack<TextTrack>>;

  id: string;
  startTime: number;
  /**
   * Use {@link setEndTime} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the new value is negative Infinity or a Not-a-Number
   * (NaN) value, then throw an TypeError.
   */
  endTime: number;
  setEndTime(endTime: number): E.Either<TypeError, void>;
  pauseOnExit: boolean;

  onenter: CBHtmlEventHandler;
  onexit: CBHtmlEventHandler;
}
