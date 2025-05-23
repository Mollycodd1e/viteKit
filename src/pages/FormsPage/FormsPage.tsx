import { useState } from 'react'
import s from './FormsPage.module.scss'
import { ModalForm } from '../../components/FormModal/ui/ModalForm.tsx'
import { Button, ModalSuccess } from '../../main.ts'

const FormsPage = () => {
	const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false)
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(true)

	return (
		<div className={s.root}>
			<Button
				as={'button'}
				onClick={() => setIsFormModalOpen(true)}>
				ModalForm
			</Button>
			<Button
				as={'button'}
				onClick={() => setIsSuccessModalOpen(true)}>
				ModalSucceess
			</Button>

			<ModalForm
				submitHandler={(data) => {
					console.log(data)
				}}
				subTitle={'Оставьте номер телефона для получения консультации'}
				title={'Оставить обращение'}
				modalWidth={'530px'}
				isPhone
				isRequiredPhoneOrEmail
				isRequiredPhone
				isFormOpen={isFormModalOpen}
				setIsFormOpen={setIsFormModalOpen}
			/>

			<ModalSuccess
				isSuccessOpen={isSuccessModalOpen}
				setIsSuccess={setIsSuccessModalOpen}
			/>
		</div>
	)
}

export default FormsPage
