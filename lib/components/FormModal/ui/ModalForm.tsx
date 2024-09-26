import InputMask from 'react-input-mask'
import s from './ModalForm.module.scss'
import {Modal} from "../../Modal";
import {Flex} from "../../Flex";
import {Input} from "../../Input";
import {useForm} from "react-hook-form";
import {Button} from "../../Button";
import {NewIcon} from "../../NewIcon";
import {emailReg, nameReg, phoneReg} from "../utils/reg.ts";
import {CheckBox} from "../../CheckBox/CheckBox.tsx";
import {TextArea} from "../../TextArea/TextArea.tsx";


interface IModalFormProps {
    isFormOpen: boolean
    setIsFormOpen: (isOpen: boolean) => void
    submitHandler: (data: IFormPageInputs) => void
    modalWidth?: string

    title: string
    isEmail?: boolean
    isTextArea?: boolean
    subTitle: string
    personalCheckBox: { text: string, isRequired: boolean }
    advCheckBox?: { text: string, isRequired: boolean } | undefined | null
    textAreaPlaceholder?: string
    rowsTextArea?: number
}

type IFormPageInputs = {
    phone: string
    name: string
    email?: string
    personalCheckBox: boolean
    advCheckBox?: boolean
    textarea?: string
}

const defaultTextCheckBox = 'Я принимаю условия Политики обработки\n' +
    'и защиты персональных данных, даю согласия на обработку персональных\n' +
    'данных'

export const ModalForm = ({
                              isFormOpen,
                              setIsFormOpen,
                              title,
                              isEmail,
                              isTextArea,
                              textAreaPlaceholder,
                              subTitle,
                              submitHandler,
                              modalWidth = '442px',
                              rowsTextArea = 2,
                              personalCheckBox = {text: defaultTextCheckBox, isRequired: true},
                              advCheckBox = {text: defaultTextCheckBox, isRequired: true},
                          }: IModalFormProps) => {
    const {
        register,
        handleSubmit,
        trigger,
        reset,
        watch,
        formState: {errors},
    } = useForm<IFormPageInputs>()

    const {onChange, onBlur, ...rest} = register('phone', {
        required: true,
        pattern: {value: phoneReg, message: ''},
        onBlur: () => trigger('phone'),
    })

    const isCheckedPersonal = watch('personalCheckBox')
    const isCheckAdvCheckBox = watch('advCheckBox')

    const onSubmit = (data: IFormPageInputs) => {
        submitHandler(data)
        reset()
    }

    return (
        <Modal
            isOpen={isFormOpen}
            emitIsOpen={() => setIsFormOpen(false)}
            additionalClass={s.modal}
            opacity={0.7}
            isTransparentBack={true}
            additionalClassModalBody={s.modalBody}>
            <div className={s.root} style={{width: modalWidth}}>
                <div className={s.title} dangerouslySetInnerHTML={{__html: title ?? 'Оставить обращение'}}/>
                <div
                    className={s.description}
                    dangerouslySetInnerHTML={{__html: subTitle ?? `Оставьте номер телефона для получения консультации`}}
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex className={s.inputWrapper}>
                        <Input width="full" size_s="small" variant="light" placeholder="Введите имя"
                               data-testid="modal_name" {...register('name', {required: true, pattern: nameReg})}
                               error={Boolean(errors.name)}
                        />

                        <InputMask
                            inputMode="numeric"
                            name="phone"
                            mask={'+7 (999) 999-99-99'}
                            onChange={onChange}
                            placeholder="+7 (- - -)&ensp;- - -&ensp;- -&ensp;- -"
                            onBlur={onBlur}>
                            <Input width="full"
                                   data-testid="phone_modal"
                                   type="tel"
                                   size_s={'small'} variant="light"
                                   {...rest}
                                   {...register('phone')}
                                   error={Boolean(errors.phone)}
                            />
                        </InputMask>

                        {isEmail && <Input width="full" size_s="small" variant="light" placeholder="Введите email"
                                           data-testid="modal_email" {...register('email',
                            {required: false, pattern: emailReg})} error={Boolean(errors.email)}/>}

                        {isTextArea && <TextArea data-testid="modal_textarea" placeholder={textAreaPlaceholder} rows={rowsTextArea}
                                                 width={'full'}  {...register('textarea')}/>}

                        {advCheckBox && <CheckBox
                            data-testid="modal_advCheckBox" isChecked={isCheckAdvCheckBox}
                            error={Boolean(errors.advCheckBox)}
                            text={advCheckBox.text} {...register('advCheckBox', {required: advCheckBox?.isRequired})}/>}

                        <CheckBox
                            data-testid="modal_personalCheckBox" isChecked={isCheckedPersonal}
                            error={Boolean(errors.personalCheckBox)}
                            text={personalCheckBox.text} {...register('personalCheckBox', {required: personalCheckBox.isRequired})}/>

                        <Button
                            data-testid="modal_submit"
                            variant="blue"
                            width="full"
                            type="submit"
                            size="large"
                            as="button"
                            additionalClass={s.modalBtn}>
                            Отправить
                        </Button>
                    </Flex>


                    <Button additionalClass={s.btn} onClick={() => setIsFormOpen(false)}
                            as="button" variant="gray" type={'button'} size="small">
                        <NewIcon
                            name="close"
                            size="16"
                            color="#141416"
                        />
                    </Button>
                </form>
            </div>
        </Modal>
    )
}
