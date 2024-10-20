import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputMask from 'react-input-mask';
import s from './ModalForm.module.scss';
import { Modal } from "../../Modal";
import { Flex } from "../../Flex";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import { NewIcon } from "../../NewIcon";
import { emailReg, nameReg, phoneReg } from "../utils/reg.ts";
import { CheckBox } from "../../CheckBox/CheckBox.tsx";
import { TextArea } from "../../TextArea/TextArea.tsx";
import { useClientWidth } from "../../../../lib/shared/useClientWidth.ts";
const defaultTextCheckBox = 'Я принимаю условия Политики обработки\n' +
    'и защиты персональных данных, даю согласия на обработку персональных\n' +
    'данных';
export const ModalForm = ({ isFormOpen, setIsFormOpen, title, isEmail, isTextArea, isRequiredPhone = true, isRequiredEmail = false, isRequiredPhoneOrEmail, textAreaPlaceholder, subTitle, submitHandler, modalWidth = '442px', rowsTextArea = 2, personalCheckBox = { text: defaultTextCheckBox, isRequired: true }, advCheckBox = { text: defaultTextCheckBox, isRequired: true }, }) => {
    const { register, handleSubmit, trigger, reset, watch, formState: { errors }, } = useForm();
    const isEmailFill = Boolean(watch('email'));
    const { onChange, onBlur, ...rest } = register('phone', {
        required: isRequiredPhone || isRequiredPhoneOrEmail ? !isEmailFill : true,
        pattern: { value: phoneReg, message: '' },
        onBlur: () => trigger('phone'),
    });
    const { isMobile, currentClientWidth } = useClientWidth();
    const isCheckedPersonal = watch('personalCheckBox');
    const isCheckAdvCheckBox = watch('advCheckBox');
    const onSubmit = (data) => {
        submitHandler(data);
        reset();
    };
    if (!currentClientWidth)
        return null;
    return (_jsx(Modal, { isOpen: isFormOpen, emitIsOpen: () => setIsFormOpen(false), additionalClass: s.modal, opacity: 0.7, isTransparentBack: true, additionalClassModalBody: s.modalBody, children: _jsxs("div", { className: s.root, style: { width: isMobile ? '100%' : modalWidth }, children: [_jsx("div", { className: s.title, dangerouslySetInnerHTML: { __html: title ?? 'Оставить обращение' } }), _jsx("div", { className: s.description, dangerouslySetInnerHTML: { __html: subTitle ?? `Оставьте номер телефона для получения консультации` } }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs(Flex, { className: s.inputWrapper, children: [_jsx(Input, { width: "full", size_s: "small", variant: "light", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F", "data-testid": "modal_name", ...register('name', { required: true, pattern: nameReg }), error: Boolean(errors.name) }), _jsx(InputMask, { inputMode: "numeric", name: "phone", mask: '+7 (999) 999-99-99', onChange: onChange, placeholder: "+7 (- - -)\u2002- - -\u2002- -\u2002- -", onBlur: onBlur, children: _jsx(Input, { width: "full", "data-testid": "phone_modal", type: "tel", size_s: 'small', variant: "light", ...rest, ...register('phone'), error: Boolean(errors.phone) }) }), isEmail && _jsx(Input, { width: "full", size_s: "small", variant: "light", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", "data-testid": "modal_email", ...register('email', {
                                        required: isRequiredEmail || isRequiredPhoneOrEmail ? isEmailFill : false,
                                        pattern: emailReg
                                    }), error: Boolean(errors.email) }), isTextArea &&
                                    _jsx(TextArea, { "data-testid": "modal_textarea", placeholder: textAreaPlaceholder, rows: rowsTextArea, width: 'full', ...register('textarea') }), advCheckBox && _jsx(CheckBox, { "data-testid": "modal_advCheckBox", isChecked: isCheckAdvCheckBox, error: Boolean(errors.advCheckBox), text: advCheckBox.text, ...register('advCheckBox', { required: advCheckBox?.isRequired }) }), _jsx(CheckBox, { "data-testid": "modal_personalCheckBox", isChecked: isCheckedPersonal, error: Boolean(errors.personalCheckBox), text: personalCheckBox.text, ...register('personalCheckBox', { required: personalCheckBox.isRequired }) }), _jsx(Button, { "data-testid": "modal_submit", variant: "blue", width: "full", type: "submit", size: "large", as: "button", additionalClass: s.modalBtn, children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })] }), _jsx(Button, { additionalClass: s.btn, onClick: () => setIsFormOpen(false), as: "button", variant: "gray", type: 'button', size: "small", children: _jsx(NewIcon, { name: "close", size: "16", color: "#141416" }) })] })] }) }));
};
