import React from 'react'
import classNames from 'classnames'
import s from './MobileButton.module.scss'
import { ComponentProps } from './MobileButton.types'

const cx = classNames.bind(s)

export const MobileButton = ({
	size = 'small',
	pre = false,
	children = '',
	post = false,
	variant = 'whiteFilled',
	width = 'auto',
	additionalClass = '',
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	if (props.as === 'link') {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { as, ...rest } = props

		return (
			<a
				className={cx(
					s.btnCommon,
					s[`${size}-size`],
					s[`${variant}`],
					{ [s.btnCommonInline]: pre || post },
					s[`${width}-width`],
					additionalClass
				)}
				{...rest}>
				{pre && <div>{pre}</div>}
				{children}
				{post && <div>{post}</div>}
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
				additionalClass
			)}
			{...rest}>
			{pre && <div>{pre}</div>}
			{children}
			{post && <div>{post}</div>}
		</button>
	)
}
