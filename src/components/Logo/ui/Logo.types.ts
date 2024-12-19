import LogoWhite from '../assets/LogoWhite.svg?url'
import LogoBlack from '../assets/LogoBlack.svg?url'
import LogoValue from '../assets/LogoValue.svg?url'
import LogoDom from '../assets/LogoDom.svg?url'
import LogoOffice from '../assets/LogoOffice.svg?url'

export interface ILogoProps {
	uk?: boolean
	variant?: 'black' | 'white' | 'value' | 'dom' | 'office'
	between?: boolean
	addClassName?: string
}

export const logoVariant = {
	black: LogoBlack,
	white: LogoWhite,
	value: LogoValue,
	dom: LogoDom,
	office: LogoOffice,
}

