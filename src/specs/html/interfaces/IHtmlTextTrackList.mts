import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type * as O from "fp-ts/Option";
import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { IHtmlTextTrack } from "./IHtmlTextTrack.mjs";

export interface IHtmlTextTrackList<N extends TextTrackList>
  extends IDomEventTarget<N> {
  readonly length: number;
  [index: number]: IHtmlTextTrack<TextTrack>;
  getTrackById(id: string): O.Option<IHtmlTextTrack<TextTrack>>;

  onchange: CBHtmlEventHandler;
  onaddtrack: CBHtmlEventHandler;
  onremovetrack: CBHtmlEventHandler;
}
