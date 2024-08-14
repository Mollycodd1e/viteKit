import s from './TagsPage.module.scss'
import {MetroTag} from "../../main.ts";

export const TagsPage = () => {
	const metro = {name: 'car', color: 'red'}

	return <div className={s.root}>
		<MetroTag metro={metro} />
	</div>
}
