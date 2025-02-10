import { useState } from 'react'
import { NewIcon } from '../../NewIcon'
import s from './s.module.scss'
import { Modal } from '../../Modal'
import { TabSwitcher } from '../../TabSwitcher'
import { Option } from '../../Select/ui/Option'
import { TOption } from '../../Select/ui/Select.types'
import { Button } from '../../Button'

interface IFilterWithSave {
	selectOptions?: TOption[]
	disabledOptions?: TOption[]
	selectedValues?: TOption[]
	tabs?: { value: string; state: boolean }[]
	selectedTabs?: { value: string; state: boolean }[]
	setSelectedTabs?: React.Dispatch<React.SetStateAction<{ value: string; state: boolean }[]>>
	onChange?: (selectedOptions: TOption[]) => unknown
}

export const FilterWithSave = ({
	disabledOptions = [],
	tabs = [],
	selectOptions = [],
	onChange,
	selectedValues = [],
	setSelectedTabs,
	selectedTabs,
}: IFilterWithSave) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const [selectedOptions, setSelectedOptions] = useState<TOption[]>(selectedValues)

	const handleOptionClick = (option: TOption) => {
		if (disabledOptions.some((disabled) => disabled.value === option.value)) {
			return
		}
		const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
			? selectedOptions.filter((selected) => selected.value !== option.value)
			: [...selectedOptions, option]

		setSelectedOptions(newSelectedOptions)
	}

	const handleResetClick = () => {
		setSelectedTabs?.(tabs)
		setSelectedOptions([])
	}

	const handleCloseModal = () => {
		handleResetClick()
		setIsModalOpen(false)
	}

	const handleSaveClick = () => {
		if (onChange) {
		}
		setIsModalOpen(false)
	}

	return (
		<>
			<div
				className={s.root}
				onClick={() => {
					setIsModalOpen((prev) => !prev)
				}}>
				<NewIcon
					name={'filter'}
					size='16'
				/>
			</div>
			<Modal
				isOpen={isModalOpen}
				emitIsOpen={setIsModalOpen}
				isTransparentBack
				additionalClassModalBody={s.modalAddBody}
				additionalClass={s.filterWithSaveModal}>
				<div
					className={s.closeBtn}
					onClick={handleCloseModal}>
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
										checked={selectedTabs?.find((e) => e.value === value)?.state ?? false}
										onChange={() => {
											setSelectedTabs?.((prev: { value: string; state: boolean }[]) =>
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
						onClick={handleResetClick}>
						Сбросить
					</Button>
					<Button
						as='button'
						additionalClass={s.saveBtn}
						onClick={handleSaveClick}>
						Сохранить
					</Button>
				</div>
			</Modal>
		</>
	)
}

