/* eslint eslint-comments/require-description: off */
/* eslint-disable no-var, eslint-comments/disable-enable-pair,
    @typescript-eslint/no-explicit-any */

export interface SVGUnknownElement extends SVGGraphicsElement {
  addEventListener<K extends keyof SVGElementEventMap>(
    type: K,
    listener: (this: SVGUnknownElement, ev: SVGElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SVGElementEventMap>(
    type: K,
    listener: (this: SVGUnknownElement, ev: SVGElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

export declare var SVGUnknownElement: {
  prototype: SVGUnknownElement;
  new (): SVGUnknownElement;
};
