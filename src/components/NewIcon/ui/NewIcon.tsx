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
import Auto from './../assets/Auto.svg'
import Pedestrian from './../assets/Pedestrian.svg'
import Park from './../assets/Park.svg'
import Metro from './../assets/Metro.svg'
import Food from './../assets/Food.svg'
import Building from './../assets/Building.svg'
import Case from './../assets/Case.svg'
import Sport from './../assets/Sport.svg'
import WithoutDecor from '../assets/WithoutDecor.svg'
import Play2 from './../assets/Play2.svg'
import SelectChecked from './../assets/SelectChecked.svg'
import SelectUnchecked from './../assets/SelectUnchecked.svg'
import ArrowShort from './../assets/ArrowShort.svg'
import Search from './../assets/Search.svg'
import ArrowRight from './../assets/arrowRight.svg'

import { ReactSVGComponent } from './NewIcon.types'

type IconComponentProps = {
	name: keyof typeof iconTypes
	size?: string
	color?: string
	additionalClass?: string
	deg?: string
	strokeWidth?: string
}

type IconTypes = { [name: string]: ReactSVGComponent }

export const iconTypes: IconTypes = {
	arrowRight: () => <ArrowRight />,
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
	auto: () => <Auto />,
	pedestrian: () => <Pedestrian />,
	park: () => <Park />,
	metro: () => <Metro />,
	food: () => <Food />,
	building: () => <Building />,
	case: () => <Case />,
	sport: () => <Sport />,
	withoutDecor: () => <WithoutDecor />,
	play2: () => <Play2 />,
	selectChecked: () => <SelectChecked />,
	selectUnchecked: () => <SelectUnchecked />,
	arrowShort: () => <ArrowShort />,
	search: () => <Search />,
}

export const NewIcon = ({
	name,
	size = '24',
	color,
	strokeWidth,
	additionalClass,
	deg,
}: IconComponentProps) => {
	const IconComponent = iconTypes[name]

	return (
		<div
			style={{
				width: size + 'px',
				height: size + 'px',
				transform: `rotate(${deg}deg)`,
				color: color,
				strokeWidth: strokeWidth
			}}
			className={additionalClass ?? ''}>
			<IconComponent
				width={size}
				height={size}
				fill={color}
				stroke={color}
				strokeWidth={strokeWidth}
			/>
		</div>
	)
}
