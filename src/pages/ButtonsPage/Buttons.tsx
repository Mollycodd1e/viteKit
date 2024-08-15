import { useState } from 'react'
import { Button, NewIcon, RoundButton } from '../../main'
import s from './ButtonsPage.module.scss'
import { ButtonState } from './ButtonState/ButtonState'
import { ZoomControls } from '../../components/ZoomControls'

export const ButtonsPage = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
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
						size='medium'
						onClick={() => setIsActive(!isActive)}>
						<NewIcon
							name='sun'
							size='20'
							color={isActive ? '#fff' : '#000'}
						/>
					</RoundButton>
				</div>
			</div>
			<div>
				<ZoomControls
					size='medium'
					zoomIn={() => {}}
					zoomOut={() => {}}
				/>
			</div>
		</div>
	)
}
