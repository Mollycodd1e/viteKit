import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NewIcon } from '../../NewIcon';
import s from './RoundButton.module.scss';
import { sizeMap } from './RoundButton.types';
const cx = classNames.bind(s);
export const RoundButton = ({ size = 'small', size_m, size_l, children = '', iconName = '', variant = 'whiteStroke', additionalClass = '', deg, ...props }) => {
    const [btnSize, setBtnSize] = useState(sizeMap.small);
    const { color = '#141416' } = props;
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const sizeValue = width > 1440 && size_l
                ? sizeMap[size_l]
                : width >= 1024 && width <= 1440 && size_m
                    ? sizeMap[size_m]
                    : sizeMap[size] || sizeMap.small;
            setBtnSize(sizeValue);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [size, size_m, size_l]);
    return (_jsx("button", { className: cx(s.btnRound, s[`${size}-size`], s[`${size_m}-size_m`], s[`${size_l}-size_l`], s[`${variant}`], additionalClass), ...props, children: _jsx(_Fragment, { children: iconName ? (_jsx(NewIcon, { name: iconName, size: btnSize, deg: deg, color: color })) : (children) }) }));
};
