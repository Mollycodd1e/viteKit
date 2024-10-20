import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useClientWidth } from '../../../main';
import { RoundButton } from '../../RoundButton';
import s from './ZoomControls.module.scss';
export const ZoomControls = ({ size = 'medium', zoomIn, zoomOut }) => {
    const { isDesktop } = useClientWidth();
    return (_jsxs("div", { className: s.root, children: [_jsx(RoundButton, { iconName: 'plus', size: isDesktop ? 'large' : size, color: '#141416', additionalClass: s.plusBtn, onClick: zoomIn }), _jsx(RoundButton, { iconName: 'minus', size: isDesktop ? 'large' : size, color: '#141416', additionalClass: s.minusBtn, onClick: zoomOut })] }));
};
