import { MouseEvent } from 'react'
import { Option } from '../ui/SortSelect.types'
import s from './../ui/SortSelect.module.scss'
import classNames from 'classnames'

const cx = classNames.bind(s)

interface IUseSortSelect {
	selectedOption: Option | null
	setSelectedOption: React.Dispatch<React.SetStateAction<Option | null>>
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	containerRef: React.RefObject<HTMLDivElement>
	isOpen: boolean
	isMobile: boolean
	placeholder: string
	onChange?: (event: React.MouseEvent<HTMLDivElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
}

export const useSortSelect = ({
	selectedOption,
	setSelectedOption,
	setIsOpen,
	containerRef,
	onBlur,
	onChange,
	isMobile,
	placeholder,
}: IUseSortSelect) => {
	const handleOptionClick = (option: Option) => (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()

		const newSelectedOption = selectedOption?.value === option.value ? null : option

		setSelectedOption(newSelectedOption)

		if (onChange) {
			// Передаем кастомное событие с нужными данными
			const customEvent = {
				...event,
				target: { value: newSelectedOption },
			}
			onChange(customEvent as unknown as MouseEvent<HTMLDivElement>)
		}
		setIsOpen(false) // Close the dropdown after selection
	}

	const handleDocumentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		if (onBlur) {
			const customEvent = {
				...event,
				target: { value: selectedOption },
			}
			onBlur(customEvent as unknown as React.FocusEvent<HTMLDivElement>)
		}
	}

	const getInputValue = () => {
		if (isMobile) return ''
		if (!selectedOption) return placeholder
		return selectedOption.label
	}

	const getOption = (option: Option) => {
		return (
			<div
				key={option.value}
				className={cx(s.option, {
					[s.selected]: selectedOption?.value === option.value,
				})}
				onClick={handleOptionClick(option)}>
				<div>{option.label}</div>
				<div
					className={cx(s.checkBox, {
						[s.checkBoxChecked]: selectedOption?.value === option.value,
					})}>
					{selectedOption?.value === option.value && <div className={s.innerCheck}></div>}
				</div>
			</div>
		)
	}

	return { handleDocumentClick, handleBlur, getInputValue, getOption }
}

