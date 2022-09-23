import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type * as O from "fp-ts/Option";
import type {
  MissingEventHandler,
  THtmlEventHandler,
} from "../types/THtmlEventHandler.mjs";
import type { IHtmlVideoTrack, MissingVideoTrack } from "./IHtmlVideoTrack.mjs";

export interface MissingVideoTrackList extends EventTarget {
  readonly length: number;
  [index: number]: MissingVideoTrack;
  getTrackById(id: string): MissingVideoTrack | null;
  readonly selectedIndex: number;

  onchange: MissingEventHandler;
  onaddtrack: MissingEventHandler;
  onremovetrack: MissingEventHandler;
}

export interface IHtmlVideoTrackList<N extends MissingVideoTrackList>
  extends IDomEventTarget<N> {
  readonly length: number;
  [index: number]: IHtmlVideoTrack<MissingVideoTrack>;
  getTrackById(id: string): O.Option<IHtmlVideoTrack<MissingVideoTrack>>;
  readonly selectedIndex: number;

  onchange: THtmlEventHandler;
  onaddtrack: THtmlEventHandler;
  onremovetrack: THtmlEventHandler;
}
