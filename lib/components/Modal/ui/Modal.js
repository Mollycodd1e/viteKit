import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
export const Modal = ({ isOpen, emitIsOpen, isTransparentBack = false, isClickOutside = true, leaveDisableScroll = false, createPortalObj, additionalClass, additionalClassOverlay, additionalClassModalBody, opacity = 0.7, colorOverlay, notDisableScroll = false, children, }) => {
    const closeModal = () => {
        if (isClickOutside)
            emitIsOpen(false);
    };
    useEffect(() => {
        if (notDisableScroll)
            return;
        if (isOpen) {
            if (document.body.classList.contains('disable-scroll'))
                return;
            document.body.classList.add('disable-scroll');
        }
        else {
            if (leaveDisableScroll)
                return;
            document.body.classList.remove('disable-scroll');
        }
        // Cleanup function to remove the class if the component unmounts
        return () => document.body.classList.remove('disable-scroll');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    const modalContent = (_jsxs("div", { className: `${s.root} ${additionalClass}`, onClick: (e) => e.stopPropagation(), children: [_jsx("div", { onClick: closeModal, className: `${s.modalOverlay} ${additionalClassOverlay} ${isTransparentBack ? s.isTransparentBack : ''}`, style: {
                    opacity: isTransparentBack ? opacity : undefined,
                    backgroundColor: colorOverlay ? colorOverlay : undefined,
                } }), _jsx("div", { className: `${s.modalBody} ${additionalClassModalBody}`, children: children })] }));
    if (isOpen) {
        if (createPortalObj?.domNode) {
            return createPortal(modalContent, createPortalObj.domNode, createPortalObj.key);
        }
        return modalContent;
    }
    return null;
};
