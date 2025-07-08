import iconTypes from '../../components/NewIcon/ui/iconTypes.ts'
import { NewIcon } from '../../main.ts'
import s from './IconsPage.module.scss'

export const IconsPage = () => {
	return (
		<div className={s.root}>
			{Array.isArray(Object.keys(iconTypes))
				? Object.keys(iconTypes).map((e, i) => {
					return (
						<div className={s.iconWrapper}>
							<NewIcon
								key={i}
								name={e}
								size='16'
							/>
							{e ?? ''}
						</div>
					)
				})
				: null}
		</div>
	)
}

