import { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import { DHtmlWindowPostMessageOptions } from "../dictionaries/DHtmlWindowPostMessageOptions.js";
import { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.js";
import { MHtmlWindowEventHandlers } from "../mixins/MHtmlWindowEventHandlers.js";
import { IHtmlBarProp } from "./IHtmlBarProp.js";
import { IHtmlCustomElementRegistry } from "./IHtmlCustomElementRegistry.js";
import { IHtmlExternal } from "./IHtmlExternal.js";
import { IHtmlHistory } from "./IHtmlHistory.js";
import { IHtmlLocation } from "./IHtmlLocation.js";
import { IHtmlNavigator } from "./IHtmlNavigator.js";
import { IHtmlWindowProxy } from "./IHtmlWindowProxy.js";

export interface IHtmlWindow<N extends Window>
  extends IWrapper<N>,
    MHtmlGlobalEventHandlers,
    MHtmlWindowEventHandlers {
  // the current browsing context
  readonly window: IHtmlWindowProxy<WindowProxy>;
  readonly self: IHtmlWindowProxy<WindowProxy>;
  readonly document: IHtmlDocument<Document>;
  name: string;
  readonly location: IHtmlLocation<Location>;
  readonly history: IHtmlHistory<History>;
  readonly customElements: IHtmlCustomElementRegistry<CustomElementRegistry>;
  readonly locationbar: IHtmlBarProp<BarProp>;
  readonly menubar: IHtmlBarProp<BarProp>;
  readonly personalbar: IHtmlBarProp<BarProp>;
  readonly scrollbar: IHtmlBarProp<BarProp>;
  readonly statusbar: IHtmlBarProp<BarProp>;
  readonly toolbar: IHtmlBarProp<BarProp>;
  status: string;
  close(): void;
  readonly closed: boolean;
  stop(): void;
  focus(): void;
  blur(): void;

  // other browsing contexts
  readonly frames: IHtmlWindowProxy<WindowProxy>;
  readonly length: number;
  readonly top: O.Option<IHtmlWindowProxy<WindowProxy>>;
  opener: unknown;
  readonly parent: O.Option<IHtmlWindowProxy<WindowProxy>>;
  readonly frameElement: O.Option<IDomElement<Element>>;
  open(
    url?: string,
    target?: string,
    features?: string
  ): O.Option<IHtmlWindowProxy<WindowProxy>>;
  // [name: string]: object; ???

  // the user agent
  readonly navigator: IHtmlNavigator<Navigator>;
  readonly clientInformation: IHtmlNavigator<Navigator>;
  readonly originAgentCluster: boolean;

  // user prompts
  alert(): void;
  alert(message: string): void;
  confirm(message?: string): boolean;
  prompt(message?: string, default_?: string): O.Option<string>;
  print(): void;

  postMessage(
    message: unknown,
    targetOrigin: string,
    transfer?: object[]
  ): void;
  postMessage(message: unknown, options?: DHtmlWindowPostMessageOptions): void;

  // also has obsolete members
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  captureEvents(): void;
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  releaseEvents(): void;
  /** @deprecated Not used anymore. Still returns a value but it's useless. */
  readonly external: IHtmlExternal<External>;
}
