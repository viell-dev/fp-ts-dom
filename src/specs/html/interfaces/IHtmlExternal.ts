import { IWrapper } from "@/wrapper/IWrapper.js";

/** @deprecated Not used anymore. */
export interface IHtmlExternal<N extends External> extends IWrapper<N> {
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  AddSearchProvider(): void;
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  IsSearchProviderInstalled(): void;
}
