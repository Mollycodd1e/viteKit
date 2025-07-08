import React, { useState } from 'react'
import s from './ButtonState.module.scss'
import { BUTTON_VARIANTS } from '../../../components/Button/ui/Button.types'
import {  NewIcon } from '../../../components/NewIcon/ui/NewIcon'
import iconTypes from '../../../components/NewIcon/ui/iconTypes'

interface IButtonState {
	children: React.ReactElement
}

export const ButtonState = ({ children }: IButtonState) => {
	const [width, setWidth] = useState('auto')
	const [variants, setVariants] = useState('blue')
	const [isLoader, setIsLoader] = useState(false)
	const [isDisable, setIsDisable] = useState(false)
	const [preIcon, setPreIcon] = useState<string | null>(null)
	const [postIcon, setPostIcon] = useState<string | null>(null)
	const [preSize, setPreSize] = useState<string | null>(null)
	const [postSize, setPostSize] = useState<string | null>(null)
	const IconSizeList = ['12', '16', '20', '24']
	const modifiedChildren = React.cloneElement(children, {
		width: width,
		variant: variants,
		isLoading: isLoader,
		pre: preIcon ? (
			<NewIcon
				name={preIcon}
				size={preSize ?? '24'}
			/>
		) : null,
		post: postIcon ? (
			<NewIcon
				name={postIcon}
				size={postSize ?? '24'}
			/>
		) : null,
		disabled: isDisable
	})
	const widthVariants = ['auto', 'full']
	const variantsList = Object.values(BUTTON_VARIANTS)
	const iconList = Object.keys(iconTypes)

	return (
		<div className={s.root}>
			{modifiedChildren}
			<div className={s.optionsWrapper}>
				<div>
					<label>
						Width:
						<select onChange={(e) => setWidth(e.target.value)}>
							{widthVariants.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>

				<div>
					<label>
						Variants:
						<select onChange={(e) => setVariants(e.target.value)}>
							{variantsList.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>

				<div>
					<label>
						Pre Icon:
						<select onChange={(e) => setPreIcon(e.target.value)}>
							{iconList.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>

				<div>
					<label>
						Post Icon:
						<select onChange={(e) => setPostIcon(e.target.value)}>
							{iconList.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>
				<div>
					<label>
						Pre Icon Size:
						<select onChange={(e) => setPreSize(e.target.value)}>
							{IconSizeList.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>

				<div>
					<label>
						Post Icon Size:
						<select onChange={(e) => setPostSize(e.target.value)}>
							{IconSizeList.map((variant) => (
								<option
									key={variant}
									value={variant}>
									{variant}
								</option>
							))}
						</select>
					</label>
				</div>
				<label className={s.isLoading}>
					isLoading
					<input
						type='checkbox'
						onChange={() => setIsLoader(!isLoader)}
					/>
				</label>

				<label className={s.isLoading}>
					isDisable
					<input
						type='checkbox'
						onChange={() => setIsDisable(!isLoader)}
					/>
				</label>
			</div>
		</div>
	)
}
