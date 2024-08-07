import React, { useState } from 'react'
import s from './ButtonState.module.scss'
import { BUTTON_VARIANTS } from '../../../components/Button/ui/Button.types'

interface IButtonState {
	children: React.ReactElement
}

export const ButtonState = ({ children }: IButtonState) => {
	const [width, setWidth] = useState('auto')
	const [variants, setVariants] = useState('blue')
	const [isLoader, setIsLoader] = useState(false)

	const modifiedChildren = React.cloneElement(children, {
		width: width,
		variant: variants,
		isLoading: isLoader,
	})
	const widthVariants = ['auto', 'full']
	const variantsList = Object.values(BUTTON_VARIANTS)

	return (
		<div className={s.root}>
			{modifiedChildren}
			<div className={s.optionsWrapper}>
				<select onChange={(e) => setWidth(e.target.value)}>
					{widthVariants.map((variant) => (
						<option
							key={variant}
							value={variant}>
							{variant}
						</option>
					))}
				</select>
				<select onChange={(e) => setVariants(e.target.value)}>
					{variantsList.map((variant) => (
						<option
							key={variant}
							value={variant}>
							{variant}
						</option>
					))}
				</select>
				<label className={s.isLoading}>
					isLoading
					<input
						type='checkbox'
						onChange={() => setIsLoader(!isLoader)}
					/>
				</label>
			</div>
		</div>
	)
}

