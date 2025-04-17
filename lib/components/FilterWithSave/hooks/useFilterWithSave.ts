import { useEffect, useRef, useState } from 'react'
import { useClientWidth } from '../../../main'
import { TOption } from '../../Select/ui/Select.types'

interface IuseFilterWithSave {
	selectOptions?: TOption[]
	disabledOptions?: TOption[]
	selectedValues?: TOption[]
	tabs?: { value: string; state: boolean }[]
	selectedTabs?: { value: string; state: boolean }[]
	setSelectedTabs?: React.Dispatch<React.SetStateAction<{ value: string; state: boolean }[]>>
	onChange?: (selectedOptions: TOption[]) => unknown
	onClickItem?: (option: TOption | TOption[]) => void
	onSaveClick: () => void
	onClearClick: () => void
}

export const useFilterWithSave = ({
	selectedTabs = [],
	selectedValues = [],
	onClickItem,
	disabledOptions = [],
	tabs = [],
	onChange,
	setSelectedTabs,
	onSaveClick,
	onClearClick,
}: IuseFilterWithSave) => {
	const { isMobile } = useClientWidth()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const containerRef = useRef<HTMLDivElement | null>(null)

	const [initialSelectedTabs, setInitialSelectedTabs] =
		useState<{ value: string; state: boolean }[]>(selectedTabs)
	const [initialSelectedOptions] = useState<TOption[]>(selectedValues)

	const [localSelectedTabs, setLocalSelectedTabs] =
		useState<{ value: string; state: boolean }[]>(initialSelectedTabs)
	const [selectedOptions, setSelectedOptions] = useState<TOption[]>(initialSelectedOptions)

	const handleOptionClick = (option: TOption) => {
		onClickItem && onClickItem(option)

		if (disabledOptions.some((disabled) => disabled.value === option.value)) {
			return
		}
		const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
			? selectedOptions.filter((selected) => selected.value !== option.value)
			: [...selectedOptions, option]

		setSelectedOptions(newSelectedOptions)
	}

	const handleClearClick = () => {
		setInitialSelectedTabs(tabs)
		setLocalSelectedTabs(tabs)
		setSelectedOptions([])
		onClearClick()
		if (onChange) {
			onChange([])
			setSelectedTabs?.(tabs)
		}
	}

	const handleResetClick = () => {
		setSelectedOptions(selectedValues)
		setLocalSelectedTabs(selectedTabs)
	}

	const handleCloseModal = () => {
		handleResetClick()
		setIsModalOpen(false)
	}

	const handleSaveClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation()
		onSaveClick()
		if (onChange) {
			setSelectedTabs?.(localSelectedTabs)
			onChange(selectedOptions)
		}
		setIsModalOpen(false)
	}

	useEffect(() => {
		if (!isModalOpen) {
			setLocalSelectedTabs((prevTabs) => {
				if (JSON.stringify(prevTabs) !== JSON.stringify(selectedTabs)) {
					return selectedTabs
				}
				return prevTabs
			})
		}
	}, [isModalOpen, selectedTabs])

	useEffect(() => {
		const handleDocumentClick = (event: MouseEvent) => {
			if (!containerRef.current) return
			const target = event.target as HTMLElement

			if (containerRef.current.contains(target as Node) || target.closest('svg')) {
				return
			}

			handleCloseModal()
		}

		if (isModalOpen) {
			document.addEventListener('click', handleDocumentClick)
		} else {
			document.removeEventListener('click', handleDocumentClick)
		}

		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [isModalOpen])

	return {
		isMobile,
		handleClearClick,
		handleCloseModal,
		handleOptionClick,
		handleSaveClick,
		localSelectedTabs,
		selectedOptions,
		setSelectedOptions,
		isModalOpen,
		setIsModalOpen,
		setLocalSelectedTabs,
		containerRef,
	}
}
