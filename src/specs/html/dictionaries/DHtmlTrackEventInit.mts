import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";
import type {
  IHtmlAudioTrack,
  MissingAudioTrack,
} from "../interfaces/IHtmlAudioTrack.mjs";
import type { IHtmlTextTrack } from "../interfaces/IHtmlTextTrack.mjs";
import type {
  IHtmlVideoTrack,
  MissingVideoTrack,
} from "../interfaces/IHtmlVideoTrack.mjs";

export interface DHtmlTrackEventInit extends DDomEventInit {
  track?:
    | MissingVideoTrack
    | IHtmlVideoTrack<MissingVideoTrack>
    | MissingAudioTrack
    | IHtmlAudioTrack<MissingAudioTrack>
    | TextTrack
    | IHtmlTextTrack<TextTrack>
    | null;
}
