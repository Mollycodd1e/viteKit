import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.tsx'
import { ButtonsPage } from './pages/ButtonsPage/Buttons.tsx'
import ModalsPage from './pages/ModalsPage/ModalPage.tsx'
import TabsPage from './pages/TabsPage/TabsPage.tsx'
import { IconsPage } from './pages/IconsPage/IconsPage.tsx'
import { LotsPage } from './pages/LotsPage/LotsPage.tsx'
import { TagsPage } from './pages/TagsPage/TagsPage.tsx'
import { SelectPage } from './pages/SelectPage/SelectPage.tsx'
import FormsPage from './pages/FormsPage/FormsPage.tsx'
import { LogoPage } from './pages/LogoPage/LogoPage.tsx'
import { InputPage } from './pages/InputPage/InputPage.tsx'

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/buttons'
				element={<ButtonsPage />}
			/>
			<Route
				path='/modals'
				element={<ModalsPage />}
			/>
			<Route
				path='/tabs'
				element={<TabsPage />}
			/>
			<Route
				path='/icons'
				element={<IconsPage />}
			/>
			<Route
				path='/lots'
				element={<LotsPage />}
			/>
			<Route
				path='/tags'
				element={<TagsPage />}
			/>
			<Route
				path='/select'
				element={<SelectPage />}
			/>
			<Route
				path='/forms'
				element={<FormsPage />}
			/>
			<Route
				path='/logo'
				element={<LogoPage />}
			/>
			<Route
				path='/input'
				element={<InputPage />}
			/>
		</Routes>
	)
}

export default AppRouter
