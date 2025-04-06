import {btnSizes} from "../../RoundButton/ui/RoundButton.types.ts";

export interface IZoomControls {
	size?: btnSizes
	zoomIn: () => void
	zoomOut: () => void
}

