import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { SortSelectProps } from './SortSelect.types'
import s from './SortSelect.module.scss'
import { NewIcon } from '../../NewIcon'
import { Modal, Text, useClientWidth } from '../../../main'
import { useSortSelect } from '../hooks/useSortSelect'

const cx = classNames.bind(s)

export const SortSelect: React.FC<SortSelectProps> = ({
	options,
	selectedOption,
	placeholder = '',
	error,
	disabled,
	additionalClass = '',
	onChange,
	onBlur,
	mini,
	openOnTop = false,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const { isMobile } = useClientWidth()

	const { handleBlur, getInputValue, getOption, handleDocumentClick } = useSortSelect({
		selectedOption,
		setSelectedOption: onChange,
		setIsOpen,
		containerRef,
		isOpen,
		isMobile,
		placeholder,
		onChange,
		onBlur,
	})

	useEffect(() => {
		//@ts-expect-error кастомный эвент
		document.addEventListener('click', handleDocumentClick)
		return () => {
			//@ts-expect-error кастомный эвент
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className={cx(
				s.sortSelectWrapper,
				{ [s.sortSelectWrapperError]: error },
				{ [s.sortSelectWrapperTop]: openOnTop },
				additionalClass
			)}
			tabIndex={0}
			onBlur={handleBlur}>
			<div className={cx(s.inputWrapper)}>
				<input
					type='text'
					readOnly
					value={getInputValue()}
					className={cx(
						s.selectedOptions,
						{ [s.selectOptionsDisabled]: disabled },
						{ [s.selectionOptionMini]: mini }
					)}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<NewIcon
					name={'twoArrows'}
					size='24'
					additionalClass={s.icon}
				/>
			</div>
			{isOpen && isMobile && (
				<Modal
					isOpen={isOpen}
					emitIsOpen={setIsOpen}
					additionalClassModalBody={s.modalAddBody}
					additionalClass={s.selectModal}
					createPortalObj={{ domNode: document.querySelector('body') }}
					isTransparentBack>
					<div className={s.mobileSortHeader}>
						<Text>Сортировка</Text>
						<div onClick={() => setIsOpen(false)}>
							<NewIcon
								name={'close'}
								size={'20'}
							/>
						</div>
					</div>
					<div className={s.mobileOptionList}>{options?.map((option) => getOption(option))}</div>
				</Modal>
			)}
			{isOpen && !isMobile && (
				<div className={cx(s.optionsList, { [s.optionListOnTop]: openOnTop })}>
					{options?.map((option) => getOption(option))}
				</div>
			)}
		</div>
	)
}

SortSelect.displayName = 'SortSelect'
