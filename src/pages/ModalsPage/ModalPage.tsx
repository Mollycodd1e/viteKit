import { useState } from 'react'
import s from './ModalPage.module.scss'
import { Button, Modal } from '../../main'

const ModalsPage = () => {
	const [modal1, setmodal1] = useState<boolean>(false)
	const [modal2, setmodal2] = useState(false)

	return (
		<div className={s.root}>
			<Button
				as='button'
				onClick={() => setmodal1((prev) => !prev)}>
				Каскад модалок
			</Button>
			<Modal
				isOpen={modal1}
				emitIsOpen={() => setmodal1((prev) => !prev)}
				isTransparentBack={true}>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					вайди
				</Button>
			</Modal>
			<Modal
				isOpen={modal2}
				emitIsOpen={() => setmodal2((prev) => !prev)}
				leaveDisableScroll>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				<Button
					as='button'
					onClick={() => setmodal2((prev) => !prev)}>
					выйди
				</Button>
				
			</Modal>
		</div>
	)
}

export default ModalsPage

