import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import s from './DestinationTab.module.scss';
const cx = classNames.bind(s);
export const DestinationTab = ({ size = 'medium', size_m, size_l, destination = { destName: '', color: '' }, variant = 'whiteStroke', width = 'auto', routes = [], checked, onChange, additionalClass = '', ...props }) => {
    return (_jsxs("label", { className: cx(s.destination, s[`${size}-size`], s[`${size_m}-size_m`], s[`${size_l}-size_l`], s[`${variant}`], s[`${width}-width`], additionalClass), ...props, htmlFor: destination.destName, children: [_jsx("input", { id: destination.destName, checked: checked, onChange: onChange, type: 'checkbox', name: destination.destName, value: destination.destName }), _jsxs("div", { className: s.destination, children: [destination?.color && _jsx("span", { style: { background: destination?.color ?? '' } }), destination.destName] }), routes.map((r, i) => {
                return (_jsxs("div", { className: s.routeWrapper, children: [r.type, _jsx("div", { className: s.routeText, children: r.text })] }, i));
            })] }));
};
