import type {
  IWrapper,
  IWrapperConstructors,
} from "../../../globals/IWrapper.mjs";
import type { DHtmlImageDataSettings } from "../dictionaries/DHtmlImageDataSettings.mjs";
import type { EHtmlPredefinedColorSpace } from "../enums/EHtmlPredefinedColorSpace.mjs";

export interface IHtmlImageDataConstructors
  extends IWrapperConstructors<ImageData> {
  new (
    sw: number,
    sh: number,
    settings?: DHtmlImageDataSettings
  ): IHtmlImageData<ImageData>;
  new (
    data: Uint8ClampedArray,
    sw: number,
    sh: number,
    settings?: DHtmlImageDataSettings
  ): IHtmlImageData<ImageData>;
}

export interface IHtmlImageData<N extends ImageData> extends IWrapper<N> {
  readonly width: number;
  readonly height: number;
  readonly data: Uint8ClampedArray;
  readonly colorSpace: EHtmlPredefinedColorSpace;
}
