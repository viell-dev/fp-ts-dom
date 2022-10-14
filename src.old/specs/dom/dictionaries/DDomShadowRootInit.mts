import type { EDomShadowRootMode } from "../enums/EDomShadowRootMode.mjs";

export interface DDomShadowRootInit {
  mode: EDomShadowRootMode;
  delegatesFocus?: boolean;
  slotAssignment?: SlotAssignmentMode;
}
