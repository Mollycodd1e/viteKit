import React from 'react'
import classNames from 'classnames'
import s from './Tag.module.scss'
import { ComponentProps } from './Tag.types'

const cx = classNames.bind(s)

export const Tag = ({
	size = 'medium',
	children = '',
	variant = 'gray',
	width = 'auto',
	additionalClass,
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	return (
		<div
			className={cx(
				s.tagCommon,
				s[`${size}-size`],
				s[`${variant}`],
				s[`${width}-width`],
				`${additionalClass ?? ''}`
			)}
			{...props}>
			{children}
		</div>
	)
}
