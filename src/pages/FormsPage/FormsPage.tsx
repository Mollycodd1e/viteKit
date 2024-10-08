import {useState} from 'react'
import s from './FormsPage.module.scss'
import {ModalForm} from "../../components/FormModal/ui/ModalForm.tsx";
import {Button, ModalSuccess} from "../../main.ts";

const FormsPage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

    return (
        <div className={s.root}>
            <Button as={'button'} onClick={() => setIsFormModalOpen(true)}>ModalForm</Button>
            <Button as={'button'} onClick={() => setIsSuccessModalOpen(true)}>ModalSucceess</Button>

            <ModalForm submitHandler={(data) => {
                console.log(data)
            }} subTitle={'Оставьте номер телефона для получения консультации'} title={'Оставить обращение'}
                       isRequiredPhoneOrEmail={true}
                       personalCheckBox={{
                           text: 'Я принимаю условия Политики обработки и защиты персональных данных, даю согласия на обработку персональных данных',
                           isRequired: true
                       }} isRequiredPhone={false} modalWidth={'530px'} isFormOpen={isFormModalOpen}
                       setIsFormOpen={setIsFormModalOpen} isEmail={true} isTextArea={true}
                       textAreaPlaceholder={'Напишите ваш вопрос или комментарий'}/>

            <ModalSuccess isSuccessOpen={isSuccessModalOpen} setIsSuccess={setIsSuccessModalOpen}/>
        </div>
    )
}

export default FormsPage
