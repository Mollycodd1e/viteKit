import { useClientWidth } from '../../../main'
import { RoundButton } from '../../RoundButton'
import s from './ZoomControls.module.scss'
import { IZoomControls } from './ZoomControls.types'

export const ZoomControls = ({ size = 'medium', zoomIn, zoomOut }: IZoomControls) => {
	const { isDesktop } = useClientWidth()

	return (
		<div className={s.root}>
			<RoundButton
				iconName='plus'
				size={isDesktop ? 'large' : size}
				color='#141416'
				additionalClass={s.plusBtn}
				onClick={zoomIn}
			/>
			<RoundButton
				iconName='minus'
				size={isDesktop ? 'large' : size}
				color='#141416'
				additionalClass={s.minusBtn}
				onClick={zoomOut}
			/>
		</div>
	)
}
