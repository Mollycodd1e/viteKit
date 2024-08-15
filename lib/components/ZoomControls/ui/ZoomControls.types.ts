type btnSizes = 'medium' | 'large'

export interface IZoomControls {
	size?: btnSizes
	zoomIn: () => void
	zoomOut: () => void
}

