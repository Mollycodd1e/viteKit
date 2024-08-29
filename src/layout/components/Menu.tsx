import { Link } from 'react-router-dom'
import s from './Menu.module.scss'
import { NewIcon } from '../../main.ts'

export const Menu = () => {
	const LinkComponent = ({ to, title }: { to: string; title: string }) => {
		return (
			<Link
				to={to}
				className={s.linkWrap}>
				{title}

				<NewIcon
					size={'24'}
					name={'play2'}
					deg={'90'}
					color={'white'}
				/>
			</Link>
		)
	}

	return (
		<div className={s.root}>
			<LinkComponent
				to={'/buttons'}
				title={'КНОПКИ'}
			/>
			<LinkComponent
				to={'/modals'}
				title={'МОДАЛКИ'}
			/>
			<LinkComponent
				to={'/tabs'}
				title={'ТАБЫ'}
			/>
			<LinkComponent
				to={'/icons'}
				title={'ИКОНКИ'}
			/>
			<LinkComponent
				to={'/lots'}
				title={'ЛОТЫ'}
			/>
			<LinkComponent
				to={'/tags'}
				title={'ТЭГИ'}
			/>
			<LinkComponent
				to={'/select'}
				title={'СЕЛЕКТ'}
			/>
			<LinkComponent
				to={'/forms'}
				title={'ФОРМЫ'}
			/>
			<LinkComponent
				to={'/logo'}
				title={'ЛОГО'}
			/>
			<LinkComponent
				to={'/input'}
				title={'ИНПУТЫ'}
			/>
		</div>
	)
}
