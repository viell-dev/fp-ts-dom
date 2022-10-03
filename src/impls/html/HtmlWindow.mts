import { pipe } from "fp-ts/function";
import type { IHtmlWindow } from "../../specs/html/interfaces/IHtmlWindow.mjs";
import { name } from "./HtmlWindow/name.mjs";

export type Wrapped<T> = { readonly native: T };

export const wrapNative = <T extends unknown>(native: T): Wrapped<T> => ({
  native,
});

export const wrappedWindow = (
  window: Window
): Pick<IHtmlWindow<Window>, "name"> => {
  const native = pipe(window, wrapNative);

  return Object.assign(native, name(native));
};

wrappedWindow(window).name;
