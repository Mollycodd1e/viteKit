import React from 'react'
import classNames from 'classnames'
import s from './DestinationTab.module.scss'
import { ComponentProps } from './DestinationTab.types'

const cx = classNames.bind(s)

export const DestinationTab = ({
	size = 'medium',
	size_m,
	size_l,
	destination = { destName: '', color: '' },
	variant = 'whiteStroke',
	width = 'auto',
	routes = [],
	checked,
	onChange,
	additionalClass = '',
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
				additionalClass
			)}
			{...props}
			htmlFor={destination.destName}>
			<input
				id={destination.destName}
				checked={checked}
				onChange={onChange}
				type='checkbox'
				name={destination.destName}
				value={destination.destName}
			/>
			<div className={s.destination}>
				{destination?.color && <span style={{ background: destination?.color ?? '' }}></span>}
				{destination.destName}
			</div>
			{routes.map((r, i) => {
				return (
					<div
						key={i}
						className={s.routeWrapper}>
						{r.type}
						<div className={s.routeText}>{r.text}</div>
					</div>
				)
			})}
		</label>
	)
}
