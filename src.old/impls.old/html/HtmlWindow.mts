import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { flow, pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type { SyntaxErrorDomException } from "../../exceptions/DomException.mjs";
import { getNative } from "../../helpers/getNative.mjs";
import type { IDomEvent } from "../../specs/dom/interfaces/IDomEvent.mjs";
import type { DHtmlWindowPostMessageOptions } from "../../specs/html/dictionaries/DHtmlWindowPostMessageOptions.mjs";
import type { MissingOffscreenCanvas } from "../../specs/html/interfaces/IHtmlOffscreenCanvas.mjs";
import type { IHtmlWindow } from "../../specs/html/interfaces/IHtmlWindow.mjs";
import type {
  MissingEventHandler,
  THtmlEventHandler,
} from "../../specs/html/types/THtmlEventHandler.mjs";
import type { THtmlOnBeforeUnloadEventHandler } from "../../specs/html/types/THtmlOnBeforeUnloadEventHandler.mjs";
import type { THtmlOnErrorEventHandler } from "../../specs/html/types/THtmlOnErrorEventHandler.mjs";
import { DomDocument } from "../dom/DomDocument.mjs";
import { DomElement } from "../dom/DomElement.mjs";
import { DomEvent } from "../dom/DomEvent.mjs";
import { DomEventTargetBase } from "../dom/DomEventTargetBase.mjs";
import { HtmlBarProp } from "./HtmlBarProp.mjs";
import { HtmlCustomElementRegistry } from "./HtmlCustomElementRegistry.mjs";
import { HtmlHistory } from "./HtmlHistory.mjs";
import { HtmlLocation } from "./HtmlLocation.mjs";
import { HtmlNavigator } from "./HtmlNavigator.mjs";
import { HtmlWindowProxy } from "./HtmlWindowProxy.mjs";

interface MissingEventHandlers {
  onbeforeinput: MissingEventHandler;
  onbeforematch: MissingEventHandler;
  oncancel: MissingEventHandler;
  oncontextlost: MissingEventHandler;
  oncontextrestored: MissingEventHandler;
}

export class HtmlWindow
  extends DomEventTargetBase<Window>
  implements IHtmlWindow<Window>
{
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
  ): E.Either<SyntaxErrorDomException, O.Option<HtmlWindowProxy>> {
    return pipe(
      tuple(url, target, features),
      E.tryCatchK(
        tupled(this.native.open),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SyntaxErrorDomException
      ),
      E.map(
        flow(
          O.fromNullable,
          O.map((window) => new HtmlWindowProxy(window))
        )
      )
    );
  }

  get navigator(): HtmlNavigator {
    return new HtmlNavigator(this.native.navigator);
  }
  get originAgentCluster(): boolean {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- originAgentCluster is missing in the TypeScript types. */
    return (this.native as Window & { originAgentCluster: boolean })
      .originAgentCluster;
  }

  alert(): void;
  alert(message: string): void;
  alert(message?: string): void {
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
    transfer?: DHtmlWindowPostMessageOptions["transfer"]
  ): O.Option<SyntaxErrorDomException>;
  postMessage(
    message: unknown,
    options?: DHtmlWindowPostMessageOptions
  ): O.Option<SyntaxErrorDomException>;
  postMessage(
    message: unknown,
    targetOriginOrOptions?: string | DHtmlWindowPostMessageOptions,
    transfer?: DHtmlWindowPostMessageOptions["transfer"]
  ): O.Option<SyntaxErrorDomException> {
    return pipe(
      E.tryCatch(
        () => {
          /* eslint-disable @typescript-eslint/consistent-type-assertions
          -- OffscreenCanvas is missing in the TypeScreen types. */
          if (typeof targetOriginOrOptions === "string") {
            const nativeTransfer = pipe(
              transfer,
              O.fromNullable,
              O.map(
                A.map((transferable) =>
                  transferable instanceof ArrayBuffer
                    ? transferable
                    : getNative(transferable)
                )
              ),
              O.toUndefined
            );

            (
              this.native.postMessage as (
                message: unknown,
                targetOrigin: string,
                transfer?: (
                  | ArrayBuffer
                  | MessagePort
                  | ImageBitmap
                  | MissingOffscreenCanvas
                )[]
              ) => void
            )(message, targetOriginOrOptions, nativeTransfer);
          } else {
            const nativeOptions = pipe(
              targetOriginOrOptions,
              O.fromNullable,
              O.map((options) => {
                const transfer = pipe(
                  options.transfer,
                  O.fromNullable,
                  O.map(
                    A.map((transferable) =>
                      transferable instanceof ArrayBuffer
                        ? transferable
                        : getNative(transferable)
                    )
                  )
                );

                if (O.isSome(transfer)) {
                  options.transfer = transfer.value;
                }

                return options as Omit<
                  DHtmlWindowPostMessageOptions,
                  "transfer"
                > & {
                  transfer?: (
                    | ArrayBuffer
                    | MessagePort
                    | ImageBitmap
                    | MissingOffscreenCanvas
                  )[];
                };
              }),
              O.toUndefined
            );

            (
              this.native.postMessage as (
                message: unknown,
                options?: Omit<WindowPostMessageOptions, "transfer"> & {
                  transfer?: (
                    | ArrayBuffer
                    | MessagePort
                    | ImageBitmap
                    | MissingOffscreenCanvas
                  )[];
                }
              ) => void
            )(message, nativeOptions);
          }
          /* eslint-enable @typescript-eslint/consistent-type-assertions
          -- Re-enable the rule. */
        },
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec; this is the only possible error. */
        (error) => error as SyntaxErrorDomException
      ),
      O.getLeft
    );
  }

  get onabort(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onabort as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onabort(onabort) {
    this.native.onabort = pipe(
      onabort,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onauxclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onauxclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onauxclick(onauxclick) {
    this.native.onauxclick = pipe(
      onauxclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeinput(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- onbeforeinput is missing in the TypeScript types. */
      (this.native as Window & MissingEventHandlers).onbeforeinput,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforeinput(onbeforeinput) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- onbeforeinput is missing in the TypeScript types. */
    (this.native as Window & MissingEventHandlers).onbeforeinput = pipe(
      onbeforeinput,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforematch(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- onbeforematch is missing in the TypeScript types. */
      (this.native as Window & MissingEventHandlers).onbeforematch,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforematch(onbeforematch) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- onbeforematch is missing in the TypeScript types. */
    (this.native as Window & MissingEventHandlers).onbeforematch = pipe(
      onbeforematch,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onblur(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onblur as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onblur(onblur) {
    this.native.onblur = pipe(
      onblur,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncancel(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncancel is missing in the TypeScript types. */
      (this.native as Window & MissingEventHandlers).oncancel,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncancel(oncancel) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncancel is missing in the TypeScript types. */
    (this.native as Window & MissingEventHandlers).oncancel = pipe(
      oncancel,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncanplay(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncanplay as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncanplay(oncanplay) {
    this.native.oncanplay = pipe(
      oncanplay,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncanplaythrough(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncanplaythrough as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncanplaythrough(oncanplaythrough) {
    this.native.oncanplaythrough = pipe(
      oncanplaythrough,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onchange(onchange) {
    this.native.onchange = pipe(
      onchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onclick(onclick) {
    this.native.onclick = pipe(
      onclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onclose(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onclose as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onclose(onclose) {
    this.native.onclose = pipe(
      onclose,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextlost(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncontextlost is missing in the TypeScript types. */
      (this.native as Window & MissingEventHandlers).oncontextlost,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextlost(oncontextlost) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncontextlost is missing in the TypeScript types. */
    (this.native as Window & MissingEventHandlers).oncontextlost = pipe(
      oncontextlost,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextmenu(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncontextmenu as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextmenu(oncontextmenu) {
    this.native.oncontextmenu = pipe(
      oncontextmenu,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncontextrestored(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- oncontextrestored is missing in the TypeScript types. */
      (this.native as Window & MissingEventHandlers).oncontextrestored,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncontextrestored(oncontextrestored) {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- oncontextrestored is missing in the TypeScript types. */
    (this.native as Window & MissingEventHandlers).oncontextrestored = pipe(
      oncontextrestored,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncuechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncuechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncuechange(oncuechange) {
    this.native.oncuechange = pipe(
      oncuechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondblclick(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondblclick as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondblclick(ondblclick) {
    this.native.ondblclick = pipe(
      ondblclick,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondrag(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondrag as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondrag(ondrag) {
    this.native.ondrag = pipe(
      ondrag,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragend(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragend as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragend(ondragend) {
    this.native.ondragend = pipe(
      ondragend,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragenter(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragenter as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragenter(ondragenter) {
    this.native.ondragenter = pipe(
      ondragenter,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragleave(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragleave as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragleave(ondragleave) {
    this.native.ondragleave = pipe(
      ondragleave,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragover(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragover as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragover(ondragover) {
    this.native.ondragover = pipe(
      ondragover,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondragstart(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondragstart as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondragstart(ondragstart) {
    this.native.ondragstart = pipe(
      ondragstart,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondrop(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondrop as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondrop(ondrop) {
    this.native.ondrop = pipe(
      ondrop,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ondurationchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ondurationchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ondurationchange(ondurationchange) {
    this.native.ondurationchange = pipe(
      ondurationchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onemptied(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onemptied as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onemptied(onemptied) {
    this.native.onemptied = pipe(
      onemptied,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onended(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onended as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onended(onended) {
    this.native.onended = pipe(
      onended,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onerror(): THtmlOnErrorEventHandler {
    return pipe(
      this.native.onerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (
            event: IDomEvent<Event> | string,
            source?: string,
            lineno?: number,
            colno?: number,
            error?: Error
          ) =>
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any
            -- Allow any here */
            callback.bind<Window, any, unknown>(
              this.getNative(),
              typeof event === "string" ? event : event.getNative(),
              source,
              lineno,
              colno,
              error
            )()
      ),
      O.toNullable
    );
  }
  set onerror(onerror) {
    this.native.onerror = pipe(
      onerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (
            event: string | Event,
            source?: string,
            lineno?: number,
            colno?: number,
            error?: Error
          ): unknown =>
            callback.call(
              this,
              typeof event === "string" ? event : new DomEvent(event),
              source,
              lineno,
              colno,
              error
            )
      ),
      O.toNullable
    );
  }
  get onfocus(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onfocus as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onfocus(onfocus) {
    this.native.onfocus = pipe(
      onfocus,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onformdata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onformdata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onformdata(onformdata) {
    this.native.onformdata = pipe(
      onformdata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oninput(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oninput as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oninput(oninput) {
    this.native.oninput = pipe(
      oninput,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oninvalid(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oninvalid as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oninvalid(oninvalid) {
    this.native.oninvalid = pipe(
      oninvalid,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onkeydown(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onkeydown as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onkeydown(onkeydown) {
    this.native.onkeydown = pipe(
      onkeydown,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onkeyup(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onkeyup as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onkeyup(onkeyup) {
    this.native.onkeyup = pipe(
      onkeyup,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onload(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onload as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onload(onload) {
    this.native.onload = pipe(
      onload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadeddata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadeddata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadeddata(onloadeddata) {
    this.native.onloadeddata = pipe(
      onloadeddata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadedmetadata(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadedmetadata as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadedmetadata(onloadedmetadata) {
    this.native.onloadedmetadata = pipe(
      onloadedmetadata,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onloadstart(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onloadstart as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onloadstart(onloadstart) {
    this.native.onloadstart = pipe(
      onloadstart,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmousedown(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmousedown as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmousedown(onmousedown) {
    this.native.onmousedown = pipe(
      onmousedown,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseenter(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseenter as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseenter(onmouseenter) {
    this.native.onmouseenter = pipe(
      onmouseenter,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseleave(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseleave as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseleave(onmouseleave) {
    this.native.onmouseleave = pipe(
      onmouseleave,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmousemove(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmousemove as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmousemove(onmousemove) {
    this.native.onmousemove = pipe(
      onmousemove,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseout(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseout as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseout(onmouseout) {
    this.native.onmouseout = pipe(
      onmouseout,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseover(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseover as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseover(onmouseover) {
    this.native.onmouseover = pipe(
      onmouseover,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmouseup(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmouseup as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmouseup(onmouseup) {
    this.native.onmouseup = pipe(
      onmouseup,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpause(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpause as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpause(onpause) {
    this.native.onpause = pipe(
      onpause,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onplay(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onplay as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onplay(onplay) {
    this.native.onplay = pipe(
      onplay,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onplaying(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onplaying as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onplaying(onplaying) {
    this.native.onplaying = pipe(
      onplaying,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onprogress(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onprogress as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onprogress(onprogress) {
    this.native.onprogress = pipe(
      onprogress,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onratechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onratechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onratechange(onratechange) {
    this.native.onratechange = pipe(
      onratechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onreset(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onreset as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onreset(onreset) {
    this.native.onreset = pipe(
      onreset,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onresize(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onresize as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onresize(onresize) {
    this.native.onresize = pipe(
      onresize,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onscroll(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onscroll as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onscroll(onscroll) {
    this.native.onscroll = pipe(
      onscroll,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsecuritypolicyviolation(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsecuritypolicyviolation as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsecuritypolicyviolation(onsecuritypolicyviolation) {
    this.native.onsecuritypolicyviolation = pipe(
      onsecuritypolicyviolation,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onseeked(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onseeked as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onseeked(onseeked) {
    this.native.onseeked = pipe(
      onseeked,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onseeking(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onseeking as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onseeking(onseeking) {
    this.native.onseeking = pipe(
      onseeking,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onselect(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onselect as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onselect(onselect) {
    this.native.onselect = pipe(
      onselect,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onslotchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onslotchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onslotchange(onslotchange) {
    this.native.onslotchange = pipe(
      onslotchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onstalled(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onstalled as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onstalled(onstalled) {
    this.native.onstalled = pipe(
      onstalled,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsubmit(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsubmit as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsubmit(onsubmit) {
    this.native.onsubmit = pipe(
      onsubmit,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onsuspend(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onsuspend as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onsuspend(onsuspend) {
    this.native.onsuspend = pipe(
      onsuspend,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ontimeupdate(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ontimeupdate as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ontimeupdate(ontimeupdate) {
    this.native.ontimeupdate = pipe(
      ontimeupdate,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ontoggle(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ontoggle as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ontoggle(ontoggle) {
    this.native.ontoggle = pipe(
      ontoggle,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onvolumechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onvolumechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onvolumechange(onvolumechange) {
    this.native.onvolumechange = pipe(
      onvolumechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onwaiting(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onwaiting as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onwaiting(onwaiting) {
    this.native.onwaiting = pipe(
      onwaiting,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onwheel(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onwheel as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onwheel(onwheel) {
    this.native.onwheel = pipe(
      onwheel,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }

  get onafterprint(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onafterprint as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onafterprint(onafterprint) {
    this.native.onafterprint = pipe(
      onafterprint,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeprint(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onbeforeprint as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onbeforeprint(onbeforeprint) {
    this.native.onbeforeprint = pipe(
      onbeforeprint,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onbeforeunload(): THtmlOnBeforeUnloadEventHandler {
    return pipe(
      this.native.onbeforeunload,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          pipe(
            callback.bind(this.getNative(), event.getNative())(),
            O.fromNullable
          )
      ),
      O.toNullable
    );
  }
  set onbeforeunload(onbeforeunload) {
    this.native.onbeforeunload = pipe(
      onbeforeunload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onhashchange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onhashchange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onhashchange(onhashchange) {
    this.native.onhashchange = pipe(
      onhashchange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onlanguagechange(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onlanguagechange as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onlanguagechange(onlanguagechange) {
    this.native.onlanguagechange = pipe(
      onlanguagechange,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmessage(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmessage as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmessage(onmessage) {
    this.native.onmessage = pipe(
      onmessage,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onmessageerror(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onmessageerror as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onmessageerror(onmessageerror) {
    this.native.onmessageerror = pipe(
      onmessageerror,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onoffline(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onoffline as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onoffline(onoffline) {
    this.native.onoffline = pipe(
      onoffline,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get ononline(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.ononline as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set ononline(ononline) {
    this.native.ononline = pipe(
      ononline,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpagehide(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpagehide as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpagehide(onpagehide) {
    this.native.onpagehide = pipe(
      onpagehide,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpageshow(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpageshow as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpageshow(onpageshow) {
    this.native.onpageshow = pipe(
      onpageshow,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpopstate(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpopstate as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpopstate(onpopstate) {
    this.native.onpopstate = pipe(
      onpopstate,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onrejectionhandled(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onrejectionhandled as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onrejectionhandled(onrejectionhandled) {
    this.native.onrejectionhandled = pipe(
      onrejectionhandled,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onstorage(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onstorage as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onstorage(onstorage) {
    this.native.onstorage = pipe(
      onstorage,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onunhandledrejection(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onunhandledrejection as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onunhandledrejection(onunhandledrejection) {
    this.native.onunhandledrejection = pipe(
      onunhandledrejection,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onunload(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onunload as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onunload(onunload) {
    this.native.onunload = pipe(
      onunload,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
}
