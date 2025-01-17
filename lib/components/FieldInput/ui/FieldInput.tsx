import React from 'react'
import { ComponentProps } from './FieldInput.types'
import s from './FieldInput.module.scss'

export const FieldInput = ({ label, handleClear, isShowClear, children }: React.PropsWithChildren<ComponentProps>) => {
	return (
		<div className={s.fieldInputWrapper}>
			<div className={s.nameWrapper}>
				<label className={s.label}>{label}</label>

				{isShowClear && <div
					className={s.clearBtn}
					onClick={handleClear}>
					Очистить
				</div>}
			</div>
			{children}
		</div>
	)
}
