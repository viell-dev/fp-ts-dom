import { IDomXMLDocument } from "../interfaces/IDomXMLDocument.js";
import { DomDocumentBase } from "./DomDocumentBase.js";

export class DomXMLDocument
  extends DomDocumentBase<XMLDocument>
  implements IDomXMLDocument<XMLDocument> {}
