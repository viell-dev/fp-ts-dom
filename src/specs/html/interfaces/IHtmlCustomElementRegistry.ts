import type { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import type { IWrapper } from "@/global/IWrapper.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import type * as O from "fp-ts/Option";
import type * as TE from "fp-ts/TaskEither";
import type { CBHtmlCustomElementConstructor } from "../callbacks/CBHtmlCustomElementConstructor.js";
import type { DHtmlElementDefinitionOptions } from "../dictionaries/DHtmlElementDefinitionOptions.js";

export interface IHtmlCustomElementRegistry<N extends CustomElementRegistry>
  extends IWrapper<N> {
  define(
    name: string,
    constructor: CBHtmlCustomElementConstructor,
    options?: DHtmlElementDefinitionOptions
  ): void;
  get(name: string): O.Option<CBHtmlCustomElementConstructor>;
  whenDefined(
    name: string
  ): TE.TaskEither<SyntaxErrorDomException, CBHtmlCustomElementConstructor>;
  upgrade(root: Node | IDomNode<Node>): void;
}
