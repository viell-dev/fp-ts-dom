import type { IDomCharacterData } from "../../specs/dom/interfaces/IDomCharacterData.mjs";
import { DomCharacterDataBase } from "./DomCharacterDataBase.mjs";

export class DomCharacterData
  extends DomCharacterDataBase<CharacterData>
  implements IDomCharacterData<CharacterData> {}
