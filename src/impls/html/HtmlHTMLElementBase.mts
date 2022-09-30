import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type { NoModificationAllowedErrorDomException } from "../../exceptions/DomException.mjs";
import type { IDomEvent } from "../../specs/dom/interfaces/IDomEvent.mjs";
import type { DHtmlFocusOptions } from "../../specs/html/dictionaries/DHtmlFocusOptions.mjs";
import type { IHtmlHTMLElement } from "../../specs/html/interfaces/IHtmlHTMLElement.mjs";
import type {
  MissingEventHandler,
  THtmlEventHandler,
} from "../../specs/html/types/THtmlEventHandler.mjs";
import type { THtmlOnErrorEventHandler } from "../../specs/html/types/THtmlOnErrorEventHandler.mjs";
import { CssomCSSStyleDeclaration } from "../cssom/CssomCSSStyleDeclaration.mjs";
import { DomElementBase } from "../dom/DomElementBase.mjs";
import { DomEvent } from "../dom/DomEvent.mjs";
import { HtmlDOMStringMap } from "./HtmlDOMStringMap.mjs";
import { HtmlElementInternals } from "./HtmlElementInternals.mjs";

interface MissingEventHandlers {
  onbeforeinput: MissingEventHandler;
  onbeforematch: MissingEventHandler;
  oncancel: MissingEventHandler;
  oncontextlost: MissingEventHandler;
  oncontextrestored: MissingEventHandler;
}

export abstract class HtmlHTMLElementBase<N extends HTMLElement>
  extends DomElementBase<N>
  implements IHtmlHTMLElement<N>
{
  get title(): string {
    return this.native.title;
  }
  set title(title: string) {
    this.native.title = title;
  }
  get lang(): string {
    return this.native.lang;
  }
  set lang(lang: string) {
    this.native.lang = lang;
  }
  get translate(): boolean {
    return this.native.translate;
  }
  set translate(translate: boolean) {
    this.native.translate = translate;
  }
  get dir(): string {
    return this.native.dir;
  }
  set dir(dir: string) {
    this.native.dir = dir;
  }

  /** Use {@link setHidden} to set. */
  get hidden(): "until-found" | boolean {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, it returns either the string "until-found" or a
        boolean. */
    return this.native.hidden as "until-found" | boolean;
  }
  setHidden(hidden: boolean | number | string | null): void {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, it accepts either a boolean, number, string or
        null when setting. */
    (this.native.hidden as boolean | number | string | null) = hidden;
  }
  get inert(): boolean {
    return this.native.inert;
  }
  set inert(inert: boolean) {
    this.native.inert = inert;
  }
  click(): void {
    this.native.click();
  }
  get accessKey(): string {
    return this.native.accessKey;
  }
  set accessKey(accessKey: string) {
    this.native.accessKey = accessKey;
  }
  get accessKeyLabel(): string {
    return this.native.accessKeyLabel;
  }
  get draggable(): boolean {
    return this.native.draggable;
  }
  set draggable(draggable: boolean) {
    this.native.draggable = draggable;
  }
  get spellcheck(): boolean {
    return this.native.spellcheck;
  }
  set spellcheck(spellcheck: boolean) {
    this.native.spellcheck = spellcheck;
  }
  get autocapitalize(): string {
    return this.native.autocapitalize;
  }
  set autocapitalize(autocapitalize: string) {
    this.native.autocapitalize = autocapitalize;
  }

  get innerText(): string {
    return this.native.innerHTML;
  }
  set innerText(innerText: string) {
    this.native.innerText = innerText;
  }
  /** Use {@link setOuterText} to set. */
  get outerText(): string {
    return this.native.outerText;
  }
  setOuterText(
    outerText: string
  ): O.Option<NoModificationAllowedErrorDomException> {
    return pipe(
      tuple(outerText),
      E.tryCatchK(
        tupled((outerText) => (this.native.outerText = outerText)),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error: unknown) => error as NoModificationAllowedErrorDomException
      ),
      O.getLeft
    );
  }

  attachInternals(): HtmlElementInternals {
    return new HtmlElementInternals(this.native.attachInternals());
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
      (this.native as N & MissingEventHandlers).onbeforeinput,
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
    (this.native as N & MissingEventHandlers).onbeforeinput = pipe(
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
      (this.native as N & MissingEventHandlers).onbeforematch,
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
    (this.native as N & MissingEventHandlers).onbeforematch = pipe(
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
      (this.native as N & MissingEventHandlers).oncancel,
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
    (this.native as N & MissingEventHandlers).oncancel = pipe(
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
      (this.native as N & MissingEventHandlers).oncontextlost,
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
    (this.native as N & MissingEventHandlers).oncontextlost = pipe(
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
      (this.native as N & MissingEventHandlers).oncontextrestored,
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
    (this.native as N & MissingEventHandlers).oncontextrestored = pipe(
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
            callback.bind<N, any, unknown>(
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

  get oncopy(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncopy as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncopy(oncopy: THtmlEventHandler) {
    this.native.oncopy = pipe(
      oncopy,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get oncut(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.oncut as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set oncut(oncut: THtmlEventHandler) {
    this.native.oncut = pipe(
      oncut,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }
  get onpaste(): THtmlEventHandler {
    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Widening to Event. */
      this.native.onpaste as MissingEventHandler,
      O.fromNullable,
      O.map(
        (callback) => (event: IDomEvent<Event>) =>
          callback.bind(this.getNative(), event.getNative())()
      ),
      O.toNullable
    );
  }
  set onpaste(onpaste: THtmlEventHandler) {
    this.native.onpaste = pipe(
      onpaste,
      O.fromNullable,
      O.map(
        (callback) =>
          (event: Event): unknown =>
            callback.call(this, new DomEvent(event))
      ),
      O.toNullable
    );
  }

  get contentEditable(): string {
    return this.native.contentEditable;
  }
  set contentEditable(contentEditable: string) {
    this.native.contentEditable = contentEditable;
  }
  get enterKeyHint(): string {
    return this.native.enterKeyHint;
  }
  set enterKeyHint(enterKeyHint: string) {
    this.native.enterKeyHint = enterKeyHint;
  }
  get isContentEditable(): boolean {
    return this.native.isContentEditable;
  }
  get inputMode(): string {
    return this.native.inputMode;
  }
  set inputMode(inputMode: string) {
    this.native.inputMode = inputMode;
  }

  get dataset(): HtmlDOMStringMap {
    return new HtmlDOMStringMap(this.native.dataset);
  }
  get nonce(): string {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, this is always a string. It ought to return an
        empty string if not set or if hidden by the browser. */
    return this.native.nonce as string;
  }
  set nonce(nonce: string) {
    this.native.nonce = nonce;
  }

  get autofocus(): boolean {
    return this.native.autofocus;
  }
  set autofocus(autofocus: boolean) {
    this.native.autofocus = autofocus;
  }
  get tabIndex(): number {
    return this.native.tabIndex;
  }
  set tabIndex(tabIndex: number) {
    this.native.tabIndex = tabIndex;
  }
  focus(options?: DHtmlFocusOptions): void {
    pipe(tuple(options), tupled(this.native.focus));
  }
  blur(): void {
    this.native.blur();
  }

  get style(): CssomCSSStyleDeclaration {
    return new CssomCSSStyleDeclaration(this.native.style);
  }
}
