import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type {
  InvalidStateErrorDomException,
  SecurityErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { CBHtmlBlobCallback } from "../callbacks/CBHtmlBlobCallback.mjs";
import type { THtmlRenderingContext } from "../types/THtmlRenderingContext.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type {
  IHtmlOffscreenCanvas,
  MissingOffscreenCanvas,
} from "./IHtmlOffscreenCanvas.mjs";

export type IHtmlHTMLCanvasElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLCanvasElement>;

export interface IHtmlHTMLCanvasElement<N extends HTMLCanvasElement>
  extends IHtmlHTMLElement<N> {
  /**
   * @throws
   * When setting, if the context mode of the `canvas` element is set to
   * placeholder, then throw an "InvalidStateError" DOMException.
   */
  width: number;
  /**
   * @throws
   * When setting, if the context mode of the `canvas` element is set to
   * placeholder, then throw an "InvalidStateError" DOMException.
   */
  height: number;

  getContext(
    contextId: string,
    options?: unknown
  ): E.Either<InvalidStateErrorDomException, O.Option<THtmlRenderingContext>>;

  toDataURL(
    type?: string,
    quality?: unknown
  ): E.Either<SecurityErrorDomException, string>;
  toBlob(
    _callback: CBHtmlBlobCallback,
    type?: string,
    quality?: unknown
  ): O.Option<SecurityErrorDomException>;
  transferControlToOffscreen(): E.Either<
    InvalidStateErrorDomException,
    IHtmlOffscreenCanvas<MissingOffscreenCanvas>
  >;
}
