import { Header } from './components/Header/Header.tsx'
import s from './style.module.scss'

interface IMain {
	children?: React.ReactNode
}

const Layout = ({ children }: IMain) => {
	return (
		<div className={s.layout}>
			<Header />
			<main>{children}</main>
		</div>
	)
}

export default Layout
