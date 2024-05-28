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
import Minus from './../assets/Minus.svg'
import Moon from './../assets/Moon.svg'
import Play from './../assets/Play.svg'
import Plus from './../assets/Plus.svg'
import Ruble from './../assets/Ruble.svg'
import Share from './../assets/Share.svg'
import Sun from './../assets/Sun.svg'
import { ReactSVGComponent } from './NewIcon.types'

type IconComponentProps = { name: string; size?: string; color?: string; addClass?: string }
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
	minus: () => <Minus />,
	moon: () => <Moon />,
	play: () => <Play />,
	plus: () => <Plus />,
	ruble: () => <Ruble />,
	share: () => <Share />,
	sun: () => <Sun />,
}

export const NewIcon = ({ name, size = '24', color, addClass }: IconComponentProps) => {
	const IconComponent = iconTypes[name]

	return (
		<div
			style={{ color: color, width: size + 'px', height: size + 'px' }}
			className={addClass ?? ''}>
			<IconComponent />
		</div>
	)
}

