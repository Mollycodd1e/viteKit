import React from 'react'
import classNames from 'classnames'
import { ComponentProps } from './Button.types'
import { NewIcon } from '../../NewIcon'
import s from './Button.module.scss'

const cx = classNames.bind(s)

export const Button = ({
	size = 'medium',
	size_m,
	size_l,
	onCLick,
	pre = false,
	children = '',
	post = false,
	variant = 'blue',
	width = 'auto',
	additionalClass = '',
	isLoading = false,
	...props
}: React.PropsWithChildren<ComponentProps>) => {
	const btnClassName = cx(
		s.btnCommon,
		s[`${size}-size`],
		s[`${size_m}-size_m`],
		s[`${size_l}-size_l`],
		s[`${variant}`],
		{ [s.btnLoading]: isLoading },
		{ [s.btnCommonInline]: pre || post },
		s[`${width}-width`],
		additionalClass
	)
	const btnBody = () => {
		return (
			<>
				{isLoading && (
					<NewIcon
						name='loader'
						size={'24'}
						color='currentColor'
						additionalClass={s.loader}
					/>
				)}
				<>
					{pre && <div className={cx({ [s.isHidden]: isLoading })}>{pre}</div>}
					<div className={cx({[s.isHidden]: isLoading })}>{children}</div>
					{post && <div className={cx({ [s.isHidden]: isLoading })}>{post}</div>}
				</>
			</>
		)
	}
	
	if (props.as === 'link') {
		return (
			<a

				className={btnClassName}
				onClick={onCLick}
				{...props}>
				{btnBody()}
			</a>
		)
	}

	return (
		<button
			className={btnClassName}
			onClick={onCLick}
			{...props}>
			{btnBody()}
		</button>
	)
}
