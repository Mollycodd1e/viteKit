import { useEffect, useRef } from 'react'
import s from './Switcher.module.scss'
import { ISwitcherProps } from './Switcher.types'
import classNames from 'classnames'

const cx = classNames.bind(s)
export const Switcher = ({ children, isActive, onClick }: ISwitcherProps) => {
	const isFirstRender = useRef(true)

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
		}
	}, [])

	return (
		<div className={s.switcherWrapper}>
			<div
				className={cx(
					s.swiper,
					{ [s.swiperInitialize]: isFirstRender.current },
					{ [s.swiperActive]: isActive },
					{ [s.swiperInactive]: !isActive && !isFirstRender.current }
				)}
				onClick={onClick}>
				<div className={cx(s.swiperPoint, { [s.swiperPointActive]: isActive })} />
			</div>
			{children}
		</div>
	)
}
