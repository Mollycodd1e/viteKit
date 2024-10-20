import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { NewIcon } from '../../NewIcon';
import s from './Button.module.scss';
const cx = classNames.bind(s);
export const Button = ({ size = 'medium', size_m, size_l, pre = false, children = '', post = false, variant = 'blue', width = 'auto', additionalClass = '', isLoading = false, ...props }) => {
    const btnClassName = cx(s.btnCommon, s[`${size}-size`], s[`${size_m}-size_m`], s[`${size_l}-size_l`], s[`${variant}`], { [s.btnLoading]: isLoading }, { [s.btnCommonInline]: pre || post }, s[`${width}-width`], additionalClass);
    const btnBody = () => {
        return (_jsxs(_Fragment, { children: [isLoading && (_jsx(NewIcon, { name: 'loader', size: '24', color: 'currentColor', additionalClass: s.loader })), _jsxs(_Fragment, { children: [pre && _jsx("span", { className: cx({ [s.isHidden]: isLoading }), children: pre }), _jsx("span", { className: cx({ [s.isHidden]: isLoading }), children: children }), post && _jsx("span", { className: cx({ [s.isHidden]: isLoading }), children: post })] })] }));
    };
    if (props.as === 'link') {
        return (_jsx("a", { className: btnClassName, ...props, children: btnBody() }));
    }
    return (_jsx("button", { className: btnClassName, ...props, children: btnBody() }));
};
