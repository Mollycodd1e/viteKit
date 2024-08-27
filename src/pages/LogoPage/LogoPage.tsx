import { Logo } from '../../main'
import s from './LogoPage.module.scss'

export const LogoPage = () => {
	return (
		<div className={s.root}>
			<Logo variant='black' />
			<Logo variant='white' />
			<Logo variant='value' />
		</div>
	)
}

