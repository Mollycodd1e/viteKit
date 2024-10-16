import { NewIcon } from '../../NewIcon'
import { Select } from '../../Select'
import { Option, MultiSelectProps } from '../../Select/ui/Select.types'
import s from './SummarySelect.module.scss'

interface ISummarySelectProps extends MultiSelectProps {
	label?: string
}

export const SummarySelect: React.FC<ISummarySelectProps> = ({ label = '', ...props }) => {
	const handleChangeSelect = (selectedOptions: Option[]) => {
		if (props.onChange) {
			props.onChange(selectedOptions)
		}
	}

	const handleRemoveOption = (value: string) => {
		const updatedSelect = props.selectedValues?.filter((s) => s.value !== value) || []
		handleChangeSelect(updatedSelect)
	}

	const handleClearAll = () => {
		handleChangeSelect([])
	}

	return (
		<div className={s.root}>
			<div className={s.nameWrapper}>
				<div>{label}</div>
				<div
					className={s.clearBtn}
					onClick={handleClearAll}>
					Очистить
				</div>
			</div>
			<Select
				{...props}
				onChange={handleChangeSelect}
			/>
			{props.selectedValues && props.selectedValues.length > 0 && (
				<div className={s.summaryList}>
					{props.selectedValues.map((m) => (
						<div
							key={m.value}
							onClick={() => handleRemoveOption(m.value.toString())}
							className={s.summaryOption}>
							{m.label}
							<NewIcon
								name='close'
								size='16'
							/>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
