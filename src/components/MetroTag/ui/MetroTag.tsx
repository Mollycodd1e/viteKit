import classNames from 'classnames'
import s from './MetroTag.module.scss'
import { IMetroTagProps } from './MetroTag.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const MetroTag = ({
	addClassName,
	addClassNameColor,
	addClassNameTimeTo,
	metro,
	separatorColor = '#F4F5F6',
	width = 'auto',
	variant = 'default',
	isBetween = false,
	withBg = false,
	...rest
}: IMetroTagProps) => {
	const possibleIcons = ['pedestrian', 'auto']
	if (Array.isArray(metro)) {
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
					<div className={s.iconsWrapper}>
						{metro.map((m, i) => {
							if (m.icon) {
								return (
									<div
										key={`metro + ${m.name} + ${i}`}
										className={s.icon}>
										{m?.icon && (
											<NewIcon
												size='20'
												name={m.icon}
												color='#777E90'
											/>
										)}
									</div>
								)
							}
							return (
								<span
									style={{
										background: m?.color ?? '',
										border: i > 0 ? `1px solid ${separatorColor}` : '',
									}}
								/>
							)
						})}
					</div>
					{metro
						.map((m) => {
							return m.name
						})
						.join(', ')}
				</div>
				{metro?.map((m, i) => {
					if (!m.mode || !m.timeTo) return null
					return (
						<div
							key={`route - ${m.name} - ${i}`}
							className={s.route}>
							{possibleIcons.includes(m.mode) && (
								<NewIcon
									size='20'
									name={m.mode}
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
				{metro?.icon && (
					<img
						src={metro.icon}
						width={20}
						height={20}
					/>
				)}
				{metro?.color && !metro?.icon && <span style={{ background: metro?.color ?? '' }}></span>}
				{metro.name}
			</div>

			{metro.timeTo && (
				<div className={cx(s.route, addClassNameTimeTo)}>
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
