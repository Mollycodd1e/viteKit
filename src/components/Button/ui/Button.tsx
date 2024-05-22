import React from 'react'
import classNames from 'classnames'
import s from './Button.module.scss'
import { ComponentProps } from './Button.types'

const cx = classNames.bind(s)

const Button = ({
	size = 'l',
	pre = false,
	children = '',
	post = false,
	variant = 'blue',
	width = 'auto',
	additionalClass,
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	if (props.as === 'link') {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { as, ...rest } = props

		return (
			<a
				// className={classNames(s.btnCommon)}
				className={cx(
					s.btnCommon,
					s[`${size}-size`],
					s[`${variant}`],
					{ [s.btnCommonInline]: pre || post },
					s[`${width}-width`],
					`${additionalClass ?? ''}`
				)}
				{...rest}>
				{pre && <span>{pre}</span>}
				{children}
				{post && <span>{post}</span>}
			</a>
		)
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { as, ...rest } = props

	return (
		<button
			className={cx(
				s.btnCommon,
				s[`${size}-size`],
				s[`${variant}`],
				{ [s.btnCommonInline]: pre || post },
				s[`${width}-width`],
				`${additionalClass ?? ''}`
			)}
			{...rest}>
			{pre && <span>{pre}</span>}
			{children}
			{post && <span>{post}</span>}
		</button>
	)
}

export default Button
