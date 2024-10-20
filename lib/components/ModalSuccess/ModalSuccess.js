import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from "../Modal";
import s from "./styles.module.scss";
import { Button } from "../Button";
import { NewIcon } from "../NewIcon";
export const ModalSuccess = ({ isSuccessOpen, setIsSuccess }) => {
    return _jsx(Modal, { emitIsOpen: setIsSuccess, isOpen: isSuccessOpen, additionalClassModalBody: s.modalBody, additionalClass: s.modal, opacity: 0.7, isTransparentBack: true, children: _jsxs("div", { className: s.root, children: [_jsxs("div", { className: s.check, children: [_jsx(NewIcon, { name: 'circle', size: '80', additionalClass: s.iconCircle, color: '#57C27D' }), _jsx(NewIcon, { additionalClass: s.iconCheck, size: '32', name: 'check', color: '#57C27D' })] }), _jsxs("div", { className: s.text, children: [_jsx("div", { className: s.successTitle, children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043F\u0440\u0438\u043D\u044F\u0442" }), _jsx("div", { className: s.successText, children: "\u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F" })] }), _jsx(Button, { "data-testid": "modal_submit", variant: "blue", width: "auto", type: "submit", size: "large", as: "button", onClick: () => setIsSuccess(false), additionalClass: s.modalBtn, children: "\u0425\u043E\u0440\u043E\u0448\u043E" })] }) });
};
