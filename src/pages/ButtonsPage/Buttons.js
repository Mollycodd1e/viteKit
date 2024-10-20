import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, NewIcon, RoundButton, SliderNavigation, Switcher } from '../../main';
import s from './ButtonsPage.module.scss';
import { ButtonState } from './ButtonState/ButtonState';
import { ZoomControls } from '../../components/ZoomControls';
export const ButtonsPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    return (_jsxs("div", { className: s.root, children: [_jsxs("div", { className: s.clearButton, children: [_jsx("h2", { children: "\u041E\u0431\u044B\u0447\u043D\u0430\u044F" }), _jsx("div", { className: s.buttonsWrapper, children: _jsx(ButtonState, { children: _jsx(Button, { as: 'button', size: 'large', variant: 'blue', children: "\u041F\u0440\u0438\u0432\u0435\u0442\u0438\u043A\u0438" }) }) })] }), _jsxs("div", { className: s.clearButton, children: [_jsx("h2", { children: "\u041A\u0440\u0443\u0433\u043B\u0430\u044F" }), _jsx("div", { className: s.buttonsWrapper, children: _jsx(RoundButton, { variant: isActive ? 'blackFill' : 'whiteStroke', size: 'tiny', onClick: () => setIsActive(!isActive), children: _jsx(NewIcon, { name: 'close', size: '12', color: isActive ? '#fff' : '#000' }) }) })] }), _jsxs("div", { children: [_jsx("h2", { children: "\u0417\u0443\u043C" }), _jsx(ZoomControls, { size: 'medium', zoomIn: () => { }, zoomOut: () => { } })] }), _jsxs("div", { children: [_jsx("h2", { children: "\u0421\u043B\u0430\u0439\u0434\u0435\u0440" }), _jsx(SliderNavigation, { goNext: () => { }, arr: [1, 2, 3], indexSlide: 0, goPrev: () => { } })] }), _jsx(Switcher, { isActive: isActive, onClick: () => setIsActive(!isActive), children: "\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435" }), _jsx(Switcher, { isActive: isActive1, onClick: () => setIsActive1(!isActive1), children: "\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435" })] }));
};
