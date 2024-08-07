import { Link } from 'react-router-dom'
import s from './Menu.module.scss'

export const Menu = () => {
	return (
		<div className={s.root}>
			<Link
				className={s.link}
				to='/buttons'>
				Кнопки
			</Link>
			<Link
				className={s.link}
				to='/modals'>
				Модалки
			</Link>
			<Link
				className={s.link}
				to='/tabs'>
				Табы
			</Link>
			<Link
				className={s.link}
				to='/icons'>
				Иконки
			</Link>
			<Link
				className={s.link}
				to='/lots'>
				Лоты
			</Link>
			<Link
				className={s.link}
				to='/tags'>
				Тэги
			</Link>
			<Link
				className={s.link}
				to='/select'>
				Селект
			</Link>
		</div>
	)
}

