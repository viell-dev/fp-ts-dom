import * as E from "fp-ts/Either";
import {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "../exceptions/DomException.js";
import { Optional } from "../helpers/Optional.js";
import { IDom } from "./IDom.js";
import { IDomDocument } from "./IDomDocument.js";
import { IDomDocumentType } from "./IDomDocumentType.js";
import { IDomXMLDocument } from "./IDomXMLDocument.js";

export interface IDomDOMImplementation<N extends DOMImplementation>
  extends IDom<N> {
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomDocumentType<DocumentType>
  >;
  createDocument(
    namepsace: string | null,
    qualifiedName: string | null,
    doctype?: Optional<IDomDocumentType<DocumentType>>
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomXMLDocument<XMLDocument>
  >;
  createHTMLDocument(title?: Optional<string>): IDomDocument<Document>;
}
