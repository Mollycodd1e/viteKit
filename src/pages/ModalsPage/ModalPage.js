import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from './ModalPage.module.scss';
import { Button, Modal } from '../../main';
const ModalsPage = () => {
    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);
    return (_jsxs("div", { className: s.root, children: [_jsx(Button, { as: 'button', onClick: () => setmodal1((prev) => !prev), children: "\u041A\u0430\u0441\u043A\u0430\u0434 \u043C\u043E\u0434\u0430\u043B\u043E\u043A" }), _jsx(Modal, { isOpen: modal1, emitIsOpen: () => setmodal1((prev) => !prev), isTransparentBack: true, children: _jsx(Button, { as: 'button', onClick: () => setmodal2((prev) => !prev), children: "\u0432\u0430\u0439\u0434\u0438" }) }), _jsx(Modal, { isOpen: modal2, emitIsOpen: () => setmodal2((prev) => !prev), leaveDisableScroll: true, children: _jsx(Button, { as: 'button', onClick: () => setmodal2((prev) => !prev), children: "\u0432\u044B\u0439\u0434\u0438" }) })] }));
};
export default ModalsPage;
