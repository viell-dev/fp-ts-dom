import { MDomChildNode } from "../mixins/MDomChildNode.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomDocumentType<N extends DocumentType>
  extends IDomNode<N>,
    MDomChildNode {
  readonly name: string;
  readonly publicId: string;
  readonly systemId: string;
}
