import type {
  InvalidStateErrorDomException,
  NotFoundErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { EHtmlTextTrackKind } from "../enums/EHtmlTextTrackKind.mjs";
import type { EHtmlTextTrackMode } from "../enums/EHtmlTextTrackMode.mjs";
import type { IHtmlTextTrackCue } from "./IHtmlTextTrackCue.mjs";
import type { IHtmlTextTrackCueList } from "./IHtmlTextTrackCueList.mjs";

export interface IHtmlTextTrack<N extends TextTrack> extends IWrapper<N> {
  readonly kind: EHtmlTextTrackKind;
  readonly label: string;
  readonly language: string;

  readonly id: string;
  readonly inBandMetadataTrackDispatchType: string;

  mode: EHtmlTextTrackMode;

  readonly cues: O.Option<IHtmlTextTrackCueList<TextTrackCueList>>;
  readonly activeCues: O.Option<IHtmlTextTrackCueList<TextTrackCueList>>;

  addCue(
    cue: IHtmlTextTrackCue<TextTrackCue>
  ): E.Either<InvalidStateErrorDomException, void>;
  removeCue(
    cue: IHtmlTextTrackCue<TextTrackCue>
  ): E.Either<NotFoundErrorDomException, void>;

  oncuechange: CBHtmlEventHandler;
}
