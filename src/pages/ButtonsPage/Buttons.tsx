import { Button } from '../../main'
import s from './ButtonsPage.module.scss'
import { ButtonState } from './ButtonState/ButtonState'

export const ButtonsPage = () => {
	return (
		<div className={s.root}>
			<div className={s.clearButton}>
				<h2>Варианты</h2>
				<div className={s.buttonsWrapper}>
					<ButtonState>
						<Button
							as='button'
							variant='blue'>
							Приветики
						</Button>
					</ButtonState>
				</div>
			</div>
		</div>
	)
}
