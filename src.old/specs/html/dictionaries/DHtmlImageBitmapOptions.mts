import type { EHtmlColorSpaceConversion } from "../enums/EHtmlColorSpaceConversion.mjs";
import type { EHtmlImageOrientation } from "../enums/EHtmlImageOrientation.mjs";
import type { EHtmlPremultiplyAlpha } from "../enums/EHtmlPremultiplyAlpha.mjs";
import type { EHtmlResizeQuality } from "../enums/EHtmlResizeQuality.mjs";

export interface DHtmlImageBitmapOptions {
  imageOrientation?: EHtmlImageOrientation;
  premultiplyAlpha?: EHtmlPremultiplyAlpha;
  colorSpaceConversion?: EHtmlColorSpaceConversion;
  resizeWidth?: number;
  resizeHeight?: number;
  resizeQuality?: EHtmlResizeQuality;
}
