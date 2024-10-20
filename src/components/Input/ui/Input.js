import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import classNames from 'classnames';
import s from './Input.module.scss';
const cx = classNames.bind(s);
export const Input = forwardRef(({ size_s = 'large', size_m, size_l, pre = false, post = false, variant = 'light', width = 'auto', error, type, additionalClass = '', ...props }, ref) => {
    return (_jsxs(_Fragment, { children: [type !== 'checkbox' && _jsxs("div", { className: cx(s.inputWrapper, s[`${size_s}-size`], s[`${size_m}-size_m`], s[`${size_l}-size_l`], s[`${variant}`], { [s.inputWrapperPre]: pre }, { [s.inputWrapperPost]: post }, s[`${width}-width`], { [s.inputWrapperError]: error }, additionalClass), children: [pre && _jsx("span", { children: pre }), _jsx("input", { ref: ref, type: type, ...props }), post && _jsx("span", { children: post })] }), type === 'checkbox' && _jsx("input", { className: cx(s.checkBox), ref: ref, type: type, ...props })] }));
});
Input.displayName = 'Input';
