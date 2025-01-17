import React from 'react'
import { ComponentProps } from './FieldInput.types'
import s from './FieldInput.module.scss'

export const FieldInput = ({ label, handleClear, children }: React.PropsWithChildren<ComponentProps>) => {
	return (
		<div className={s.fieldInputWrapper}>
			<div className={s.nameWrapper}>
				<label className={s.label}>{label}</label>

				<div
					className={s.clearBtn}
					onClick={handleClear}>
					Очистить
				</div>
			</div>
			{children}
		</div>
	)
}
