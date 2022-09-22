import type { EHtmlImageSmoothingQuality } from "../enums/EHtmlImageSmoothingQuality.mjs";

export interface MHtmlCanvasImageSmoothing {
  // image smoothing
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: EHtmlImageSmoothingQuality;
}
