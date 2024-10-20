import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import { ButtonsPage } from './pages/ButtonsPage/Buttons.tsx';
import ModalsPage from './pages/ModalsPage/ModalPage.tsx';
import TabsPage from './pages/TabsPage/TabsPage.tsx';
import { IconsPage } from './pages/IconsPage/IconsPage.tsx';
import { LotsPage } from './pages/LotsPage/LotsPage.tsx';
import { TagsPage } from './pages/TagsPage/TagsPage.tsx';
import { SelectPage } from './pages/SelectPage/SelectPage.tsx';
import FormsPage from './pages/FormsPage/FormsPage.tsx';
import { LogoPage } from './pages/LogoPage/LogoPage.tsx';
import { InputPage } from './pages/InputPage/InputPage.tsx';
const AppRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/buttons', element: _jsx(ButtonsPage, {}) }), _jsx(Route, { path: '/modals', element: _jsx(ModalsPage, {}) }), _jsx(Route, { path: '/tabs', element: _jsx(TabsPage, {}) }), _jsx(Route, { path: '/icons', element: _jsx(IconsPage, {}) }), _jsx(Route, { path: '/lots', element: _jsx(LotsPage, {}) }), _jsx(Route, { path: '/tags', element: _jsx(TagsPage, {}) }), _jsx(Route, { path: '/select', element: _jsx(SelectPage, {}) }), _jsx(Route, { path: '/forms', element: _jsx(FormsPage, {}) }), _jsx(Route, { path: '/logo', element: _jsx(LogoPage, {}) }), _jsx(Route, { path: '/input', element: _jsx(InputPage, {}) })] }));
};
export default AppRouter;
