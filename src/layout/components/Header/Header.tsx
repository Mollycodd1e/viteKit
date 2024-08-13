import { Menu } from '../Menu.tsx'
import s from './s.module.scss'

export const Header = () => {
	return (
		<nav className={s.root}>
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
					font-family='Arial, sans-serif'
					font-size='40'
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
					font-family='Arial, sans-serif'
					font-size='40'
					fill='black'>
					Hub
				</text>
			</svg>
			<Menu />
		</nav>
	)
}
