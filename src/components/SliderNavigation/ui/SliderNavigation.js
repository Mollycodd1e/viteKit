'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RoundButton } from '../../RoundButton';
import { Tag } from '../../Tag';
import { useClientWidth } from '../../../shared/useClientWidth.ts';
import classNames from 'classnames';
import s from './SliderNavigation.module.scss';
const cx = classNames.bind(s);
export const SliderNavigation = ({ indexSlide, isDisabledOff, goPrev, goNext, arr, isNeedTag = true, additionalClassTag = '', navigationClassName = '', additionalClassNavButton = '', size = "medium", size_m = "medium", size_l = "large", }) => {
    const { isDesktop } = useClientWidth();
    return (_jsxs("div", { className: navigationClassName, children: [_jsx(RoundButton, { iconName: 'directionDown', deg: '90', size: size, size_m: size_m, size_l: size_l, disabled: isDisabledOff ? false : indexSlide === 0, additionalClass: additionalClassNavButton, onClick: goPrev }), isNeedTag && (_jsx(Tag, { additionalClass: cx(s.sliderTag, additionalClassTag), variant: 'shade', size: !isDesktop ? 'medium' : 'large', size_m: size_m, size_l: size_l, children: `${indexSlide + 1} из ${arr.length}` })), _jsx(RoundButton, { disabled: isDisabledOff ? false : indexSlide === arr.length - 1, size: size, size_m: size_m, size_l: size_l, iconName: 'directionDown', deg: '-90', additionalClass: additionalClassNavButton, onClick: goNext })] }));
};
