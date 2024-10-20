'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import s from './TabSwitcher.module.scss';
import { Text } from '../../Text';
import classNames from 'classnames';
import { useClientWidth } from "../../../main.ts";
const cx = classNames.bind(s);
const TabSwitcher = ({ children, variant = 'whiteRow', isApart = false, addClassName = '', col = false, }) => {
    return (_jsx("div", { className: cx(s.root, s[variant], addClassName, { [s.rootCol]: col, [s.apart]: isApart }), children: children }));
};
const TabSwitcherItem = forwardRef((props, ref) => {
    const { isTablet, isDesktop } = useClientWidth();
    const { index, children, addItemClassName, disabled = false, itemsLength = 0, width, width_m, width_l, ...rest } = props;
    const isLong = children?.toString().length ? children?.toString().length > 2 : false;
    const getWidth = (isTablet, isDesktop) => {
        if (isTablet && width_m)
            return width_m;
        else if (isDesktop && width_l)
            return width_l;
        else
            return width;
    };
    const isAutoWidth = !width && !width_m && !width_l && isLong;
    return (_jsxs("label", { className: cx({ [s.isLong]: isLong }), children: [_jsx("input", { ref: ref, type: 'checkbox', ...rest }), _jsx("div", { style: { width: getWidth(isTablet, isDesktop) }, className: cx(cx(s.item, { [s.firstItem]: index === 0 }, { [s.lastItem]: index === itemsLength - 1 }, { [s.isDisabled]: disabled }, { [s.autoWidth]: isAutoWidth }), addItemClassName), children: _jsx(Text, { className: s.text, children: children }) })] }));
});
TabSwitcherItem.displayName = 'TabSwitcherItem';
const SwitcherNamespace = Object.assign(TabSwitcher, { Item: TabSwitcherItem });
export { SwitcherNamespace as TabSwitcher };
