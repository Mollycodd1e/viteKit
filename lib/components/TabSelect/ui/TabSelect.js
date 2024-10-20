'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import s from './TabSelect.module.scss';
import classNames from 'classnames';
import { Text } from '../../Text';
import { useClientWidth } from "../../../shared/useClientWidth.ts";
const cx = classNames.bind(s);
export const TAB_SELECT_VARIANTS = {
    whiteFill: 'whiteFill',
    whiteStroke: 'whiteStroke'
};
const TabSelect = ({ variant = 'whiteFill', classname, children }) => {
    return (_jsx("div", { className: cx(s.root, s[`${variant}`], classname), children: children }));
};
const TabSelectItem = forwardRef((props, ref) => {
    const { isTablet, isDesktop } = useClientWidth();
    const getWidth = (isTablet, isDesktop) => {
        if (isTablet && width_m)
            return width_m;
        else if (isDesktop && width_l)
            return width_l;
        else
            return width;
    };
    const { children, className, additionalClassName, additionalLabelClass, 
    //TODO предлогаю засунуть в жопу isLong
    isLong, checked, withPadding = false, width, width_m, width_l, ...rest } = props;
    //isLong атрибут убирает ограничения в width, height 48px
    return (_jsxs("label", { className: cx(s.item, additionalLabelClass, { [s.withPadding]: withPadding }), children: [_jsx("input", { ref: ref, type: 'checkbox', checked: checked, ...rest }), _jsx("div", { className: cx(className, additionalClassName, { isLong }), style: { width: getWidth(isTablet, isDesktop) }, children: _jsx(Text, { className: cx(s.text), children: children }) })] }));
});
TabSelectItem.displayName = 'TabSelectItem';
const TabSelectNamespace = Object.assign(TabSelect, { Item: TabSelectItem });
export { TabSelectNamespace as TabSelect };
