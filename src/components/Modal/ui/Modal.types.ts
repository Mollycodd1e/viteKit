import { Dispatch, SetStateAction } from 'react'

export interface IModalProps {
	isOpen: boolean
	emitIsOpen: Dispatch<SetStateAction<boolean>>
	additionalClass?: string
	additionalClassOverlay?: string
	additionalClassModalBody?: string
	children?: React.ReactNode
	isTransparentBack?: boolean
	isClickOutside?: boolean
	leaveDisableScroll?: boolean
	notDisableScroll?: boolean
	createPortalObj?: { domNode: HTMLElement | null; key?: string | null | undefined }
	opacity?: number
	colorOverlay?: string
	modalBodyRef?: React.RefObject<HTMLDivElement>
	additionalStylesModalBody?: React.CSSProperties
}
