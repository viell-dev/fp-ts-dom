import type { EncodingErrorDomException } from "@/exceptions/DomException.mjs";
import type * as O from "fp-ts/Option";
import type * as TE from "fp-ts/TaskEither";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLImageElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLImageElement>;

export interface IHtmlHTMLImageElement
  extends IHtmlHTMLElement<HTMLImageElement> {
  alt: string;
  src: string;
  srcset: string;
  sizes: string;
  crossOrigin: O.Option<string>;
  useMap: string;
  isMap: boolean;
  width: number;
  height: number;
  readonly naturalWidth: number;
  readonly naturalHeight: number;
  readonly complete: boolean;
  readonly currentSrc: string;
  referrerPolicy: string;
  decoding: string;
  loading: string;

  decode(): TE.TaskEither<EncodingErrorDomException, void>;
}
