import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Select, SortSelect } from '../../main';
import s from './SelectPage.module.scss';
import { SummarySelect } from '../../components/SummarySelect';
export const SelectPage = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const options2 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ];
    const [sort, setSort] = useState(options[0]);
    const [select, setSelect] = useState([]);
    const handleChangeSort = (e) => {
        //@ts-expect-error todo types
        if (!e || !e.target)
            return;
        //@ts-expect-error todo types
        setSort(e.target.value);
    };
    const handleChangeSelect = (selectedOptions) => {
        if (!selectedOptions)
            return;
        setSelect(selectedOptions);
    };
    return (_jsxs("div", { className: s.root, children: [_jsxs("div", { children: [_jsx("h2", { children: "\u0421\u043E\u0440\u0442 \u0441\u0435\u043B\u0435\u043A\u0442" }), _jsx("div", { className: s.sort, children: _jsx(SortSelect, { selectedOption: sort, options: options, onChange: (e) => handleChangeSort(e) }) })] }), _jsxs("div", { className: s.summarySelect, children: [_jsx("h2", { children: "\u0421\u0435\u043B\u0435\u043A\u0442 \u0441 \u043E\u043F\u0446\u0438\u044F\u043C\u0438" }), _jsx(SummarySelect, { label: '\u041F\u0440\u043E\u0435\u043A\u0442', selectedValues: select, options: options2, onChange: (e) => handleChangeSelect(e), clickableOptions: ['option1', 'option2'] })] }), _jsxs("div", { children: [_jsx("h2", { children: "\u0421\u0435\u043B\u0435\u043A\u0442 \u0447\u0435\u043A\u0431\u043E\u043A\u0441" }), _jsx(Select, { selectedValues: select, options: options2, onChange: (e) => handleChangeSelect(e) })] }), _jsxs("div", { children: [_jsx("h2", { children: "\u0421\u0435\u043B\u0435\u043A\u0442 \u043A\u043D\u043E\u043F\u043A\u0430" }), _jsx("div", { style: { display: 'flex', justifyContent: 'flex-end' }, children: _jsx(Select, { isBtn: true, btnName: 'Фильтр', isListRight: true, selectedValues: select, options: options2, onChange: (e) => handleChangeSelect(e) }) })] })] }));
};
