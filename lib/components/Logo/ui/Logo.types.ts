import LogoWhite from '../assets/LogoWhite.svg?url'
import LogoBlack from '../assets/LogoBlack.svg?url'
import LogoValue from '../assets/LogoValue.svg?url'

export interface ILogoProps {
	uk?: boolean
	variant?: 'black' | 'white' | 'value'
	between?: boolean
	addClassName?: string
}

export const logoVariant = {
	black: LogoBlack,
	white: LogoWhite,
	value: LogoValue,
}

