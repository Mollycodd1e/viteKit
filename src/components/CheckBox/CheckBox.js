import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../Input";
import classNames from "classnames";
import { forwardRef } from "react";
import s from './s.module.scss';
import { NewIcon } from "../NewIcon";
const cx = classNames.bind(s);
export const CheckBox = forwardRef(({ text, isChecked, error, ...props }, ref) => {
    return (_jsxs("label", { className: cx(s.checkboxLabel, { [s.error]: error }), children: [_jsx(Input, { type: "checkbox", ...props, ref: ref }), isChecked && _jsx(NewIcon, { additionalClass: s.checkIcon, color: 'white', strokeWidth: '3', name: 'check', size: '16' }), _jsx("div", { className: cx(s.labelText, { [s.error]: error }), dangerouslySetInnerHTML: { __html: text } })] }));
});
