import { useState } from 'react'
import { Select } from '../../Select'
import { Option } from '../../Select/ui/Select.types'
import s from './SummarySelect.module.scss'

interface ISummarySelectProps {}

export const SummarySelect = ({}: ISummarySelectProps) => {
	const options2: Option[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
		{ value: 'option4', label: 'Option 4' },
	]

	const [select, setSelect] = useState<Option[] | undefined>([])

	const handleChangeSelect = (selectedOptions: Option[]) => {
		if (!selectedOptions || selectedOptions.length === 0) return

		setSelect(selectedOptions)
	}

	return (
		<div className={s.root}>
			<Select
				selectedValues={select}
				options={options2}
				onChange={(e) => handleChangeSelect(e)}
			/>
			{select &&
				select.length > 0 &&
				select?.map((s) => {
					return (
						<div
							onClick={(e) => console.log(e.target)}
							key={s.value}>
							{s.label}
						</div>
					)
				})}
		</div>
	)
}

