import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
import { IModalProps } from './Modal.types'

export const Modal: FC<IModalProps> = ({
	isOpen,
	emitIsOpen,
	isTransparentBack = false,
	isClickOutside = true,
	leaveDisableScroll,
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
			if (document.body.classList.contains('disable-scroll')) return
			document.body.classList.add('disable-scroll')
		} else {
			!leaveDisableScroll && document.body.classList.remove('disable-scroll')
		}
		// Cleanup function to remove the class if the component unmounts
		return () => document.body.classList.remove('disable-scroll')
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
