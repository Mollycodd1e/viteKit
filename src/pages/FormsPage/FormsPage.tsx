import {useState} from 'react'
import s from './FormsPage.module.scss'
import {ModalForm} from "../../components/FormModal/ui/ModalForm.tsx";
import {Button} from "../../main.ts";

const FormsPage = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

    return (
        <div className={s.root}>
            <Button as={'button'} onClick={() => setIsFormModalOpen(true)}>ModalForm</Button>

            <ModalForm subTitle={'`Оставьте номер телефона для получения консультации`'} title={'Оставить обращение'}
                       personalCheckbox={{
                           text: 'Я принимаю условия Политики обработки\n' +
                               'и защиты персональных данных, даю согласия на обработку персональных\n' +
                               'данных', isRequired: true
                       }} isFormOpen={isFormModalOpen} setIsFormOpen={setIsFormModalOpen}/>
        </div>
    )
}

export default FormsPage
