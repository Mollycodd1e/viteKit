import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import s from './Select.module.scss';
import { NewIcon } from '../../NewIcon';
const cx = classNames.bind(s);
const SelectComponent = ({ options, placeholder = 'Выберите опции', error, disabled, disabledOptions = [], additionalClass = '', additionalClassOption, additionalClassBtn, onChange, onBlur, selectedValues = [], isBtn = false, btnName, clickableOptions, isListRight = false, }) => {
    const [selectedOptions, setSelectedOptions] = useState(selectedValues);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const handleOptionClick = useCallback((option) => () => {
        if (disabledOptions.some((disabled) => disabled.value === option.value)) {
            return;
        }
        const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
            ? selectedOptions.filter((selected) => selected.value !== option.value)
            : [...selectedOptions, option];
        setSelectedOptions(newSelectedOptions);
        if (onChange) {
            onChange(newSelectedOptions);
        }
    }, [selectedOptions, onChange]);
    const handleDocumentClick = useCallback((event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            const target = event.target;
            if (target.closest('svg')) {
                return;
            }
            setIsOpen(false);
        }
    }, []);
    const handleBlur = useCallback(() => {
        if (onBlur) {
            onBlur(selectedOptions);
        }
    }, [selectedOptions, onBlur]);
    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [handleDocumentClick]);
    const prevSelectedValuesRef = useRef(selectedValues);
    useEffect(() => {
        if (selectedValues.length !== prevSelectedValuesRef.current.length) {
            setSelectedOptions(selectedValues);
            prevSelectedValuesRef.current = selectedValues;
        }
    }, [selectedValues]);
    return (_jsxs("div", { ref: containerRef, className: cx(s.multiSelectWrapper, { [s.multiSelectWrapperError]: error }, additionalClass), tabIndex: 0, onBlur: handleBlur, children: [_jsxs("div", { className: cx(s.inputWrapper), children: [!isBtn && (_jsxs(_Fragment, { children: [_jsx("div", { className: cx(s.selectedOptions, { [s.selectedOptionsNotEmpty]: selectedOptions.length > 0 }, { [s.selectOptionsDisabled]: disabled }), onClick: () => setIsOpen(!isOpen), children: selectedOptions.length === 0 ? placeholder : 'Выбрано ' + selectedOptions.length }), _jsx(NewIcon, { name: 'arrowShort', deg: isOpen ? '180' : '0', size: '24', additionalClass: s.icon })] })), isBtn && (_jsxs(_Fragment, { children: [_jsx("button", { className: cx(s.selectedOptions, s.selectedOptionsBtn, { [s.selectOptionsDisabled]: disabled }, additionalClassBtn), onClick: () => setIsOpen(!isOpen), children: btnName }), _jsx(NewIcon, { name: 'filter', deg: isOpen ? '180' : '0', size: '24', additionalClass: s.icon })] }))] }), isOpen && (_jsx("div", { className: cx(s.optionsList, { [s.listRight]: isListRight }, additionalClassOption), children: options?.map((option) => (_jsxs("div", { className: cx(s.option, {
                        [s.selected]: selectedOptions.some((selected) => selected.value === option.value),
                        [s.optionDisabled]: disabledOptions.some((disabled) => disabled.value === option.value),
                        [s.optionClickable]: (clickableOptions && clickableOptions.includes(`${option.value}`)) || isBtn,
                    }), onClick: handleOptionClick(option), children: [_jsx("div", { children: option.label }), _jsx(NewIcon, { size: '20', name: selectedOptions.some((selected) => selected.value === option.value)
                                ? 'selectChecked'
                                : 'selectUnchecked' })] }, option.value))) }))] }));
};
export const Select = memo(SelectComponent);
Select.displayName = 'Select';
