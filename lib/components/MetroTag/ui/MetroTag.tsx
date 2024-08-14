import classNames from 'classnames'
import s from './MetroTag.module.scss'
import { IMetroTagProps } from './MetroTag.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const MetroTag = ({
	addClassName,
	addClassNameColor,
	metro,
	width = 'auto',
	variant = 'default',
	isBetween = false,
	withBg = false,
	...rest
}: IMetroTagProps) => {
	const possibleIcons = ['pedestrian', 'auto']

	return (
		<div
			className={cx(
				s.root,
				s[variant],
				s[isBetween ? 'long' : ''],
				s[withBg ? 'withBg' : ''],
				addClassName,
				s[width]
			)}
			{...rest}>
			<div className={cx(s.metroColor, addClassNameColor)}>
				{metro?.color && <span style={{ background: metro?.color ?? '' }}></span>}
				{metro.name}
			</div>

			{metro.timeTo && (
				<div className={s.route}>
					{metro.mode && possibleIcons.includes(metro.mode) && (
						<NewIcon
							size='20'
							name={metro.mode}
							color='#777E90'
						/>
					)}
					{metro.timeTo + ' ' + 'мин'}
				</div>
			)}
		</div>
	)
}
