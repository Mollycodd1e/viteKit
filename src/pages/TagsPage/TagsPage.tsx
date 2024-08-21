import s from './TagsPage.module.scss'
import {MetroTag, Tag} from '../../main.ts'

export const TagsPage = () => {
	const metro = { name: 'sokolnuyaki', color: 'red', timeTo: 10, mode: 'auto' }

	return (
		<div className={s.root}>
			<MetroTag metro={metro} />

			<Tag
				variant='shade'
				size='medium'
				size_m='tiny'
				size_l='medium'>
				От 285 000 ₽/м2
			</Tag>

			<Tag
				variant='chineseBlack'
				size='medium'
				size_m='tiny'
				size_l='medium'>
				От 285 000 ₽/м2
			</Tag>
		</div>
	)
}
