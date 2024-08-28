import { ChangeEvent, useState } from 'react'
import { Select, SortSelect } from '../../main'
import s from './SelectPage.module.scss'
import { Option } from '../../components/Select/ui/Select.types'

export const SelectPage = () => {
	const options: Option[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	]

	const options2: Option[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option4', label: 'Option 4' },
	]

	const [sort, setSort] = useState<Option | null>(options[0])
	const [select, setSelect] = useState<Option[] | undefined>([])

	const handleChangeSort = (e: Option | null) => {
		//@ts-expect-error todo types
		if (!e || !e.target) return
		//@ts-expect-error todo types
		setSort(e.target.value)
	}

	const handleChangeSelect = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e || !e.target) return
		//@ts-expect-error todo types
		setSelect([e.target.value])
	}

	return (
		<div className={s.root}>
			<div className={s.variant}>
				<h2>Сорт селектор</h2>
				<div className={s.sort}>
					<SortSelect
						selectedOption={sort}
						options={options}
						onChange={(e) => handleChangeSort(e as Option)}
					/>
				</div>
			</div>
			<div className={s.variant}>
				<h2>Селектор чекбокс</h2>
				<Select
					selectedValues={select}
					options={options2}
					onChange={(e) => handleChangeSelect(e)}
				/>
			</div>
		</div>
	)
}

