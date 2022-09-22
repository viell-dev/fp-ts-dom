import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { MHtmlCanvasCompositing } from "../mixins/MHtmlCanvasCompositing.mjs";
import type { MHtmlCanvasDrawImage } from "../mixins/MHtmlCanvasDrawImage.mjs";
import type { MHtmlCanvasDrawPath } from "../mixins/MHtmlCanvasDrawPath.mjs";
import type { MHtmlCanvasFillStrokeStyles } from "../mixins/MHtmlCanvasFillStrokeStyles.mjs";
import type { MHtmlCanvasFilters } from "../mixins/MHtmlCanvasFilters.mjs";
import type { MHtmlCanvasImageData } from "../mixins/MHtmlCanvasImageData.mjs";
import type { MHtmlCanvasImageSmoothing } from "../mixins/MHtmlCanvasImageSmoothing.mjs";
import type { MHtmlCanvasPath } from "../mixins/MHtmlCanvasPath.mjs";
import type { MHtmlCanvasPathDrawingStyles } from "../mixins/MHtmlCanvasPathDrawingStyles.mjs";
import type { MHtmlCanvasRect } from "../mixins/MHtmlCanvasRect.mjs";
import type { MHtmlCanvasShadowStyles } from "../mixins/MHtmlCanvasShadowStyles.mjs";
import type { MHtmlCanvasState } from "../mixins/MHtmlCanvasState.mjs";
import type { MHtmlCanvasText } from "../mixins/MHtmlCanvasText.mjs";
import type { MHtmlCanvasTextDrawingStyles } from "../mixins/MHtmlCanvasTextDrawingStyles.mjs";
import type { MHtmlCanvasTransform } from "../mixins/MHtmlCanvasTransform.mjs";
import type {
  IHtmlOffscreenCanvas,
  MissingOffscreenCanvas,
} from "./IHtmlOffscreenCanvas.mjs";

export interface MissingOffscreenCanvasRenderingContext2D
  extends CanvasState,
    CanvasTransform,
    CanvasCompositing,
    CanvasImageSmoothing,
    CanvasFillStrokeStyles,
    CanvasShadowStyles,
    CanvasFilters,
    CanvasRect,
    CanvasDrawPath,
    CanvasText,
    CanvasDrawImage,
    CanvasImageData,
    CanvasPathDrawingStyles,
    CanvasTextDrawingStyles,
    CanvasPath {
  commit(): void;
  readonly canvas: MissingOffscreenCanvas;
}

export interface IHtmlOffscreenCanvasRenderingContext2D<
  N extends MissingOffscreenCanvasRenderingContext2D
> extends IWrapper<N>,
    MHtmlCanvasState,
    MHtmlCanvasTransform,
    MHtmlCanvasCompositing,
    MHtmlCanvasImageSmoothing,
    MHtmlCanvasFillStrokeStyles,
    MHtmlCanvasShadowStyles,
    MHtmlCanvasFilters,
    MHtmlCanvasRect,
    MHtmlCanvasDrawPath,
    MHtmlCanvasText,
    MHtmlCanvasDrawImage,
    MHtmlCanvasImageData,
    MHtmlCanvasPathDrawingStyles,
    MHtmlCanvasTextDrawingStyles,
    MHtmlCanvasPath {
  commit(): void;
  readonly canvas: IHtmlOffscreenCanvas<MissingOffscreenCanvas>;
}
