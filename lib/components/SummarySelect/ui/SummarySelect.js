import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NewIcon } from '../../NewIcon';
import { Select } from '../../Select';
import s from './SummarySelect.module.scss';
export const SummarySelect = ({ label = '', ...props }) => {
    const handleChangeSelect = (selectedOptions) => {
        if (props.onChange) {
            props.onChange(selectedOptions);
        }
    };
    const handleRemoveOption = (value) => {
        const updatedSelect = props.selectedValues?.filter((s) => s.value !== value) || [];
        handleChangeSelect(updatedSelect);
    };
    const handleClearAll = () => {
        handleChangeSelect([]);
    };
    return (_jsxs("div", { className: s.root, children: [_jsxs("div", { className: s.nameWrapper, children: [_jsx("div", { children: label }), _jsx("div", { className: s.clearBtn, onClick: handleClearAll, children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" })] }), _jsx(Select, { ...props, onChange: handleChangeSelect }), props.selectedValues && props.selectedValues.length > 0 && (_jsx("div", { className: s.summaryList, children: props.selectedValues.map((m) => (_jsxs("div", { onClick: () => handleRemoveOption(m.value.toString()), className: s.summaryOption, children: [m.label, _jsx(NewIcon, { name: 'close', size: '16' })] }, m.value))) }))] }));
};
