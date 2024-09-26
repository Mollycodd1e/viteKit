import {useState} from 'react'
import s from './FormsPage.module.scss'
import {ModalForm} from "../../components/FormModal/ui/ModalForm.tsx";
import {Button} from "../../main.ts";

const FormsPage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

    return (
        <div className={s.root}>
            <Button as={'button'} onClick={() => setIsFormModalOpen(true)}>ModalForm</Button>

            <ModalForm submitHandler={(data) => {
                console.log(data)
            }} subTitle={'Оставьте номер телефона для получения консультации'} title={'Оставить обращение'}
                       personalCheckBox={{
                           text: 'Я принимаю условия Политики обработки и защиты персональных данных, даю согласия на обработку персональных\n' +
                               'данных', isRequired: true
                       }} modalWidth={'530px'} isFormOpen={isFormModalOpen} setIsFormOpen={setIsFormModalOpen} isEmail={true} isTextArea={true} textAreaPlaceholder={'Напишите ваш вопрос или комментарий'}/>
        </div>
    )
}

export default FormsPage
