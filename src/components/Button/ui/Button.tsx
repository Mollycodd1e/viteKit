import React from 'react'
import classNames from 'classnames'
import s from './Button.module.scss'
import { ComponentProps } from './Button.types'
import { NewIcon } from '../../NewIcon'

const cx = classNames.bind(s)

export const Button = ({
	size,
	size_m,
	size_l,
	pre = false,
	children = '',
	post = false,
	variant = 'blue',
	width = 'auto',
	additionalClass,
	isLoading = false,
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
					s[`${size_m}-size_m`],
					s[`${size_l}-size_l`],
					s[`${variant}`],
					{ [s.btnCommonInline]: pre || post },
					s[`${width}-width`],
					`${additionalClass ?? ''}`
				)}
				{...rest}>
				{isLoading && (
					<NewIcon
						name='loader'
						color='#fff'
					/>
				)}
				{!isLoading && (
					<>
						{pre && <span>{pre}</span>}
						{children}
						{post && <span>{post}</span>}
					</>
				)}
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
				s[`${size_m}-size_m`],
				s[`${size_l}-size_l`],
				s[`${variant}`],
				{ [s.btnCommonInline]: pre || post },
				s[`${width}-width`],
				`${additionalClass ?? ''}`
			)}
			{...rest}>
			{isLoading && (
				<NewIcon
					name='loader'
					size={'24'}
					color='#fff'
					addClass={s.loader}
				/>
			)}
			{!isLoading && (
				<>
					{pre && <span>{pre}</span>}
					{children}
					{post && <span>{post}</span>}
				</>
			)}
		</button>
	)
}
