import { Wrapper } from "@/global/Wrapper.js";
import type { IHtmlWindow } from "@/specs/html/interfaces/IHtmlWindow.js";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomDocument } from "../dom/DomDocument.js";
import { HtmlWindowProxy } from "./HtmlWindowProxy.js";

export class HtmlWindow extends Wrapper<Window> implements IHtmlWindow<Window> {
  get window(): HtmlWindowProxy {
    return new HtmlWindowProxy(this.native.window);
  }
  get self(): HtmlWindowProxy {
    return new HtmlWindowProxy(this.native.self);
  }
  get document(): DomDocument {
    return new DomDocument(this.native.document);
  }
  get name(): string {
    return this.native.name;
  }
  set name(name: string) {
    this.native.name = name;
  }
  get location(): HtmlLocation {
    return new HtmlLocation(this.native.location);
  }
  get history(): HtmlHistory {
    return new HtmlHistory(this.native.history);
  }
  get customElements(): HtmlCustomElementRegistry {
    return new HtmlCustomElementRegistry(this.native.customElements);
  }
  get locationbar(): HtmlBarProp {
    return new HtmlBarProp(this.native.locationbar);
  }
  get menubar(): HtmlBarProp {
    return new HtmlBarProp(this.native.menubar);
  }
  get personalbar(): HtmlBarProp {
    return new HtmlBarProp(this.native.personalbar);
  }
  get scrollbars(): HtmlBarProp {
    return new HtmlBarProp(this.native.scrollbars);
  }
  get statusbar(): HtmlBarProp {
    return new HtmlBarProp(this.native.statusbar);
  }
  get toolbar(): HtmlBarProp {
    return new HtmlBarProp(this.native.toolbar);
  }
  get status(): string {
    return this.native.status;
  }
  set status(status: string) {
    this.native.status = status;
  }
  close(): void {
    this.native.close();
  }
  get closed(): boolean {
    return this.native.closed;
  }
  stop(): void {
    this.native.stop();
  }
  focus(): void {
    this.native.focus();
  }
  blur(): void {
    this.native.blur();
  }

  // other browsing contexts
  get frames(): HtmlWindowProxy {
    return new HtmlWindowProxy(this.native.frames);
  }
  get length(): number {
    return this.native.length;
  }
  get top(): O.Option<HtmlWindowProxy> {
    return pipe(
      this.native.top,
      O.fromNullable,
      O.map((top) => new HtmlWindowProxy(top))
    );
  }
  opener: unknown;
  get parent(): O.Option<HtmlWindowProxy> {
    return pipe(
      this.native.parent,
      O.fromNullable,
      O.map((parent) => new HtmlWindowProxy(parent))
    );
  }
  get frameElement(): O.Option<DomElement> {
    return pipe(
      this.native.frameElement,
      O.fromNullable,
      O.map((frameElement) => new DomElement(frameElement))
    );
  }
  open(
    url?: string,
    target?: string,
    features?: string
  ): O.Option<HtmlWindowProxy> {
    return pipe(
      this.native.open(url, target, features),
      O.fromNullable,
      O.map((open) => new HtmlWindowProxy(open))
    );
  }
  // [name: string]: object; ???

  // the user agent
  get navigator(): HtmlNavigator {
    return new HtmlNavigator(this.native.navigator);
  }
  get clientInformation(): HtmlNavigator {
    return new HtmlNavigator(this.native.clientInformation);
  }
  get originAgentCluster(): boolean {
    return this.native.originAgentCluster;
  }

  // user prompts
  alert(): void {
    this.native.alert();
  }
  alert(message: string): void {
    this.native.alert(message);
  }
  confirm(message?: string): boolean {
    return this.native.confirm(message);
  }
  prompt(message?: string, default_?: string): O.Option<string> {
    return pipe(this.native.prompt(message, default_), O.fromNullable);
  }
  print(): void {
    this.native.print();
  }

  postMessage(
    message: unknown,
    targetOrigin: string,
    transfer?: object[]
  ): void {
    this.native.postMessage(message, targetOrigin, transfer);
  }
  postMessage(message: unknown, options?: DHtmlWindowPostMessageOptions): void {
    this.native.postMessage(message, options);
  }

  // also has obsolete members
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  captureEvents(): void {
    this.native.captureEvents();
  }
  /** @deprecated Not used anymore. Supposed to do nothing according to spec. */
  releaseEvents(): void {
    this.native.releaseEvents();
  }
  /** @deprecated Not used anymore. Still returns a value but it's useless. */
  get external(): HtmlExternal {
    return new HtmlExternal(this.native.external);
  }
}
