import React, { useState, useRef, useEffect, useCallback, memo, ChangeEvent } from 'react'
import classNames from 'classnames'
import { MultiSelectProps, Option } from './Select.types'
import s from './Select.module.scss'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

const SelectComponent: React.FC<MultiSelectProps> = ({
	options,
	placeholder = 'Выберите опции',
	error,
	disabled,
	additionalClass = '',
	onChange,
	onBlur,
	selectedValues = [],
}) => {
	const [selectedOptions, setSelectedOptions] = useState<Option[]>(selectedValues)
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleOptionClick = useCallback(
		(option: Option) => () => {
			const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
				? selectedOptions.filter((selected) => selected.value !== option.value)
				: [...selectedOptions, option]

			setSelectedOptions(newSelectedOptions)

			if (onChange) {
				onChange(newSelectedOptions as unknown as ChangeEvent<HTMLInputElement>)
			}
		},
		[selectedOptions, onChange]
	)

	const handleDocumentClick = useCallback((event: MouseEvent) => {
		if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}, [])

	const handleBlur = useCallback(() => {
		if (onBlur) {
			onBlur(selectedOptions as unknown as ChangeEvent<HTMLInputElement>)
		}
	}, [selectedOptions, onBlur])

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick)
		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [handleDocumentClick])

	const prevSelectedValuesRef = useRef(selectedValues)
	useEffect(() => {
		if (selectedValues.length !== prevSelectedValuesRef.current.length) {
			setSelectedOptions(selectedValues)
			prevSelectedValuesRef.current = selectedValues
		}
	}, [selectedValues])

	return (
		<div
			ref={containerRef}
			className={cx(s.multiSelectWrapper, { [s.multiSelectWrapperError]: error }, additionalClass)}
			tabIndex={0}
			onBlur={handleBlur}>
			<div className={cx(s.inputWrapper)}>
				<input
					type='text'
					readOnly
					autoCorrect='off'
					autoComplete='off'
					value={
						selectedOptions.length === 0
							? placeholder
							: 'Выбрано ' + selectedOptions.length + ' опции'
					}
					className={cx(s.selectedOptions, { [s.selectOptionsDisabled]: disabled })}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<NewIcon
					name={'arrowShort'}
					deg={isOpen ? '180' : '0'}
					size='24'
					additionalClass={s.icon}
				/>
			</div>
			{isOpen && (
				<div className={s.optionsList}>
					{options?.map((option) => (
						<div
							key={option.label}
							className={cx(s.option, {
								[s.selected]: selectedOptions.some((selected) => selected.value === option.value),
							})}
							onClick={handleOptionClick(option)}>
							<div>{option.label}</div>
							<NewIcon
								size='20'
								name={
									selectedOptions.some((selected) => selected.value === option.value)
										? 'selectChecked'
										: 'selectUnchecked'
								}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export const Select = memo(SelectComponent)
Select.displayName = 'Select'
