import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IHtmlPath2D } from "../interfaces/IHtmlPath2D.mjs";

export interface MHtmlCanvasUserInterface {
  drawFocusIfNeeded(element: IDomElement<Element>): void;
  drawFocusIfNeeded(
    path: IHtmlPath2D<Path2D>,
    element: IDomElement<Element>
  ): void;
  scrollPathIntoView(): void;
  scrollPathIntoView(path: IHtmlPath2D<Path2D>): void;
}
