import { Input } from '../../main'
import s from './InputPage.module.scss'

export const InputPage = () => {
	return (
		<div className={s.root}>
			<div>
				<form>
					<Input></Input>
				</form>
			</div>
		</div>
	)
}
