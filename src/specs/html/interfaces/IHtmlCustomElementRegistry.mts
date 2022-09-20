import type { SyntaxErrorDomException } from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type * as TE from "fp-ts/TaskEither";
import type { CBHtmlCustomElementConstructor } from "../callbacks/CBHtmlCustomElementConstructor.mjs";
import type { DHtmlElementDefinitionOptions } from "../dictionaries/DHtmlElementDefinitionOptions.mjs";

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
