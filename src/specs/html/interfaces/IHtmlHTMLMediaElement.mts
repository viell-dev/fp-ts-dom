import type {
  NotAllowedErrorDomException,
  NotSupportedErrorDomException,
} from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type * as TO from "fp-ts/TaskOption";
import type { CHtmlHTMLMediaElementNetworkState } from "../constants/CHtmlHTMLMediaElementNetworkState.mjs";
import type { CHtmlHTMLMediaElementReadyState } from "../constants/CHtmlHTMLMediaElementReadyState.mjs";
import type { EHtmlTextTrackKind } from "../enums/EHtmlTextTrackKind.mjs";
import type { THtmlMediaProvider } from "../types/THtmlMediaProvider.mjs";
import type {
  IHtmlAudioTrackList,
  MissingAudioTrackList,
} from "./IHtmlAudioTrackList.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlMediaError } from "./IHtmlMediaError.mjs";
import type { IHtmlTextTrack } from "./IHtmlTextTrack.mjs";
import type { IHtmlTextTrackList } from "./IHtmlTextTrackList.mjs";
import type { IHtmlTimeRanges } from "./IHtmlTimeRanges.mjs";
import type {
  IHtmlVideoTrackList,
  MissingVideoTrackList,
} from "./IHtmlVideoTrackList.mjs";

export type IHtmlHTMLMediaElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMediaElement>;

export interface IHtmlHTMLMediaElementConstants {
  readonly NETWORK_EMPTY: typeof CHtmlHTMLMediaElementNetworkState.NETWORK_EMPTY;
  readonly NETWORK_IDLE: typeof CHtmlHTMLMediaElementNetworkState.NETWORK_IDLE;
  readonly NETWORK_LOADING: typeof CHtmlHTMLMediaElementNetworkState.NETWORK_LOADING;
  readonly NETWORK_NO_SOURCE: typeof CHtmlHTMLMediaElementNetworkState.NETWORK_NO_SOURCE;

  readonly HAVE_NOTHING: typeof CHtmlHTMLMediaElementReadyState.HAVE_NOTHING;
  readonly HAVE_METADATA: typeof CHtmlHTMLMediaElementReadyState.HAVE_METADATA;
  readonly HAVE_CURRENT_DATA: typeof CHtmlHTMLMediaElementReadyState.HAVE_CURRENT_DATA;
  readonly HAVE_FUTURE_DATA: typeof CHtmlHTMLMediaElementReadyState.HAVE_FUTURE_DATA;
  readonly HAVE_ENOUGH_DATA: typeof CHtmlHTMLMediaElementReadyState.HAVE_ENOUGH_DATA;
}

export interface IHtmlHTMLMediaElement<N extends HTMLMediaElement>
  extends IHtmlHTMLElement<N> {
  // error state
  readonly error: O.Option<IHtmlMediaError<MediaError>>;

  // network state
  src: string;
  srcObject: THtmlMediaProvider;
  readonly currentSrc: string;
  crossOrigin: O.Option<string>;
  // Network state class constants are declared in the interface above.
  readonly networkState: CHtmlHTMLMediaElementNetworkState;
  preload: string;
  readonly buffered: IHtmlTimeRanges<TimeRanges>;
  load(): void;
  canPlayType(type: string): CanPlayTypeResult;

  // ready state
  /* Ready state class constants are declared in the interface above. */
  readonly readyState: CHtmlHTMLMediaElementReadyState;
  readonly seeking: boolean;

  // playback state
  currentTime: number;
  fastSeek(time: number): void;
  readonly duration: number;
  getStartDate(): {};
  readonly paused: boolean;
  defaultPlaybackRate: number;
  /**
   * Use {@link setPlaybackRate} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the given value is not supported by the user agent, then
   * throw an "NotSupportedError" DOMException.
   */
  playbackRate: number;
  setPlaybackRate(
    playbackRate: number
  ): E.Either<NotSupportedErrorDomException, number>;
  preservesPitch: boolean;
  readonly played: IHtmlTimeRanges<TimeRanges>;
  readonly seekable: IHtmlTimeRanges<TimeRanges>;
  readonly ended: boolean;
  autoplay: boolean;
  loop: boolean;
  play(): TO.TaskOption<
    NotAllowedErrorDomException | NotSupportedErrorDomException
  >;
  pause(): void;

  // controls
  controls: boolean;
  /**
   * Use {@link setVolume} instead, when setting, to get an `Either`.
   *
   * @throws
   * When setting, if the new value is outside the range 0.0 to 1.0 inclusive,
   * then throw an RangeError.
   */
  volume: number;
  setVolume(volume: number): O.Option<RangeError>;
  muted: boolean;
  defaultMuted: boolean;

  // tracks
  readonly audioTracks: IHtmlAudioTrackList<MissingAudioTrackList>;
  readonly videoTracks: IHtmlVideoTrackList<MissingVideoTrackList>;
  readonly textTracks: IHtmlTextTrackList<TextTrackList>;
  addTextTrack(
    kind: EHtmlTextTrackKind,
    label?: string,
    language?: string
  ): IHtmlTextTrack<TextTrack>;
}
