import type { IWrapper } from "../../../globals/IWrapper.mjs";

export interface MissingAudioTrack {
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  enabled: boolean;
}

export interface IHtmlAudioTrack<N extends MissingAudioTrack>
  extends IWrapper<N> {
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  enabled: boolean;
}
