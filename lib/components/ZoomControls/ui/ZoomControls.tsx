import { RoundButton } from '../../RoundButton'
import s from './ZoomControls.module.scss'
import { IZoomControls } from './ZoomControls.types'

export const ZoomControls = ({ size = 'medium', zoomIn, zoomOut }: IZoomControls) => {
	return (
		<div className={s.root}>
			<RoundButton
				iconName='plus'
				size={size}
				color='#141416'
				additionalClass={s.plusBtn}
				onClick={zoomIn}
			/>
			<RoundButton
				iconName='minus'
				size={size}
				color='#141416'
				additionalClass={s.minusBtn}
				onClick={zoomOut}
			/>
		</div>
	)
}

