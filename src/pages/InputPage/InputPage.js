import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '../../main';
import s from './InputPage.module.scss';
export const InputPage = () => {
    return (_jsx("div", { className: s.root, children: _jsx("div", { children: _jsxs("form", { children: [_jsx(Input, {}), _jsx(Input, { variant: 'dark' })] }) }) }));
};
