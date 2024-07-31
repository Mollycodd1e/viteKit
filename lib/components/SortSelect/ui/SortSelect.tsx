import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { SortSelectProps, Option } from './SortSelect.types'
import s from './SortSelect.module.scss'
import { NewIcon } from '../../NewIcon'
import { Modal, Text, useClientWidth } from '../../../main'
import { useSortSelect } from '../hooks/useSortSelect'

const cx = classNames.bind(s)

export const SortSelect: React.FC<SortSelectProps> = ({
	options,
	placeholder = '',
	error,
	disabled,
	additionalClass = '',
	onChange,
	onBlur,
}) => {
	const [selectedOption, setSelectedOption] = useState<Option | null>(options[0])
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const { isMobile, isDesktop } = useClientWidth()

	const { handleBlur, getInputValue, getOption, handleDocumentClick } = useSortSelect({
		selectedOption,
		setSelectedOption,
		setIsOpen,
		containerRef,
		isOpen,
		isDesktop,
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
			className={cx(s.sortSelectWrapper, { [s.sortSelectWrapperError]: error }, additionalClass)}
			tabIndex={0}
			onBlur={handleBlur}>
			<div className={cx(s.inputWrapper)}>
				<input
					type='text'
					readOnly
					value={getInputValue()}
					className={cx(s.selectedOptions, { [s.selectOptionsDisabled]: disabled })}
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
					additionalClassModalBody={s.modalAddBody}>
					<div className={s.mobileSortHeader}>
						<Text>Сортировка</Text>
						<div onClick={() => setIsOpen(false)}>
							<NewIcon
								name={'close'}
								size={'24'}
							/>
						</div>
					</div>
					<div className={s.mobileOptionList}>{options.map((option) => getOption(option))}</div>
				</Modal>
			)}
			{isOpen && !isMobile && (
				<div className={s.optionsList}>{options.map((option) => getOption(option))}</div>
			)}
		</div>
	)
}

SortSelect.displayName = 'SortSelect'

