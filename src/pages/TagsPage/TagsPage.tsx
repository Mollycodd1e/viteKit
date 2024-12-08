import s from './TagsPage.module.scss'
import { MetroTag, Tag } from '../../main.ts'

export const TagsPage = () => {
	const metro = { name: 'sokolnuyaki', color: 'red', timeTo: 10, mode: 'auto' }
	const metroArray = [
		{ name: 'Сокольники', color: 'red', timeTo: 10, mode: 'auto' },
		{ name: 'Электрозаводская', color: 'blue', timeTo: 10, mode: 'auto' },
	]

	return (
		<div className={s.root}>
			<MetroTag metro={metroArray} />
			<MetroTag metro={metro} />
			<MetroTag metro={metro} variant='mini' withBg/>
			<MetroTag
				metro={metro}
				withBg
			/>
			<MetroTag
				metro={metro}
				withBg
				isBetween
				width='full'
			/>
			<Tag
				variant='shade'
				size='medium'
				size_m='tiny'
				size_l='tiny'>
				От 285 000 ₽/м2
			</Tag>

			<Tag
				variant='chineseBlack'
				size='small'
				size_m='tiny'
				size_l='small'>
				От 285 000 ₽/м2
			</Tag>
		</div>
	)
}
