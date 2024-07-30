import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'

interface IModalProps {
	isOpen: boolean
	emitIsOpen: Dispatch<SetStateAction<boolean>>
	additionalClass?: string
	additionalClassOverlay?: string
	additionalClassModalBody?: string
	children?: React.ReactNode
	isTransparentBack?: boolean
	isClickOutside?: boolean
	createPortalObj?: { domNode: HTMLElement | null; key?: string | null | undefined }
}

export const Modal: FC<IModalProps> = ({
	isOpen,
	emitIsOpen,
	isTransparentBack = false,
	isClickOutside = true,
	createPortalObj,
	additionalClass,
	additionalClassOverlay,
	additionalClassModalBody,
	children,
}) => {
	const closeModal = () => {
		if (isClickOutside) emitIsOpen(false)
	}

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('disable-scroll')
		} else {
			document.body.classList.remove('disable-scroll')
		}
		// Cleanup function to remove the class if the component unmounts
		return () => document.body.classList.remove('disable-scroll')
	}, [isOpen])

	const modalContent = (
		<div className={`${s.root} ${additionalClass}`}>
			<div
				onClick={closeModal}
				className={`${s.modalOverlay} ${additionalClassOverlay} ${
					isTransparentBack ? s.isTransparentBack : ''
				}`}
			/>
			<div className={`${s.modalBody} ${additionalClassModalBody}`}>{children}</div>
		</div>
	)

	if (isOpen) {
		if (createPortalObj?.domNode) {
			return createPortal(modalContent, createPortalObj.domNode, createPortalObj.key)
		}
		return modalContent
	}

	return null
}
