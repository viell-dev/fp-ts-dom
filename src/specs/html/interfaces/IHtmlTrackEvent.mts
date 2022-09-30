import type * as O from "fp-ts/Option";
import type { IWrapperConstructors } from "../../../globals/IWrapper.mjs";
import type { IDomEvent } from "../../dom/interfaces/IDomEvent.mjs";
import type { DHtmlTrackEventInit } from "../dictionaries/DHtmlTrackEventInit.mjs";
import type { IHtmlAudioTrack, MissingAudioTrack } from "./IHtmlAudioTrack.mjs";
import type { IHtmlTextTrack } from "./IHtmlTextTrack.mjs";
import type { IHtmlVideoTrack, MissingVideoTrack } from "./IHtmlVideoTrack.mjs";

export interface IHtmlTrackEventConstructors
  extends IWrapperConstructors<TrackEvent> {
  new (
    type: string,
    eventInitDict?: DHtmlTrackEventInit
  ): IHtmlTrackEvent<TrackEvent>;
}

export interface IHtmlTrackEvent<N extends TrackEvent> extends IDomEvent<N> {
  readonly track: O.Option<
    | IHtmlVideoTrack<MissingVideoTrack>
    | IHtmlAudioTrack<MissingAudioTrack>
    | IHtmlTextTrack<TextTrack>
  >;
}
