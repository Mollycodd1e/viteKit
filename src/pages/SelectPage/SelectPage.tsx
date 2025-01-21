import {useState} from 'react'
import {Select, SortSelect} from '../../main'
import s from './SelectPage.module.scss'
import {SummarySelect} from '../../components/SummarySelect'
import {TOption} from "../../components/Select/ui/Select.types.ts";

export const SelectPage = () => {
	const options: TOption[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	]

	const options2: TOption[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option4', label: 'Option 4' },
	]

	const [sort, setSort] = useState<TOption | null>(options[0])
	const [select, setSelect] = useState<TOption[] | undefined>([])

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
				<h2>Сорт селект</h2>
				<div className={s.sort}>
					<SortSelect
					mini
						selectedOption={sort}
						options={options}
						onChange={(e) => handleChangeSort(e as TOption)}
					/>
				</div>
			</div>
			<div className={s.summarySelect}>
				<h2>Селект с опциями</h2>
				<SummarySelect
					mode={'category'}
					label='Проект'
					isShowReset
					selectedValues={select}
					options={options2}
					onChange={(e) => handleChangeSelect(e)}
					clickableOptions={['option1', 'option2']}
				/>
			</div>
			<div>
				<h2>Селект чекбокс</h2>
				<Select
					selectedValues={select}
					options={options2}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>

			<div>
				<h2>Селект кнопка</h2>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Select
						isBtn={true}
						btnName={'Фильтр'}
						isListRight={true}
						selectedValues={select}
						options={options2}
						onChange={(e) => handleChangeSelect(e)}
					/>
				</div>
			</div>
		</div>
	)
}
