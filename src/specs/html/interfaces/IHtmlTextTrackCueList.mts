import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { IHtmlTextTrackCue } from "./IHtmlTextTrackCue.mjs";

export interface IHtmlTextTrackCueList<N extends TextTrackCueList>
  extends IWrapper<N> {
  readonly length: number;
  [index: number]: IHtmlTextTrackCue<TextTrackCue>;
  getCueById(id: string): O.Option<IHtmlTextTrackCue<TextTrackCue>>;
}
