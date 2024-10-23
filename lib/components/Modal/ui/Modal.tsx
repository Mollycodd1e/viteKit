import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
import { IModalProps } from './Modal.types'

export const Modal: FC<IModalProps> = ({
	isOpen,
	emitIsOpen,
	isTransparentBack = false,
	isClickOutside = true,
	leaveDisableScroll = false,
	createPortalObj,
	additionalClass,
	additionalClassOverlay,
	additionalClassModalBody,
	opacity = 0.7,
	colorOverlay,
	notDisableScroll = false,
	children,
}) => {
	const closeModal = () => {
		if (isClickOutside) emitIsOpen(false)
	}

	useEffect(() => {
		if (notDisableScroll) return
		if (isOpen) {
			if (document.body.classList.contains('disable-scroll')) return
			document.body.classList.add('disable-scroll')
		} else {
			if (leaveDisableScroll) return
			document.body.classList.remove('disable-scroll')
		}

		return () => {
			if (leaveDisableScroll) return
			document.body.classList.remove('disable-scroll')
		}
	}, [isOpen])

	const modalContent = (
		<div
			className={`${s.root} ${additionalClass}`}
			onClick={(e) => e.stopPropagation()}>
			<div
				onClick={closeModal}
				className={`${s.modalOverlay} ${additionalClassOverlay} ${
					isTransparentBack ? s.isTransparentBack : ''
				}`}
				style={{
					opacity: isTransparentBack ? opacity : undefined,
					backgroundColor: colorOverlay ? colorOverlay : undefined,
				}}
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
