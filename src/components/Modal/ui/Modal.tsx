import React, { FC, useEffect } from 'react'
import s from './Modal.module.scss'

interface IModalProps {
	isOpen: boolean
	emitIsOpen: (isOpen: boolean) => void
	additionalClass?: string
	children?: React.ReactNode
}

export const Modal: FC<IModalProps> = ({
	isOpen = false,
	additionalClass,
	emitIsOpen,
	children,
}) => {
	const closeModal = () => {
		emitIsOpen(false)
	}

	useEffect(() => {
		const enable = () => {
			document.body.classList.toggle('disable-scroll')
		}

		const disable = () => {
			document.body.classList.remove('disable-scroll')
		}

		if (isOpen) {
			enable()
			return disable
		}
	}, [isOpen])

	if (isOpen) {
		return (
			<div className={`${s.root} ${additionalClass}`}>
				<div
					onClick={closeModal}
					className={s.modalOverlay}
				/>

				<div className={s.modalBody}>
					<div className={s.modalContentWrapper}>
						<div className={s.modalContent}>{children}</div>
					</div>
				</div>
			</div>
		)
	}
	return <></>
}

