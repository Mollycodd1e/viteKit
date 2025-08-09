import LogoWhite from '../assets/LogoWhite.svg?url'
import LogoBlack from '../assets/LogoBlack.svg?url'
import LogoValue from '../assets/LogoValue.svg?url'
import LogoDom from '../assets/LogoDom.svg?url'
import LogoOffice from '../assets/LogoOffice.svg?url'
import LogoNewOffice from '../assets/LogoNewOffice.svg?url'
import LogoNewDom from '../assets/LogoNewDom.svg?url'
import LogoRealty from '../assets/LogoRealty.svg?url'

export interface ILogoProps {
	uk?: boolean
	variant?: 'black' | 'white' | 'value' | 'dom' | 'office' | 'newOffice' | 'newDom' | 'realty'
	between?: boolean
	addClassName?: string
	onClick?: () => void
}

export const logoVariant = {
	black: LogoBlack,
	white: LogoWhite,
	value: LogoValue,
	dom: LogoDom,
	office: LogoOffice,
	newOffice: LogoNewOffice,
	newDom: LogoNewDom,
	realty: LogoRealty,
}
