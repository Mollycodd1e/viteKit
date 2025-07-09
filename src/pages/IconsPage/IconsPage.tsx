import iconTypes from '../../components/NewIcon/ui/iconTypes.ts'
import { NewIcon } from '../../main.ts'
import s from './IconsPage.module.scss'

const toPascalCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const IconsPage = () => {
	return (
		<div className={s.root}>
			{Array.isArray(Object.keys(iconTypes))
				? Object.keys(iconTypes).map((e) => {
					const pascalName = toPascalCase(e);
					return (
						<div className={s.iconWrapper} key={e}>
							<NewIcon
								name={pascalName}
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

