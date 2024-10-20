import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Logo } from '../../main';
import s from './LogoPage.module.scss';
export const LogoPage = () => {
    return (_jsxs("div", { className: s.root, children: [_jsx(Logo, { variant: 'black' }), _jsx(Logo, { variant: 'white' }), _jsx(Logo, { variant: 'value' })] }));
};
