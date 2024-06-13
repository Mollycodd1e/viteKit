import React from 'react'
import classNames from 'classnames'
import s from './Tag.module.scss'
import { ComponentProps } from './Tag.types'

const cx = classNames.bind(s)

export const Tag = ({
	size = 'medium',
	size_m,
	size_l,
	children = '',
	variant = 'gray',
	width = 'auto',
	additionalClass = '',
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	return (
		<div
			className={cx(
				s.tagCommon,
				s[`${size}-size`],
				s[`${size_m}-size_m`],
				s[`${size_l}-size_l`],
				s[`${variant}`],
				s[`${width}-width`],
				additionalClass
			)}
			{...props}>
			{children}
		</div>
	)
}
