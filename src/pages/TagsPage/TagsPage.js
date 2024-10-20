import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './TagsPage.module.scss';
import { MetroTag, Tag } from '../../main.ts';
export const TagsPage = () => {
    const metro = { name: 'sokolnuyaki', color: 'red', timeTo: 10, mode: 'auto' };
    return (_jsxs("div", { className: s.root, children: [_jsx(MetroTag, { metro: metro }), _jsx(MetroTag, { metro: metro, withBg: true }), _jsx(MetroTag, { metro: metro, withBg: true, isBetween: true, width: 'full' }), _jsx(Tag, { variant: 'shade', size: 'medium', size_m: 'tiny', size_l: 'tiny', children: "\u041E\u0442 285 000 \u20BD/\u043C2" }), _jsx(Tag, { variant: 'chineseBlack', size: 'medium', size_m: 'tiny', size_l: 'medium', children: "\u041E\u0442 285 000 \u20BD/\u043C2" })] }));
};
