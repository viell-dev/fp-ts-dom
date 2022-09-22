import type {
  EncodingErrorDomException,
  InvalidStateErrorDomException,
  SecurityErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type * as TE from "fp-ts/TaskEither";
import type {
  DHtmlImageEncodingOptions,
  MissingImageEncodingOptions,
} from "../dictionaries/DHtmlImageEncodingOptions.mjs";
import type {
  EHtmlOffscreenRenderingContextId,
  MissingOffscreenRenderingContextId,
} from "../enums/EHtmlOffscreenRenderingContextId.mjs";
import type { MissingOffscreenRenderingContext } from "../types/THtmlOffscreenRenderingContext.mjs";
import type { IHtmlImageBitmap } from "./IHtmlImageBitmap.mjs";

export interface MissingOffscreenCanvas extends EventTarget {
  width: number;
  height: number;

  getContext(
    contextId: MissingOffscreenRenderingContextId,
    options?: unknown
  ): MissingOffscreenRenderingContext;
  transferToImageBitmap(): IHtmlImageBitmap<ImageBitmap>;
  convertToBlob(options?: MissingImageEncodingOptions): Promise<Blob>;
}
// eslint-disable-next-line no-var
export declare var MissingOffscreenCanvas: {
  prototype: MissingOffscreenCanvas;
  new (width: number, height: number): MissingOffscreenCanvas;
};

export interface IHtmlOffscreenCanvas<N extends MissingOffscreenCanvas>
  extends IDomEventTarget<N> {
  width: number;
  height: number;

  getContext(
    contextId: EHtmlOffscreenRenderingContextId,
    options?: unknown
  ): MissingOffscreenRenderingContext;
  transferToImageBitmap(): IHtmlImageBitmap<ImageBitmap>;
  convertToBlob(
    options?: DHtmlImageEncodingOptions
  ): TE.TaskEither<
    | InvalidStateErrorDomException
    | SecurityErrorDomException
    | RangeError
    | EncodingErrorDomException,
    Blob
  >;
}
