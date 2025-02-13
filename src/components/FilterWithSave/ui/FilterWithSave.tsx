import { NewIcon } from '../../NewIcon'
import s from './s.module.scss'
import { Modal } from '../../Modal'
import { TabSwitcher } from '../../TabSwitcher'
import { Option } from '../../Select/ui/Option'
import { TOption } from '../../Select/ui/Select.types'
import { Button } from '../../Button'
import classNames from 'classnames/bind'
import { useFilterWithSave } from '../hooks/useFilterWithSave'

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
	disabledOptions,
	tabs = [],
	selectOptions = [],
	onChange,
	selectedValues,
	setSelectedTabs,
	selectedTabs,
	onClickItem,
	onCLickSelect,
	btnName = 'Фильтр',
}: IFilterWithSave) => {
	const {
		handleCloseModal,
		localSelectedTabs,
		selectedOptions,
		isMobile,
		handleOptionClick,
		handleClearClick,
		handleSaveClick,
		isModalOpen,
		setLocalSelectedTabs,
		setIsModalOpen,
		containerRef,
	} = useFilterWithSave({
		selectedTabs,
		onClickItem,
		setSelectedTabs,
		tabs,
		onChange,
		disabledOptions,
		selectedValues,
	})

	const ModalBody = () => {
		return (
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
										size_s='small'
										value={value}
										onClick={() => {}}
										checked={localSelectedTabs?.find((e) => e.value === value)?.state ?? false}
										onChange={() => {
											setLocalSelectedTabs?.((prev: { value: string; state: boolean }[]) =>
												prev.map((d) => (d.value === value ? { ...d, state: !d.state } : d))
											)
										}}
										index={i}>
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
	}

	return (
		<>
			<div style={{ position: 'relative' }}>
				<div
					className={s.root}
					onClick={() => {
						onCLickSelect && onCLickSelect()
						if (isMobile) {
							setIsModalOpen((prev) => !prev)
						} else if (!isModalOpen) {
							setIsModalOpen(true)
						}
					}}>
					<div className={s.btnName}>{btnName}</div>
					<NewIcon
						name={'filter'}
						size='16'
					/>
				</div>
				{!isMobile && (
					<div
						ref={containerRef}
						className={cx(s.desktopWrapper, { [s.desktopWrapperOpen]: isModalOpen })}>
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
												size_s={'small'}
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
