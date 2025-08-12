import { useState } from 'react'
import { CheckBox, Select, SortSelect, Switcher } from '../../main'
import s from './SelectPage.module.scss'
import { SummarySelect } from '../../components/SummarySelect'
import { TModeSelect, TOption } from '../../components/Select/ui/Select.types.ts'
import { FilterWithSave } from '../../components/FilterWithSave/ui/FilterWithSave.tsx'
import { defaultCategory, defaultOption } from './const.ts'
import { CheckboxSelect } from '../../components/CheckboxSelect/index.ts'

export const SelectPage = () => {
	const [sort, setSort] = useState<TOption | null>(defaultOption[0])
	const [select, setSelect] = useState<TOption[] | undefined>([])
	const [modeSelect, setModeSelect] = useState<TModeSelect>('options')
	const fake = [
		{ label: 'sdfsdfsdf', setValue: () => {}, isSelected: false, disabled: true },
		{ label: 'sdfsdfsdf', setValue: () => {}, isSelected: true, disabled: false },
		{ label: 'sdfsdfsdf', setValue: () => {}, isSelected: false, disabled: false },
		{ label: 'sdfsdfsdf', setValue: () => {}, isSelected: true, disabled: false },
		{ label: 'sdfsdfsdf', setValue: () => {}, isSelected: true, disabled: false },
	]
	const handleChangeSort = (e: TOption | null) => {
		//@ts-expect-error todo types
		if (!e || !e.target) return
		//@ts-expect-error todo types
		setSort(e.target.value)
	}

	const handleChangeSelect = (selectedOptions: TOption[]) => {
		if (!selectedOptions) return
		setSelect(selectedOptions)
	}

	return (
		<div className={s.root}>
			<div>
				<div>
					<FilterWithSave
						onClick={() => console.log('filter')}
						onSaveClick={() => console.log('save')}
						onClearClick={() => console.log('clear')}
						onTabClick={() => console.log('year')}
						tabs={[
							{ value: 'dfsdf', state: false },
							{ value: 'dddddddd', state: false },
						]}
					/>
				</div>
				<div>
					<h2> Селектор с чекбоксами</h2>
					<CheckboxSelect checkboxes={fake} />
				</div>
				<div>
					<h2>старый чекбокс</h2>
					<CheckBox
						isChecked={false}
						emitIsChecked={() => {
							console.log('check')
						}}
					/>
				</div>
				<div>
					<h2> Фильтрация с сохранением</h2>
					<div className={s.filterWithSave}>
						<FilterWithSave />
					</div>
				</div>
				<h2>Сорт селект</h2>
				<div className={s.sort}>
					<SortSelect
						mini
						selectedOption={sort}
						options={defaultOption}
						onChange={(e) => handleChangeSort(e as TOption)}
					/>
				</div>
			</div>
			<div className={s.summarySelect}>
				<div style={{ display: 'flex', gap: '20px' }}>
					<h2>SummarySelect</h2>
					<Switcher
						isActive={modeSelect === 'category'}
						onClick={() => setModeSelect(modeSelect === 'options' ? 'category' : 'options')}>
						mode category
					</Switcher>

					<Switcher
						isActive={modeSelect === 'double'}
						onClick={() => setModeSelect(modeSelect === 'options' ? 'double' : 'options')}>
						mode double
					</Switcher>
				</div>

				<SummarySelect
					mode={modeSelect}
					label='Проект'
					isShowReset
					selectedValues={select}
					options={modeSelect === 'category' ? defaultCategory : defaultOption}
					onChange={(e) => handleChangeSelect(e)}
					// clickableOptions={['option1', 'option2']}
				/>
				<SummarySelect
					mode={'single'}
					label='Проект'
					isShowReset
					selectedValues={select}
					options={defaultOption}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>

			<div>
				<h2>Селект mode option</h2>
				<Select
					selectedValues={select}
					options={defaultCategory}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>

			<div>
				<h2>Селект mode category</h2>
				<Select
					mode={'category'}
					selectedValues={select}
					options={defaultCategory}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>
			<div>
				<h2>Селект mode double</h2>
				<Select
					selectedValues={select}
					options={defaultCategory}
					mode={'double'}
					clickableOptions={['Category1', 'options1', 'options3']}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>

			<div>
				<h2>Селект кнопка</h2>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Select
						isBtn={true}
						size_s='small'
						size_l='medium'
						isListRight={true}
						selectedValues={select}
						options={defaultOption}
						onChange={(e) => handleChangeSelect(e)}
					/>
				</div>
			</div>
		</div>
	)
}
