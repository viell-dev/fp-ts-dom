import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "../exceptions/DomException.js";
import { optional, Optional } from "../helpers/Optional.js";
import { IDomDOMImplementation } from "../interfaces/IDomDOMImplementation.js";
import { Dom } from "./Dom.js";
import { DomDocument } from "./DomDocument.js";
import { DomDocumentType } from "./DomDocumentType.js";
import { DomXMLDocument } from "./DomXMLDocument.js";

export class DomDOMImplementation
  extends Dom<DOMImplementation>
  implements IDomDOMImplementation<DOMImplementation>
{
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    DomDocumentType
  > {
    return E.tryCatch(
      () =>
        new DomDocumentType(
          this.native.createDocumentType(qualifiedName, publicId, systemId)
        ),
      (error) =>
        /* eslint-disable-next-line
           @typescript-eslint/consistent-type-assertions
        -- Trusting the spec.
           See: https://dom.spec.whatwg.org/#domimplementation */
        error as InvalidCharacterErrorDomException | NamespaceErrorDomException
    );
  }
  createDocument(
    namespace: string | null,
    qualifiedName: string,
    doctype?: Optional<DocumentType>
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    DomXMLDocument
  > {
    return E.tryCatch(
      () =>
        new DomXMLDocument(
          this.native.createDocument(
            namespace,
            qualifiedName,
            pipe(doctype, optional, O.toUndefined)
          )
        ),
      (error) =>
        /* eslint-disable-next-line
           @typescript-eslint/consistent-type-assertions
        -- Trusting the spec.
           See: https://dom.spec.whatwg.org/#domimplementation */
        error as InvalidCharacterErrorDomException | NamespaceErrorDomException
    );
  }
  createHTMLDocument(title?: Optional<string>): DomDocument {
    return new DomDocument(
      this.native.createHTMLDocument(pipe(title, optional, O.toUndefined))
    );
  }
}
