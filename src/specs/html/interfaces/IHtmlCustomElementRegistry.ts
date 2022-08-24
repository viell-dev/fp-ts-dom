import { SyntaxErrorDomException } from "@/exceptions/DomException.js";
import { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import * as TE from "fp-ts/TaskEither";
import { CBHtmlCustomElementConstructor } from "../callbacks/CBHtmlCustomElementConstructor.js";
import { DHtmlElementDefinitionOptions } from "../dictionaries/DHtmlElementDefinitionOptions.js";

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
