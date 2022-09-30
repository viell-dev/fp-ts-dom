import type * as O from "fp-ts/Option";
import type * as TE from "fp-ts/TaskEither";
import type {
  NotSupportedErrorDomException,
  SyntaxErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomNode } from "../../dom/interfaces/IDomNode.mjs";
import type { CBHtmlCustomElementConstructor } from "../callbacks/CBHtmlCustomElementConstructor.mjs";
import type { DHtmlElementDefinitionOptions } from "../dictionaries/DHtmlElementDefinitionOptions.mjs";

export interface IHtmlCustomElementRegistry<N extends CustomElementRegistry>
  extends IWrapper<N> {
  define(
    name: string,
    constructor: CBHtmlCustomElementConstructor,
    options?: DHtmlElementDefinitionOptions
  ): O.Option<
    NotSupportedErrorDomException | SyntaxErrorDomException | TypeError
  >;
  get(name: string): O.Option<CBHtmlCustomElementConstructor>;
  whenDefined(
    name: string
  ): TE.TaskEither<SyntaxErrorDomException, CBHtmlCustomElementConstructor>;
  upgrade(
    root: Node | IDomNode<Node>
  ): O.Option<NotSupportedErrorDomException | TypeError>;
}
