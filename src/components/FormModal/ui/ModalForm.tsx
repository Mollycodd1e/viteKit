import InputMask from 'react-input-mask'
import s from './ModalForm.module.scss'
import { Modal } from '../../Modal'
import { Flex } from '../../Flex'
import { Input } from '../../Input'
import { useForm } from 'react-hook-form'
import { Button } from '../../Button'
import { NewIcon } from '../../NewIcon'
import { emailReg, nameReg, phoneReg } from '../utils/reg.ts'
import { CheckBox } from '../../CheckBox/CheckBox.tsx'
import { TextArea } from '../../TextArea/TextArea.tsx'
import { useClientWidth } from '../../../../lib/shared/useClientWidth.ts'
import classNames from "classnames";

interface IModalFormProps {
	isFormOpen: boolean
	setIsFormOpen: (isOpen: boolean) => void
	submitHandler: (data: IFormPageInputs) => void
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
	addTitleClassName?: string
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
	advCheckBox = { text: defaultTextCheckBox, isRequired: true },
	isAdvCheckBox,
	addTitleClassName
}: IModalFormProps) => {
	const {
		register,
		handleSubmit,
		trigger,
		reset,
		watch,
		formState: { errors },
	} = useForm<IFormPageInputs>()

	const isEmailFill = Boolean(watch('email'))

	const { onChange, onBlur, ...rest } = register('phone', {
		required: isRequiredEmail || isRequiredPhone || (isRequiredPhoneOrEmail && !isEmailFill),
		pattern: { value: phoneReg, message: '' },
		onBlur: () => trigger('phone'),
	})

	const { isMobile, currentClientWidth } = useClientWidth()

	const isCheckedPersonal = watch('personalCheckBox')
	const isCheckAdvCheckBox = watch('advCheckBox')

	const onSubmit = (data: IFormPageInputs) => {
		submitHandler(data)
		reset()
	}

	if (!currentClientWidth) return null

	return (
		<Modal
			isOpen={isFormOpen}
			emitIsOpen={() => setIsFormOpen(false)}
			additionalClass={s.modal}
			opacity={0.7}
			isTransparentBack={true}
			additionalClassModalBody={s.modalBody}>
			<div
				className={s.root}
				style={{ width: isMobile ? '100%' : modalWidth }}>
				<div
					className={cx(s.title, addTitleClassName)}
					dangerouslySetInnerHTML={{ __html: title ?? 'Оставить обращение' }}
				/>
				{isNews && (
					<div className={s.telegramWrapper}>
						<a
							className={s.telegramLink}
							href={telegramLink}
							target='_blank'>
							<div className={s.telegram}>
								<div>Подписаться в Telegram</div>
								<NewIcon name='telegram'></NewIcon>
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
							size_s='small'
							variant='light'
							placeholder='Введите имя'
							data-testid='modal_name'
							{...register('name', { required: true, pattern: nameReg })}
							error={Boolean(errors.name)}
						/>

						{isPhone && (
							<InputMask
								inputMode='numeric'
								name='phone'
								mask={'+7 (999) 999-99-99'}
								onChange={onChange}
								placeholder='+7 (- - -)&ensp;- - -&ensp;- -&ensp;- -'
								onBlur={onBlur}>
								<Input
									width='full'
									data-testid='phone_modal'
									type='tel'
									size_s={'small'}
									variant='light'
									{...rest}
									{...register('phone')}
									error={Boolean(errors.phone)}
								/>
							</InputMask>
						)}

						{isEmail && (
							<Input
								width='full'
								size_s='small'
								variant='light'
								placeholder='Введите email'
								data-testid='modal_email'
								{...register('email', {
									required: isRequiredEmail || (isRequiredPhoneOrEmail && !isEmailFill),
									pattern: emailReg,
								})}
								error={Boolean(errors.email)}
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
								{...register('advCheckBox', { required: advCheckBox?.isRequired })}
							/>
						)}

						<CheckBox
							data-testid='modal_personalCheckBox'
							isChecked={isCheckedPersonal}
							error={Boolean(errors.personalCheckBox)}
							{...register('personalCheckBox', { required: isNews ? false : true })}
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
