import s from './ModalForm.module.scss'
import {Modal} from '../../Modal'
import {Flex} from '../../Flex'
import {Input} from '../../Input'
import {Controller, useForm} from 'react-hook-form'
import {Button} from '../../Button'
import {NewIcon} from '../../NewIcon'
import {emailReg, nameReg, phoneReg} from '../utils/reg.ts'
import {CheckBox} from '../../CheckBox/CheckBox.tsx'
import {TextArea} from '../../TextArea/TextArea.tsx'
import classNames from 'classnames'
import {useClientWidth} from '../../../main.ts'
import {useEffect} from "react";

interface IModalFormProps {
    isFormOpen: boolean
    setIsFormOpen: (isOpen: boolean) => void
    submitHandler: (data: IFormPageInputs) => void
    blurHandler?: ({e, analyticParams}: {
        e: unknown, analyticParams: {
            action_element: string
            action_element_status: 'error' | 'success'
            block_name?: string
        }
    }) => void
    modalWidth?: string
    isPhone?: boolean
    title: string
    isEmail?: boolean
    telegramLink?: string
    isTextArea?: boolean
    subTitle: string
    advCheckBox?: { text: string; isRequired: boolean } | undefined | null
    textAreaPlaceholder?: string
    rowsTextArea?: number
    isRequiredPhone?: boolean
    isNews?: boolean
    isRequiredEmail?: boolean
    isRequiredPhoneOrEmail?: boolean
    isAdvCheckBox?: boolean
    telegramClickHandler?: () => void
    addTitleClassName?: string
    block_name?: string
    createPortalObj?: { domNode: HTMLElement | null; key?: string | null | undefined }
    emitCheckBox?: () => void
    emitAdvCheckBox?: () => void
}

type IFormPageInputs = {
    phone: string
    name: string
    email?: string
    personalCheckBox: boolean
    advCheckBox?: boolean
    textarea?: string
}

const cx = classNames.bind(s)

const defaultTextCheckBox =
    'Я принимаю условия Политики обработки и защиты персональных данных, даю согласия на обработку персональных данных'

