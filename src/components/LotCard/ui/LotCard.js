import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import s from './LotCard.module.scss';
import LotImage from './../assets/testLot.webp';
import { Text } from '../../Text';
import { checkBedroomsCount } from '../utils/checkBedroomsCount';
import { NewIcon } from '../../NewIcon';
import { Tag } from '../../Tag';
import { Button } from '../../Button';
import { formatPrice } from '../utils/formatPrice';
import { useClientWidth } from '../../../main';
import { formatPayment } from '../utils/monthlyPayment';
import { OFFICE_TYPES } from '../utils/const';
export const LotCard = ({ lot, handleBtnForm, handleFullScreenBtn, btnName = 'Уточнить детали', }) => {
    const { area, floor, floorsNumber, housing, bedroomsCount, number, isDecoration, sellingPrice, sellingPricePerMeter, discountedPrice, discountVolume, interiorPlanImg, mortgageMonthlyPayment, workPlacesCount, type, direction, floorPlanImg, } = lot;
    const isOffice = direction === 1;
    const areaStr = area + ' ' + 'м²';
    const floorStr = floor + ' ' + 'из' + ' ' + floorsNumber;
    const { isMobile } = useClientWidth();
    return (_jsxs("div", { className: s.root, children: [_jsx(Button, { as: 'button', variant: 'gray', size: 'small', additionalClass: s.fullscreenBtnMobile, onClick: (e) => {
                    e.preventDefault();
                    handleFullScreenBtn && handleFullScreenBtn();
                }, children: _jsx(NewIcon, { name: 'fullscreen', color: '#141416', size: '16' }) }), _jsx("div", { className: s.lotImageWrapper, children: _jsx("img", { src: interiorPlanImg ?? floorPlanImg ?? LotImage, width: 311, height: 224 }) }), _jsxs("div", { className: s.lotInfoWrapper, children: [_jsxs("div", { className: s.monthlyWrapper, children: [_jsx(Text, { className: s.infoHeader, html: `${isOffice && type
                                    ? OFFICE_TYPES[type]
                                    : checkBedroomsCount(bedroomsCount)}, ${number}` }), mortgageMonthlyPayment && (_jsx("div", { className: s.monthlyPayment, children: formatPayment(mortgageMonthlyPayment) }))] }), !isDecoration && (_jsxs("div", { className: s.decor, children: [!isOffice && (_jsxs(_Fragment, { children: [_jsx(NewIcon, { name: 'withoutDecor' }), _jsx("span", { children: "\u0411\u0435\u0437 \u043E\u0442\u0434\u0435\u043B\u043A\u0438" })] })), isOffice && workPlacesCount && _jsx("span", { children: workPlacesCount + ' рабочих мест' })] })), _jsxs("div", { className: s.lotPropertyListDesktop, children: [_jsx(Tag, { variant: 'gray', children: areaStr }), _jsx(Tag, { variant: 'gray', children: housing }), _jsx(Tag, { variant: 'gray', children: 'Этаж' + ' ' + floorStr })] }), _jsxs("ul", { className: s.lotPropertyListMobile, children: [_jsxs("li", { className: s.lotPropertyItem, children: [_jsx("div", { children: "\u041F\u043B\u043E\u0449\u0430\u0434\u044C" }), _jsx("div", { children: areaStr })] }), _jsxs("li", { className: s.lotPropertyItem, children: [_jsx("div", { children: housing?.split(' ')[0] }), _jsx("div", { children: housing?.split(' ')[1] })] }), _jsxs("li", { className: s.lotPropertyItem, children: [_jsx("div", { children: "\u042D\u0442\u0430\u0436" }), _jsx("div", { children: floorStr })] })] })] }), _jsxs("div", { className: s.lotPriceWrapper, children: [_jsxs("div", { className: s.discountWrapper, children: [discountedPrice && sellingPrice && (_jsxs("div", { className: s.discountPrice, children: [_jsx("span", { children: formatPrice(sellingPrice) }), _jsx(Tag, { variant: 'red', size: 'tiny', children: '-' + discountVolume + '%' })] })), _jsx("div", { children: formatPrice(discountedPrice || sellingPrice) })] }), sellingPricePerMeter && (_jsx("div", { className: s.lotPricePerMetr, children: formatPrice(sellingPricePerMeter, true) })), _jsxs("div", { className: s.btnWrapper, children: [_jsx(Button, { as: 'button', variant: 'gray', additionalClass: s.fullscreenBtn, onClick: (e) => {
                                    e.preventDefault();
                                    handleFullScreenBtn && handleFullScreenBtn();
                                }, children: _jsx(NewIcon, { name: 'fullscreen', color: '#141416', size: '20' }) }), _jsx(Button, { as: 'button', size: isMobile ? 'large' : 'medium', variant: 'black', width: 'full', onClick: (e) => {
                                    e.preventDefault();
                                    handleBtnForm();
                                }, children: btnName })] })] })] }));
};
