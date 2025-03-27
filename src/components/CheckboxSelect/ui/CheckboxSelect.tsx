import classNames from 'classnames'
import s from './s.module.scss'

interface ICheckboxSelectProps {
	label?: string
	checkboxes: {
		label: string
		isSelected: boolean
		setValue: () => void
	}[]
}

const cx = classNames.bind(s)

export const CheckboxSelect: React.FC<ICheckboxSelectProps> = ({
	label = 'Тип квартиры',
	checkboxes,
}) => {
	const handleClearAll = () => {
		checkboxes?.forEach((checkbox) => {
			if (checkbox?.isSelected) {
				checkbox?.setValue()
			}
		})
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
			<div className={s.checkboxWrapper}>
				{checkboxes?.map((m) => {
					return (
						<div
							className={cx(s.checkboxItem, { [s.checkboxItemActive]: m?.isSelected })}
							onClick={() => m?.setValue()}>
							{m?.label}
						</div>
					)
				})}
			</div>
		</div>
	)
}

