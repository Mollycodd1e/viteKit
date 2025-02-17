import { useState } from 'react'
import {Select, SortSelect, Switcher} from '../../main'
import s from './SelectPage.module.scss'
import { SummarySelect } from '../../components/SummarySelect'
import {TModeSelect, TOption} from '../../components/Select/ui/Select.types.ts'
import { FilterWithSave } from '../../components/FilterWithSave/ui/FilterWithSave.tsx'
import {defaultCategory, defaultOption} from "./const.ts";

export const SelectPage = () => {
	const [sort, setSort] = useState<TOption | null>(defaultOption[0])
	const [select, setSelect] = useState<TOption[] | undefined>([])
	const [modeSelect, setModeSelect] = useState<TModeSelect>('options');

	const handleChangeSort = (e: TOption | null) => {
		//@ts-expect-error todo types
		if (!e || !e.target) return
		//@ts-expect-error todo types
		setSort(e.target.value)
	}

	const handleChangeSelect = (selectedOptions: TOption[]) => {
		console.log(selectedOptions)
		if (!selectedOptions) return
		setSelect(selectedOptions)
	}

	return (
		<div className={s.root}>
			<div>
				<div>
					<h2> Фильтрация с сохранением</h2>
					<div className={s.filterWithSave}>
						<FilterWithSave/>
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
				<div style={{display: 'flex', gap: '20px'}}>
					<h2>SummarySelect</h2>
					<Switcher
						isActive={modeSelect === 'category'}
						onClick={() => setModeSelect(modeSelect === 'options' ? 'category' : 'options')}>
						mode category
					</Switcher>
				</div>

				<SummarySelect
					mode={modeSelect}
					label='Проект'
					isShowReset
					selectedValues={select}
					options={modeSelect === 'category' ? defaultCategory : defaultOption}
					onChange={(e) => handleChangeSelect(e)}
					clickableOptions={['option1', 'option2']}
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
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>

			<div>
				<h2>Селект кнопка</h2>
				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<Select
						isBtn={true}
						size_s='small'
						size_l='medium'
						isListRight={true}
						selectedValues={select}
						options={defaultOption}
						onChange={(e) => handleChangeSelect(e)}
						onClickItem={(option) => {
							console.log(option)
						}}
						onCLickSelect={() => {
							console.log('select')
						}}
					/>
				</div>
			</div>
		</div>
	)
}
