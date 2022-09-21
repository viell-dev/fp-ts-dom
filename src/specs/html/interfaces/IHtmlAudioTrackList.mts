import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type * as O from "fp-ts/Option";
import type {
  CBHtmlEventHandler,
  MissingEventHandler,
} from "../callbacks/CBHtmlEventHandler.mjs";
import type { IHtmlAudioTrack, MissingAudioTrack } from "./IHtmlAudioTrack.mjs";

export interface MissingAudioTrackList extends EventTarget {
  readonly length: number;
  [index: number]: MissingAudioTrack;
  getTrackById(id: string): MissingAudioTrack | null;

  onchange: MissingEventHandler;
  onaddtrack: MissingEventHandler;
  onremovetrack: MissingEventHandler;
}

export interface IHtmlAudioTrackList<N extends MissingAudioTrackList>
  extends IDomEventTarget<N> {
  readonly length: number;
  [index: number]: IHtmlAudioTrack<MissingAudioTrack>;
  getTrackById(id: string): O.Option<IHtmlAudioTrack<MissingAudioTrack>>;

  onchange: CBHtmlEventHandler;
  onaddtrack: CBHtmlEventHandler;
  onremovetrack: CBHtmlEventHandler;
}
