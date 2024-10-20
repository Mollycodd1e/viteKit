import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu } from '../Menu.tsx';
import s from './s.module.scss';
import { useState } from 'react';
import { NewIcon } from '../../../main.ts';
export const Header = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            window.location.href = 'https://test.stone.ru';
        }
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setTimeout(() => {
            if (!document?.activeElement?.classList.contains('close-button')) {
                setIsFocused(false);
            }
        }, 0);
    };
    const handleClose = () => {
        setInputValue('');
        setIsFocused(false);
    };
    return (_jsxs("nav", { className: s.root, children: [_jsxs("div", { className: s.wrap, children: [_jsxs("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '200', height: '60', children: [_jsx("rect", { width: '200', height: '60', fill: 'transparent' }), _jsx("text", { x: '0', y: '42', fontFamily: 'Arial, sans-serif', fontSize: '40', fill: 'white', children: "Stone" }), _jsx("rect", { x: '110', y: '10', width: '85', height: '40', rx: '8', ry: '8', fill: '#f90' }), _jsx("text", { x: '115', y: '42', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '40', fill: 'black', children: "Hub" })] }), _jsxs("search", { className: s.search, children: [_jsx("button", { style: {
                                    margin: 'unset',
                                    border: 'unset',
                                    background: 'unset',
                                    padding: 'unset',
                                    cursor: 'pointer',
                                }, onClick: (e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://test.stone.ru';
                                }, children: _jsx(NewIcon, { additionalClass: s.searchIcon, size: '24', name: 'search' }) }), _jsx("input", { type: 'text', value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown, onFocus: handleFocus, onBlur: handleBlur, className: s.searchInp, placeholder: 'Изучить stone-kit' }), isFocused && (_jsx("button", { onClick: handleClose, className: `${s.closeBtn} close-button`, children: _jsx(NewIcon, { strokeWidth: '2.5', color: '#252525', size: '18', name: 'close' }) }))] })] }), _jsx(Menu, {})] }));
};
