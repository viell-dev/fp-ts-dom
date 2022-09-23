import type { IHtmlDataTransfer } from "../interfaces/IHtmlDataTransfer.mjs";

export interface DHtmlDragEventInit extends MouseEventInit {
  dataTransfer?: DataTransfer | IHtmlDataTransfer<DataTransfer> | null;
}
