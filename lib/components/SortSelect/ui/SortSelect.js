import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import s from './SortSelect.module.scss';
import { NewIcon } from '../../NewIcon';
import { Modal, Text, useClientWidth } from '../../../main';
import { useSortSelect } from '../hooks/useSortSelect';
const cx = classNames.bind(s);
export const SortSelect = ({ options, selectedOption, placeholder = '', error, disabled, additionalClass = '', onChange, onBlur, mini, openOnTop = false, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { isMobile, isDesktop } = useClientWidth();
    const { handleBlur, getInputValue, getOption, handleDocumentClick } = useSortSelect({
        selectedOption,
        setSelectedOption: onChange,
        setIsOpen,
        containerRef,
        isOpen,
        isDesktop,
        placeholder,
        onChange,
        onBlur,
    });
    useEffect(() => {
        //@ts-expect-error кастомный эвент
        document.addEventListener('click', handleDocumentClick);
        return () => {
            //@ts-expect-error кастомный эвент
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);
    return (_jsxs("div", { ref: containerRef, className: cx(s.sortSelectWrapper, { [s.sortSelectWrapperError]: error }, { [s.sortSelectWrapperTop]: openOnTop }, additionalClass), tabIndex: 0, onBlur: handleBlur, children: [_jsxs("div", { className: cx(s.inputWrapper), children: [_jsx("input", { type: 'text', readOnly: true, value: getInputValue(), className: cx(s.selectedOptions, { [s.selectOptionsDisabled]: disabled }, { [s.selectionOptionMini]: mini }), onClick: () => setIsOpen(!isOpen) }), _jsx(NewIcon, { name: 'twoArrows', size: '24', additionalClass: s.icon })] }), isOpen && isMobile && (_jsxs(Modal, { isOpen: isOpen, emitIsOpen: setIsOpen, additionalClassModalBody: s.modalAddBody, additionalClass: s.selectModal, createPortalObj: { domNode: document.querySelector('body') }, isTransparentBack: true, children: [_jsxs("div", { className: s.mobileSortHeader, children: [_jsx(Text, { children: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430" }), _jsx("div", { onClick: () => setIsOpen(false), children: _jsx(NewIcon, { name: 'close', size: '20' }) })] }), _jsx("div", { className: s.mobileOptionList, children: options?.map((option) => getOption(option)) })] })), isOpen && !isMobile && (_jsx("div", { className: cx(s.optionsList, { [s.optionListOnTop]: openOnTop }), children: options?.map((option) => getOption(option)) }))] }));
};
SortSelect.displayName = 'SortSelect';
