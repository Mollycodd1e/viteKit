import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import s from './MetroLabel.module.scss';
import { NewIcon } from '../../NewIcon';
const cx = classNames.bind(s);
export const MetroLabel = ({ addClassName, metro, width = 'full', justifyContent = 'flex-start', colorIcon = '#777E90', ...rest }) => {
    return (_jsxs("div", { style: { justifyContent: `${justifyContent}` }, className: cx(s.root, addClassName, s[width]), ...rest, children: [_jsxs("div", { className: s.metroColor, children: [metro?.color && _jsx("span", { style: { background: metro?.color ?? '' } }), metro.name] }), metro.routes &&
                metro.routes.map((m, i) => {
                    return (_jsxs("div", { className: s.route, children: [m.iconName && (_jsx(NewIcon, { size: '20', name: m.iconName, color: colorIcon })), m.timeTo + ' ' + 'мин'] }, i));
                })] }));
};
