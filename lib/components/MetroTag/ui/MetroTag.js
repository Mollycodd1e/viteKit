import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import s from './MetroTag.module.scss';
import { NewIcon } from '../../NewIcon';
const cx = classNames.bind(s);
export const MetroTag = ({ addClassName, addClassNameColor, addClassNameTimeTo, metro, width = 'auto', variant = 'default', isBetween = false, withBg = false, ...rest }) => {
    const possibleIcons = ['pedestrian', 'auto'];
    return (_jsxs("div", { className: cx(s.root, s[variant], s[isBetween ? 'long' : ''], s[withBg ? 'withBg' : ''], addClassName, s[width]), ...rest, children: [_jsxs("div", { className: cx(s.metroColor, addClassNameColor), children: [metro?.color && _jsx("span", { style: { background: metro?.color ?? '' } }), metro.name] }), metro.timeTo && (_jsxs("div", { className: cx(s.route, addClassNameTimeTo), children: [metro.mode && possibleIcons.includes(metro.mode) && (_jsx(NewIcon, { size: '20', name: metro.mode, color: '#777E90' })), metro.timeTo + ' ' + 'мин'] }))] }));
};
