import { Text } from '../../Text'
import s from './Logo.module.scss'
import classNames from 'classnames'
import { ILogoProps } from './Logo.types'
import logoTypes from './logoTypes'
import { Suspense } from 'react'

export const Logo = ({
	uk = false,
	variant = 'black',
	between = false,
	addClassName,
	onClick,
}: ILogoProps) => {
	const cx = classNames.bind(s)
	const LogoComponent = logoTypes[variant]

	return (
		<div
			className={cx(s.wrapper, { [s.wrapperBetween]: between }, addClassName)}
			onClick={() => {
				onClick && onClick()
			}}>
			<Suspense fallback={<div>Загрузка...</div>}>
				{LogoComponent ? (
					<LogoComponent className={cx(
						s.logo,
						{ [s.logoValue]: variant === 'value' },
						{ [s.logoDom]: variant === 'dom' },
						{ [s.logoOffice]: variant === 'office' },
						{ [s.logoNewOffice]: variant === 'newOffice' },
						{ [s.logoNewDom]: variant === 'newDom' }
					)} />
				) : null}
			</Suspense>
			{uk && (
				<Text
					className={cx(s.uk, s[`uk_${variant}`])}
					html='управляющая<br/>компания'
				/>
			)}
		</div>
	)
}
