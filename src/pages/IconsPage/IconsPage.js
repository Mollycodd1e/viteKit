import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { iconTypes } from '../../components/NewIcon/ui/NewIcon.tsx';
import { NewIcon } from '../../main.ts';
import s from './IconsPage.module.scss';
export const IconsPage = () => {
    return (_jsx("div", { className: s.root, children: Array.isArray(Object.keys(iconTypes))
            ? Object.keys(iconTypes).map((e, i) => {
                return (_jsxs("div", { className: s.iconWrapper, children: [_jsx(NewIcon, { name: e, size: '16' }, i), e ?? ''] }));
            })
            : null }));
};
