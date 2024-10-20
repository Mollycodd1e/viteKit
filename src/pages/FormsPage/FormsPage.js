import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from './FormsPage.module.scss';
import { ModalForm } from "../../components/FormModal/ui/ModalForm.tsx";
import { Button, ModalSuccess } from "../../main.ts";
const FormsPage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    return (_jsxs("div", { className: s.root, children: [_jsx(Button, { as: 'button', onClick: () => setIsFormModalOpen(true), children: "ModalForm" }), _jsx(Button, { as: 'button', onClick: () => setIsSuccessModalOpen(true), children: "ModalSucceess" }), _jsx(ModalForm, { submitHandler: (data) => {
                    console.log(data);
                }, subTitle: 'Оставьте номер телефона для получения консультации', title: 'Оставить обращение', isRequiredPhoneOrEmail: true, personalCheckBox: {
                    text: 'Я принимаю условия Политики обработки и защиты персональных данных, даю согласия на обработку персональных данных',
                    isRequired: true
                }, isRequiredPhone: false, modalWidth: '530px', isFormOpen: isFormModalOpen, setIsFormOpen: setIsFormModalOpen, isEmail: true, isTextArea: true, textAreaPlaceholder: 'Напишите ваш вопрос или комментарий' }), _jsx(ModalSuccess, { isSuccessOpen: isSuccessModalOpen, setIsSuccess: setIsSuccessModalOpen })] }));
};
export default FormsPage;
