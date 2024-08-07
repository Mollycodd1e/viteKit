import { Menu } from './components/Menu'
import s from './Layout.module.scss'
// ваш компонент меню

interface IMain {
	children?: React.ReactNode
}

const Layout = ({ children }: IMain) => {
	return (
		<div className={s.root}>
			<Menu></Menu>
			<main>{children}</main>
		</div>
	)
}

export default Layout

