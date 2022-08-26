import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.js";
import type { IHtmlDocument } from "@/specs/html/interfaces/IHtmlDocument.js";
import type { ISvg2Document } from "@/specs/svg2/interfaces/ISvg2Document.js";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomNodeBase } from "./DomNodeBase.js";

export class DomDocument
  extends DomNodeBase<Document>
  implements
    IDomDocument<Document>,
    IHtmlDocument<Document>,
    ISvg2Document<Document>
{
  constructor(document: Document) {
    super(document);
  }
  private implementationInternal: O.Option<DomDOMImplementation> = O.none;

  get implementation(): DomDOMImplementation {
    if (O.isSome(this.implementationInternal))
      return this.implementationInternal.value;

    const implementation = new DomDOMImplementation(this.native.implementation);
    this.implementationInternal = O.some(implementation);
    return implementation;
  }
  get URL(): string {
    return this.native.URL;
  }
  get documentURI(): string {
    return this.native.documentURI;
  }
  get compatMode(): string {
    return this.native.compatMode;
  }
  get characterSet(): string {
    return this.native.characterSet;
  }
  get contentType(): string {
    return this.native.contentType;
  }

  get doctype(): O.Option<DomDocumentType> {
    return pipe(
      this.native.doctype,
      O.fromNullable,
      O.map((doctype) => new DomDocumentType(doctype))
    );
  }
}
