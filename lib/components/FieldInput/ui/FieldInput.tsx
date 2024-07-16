import React from 'react'
import { ComponentProps } from './FieldInput.types'
import s from './FieldInput.module.scss'

export const FieldInput = ({ label, children }: React.PropsWithChildren<ComponentProps>) => {
	return (
		<div className={s.fieldInputWrapper}>
			<label className={s.label}>{label}</label>
			{children}
		</div>
	)
}
