import Loader from './../assets/Loader.svg'
import { ReactSVGComponent } from './NewIcon.types'

type IconComponentProps = { name: string; size?: string; color?: string; addClass?: string }
type IconTypes = { [name: string]: ReactSVGComponent }

const iconTypes: IconTypes = { loader: () => <Loader /> }

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

