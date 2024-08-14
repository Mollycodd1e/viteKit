import s from './TagsPage.module.scss'
import { MetroTag } from '../../main.ts'

export const TagsPage = () => {
	const metro = { name: 'sokolnuyaki', color: 'red', timeTo: 10, mode: 'auto' }

	return (
		<div className={s.root}>
			<MetroTag metro={metro} />
		</div>
	)
}
