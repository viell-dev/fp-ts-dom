import type * as O from "fp-ts/Option";
import type { IDomEventTarget } from "../../dom/interfaces/IDomEventTarget.mjs";
import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";
import type { IHtmlTextTrack } from "./IHtmlTextTrack.mjs";

export interface IHtmlTextTrackList<N extends TextTrackList>
  extends IDomEventTarget<N> {
  readonly length: number;
  //[index: number]: IHtmlTextTrack<TextTrack>;
  getTrackById(id: string): O.Option<IHtmlTextTrack<TextTrack>>;

  onchange: THtmlEventHandler;
  onaddtrack: THtmlEventHandler;
  onremovetrack: THtmlEventHandler;
}
