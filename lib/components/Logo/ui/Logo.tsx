import { Text } from '../../Text'
import s from './Logo.module.scss'
import classNames from 'classnames'
import { ILogoProps } from './Logo.types'
import LogoWhite from '../assets/LogoWhite.svg?url'
import LogoBlack from '../assets/LogoBlack.svg?url'

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
				src={variant === 'white' ? LogoWhite : LogoBlack}
				alt='Лого'
				className={s.logo}
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

