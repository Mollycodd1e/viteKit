import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import classNames from 'classnames';
import s from './styles.module.scss';
const cx = classNames.bind(s);
export const TextArea = forwardRef(({ width = 'auto', error, additionalClass = '', children = '', ...props }, ref) => {
    return (_jsx("textarea", { className: cx(s.root, s[`${width}-width`], additionalClass), ref: ref, style: { resize: 'none' }, ...props, children: children }));
});
TextArea.displayName = 'TextArea';
