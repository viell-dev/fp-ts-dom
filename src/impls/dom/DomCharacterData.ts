import type { IDomCharacterData } from "@/specs/dom/interfaces/IDomCharacterData.js";
import { DomCharacterDataBase } from "./DomCharacterDataBase.js";

export class DomCharacterData
  extends DomCharacterDataBase<CharacterData>
  implements IDomCharacterData<CharacterData> {}
