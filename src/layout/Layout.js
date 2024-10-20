import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './components/Header/Header.tsx';
import s from './style.module.scss';
const Layout = ({ children }) => {
    return (_jsxs("div", { className: s.layout, children: [_jsx(Header, {}), _jsx("main", { children: children })] }));
};
export default Layout;
