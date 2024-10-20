import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import s from './Switcher.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(s);
export const Switcher = ({ children, isActive, onClick }) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, []);
    return (_jsxs("div", { className: s.switcherWrapper, children: [_jsx("div", { className: cx(s.swiper, { [s.swiperActive]: isActive }, { [s.swiperInactive]: !isActive && !isFirstRender.current }), onClick: onClick, children: _jsx("div", { className: cx(s.swiperPoint, { [s.swiperPointActive]: isActive }) }) }), children] }));
};
