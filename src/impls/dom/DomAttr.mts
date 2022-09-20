import type { IDomAttr } from "@/specs/dom/interfaces/IDomAttr.mjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "./DomElement.mjs";
import { DomNodeBase } from "./DomNodeBase.mjs";

export class DomAttr extends DomNodeBase<Attr> implements IDomAttr<Attr> {
  get namespaceURI(): O.Option<string> {
    return O.fromNullable(this.native.namespaceURI);
  }
  get prefix(): O.Option<string> {
    return O.fromNullable(this.native.prefix);
  }
  get localName(): string {
    return this.native.localName;
  }
  get name(): string {
    return this.native.name;
  }
  get value(): string {
    return this.native.value;
  }
  set value(value: string) {
    this.native.value = value;
  }

  get ownerElement(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.ownerElement),
      O.map((element) => new DomElement(element))
    );
  }
}
