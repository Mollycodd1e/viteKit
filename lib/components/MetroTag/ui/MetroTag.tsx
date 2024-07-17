import classNames from 'classnames'
import s from './MetroTag.module.scss'
import { IMetroTagProps } from './MetroTag.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const MetroTag = ({ addClassName, metro, width = 'auto', ...rest }: IMetroTagProps) => {
	const possibleIcons = ['car', 'walk']
	return (
		<div
			className={cx(s.root, addClassName, s[width])}
			{...rest}>
			<div className={s.metroColor}>
				{metro?.color && <span style={{ background: metro?.color ?? '' }}></span>}
				{metro.name}
			</div>
			{metro.routes?.map((route, i) => (
				<div
					key={i}
					className={s.route}>
					{route.icon && possibleIcons.includes(route.icon) && (
						<NewIcon
							size='20'
							name={route.icon}
							color='#777E90'
						/>
					)}
					{route.text}
				</div>
			))}
		</div>
	)
}

