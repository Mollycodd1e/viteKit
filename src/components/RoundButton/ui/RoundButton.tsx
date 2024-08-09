import React from 'react'
import classNames from 'classnames'
import { NewIcon } from '../../NewIcon'
import s from './RoundButton.module.scss'
import { ComponentProps } from './RoundButton.types'

const cx = classNames.bind(s)

export const RoundButton = ({
	size = 'small',
	size_m,
	size_l,
	children = '',
	iconName = '',
	variant = 'whiteStroke',
	additionalClass = '',
	deg,
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	const { color } = props

	return (
		<button
			className={cx(
				s.btnRound,
				s[`${size}-size`],
				s[`${size_m}-size_m`],
				s[`${size_l}-size_l`],
				s[`${variant}`],
				additionalClass
			)}
			{...props}>
			<>
				{iconName ? (
					<NewIcon
						name={iconName}
						size={size_l || size_m || size}
						deg={deg}
						color={color}
					/>
				) : (
					children
				)}
			</>
		</button>
	)
}
