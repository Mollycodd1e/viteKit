import { Menu } from '../Menu.tsx'
import s from './s.module.scss'
import { useState } from 'react'
import { NewIcon } from '../../../main.ts'

export const Header = () => {
	const [isFocused, setIsFocused] = useState(false)

	const [inputValue, setInputValue] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			window.location.href = 'https://stone.ru'
		}
	}

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setTimeout(() => {
			if (!document?.activeElement?.classList.contains('close-button')) {
				setIsFocused(false)
			}
		}, 0)
	}
	const handleClose = () => {
		setInputValue('')
		setIsFocused(false)
	}

	return (
		<nav className={s.root}>
			<div className={s.wrap}>
				<svg
					width='220'
					height='60'
					xmlns='http://www.w3.org/2000/svg'>
					<rect
						width='220'
						height='60'
						fill='transparent'
					/>
					<text
						x='10'
						y='42'
						fontFamily='Arial, sans-serif'
						fontSize='40'
						fill='white'>
						Stone
					</text>
					<rect
						x='115'
						y='10'
						width='95'
						height='40'
						fill='#f90'
					/>
					<text
						x='120'
						y='42'
						fontFamily='Arial, sans-serif'
						fontSize='40'
						fill='black'>
						Hub
					</text>
				</svg>

				<search className={s.search}>
					<button
						style={{
							margin: 'unset',
							border: 'unset',
							background: 'unset',
							padding: 'unset',
							cursor: 'pointer',
						}}
						onClick={(e) => {
							e.preventDefault()
							window.location.href = 'https://stone.ru'
						}}>
						<NewIcon
							additionalClass={s.searchIcon}
							size={'24'}
							name={'search'}
						/>
					</button>

					<input
						type='text'
						value={inputValue}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						onFocus={handleFocus}
						onBlur={handleBlur}
						className={s.searchInp}
						placeholder={'Изучить stone-kit'}
					/>

					{isFocused && (
						<button
							onClick={handleClose}
							className={`${s.closeBtn} close-button`}>
							<NewIcon
								strokeWidth={'2.5'}
								color={'#252525'}
								size={'18'}
								name={'close'}
							/>
						</button>
					)}
				</search>
			</div>

			<Menu />
		</nav>
	)
}
