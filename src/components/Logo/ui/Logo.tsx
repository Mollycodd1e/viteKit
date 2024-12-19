import { Text } from '../../Text'
import s from './Logo.module.scss'
import classNames from 'classnames'
import { ILogoProps, logoVariant } from './Logo.types'

export const Logo = ({
	uk = false,
	variant = 'black',
	between = false,
	addClassName,
}: ILogoProps) => {
	const cx = classNames.bind(s)

	return (
		<div className={cx(s.wrapper, { [s.wrapperBetween]: between }, addClassName)}>
			<img
				src={logoVariant[variant]}
				alt='Лого'
				className={cx(
					s.logo,
					{ [s.logoValue]: variant === 'value' },
					{ [s.logoDom]: variant === 'dom' },
					{ [s.logoOffice]: variant === 'office' }
				)}
			/>
			{uk && (
				<Text
					className={cx(s.uk, s[`uk_${variant}`])}
					html='управляющая<br/>компания'
				/>
			)}
		</div>
	)
}
