import Loader from './../assets/Loader.svg'
import Filter from './../assets/Filter.svg'
import FullScreen from './../assets/Fullscreen.svg'
import TwoArrows from './../assets/TwoArrows.svg'
import Heart from './../assets/Heart.svg'
import Download from './../assets/Download.svg'
import User from './../assets/User.svg'
import SquareMeter from './../assets/SquareMeter.svg'
import Check from './../assets/Check.svg'
import Close from './../assets/Close.svg'
import Layers from './../assets/Layers.svg'
import LayersFilled from './../assets/LayersFilled.svg'
import Minus from './../assets/Minus.svg'
import Moon from './../assets/Moon.svg'
import Play from './../assets/Play.svg'
import Plus from './../assets/Plus.svg'
import Ruble from './../assets/Ruble.svg'
import Share from './../assets/Share.svg'
import Sun from './../assets/Sun.svg'
import Star from './../assets/Star.svg'
import StarFilled from './../assets/StarFilled.svg'
import Burger from './../assets/Burger.svg'
import Phone from './../assets/Phone.svg'
import PhoneFilled from './../assets/PhoneFilled.svg'
import Call from './../assets/Call.svg'
import Callback from './../assets/Callback.svg'
import Telegram from './../assets/Telegram.svg'
import WhatsApp from './../assets/WhatsApp.svg'
import DirectionDown from './../assets/DirectionDown.svg'
import ArrowLong from './../assets/ArrowLong.svg'
import BurgerClose from './../assets/BurgerClose.svg'
import Car from './../assets/Car.svg'
import Walk from './../assets/Walk.svg'
import Park from './../assets/Park.svg'
import Metro from './../assets/Metro.svg'
import Food from './../assets/Food.svg'
import Building from './../assets/Building.svg'
import Case from './../assets/Case.svg'
import Sport from './../assets/Sport.svg'
import { ReactSVGComponent } from './NewIcon.types'

type IconComponentProps = {
	name: keyof typeof iconTypes
	size?: string
	color?: string
	addClass?: string
	deg?: string
}

type IconTypes = { [name: string]: ReactSVGComponent }

const iconTypes: IconTypes = {
	loader: () => <Loader />,
	filter: () => <Filter />,
	fullscreen: () => <FullScreen />,
	twoArrows: () => <TwoArrows />,
	heart: () => <Heart />,
	download: () => <Download />,
	user: () => <User />,
	squareMeter: () => <SquareMeter />,
	check: () => <Check />,
	close: () => <Close />,
	layers: () => <Layers />,
	layersFilled: () => <LayersFilled />,
	minus: () => <Minus />,
	moon: () => <Moon />,
	play: () => <Play />,
	plus: () => <Plus />,
	ruble: () => <Ruble />,
	share: () => <Share />,
	sun: () => <Sun />,
	star: () => <Star />,
	starFilled: () => <StarFilled />,
	burger: () => <Burger />,
	phone: () => <Phone />,
	phoneFilled: () => <PhoneFilled />,
	call: () => <Call />,
	callback: () => <Callback />,
	telegram: () => <Telegram />,
	whatsapp: () => <WhatsApp />,
	directionDown: () => <DirectionDown />,
	burgerClose: () => <BurgerClose />,
	arrowLong: () => <ArrowLong />,
	car: () => <Car />,
	walk: () => <Walk />,
	park: () => <Park />,
	metro: () => <Metro />,
	food: () => <Food />,
	building: () => <Building />,
	case: () => <Case />,
	sport: () => <Sport />,
}

export const NewIcon = ({ name, size = '24', color, addClass, deg }: IconComponentProps) => {
	const IconComponent = iconTypes[name]

	return (
		<div
			style={{
				color: color,
				width: size + 'px',
				height: size + 'px',
				transform: `rotate(${deg}deg)`,
			}}
			className={addClass ?? ''}>
			<IconComponent />
		</div>
	)
}

