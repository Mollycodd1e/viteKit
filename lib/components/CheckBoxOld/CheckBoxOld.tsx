import React, { forwardRef } from 'react'
import s from './s.module.scss'
import { NewIcon } from '../NewIcon'

interface ICheckboxProps {
	children?: React.ReactNode
	isChecked: boolean | null
	isBlackCheck?: boolean
	isLightCheck?: boolean
	flex?: boolean
	isError?: boolean
	modifierClassesStyle?: string[]
	emitIsChecked: (isChecked: boolean) => void
	onClick?: () => void
}

export const CheckBoxOld = forwardRef<HTMLInputElement, ICheckboxProps>(
	(
		{
			children,
			isChecked = false,
			isBlackCheck,
			isError = false,
			modifierClassesStyle = [''],
			emitIsChecked,
			onClick,
			isLightCheck,
			flex,
			...rest
		},
		ref
	) => {
		const modifierClasses = modifierClassesStyle
			.map((key) => s[key])
			.filter(Boolean)
			.join(' ')

		return (
			<label
				className={`
      ${s.checkbox}
      ${modifierClasses}
      ${isChecked ? s.isChecked : ''}
      ${isBlackCheck ? s.isBlackCheck : ''}
      ${isLightCheck ? s.isLightCheck : ''}
      ${isError ? s.isError : ''}
      ${flex ? s.flex : ''}
    `}
				onClick={() => {
					onClick && onClick()
				}}>
				<input
					type='checkbox'
					ref={ref}
					onChange={() => emitIsChecked(!isChecked)}
					{...rest}
				/>

				<span className={s.checkbox__elem}>
					{isChecked && (
						<NewIcon
							name={'check'}
							size='20'
						/>
					)}
				</span>

				{children}
			</label>
		)
	}
)

