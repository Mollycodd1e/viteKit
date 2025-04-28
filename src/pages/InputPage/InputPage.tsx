import { Input } from '../../main'
import s from './InputPage.module.scss'

export const InputPage = () => {
	return (
		<div className={s.root}>
			<div>
				<form>
					<Input></Input>
					<Input variant='dark' error></Input>
					<Input size_s={'medium'} size_m='large'></Input>
					<Input variant='gray' name="email"></Input>
					<Input variant='transparent' name="email"></Input>
				</form>
			</div>
		</div>
	)
}