export const ModalForm = ({
                              isFormOpen,
                              setIsFormOpen,
                              isNews,
                              title,
                              isEmail,
                              isPhone,
                              isTextArea,
                              telegramLink = 'https://t.me/stone_developer',
                              isRequiredPhone = true,
                              isRequiredEmail = false,
                              isRequiredPhoneOrEmail,
                              textAreaPlaceholder,
                              subTitle,
                              submitHandler,
                              modalWidth = '442px',
                              rowsTextArea = 2,
                              advCheckBox = {text: defaultTextCheckBox, isRequired: true},
                              isAdvCheckBox,
                              addTitleClassName,
                              createPortalObj,
                              telegramClickHandler = () => null,
                              blurHandler,
                              block_name,
                              emitCheckBox,
                              emitAdvCheckBox,
                          }: IModalFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        formState: {errors},
    } = useForm<IFormPageInputs>()

    const isEmailFill = Boolean(watch('email'))

    const isCheckBoxCheck = watch('personalCheckBox')
    const isAdvCheckBoxCheck = watch('advCheckBox')

    useEffect(() => {
        if (typeof isCheckBoxCheck !== 'undefined') {
            emitCheckBox && emitCheckBox()
        }
    }, [emitCheckBox, isCheckBoxCheck])

    useEffect(() => {
        if (typeof isAdvCheckBoxCheck !== 'undefined') {
            emitAdvCheckBox && emitAdvCheckBox()
        }
    }, [emitAdvCheckBox, isAdvCheckBoxCheck])

    const {isMobile, currentClientWidth} = useClientWidth()

    const isCheckedPersonal = watch('personalCheckBox')
    const isCheckAdvCheckBox = watch('advCheckBox')

    const onSubmit = (data: IFormPageInputs) => {
        submitHandler(data)
        reset()
    }

    const onBlurHandler = (e: unknown, {action_element_status, action_element}: {
        action_element_status: 'success' | 'error',
        action_element: string
        block_name?: string
    }) => {

        blurHandler && blurHandler({
            e, analyticParams: {action_element, action_element_status, block_name}
        })
    }


    if (!currentClientWidth) return null
    return (
        <Modal
            additionalClass={s.modal}
            additionalClassModalBody={s.modalBody}
            createPortalObj={createPortalObj}
            isOpen={isFormOpen}
            isTransparentBack={true}
            emitIsOpen={() => setIsFormOpen(false)}
            opacity={0.7}>
            <div
                className={s.root}
                style={{width: isMobile ? '100%' : modalWidth}}
                data-testid='modal_window'>
                <div
                    className={cx(s.title, addTitleClassName)}
                    dangerouslySetInnerHTML={{__html: title ?? 'Оставить обращение'}}
                />
                {isNews && (
                    <div className={s.telegramWrapper}>
                        <a
                            className={s.telegramLink}
                            href={telegramLink}
                            target='_blank'
                            data-testid='modal_telegram_link'>
                            <div
                                className={s.telegram}
                                onClick={telegramClickHandler}>
                                <div>Подписаться в Telegram</div>
                                <NewIcon name='telegram'/>
                            </div>
                        </a>
                        <div className={s.orText}>или</div>
                    </div>
                )}
                {!isNews && (
                    <div
                        className={s.description}
                        dangerouslySetInnerHTML={{
                            __html:
                                subTitle && !isNews
                                    ? `Оставьте номер телефона для получения консультации`
                                    : `${(<div>привет</div>)}`,
                        }}
                    />
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex className={s.inputWrapper}>
                        <Input
                            width='full'
                            size_s='large'
                            variant='light'
                            placeholder='Введите имя'
                            data-testid='modal_name'
                            {...register('name', {required: true, pattern: nameReg})}
                            onBlur={(e) => onBlurHandler(e, {
                                action_element_status: errors.name ? 'error' : 'success',
                                action_element: `input_${block_name}_name`
                            })}
                            error={Boolean(errors.name)}
                        />

                        {isPhone && (
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: isRequiredEmail || isRequiredPhone || (isRequiredPhoneOrEmail && !isEmailFill),
                                    pattern: {value: phoneReg, message: ''},
                                }}
                                defaultValue=""
                                render={({field}) => (
                                    <Input inputMode='numeric'
                                           isPhoneIMask={true}
                                           {...field}
                                           width='full'
                                           data-testid='phone_modal'
                                           type='tel'
                                           error={Boolean(errors.phone)}
                                           size_s={'large'}
                                           variant='light'
                                           onBlur={(e) => onBlurHandler(e, {
                                               action_element_status: errors.phone ? 'error' : 'success',
                                               action_element: `input_${block_name}_phone`
                                           })}
                                    />
                                )}
                            />
                        )}

                        {isEmail && (
                            <Input
                                width='full'
                                size_s='large'
                                variant='light'
                                placeholder='Введите email'
                                data-testid='modal_email'
                                {...register('email', {
                                    required: isRequiredEmail || (isRequiredPhoneOrEmail && !isEmailFill),
                                    pattern: emailReg,
                                })}
                                error={Boolean(errors.email)}
                                onBlur={(e) => onBlurHandler(e, {
                                    action_element_status: errors.email ? 'error' : 'success',
                                    action_element: `input_${block_name}_email`
                                })}
                            />
                        )}

                        {isTextArea && (
                            <TextArea
                                data-testid='modal_textarea'
                                placeholder={textAreaPlaceholder}
                                rows={rowsTextArea}
                                width={'full'}
                                {...register('textarea')}
                            />
                        )}

                        {advCheckBox && !isNews && isAdvCheckBox && (
                            <CheckBox
                                data-testid='modal_advCheckBox'
                                isChecked={isCheckAdvCheckBox}
                                error={Boolean(errors.advCheckBox)}
                                text={advCheckBox.text}
                                {...register('advCheckBox', {required: advCheckBox?.isRequired})}
                            />
                        )}

                        <CheckBox
                            data-testid='modal_personalCheckBox'
                            isChecked={isCheckedPersonal }
                            error={Boolean(errors.personalCheckBox)}
                            {...register('personalCheckBox', {required: !isNews})}
                            //можно указывать либо text либо children
                        >
                            {isNews && (
                                <div>
                                    Согласен(-на){' '}
                                    <a
                                        className={s.linkPolicy}
                                        href={'/documents/soglasie-na-rassylki'}>
                                        получать новости, информацию по сделке и рекламу
                                    </a>{' '}
                                    от Stone
                                </div>
                            )}
                            {!isNews && (
                                <div>
                                    Я принимаю условия{' '}
                                    <a
                                        className={s.linkPolicy}
                                        href={'/documents/docs'}>
                                        Политики обработки и защиты персональных данных
                                    </a>
                                    , даю согласия на обработку персональных данных
                                </div>
                            )}
                        </CheckBox>
                        <Button
                            data-testid='modal_submit'
                            variant='blue'
                            width='full'
                            type='submit'
                            size='large'
                            as='button'
                            additionalClass={s.modalBtn}
                            disabled={
                                Boolean(errors.name) ||
                                (Boolean(errors.phone) && isRequiredPhone) ||
                                (Boolean(errors.email) && isRequiredEmail) ||
                                (Boolean(errors.advCheckBox) && advCheckBox?.isRequired) ||
                                (Boolean(errors.personalCheckBox) && !isNews)
                            }>
                            Отправить запрос
                        </Button>
                    </Flex>

                    <Button
                        additionalClass={s.btn}
                        onClick={() => setIsFormOpen(false)}
                        as='button'
                        variant='gray'
                        type={'button'}
                        size='small'>
                        <NewIcon
                            name='close'
                            size='16'
                            color='#141416'
                        />
                    </Button>
                </form>
            </div>
        </Modal>
    )
}
