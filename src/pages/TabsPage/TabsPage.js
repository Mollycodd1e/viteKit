import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FieldInput, TabSelect, TabSwitcher } from '../../main';
import s from './TabsPage.module.scss';
const TabsPage = () => {
    const [activeTab, setActiveTab] = useState('C мебелью');
    const tabList = ['C мебелью', 'C размерами', 'План этажа', 'Ген. план'];
    const tabs = ['Студия', '1', '2', '3', '4+'];
    return (_jsxs("div", { className: s.root, children: [_jsx(TabSwitcher, { children: tabs.map((m, i) => {
                    return (_jsx(TabSwitcher.Item, { itemsLength: tabs.length, index: i, value: m, children: m }, i));
                }) }), _jsx("div", { className: s.tabsShort, children: _jsx(FieldInput, { label: '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043F\u0430\u043B\u0435\u043D', children: _jsx(TabSwitcher, { children: tabs.map((m, i) => {
                            return (_jsx(TabSwitcher.Item, { itemsLength: tabs.length, index: i, value: m, addItemClassName: i === 0 ? s.gg : '', children: m }, i));
                        }) }) }) }), _jsx("div", { children: _jsx(TabSwitcher, { col: true, children: tabs.map((m, i) => {
                        return (_jsx(TabSwitcher.Item, { itemsLength: tabs.length, index: i, value: m, children: m }, i));
                    }) }) }), _jsx("div", { className: s.tabsShort, children: _jsx(TabSwitcher, { col: true, children: tabs.map((m, i) => {
                        return (_jsx(TabSwitcher.Item, { itemsLength: tabs.length, index: i, value: m, children: m }, i));
                    }) }) }), _jsx("div", { className: s.whiteRow_apart, children: _jsx(TabSwitcher, { variant: 'whiteRow', isApart: true, addClassName: s.row_apart, children: tabs.map((m, i) => {
                        return (_jsx(TabSwitcher.Item, { width: i === 0 ? '135px' : undefined, width_m: i === 0 ? '96px' : undefined, width_l: i === 0 ? '155px' : undefined, itemsLength: tabs.length, index: i, children: m }, i));
                    }) }) }), _jsx("div", { className: s.whiteRow_apart, children: _jsx(TabSwitcher, { variant: 'grayRow', isApart: true, addClassName: s.row_apart, children: tabs.map((m, i) => {
                        return (_jsx(TabSwitcher.Item, { width: i === 0 ? '135px' : undefined, width_m: i === 0 ? '96px' : undefined, width_l: i === 0 ? '155px' : undefined, itemsLength: tabs.length, index: i, children: m }, i));
                    }) }) }), _jsx("div", { className: s.tabSelectWrapper, children: _jsx(TabSelect, { variant: 'whiteFill', children: tabList.map((m, i) => {
                        return (_jsx(TabSelect.Item, { name: 'type', checked: activeTab === m, onChange: () => setActiveTab(m), value: m, children: m }, i));
                    }) }) }), _jsx("div", { className: s.tabSelectWrapper, children: _jsx(TabSelect, { variant: 'whiteStroke', children: ['для коммерции', 'для жилых'].map((m, i) => {
                        return (_jsx(TabSelect.Item, { name: 'type', width: '160px', withPadding: true, checked: activeTab === m, onChange: () => setActiveTab(m), value: m, children: m }, i));
                    }) }) })] }));
};
export default TabsPage;
