import React from 'react'
import classNames from 'classnames'
import s from './DestinationTab.module.scss'
import { ComponentProps } from './DestinationTab.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const DestinationTab = ({
	size = 'medium',
	size_m,
	size_l,
	destinationName = '',
	variant = 'whiteStroke',
	width = 'auto',
	routes = [{ type: <NewIcon name='car' />, text: '100 минут в пути' }],
	additionalClass,
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	return (
		<label
			className={cx(
				s.destination,
				s[`${size}-size`],
				s[`${size_m}-size_m`],
				s[`${size_l}-size_l`],
				s[`${variant}`],
				s[`${width}-width`],
				`${additionalClass ?? ''}`
			)}
			{...props}
			htmlFor={destinationName}>
			<input
				type='radio'
				name='destination'
				value={destinationName}
			/>
			<div className={s.destinationName}>{destinationName}</div>
			{routes.map((r, i) => {
				return (
					<div key={i} className={s.routeWrapper}>
						{r.type}
						<div className={s.routeText}>{r.text}</div>
					</div>
				)
			})}
		</label>
	)
}
