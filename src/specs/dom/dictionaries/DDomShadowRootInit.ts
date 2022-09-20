import type { EDomShadowRootMode } from "../enums/EDomShadowRootMode.js";

export interface DDomShadowRootInit {
  mode: EDomShadowRootMode;
  delegatesFocus?: boolean;
  slotAssignment?: SlotAssignmentMode;
}
