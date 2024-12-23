import { useState } from 'react'
import { Button, NewIcon, RoundButton, SliderNavigation, Switcher } from '../../main'
import s from './ButtonsPage.module.scss'
import { ButtonState } from './ButtonState/ButtonState'
import { ZoomControls } from '../../components/ZoomControls'

export const ButtonsPage = () => {
	const [isActive, setIsActive] = useState<boolean>(true)
	const [isActive1, setIsActive1] = useState<boolean>(false)
	return (
		<div className={s.root}>
			<div className={s.clearButton}>
				<h2>Обычная</h2>
				<div className={s.buttonsWrapper}>
					<ButtonState>
						<Button
							as='button'
							size='large'
							variant='blue'>
							Приветики
						</Button>
					</ButtonState>
				</div>
			</div>
			<div className={s.clearButton}>
				<h2>Круглая</h2>
				<div className={s.buttonsWrapper}>
					<RoundButton
						variant={isActive ? 'blackFill' : 'whiteStroke'}
						size='tiny'
						onClick={() => setIsActive(!isActive)}>
						<NewIcon
							name='close'
							size='12'
							color={isActive ? '#fff' : '#000'}
						/>
					</RoundButton>

					<RoundButton
						iconName={'close' }
						variant={isActive ? 'blackFill' : 'whiteStroke'}
						deg="90"
						size={'tiny'}
						size_l={'small'}
						onClick={() => setIsActive(!isActive)}>
					</RoundButton>
				</div>


			</div>
			<div>
				<h2>Зум</h2>
				<ZoomControls
					size='medium'
					zoomIn={() => {}}
					zoomOut={() => {}}
				/>
			</div>
			<div>
				<h2>Слайдер</h2>
				<SliderNavigation
					goNext={() => {}}
					arr={[1, 2, 3]}
					indexSlide={0}
					goPrev={() => {}}
				/>
			</div>
			<Switcher
				isActive={isActive}
				onClick={() => setIsActive(!isActive)}>
				В продаже
			</Switcher>
			<Switcher
				isActive={isActive1}
				onClick={() => setIsActive1(!isActive1)}>
				В продаже
			</Switcher>
		</div>
	)
}
