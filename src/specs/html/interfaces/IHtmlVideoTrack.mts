import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface MissingVideoTrack {
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  selected: boolean;
}

export interface IHtmlVideoTrack<N extends MissingVideoTrack>
  extends IWrapper<N> {
  readonly id: string;
  readonly kind: string;
  readonly label: string;
  readonly language: string;
  selected: boolean;
}
