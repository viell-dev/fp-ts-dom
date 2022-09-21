import type { CHtmlHTMLTrackElementReadyState } from "../constants/CHtmlHTMLTrackElementReadyState.mjs";
import type { IHtmlTextTrack } from "../IHtmlTextTrack.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTrackElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTrackElement>;

export interface IHtmlHTMLTrackElementConstants {
  readonly NONE: typeof CHtmlHTMLTrackElementReadyState.NONE;
  readonly LOADING: typeof CHtmlHTMLTrackElementReadyState.LOADING;
  readonly LOADED: typeof CHtmlHTMLTrackElementReadyState.LOADED;
  readonly ERROR: typeof CHtmlHTMLTrackElementReadyState.ERROR;
}

export interface IHtmlHTMLTrackElement<N extends HTMLTrackElement>
  extends IHtmlHTMLElement<N> {
  kind: string;
  src: string;
  srclang: string;
  label: string;
  default: boolean;

  // Ready state class constants are declared in the interface above.
  readonly readyState: CHtmlHTMLTrackElementReadyState;

  readonly track: IHtmlTextTrack<TextTrack>;
}
