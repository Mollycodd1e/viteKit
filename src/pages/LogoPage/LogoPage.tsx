import { Logo } from '../../main'
import s from './LogoPage.module.scss'

export const LogoPage = () => {
	return (
		<div className={s.root}>
			<Logo variant='black' />
			<Logo variant='white' />
			<Logo variant='value' />
			<Logo variant='office' />
			<Logo variant='dom' />
			<Logo variant='newOffice' />
		</div>
	)
}
