import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from './../ui/SortSelect.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(s);
export const useSortSelect = ({ selectedOption, setSelectedOption, setIsOpen, containerRef, onBlur, onChange, isDesktop, placeholder, }) => {
    const handleOptionClick = (option) => (event) => {
        event.stopPropagation();
        const newSelectedOption = selectedOption?.value === option.value ? null : option;
        if (!newSelectedOption)
            return;
        setSelectedOption && setSelectedOption(newSelectedOption);
        if (onChange) {
            // Передаем кастомное событие с нужными данными
            const customEvent = {
                ...event,
                target: { value: newSelectedOption },
            };
            onChange(customEvent);
        }
    };
    const handleDocumentClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    const handleBlur = (event) => {
        if (onBlur) {
            const customEvent = {
                ...event,
                target: { value: selectedOption },
            };
            onBlur(customEvent);
        }
    };
    const getInputValue = () => {
        if (!isDesktop)
            return '';
        if (!selectedOption)
            return placeholder;
        return selectedOption.label;
    };
    const getOption = (option) => {
        return (_jsxs("div", { className: cx(s.option, {
                [s.selected]: selectedOption?.value === option.value,
            }), onClick: handleOptionClick(option), children: [_jsx("div", { children: option.label }), _jsx("div", { className: cx(s.checkBox, {
                        [s.checkBoxChecked]: selectedOption?.value === option.value,
                    }), children: selectedOption?.value === option.value && _jsx("div", { className: s.innerCheck }) })] }, option.value));
    };
    return { handleDocumentClick, handleBlur, getInputValue, getOption };
};
