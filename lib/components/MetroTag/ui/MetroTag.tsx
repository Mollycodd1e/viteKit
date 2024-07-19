import classNames from 'classnames'
import s from './MetroTag.module.scss'
import { IMetroTagProps } from './MetroTag.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const MetroTag = ({ addClassName, metro, width = 'auto', ...rest }: IMetroTagProps) => {
	const possibleIcons = ['car', 'walk']
	console.log(metro)

	return (
		<div
			className={cx(s.root, addClassName, s[width])}
			{...rest}>
			<div className={s.metroColor}>
				{metro?.color && <span style={{ background: metro?.color ?? '' }}></span>}
				{metro.name}
			</div>
			{metro.routes &&
				metro.routes.map((m, i) => {
					return (
						<div
							key={i}
							className={s.route}>
							{m.iconName && possibleIcons.includes(m.iconName) && (
								<NewIcon
									size='20'
									name={m.iconName}
									color='#777E90'
								/>
							)}
							{m.timeTo + ' ' + 'мин'}
						</div>
					)
				})}
		</div>
	)
}

