import type * as O from "fp-ts/Option";
import type {
  InvalidStateErrorDomException,
  NotFoundErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { EHtmlTextTrackKind } from "../enums/EHtmlTextTrackKind.mjs";
import type { EHtmlTextTrackMode } from "../enums/EHtmlTextTrackMode.mjs";
import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";
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
  ): O.Option<InvalidStateErrorDomException>;
  removeCue(
    cue: IHtmlTextTrackCue<TextTrackCue>
  ): O.Option<NotFoundErrorDomException>;

  oncuechange: THtmlEventHandler;
}
