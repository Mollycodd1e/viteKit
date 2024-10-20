import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './FieldInput.module.scss';
export const FieldInput = ({ label, children }) => {
    return (_jsxs("div", { className: s.fieldInputWrapper, children: [_jsx("label", { className: s.label, children: label }), children] }));
};
