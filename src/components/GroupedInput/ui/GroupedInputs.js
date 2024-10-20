import { jsx as _jsx } from "react/jsx-runtime";
import s from './GroupedInputs.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(s);
export const GroupedInputs = ({ children, addClassName }) => {
    return _jsx("div", { className: cx(s.root, addClassName), children: children });
};
