import { useEffect, useRef, useState } from 'react'
import { NewIcon } from '../../NewIcon'
import s from './s.module.scss'
import { Modal } from '../../Modal'
import { TabSwitcher } from '../../TabSwitcher'
import { Option } from '../../Select/ui/Option'
import { TOption } from '../../Select/ui/Select.types'
import { Button } from '../../Button'
import classNames from 'classnames/bind'
import { useClientWidth } from '../../../main'

const cx = classNames.bind(s)

interface IFilterWithSave {
	selectOptions?: TOption[]
	disabledOptions?: TOption[]
	selectedValues?: TOption[]
	tabs?: { value: string; state: boolean }[]
	selectedTabs?: { value: string; state: boolean }[]
	setSelectedTabs?: React.Dispatch<React.SetStateAction<{ value: string; state: boolean }[]>>
	onChange?: (selectedOptions: TOption[]) => unknown
	onClickItem?: (option: TOption | TOption[]) => void
	onCLickSelect?: () => void
	btnName?: string
}

export const FilterWithSave = ({
	disabledOptions = [],
	tabs = [],
	selectOptions = [],
	onChange,
	selectedValues = [],
	setSelectedTabs,
	selectedTabs = [],
	onClickItem,
	onCLickSelect,
	btnName = 'Фильтр',
}: IFilterWithSave) => {
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
			if (containerRef.current.contains(event.target as Node)) {
				if (event.target === containerRef.current) {
					setIsModalOpen(false)
				}
				return
			}

			handleCloseModal()
		}

		if (isModalOpen) {
			document.addEventListener('click', handleDocumentClick, { capture: true })
		} else {
			document.removeEventListener('click', handleDocumentClick, { capture: true })
		}

		return () => {
			document.removeEventListener('click', handleDocumentClick, { capture: true })
		}
	}, [isModalOpen])

	const ModalBody = () => (
		<>
			<div
				className={s.closeBtn}
				onClick={() => {
					handleCloseModal()
				}}>
				<NewIcon
					name={'close'}
					size='24'
				/>
			</div>

			<div className={s.modalTitle}>Фильтры</div>
			<div className={s.tabSWitcherWrapper}>
				<div className={s.switcherTitle}>Готовность</div>
				<div className={s.switcherScroll}>
					<TabSwitcher
						variant={'grayRow'}
						addClassName={s.tabs}
						isApart={true}>
						{tabs?.map((m, i) => {
							const value = m.value
							return (
								<TabSwitcher.Item
									itemsLength={tabs?.length}
									key={i}
									mini
									value={value}
									onClick={() => {}}
									checked={localSelectedTabs?.find((e) => e.value === value)?.state ?? false}
									onChange={() => {
										setLocalSelectedTabs?.((prev: { value: string; state: boolean }[]) =>
											prev.map((d) => (d.value === value ? { ...d, state: !d.state } : d))
										)
									}}
									index={i}
									addItemClassName={s.tabSwitcher}>
									{value}
								</TabSwitcher.Item>
							)
						})}
					</TabSwitcher>
				</div>
			</div>
			<div className={s.selectWrapper}>
				{selectOptions?.map((option, i) => (
					<Option
						key={i}
						addClassName={s.filterOption}
						disabledOptions={[]}
						clickableOptions={[]}
						selectedOptions={selectedOptions}
						option={option}
						handleOptionClick={handleOptionClick}
					/>
				))}
			</div>
			<div className={s.btnWrapper}>
				<Button
					as='button'
					variant='gray'
					additionalClass={s.resetBtn}
					onClick={handleClearClick}>
					Сбросить
				</Button>
				<Button
					as='button'
					additionalClass={s.saveBtn}
					onClick={handleSaveClick}>
					Сохранить
				</Button>
			</div>
		</>
	)

	return (
		<>
			<div
				ref={containerRef}
				className={s.root}
				onClick={() => {
					onCLickSelect && onCLickSelect()
					if (isMobile) {
						setIsModalOpen((prev) => !prev)
					} else {
						setIsModalOpen(true)
					}
				}}>
				<div className={s.btnName}>{btnName}</div>
				<NewIcon
					name={'filter'}
					size='16'
				/>
				{!isMobile && (
					<div className={cx(s.desktopWrapper, { [s.desktopWrapperOpen]: isModalOpen })}>
						<ModalBody />
					</div>
				)}
			</div>
			{isMobile && (
				<Modal
					isOpen={isModalOpen}
					emitIsOpen={setIsModalOpen}
					isTransparentBack
					additionalClassModalBody={s.modalAddBody}
					additionalClass={s.filterWithSaveModal}>
					<ModalBody />
				</Modal>
			)}
		</>
	)
}

