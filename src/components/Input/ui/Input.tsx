import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { ComponentProps } from './Input.types'
import s from './Input.module.scss'

const cx = classNames.bind(s)

export const Input = forwardRef<HTMLInputElement, React.PropsWithChildren<ComponentProps>>(
	(
		{
			size_s = 'large',
			size_m,
			size_l,
			pre = false,
			post = false,
			variant = 'light',
			width = 'auto',
			error,
			additionalClass = '',
			...props
		},
		ref
	) => {
		return (
			<div
				className={cx(
					s.inputWrapper,
					s[`${size_s}-size`],
					s[`${size_m}-size_m`],
					s[`${size_l}-size_l`],
					s[`${variant}`],
					{ [s.inputWrapperPre]: pre },
					{ [s.inputWrapperPost]: post },
					s[`${width}-width`],
					{ [s.inputWrapperError]: error },
					additionalClass
				)}>
				{pre && <span>{pre}</span>}
				<input
					ref={ref}
					{...props}></input>
				{post && <span>{post}</span>}
			</div>
		)
	}
)

Input.displayName = 'Input'
