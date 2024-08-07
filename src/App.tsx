import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ButtonsPage} from './pages/ButtonsPage/Buttons.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import Layout from './layout/Layout.tsx'
import ModalsPage from './pages/ModalsPage/ModalPage.tsx'
import TabsPage from './pages/TabsPage/TabsPage.tsx'
import {IconsPage} from './pages/IconsPage/IconsPage.tsx'
import {LotsPage} from './pages/LotsPage/LotsPage.tsx'
import {TagsPage} from './pages/TagsPage/TagsPage.tsx'
import {SelectPage} from './pages/SelectPage/SelectPage.tsx'

function App() {
	return (
		<Router>
			<Layout>
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
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
