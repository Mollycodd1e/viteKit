import classNames from 'classnames'
import s from './s.module.scss'

interface ICheckboxSelectProps {
	label?: string
	checkboxes: {
		label: string
		isSelected: boolean
		disabled: boolean
		setValue: () => void
	}[]
	addClassname?: string
}

const cx = classNames.bind(s)

export const CheckboxSelect: React.FC<ICheckboxSelectProps> = ({
	label = 'Тип квартиры',
	checkboxes,
	addClassname,
}) => {
	const handleClearAll = () => {
		checkboxes?.forEach((checkbox) => {
			if (checkbox?.isSelected) {
				checkbox?.setValue()
			}
		})
	}

	return (
		<div className={cx(s.root, addClassname)}>
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
						<button
							key={m?.label}
							className={cx(
								s.checkboxItem,
								{ [s.checkboxItemActive]: m?.isSelected },
								{ [s.checkboxItemDisabled]: m?.disabled }
							)}
							onClick={() => m?.setValue()}
							disabled={m?.disabled}>
							{m?.label}
						</button>
					)
				})}
			</div>
		</div>
	)
}
