import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import s from './Menu.module.scss';
import { NewIcon } from '../../main.ts';
export const Menu = () => {
    const LinkComponent = ({ to, title }) => {
        return (_jsxs(Link, { to: to, className: s.linkWrap, children: [title, _jsx(NewIcon, { size: '24', name: 'play2', deg: '90', color: 'white' })] }));
    };
    return (_jsxs("div", { className: s.root, children: [_jsx(LinkComponent, { to: '/buttons', title: 'КНОПКИ' }), _jsx(LinkComponent, { to: '/modals', title: 'МОДАЛКИ' }), _jsx(LinkComponent, { to: '/tabs', title: 'ТАБЫ' }), _jsx(LinkComponent, { to: '/icons', title: 'ИКОНКИ' }), _jsx(LinkComponent, { to: '/lots', title: 'ЛОТЫ' }), _jsx(LinkComponent, { to: '/tags', title: 'ТЭГИ' }), _jsx(LinkComponent, { to: '/select', title: 'СЕЛЕКТ' }), _jsx(LinkComponent, { to: '/forms', title: 'ФОРМЫ' }), _jsx(LinkComponent, { to: '/logo', title: 'ЛОГО' }), _jsx(LinkComponent, { to: '/input', title: 'ИНПУТЫ' })] }));
};
