import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import s from './ButtonState.module.scss';
import { BUTTON_VARIANTS } from '../../../components/Button/ui/Button.types';
import { NewIcon } from '../../../components/NewIcon/ui/NewIcon';
import iconTypes from '../../../components/NewIcon/ui/iconTypes';
export const ButtonState = ({ children }) => {
    const [width, setWidth] = useState('auto');
    const [variants, setVariants] = useState('blue');
    const [isLoader, setIsLoader] = useState(false);
    const [preIcon, setPreIcon] = useState(null);
    const [postIcon, setPostIcon] = useState(null);
    const [preSize, setPreSize] = useState(null);
    const [postSize, setPostSize] = useState(null);
    const IconSizeList = ['12', '16', '20', '24'];
    const modifiedChildren = React.cloneElement(children, {
        width: width,
        variant: variants,
        isLoading: isLoader,
        pre: preIcon ? (_jsx(NewIcon, { name: preIcon, size: preSize ?? '24' })) : null,
        post: postIcon ? (_jsx(NewIcon, { name: postIcon, size: postSize ?? '24' })) : null,
    });
    const widthVariants = ['auto', 'full'];
    const variantsList = Object.values(BUTTON_VARIANTS);
    const iconList = Object.keys(iconTypes);
    return (_jsxs("div", { className: s.root, children: [modifiedChildren, _jsxs("div", { className: s.optionsWrapper, children: [_jsx("div", { children: _jsxs("label", { children: ["Width:", _jsx("select", { onChange: (e) => setWidth(e.target.value), children: widthVariants.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsx("div", { children: _jsxs("label", { children: ["Variants:", _jsx("select", { onChange: (e) => setVariants(e.target.value), children: variantsList.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsx("div", { children: _jsxs("label", { children: ["Pre Icon:", _jsx("select", { onChange: (e) => setPreIcon(e.target.value), children: iconList.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsx("div", { children: _jsxs("label", { children: ["Post Icon:", _jsx("select", { onChange: (e) => setPostIcon(e.target.value), children: iconList.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsx("div", { children: _jsxs("label", { children: ["Pre Icon Size:", _jsx("select", { onChange: (e) => setPreSize(e.target.value), children: IconSizeList.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsx("div", { children: _jsxs("label", { children: ["Post Icon Size:", _jsx("select", { onChange: (e) => setPostSize(e.target.value), children: IconSizeList.map((variant) => (_jsx("option", { value: variant, children: variant }, variant))) })] }) }), _jsxs("label", { className: s.isLoading, children: ["isLoading", _jsx("input", { type: 'checkbox', onChange: () => setIsLoader(!isLoader) })] })] })] }));
};
