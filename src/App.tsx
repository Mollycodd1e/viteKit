import { useState } from 'react'
import { Button } from './components/Button'
import { DestinationTab } from './components/DestinationTab'
import { NewIcon } from './components/NewIcon'
import { RoundButton } from './components/RoundButton'
import { Tag } from './components/Tag'
import { Input } from './components/Input'
import { Switcher } from './components/Switcher'
import { Flex } from './components/Flex'
import { Modal } from './components/Modal'
import s from './app.module.scss'
import { FieldInput } from './components/FieldInput'
import { TabSwitcher } from './components/TabSwitcher'
import { GroupedInputs } from './components/GroupedInput'
import { Logo } from './components/Logo'
import { MetroTag } from './components/MetroTag/ui/MetroTag'

function App() {
	const destinatinList = [
		{
			station: 'Швабра',
			color: 'green',
			routes: [
				{
					text: '100 минут в пути',
					icon: 'car',
				},
				{
					text: 'часик',
					icon: 'walk',
				},
			],
		},
		{
			station: 'Метро',
			color: 'red',
			routes: [
				{
					text: 'часик',
					icon: 'walk',
				},
			],
		},
	]

	const [checkedRoute, setCheckedRoute] = useState<number>(0)
	const [isActive, setIsActive] = useState<boolean>(false)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const menuList = [
		{
			title: 'О компании',
			link: '#about',
		},
		{
			title: 'Услуги',
			link: '#services',
		},
		{
			title: 'Новости',
			link: '#news',
		},
		{
			title: 'Вакансии',
			link: '#vacancy',
		},
		{
			title: 'Контакты',
			link: '#contacts',
		},
		{
			title: 'О компании',
			link: '#about',
		},
		{
			title: 'Услуги',
			link: '#services',
		},
		{
			title: 'Новости',
			link: '#news',
		},
		{
			title: 'Вакансии',
			link: '#vacancy',
		},
		{
			title: 'Контакты',
			link: '#contacts',
		},
		{
			title: 'О компании',
			link: '#about',
		},
		{
			title: 'Услуги',
			link: '#services',
		},
		{
			title: 'Новости',
			link: '#news',
		},
		{
			title: 'Вакансии',
			link: '#vacancy',
		},
		{
			title: 'Контакты',
			link: '#contacts',
		},
	]

	const metro = {
		name: 'Сокольники',
		color: 'red',
		routes: [
			{
				text: '5 минут',
				icon: 'car',
			},
		],
	}

	const tabs = ['Студия', '1', '2', '3', '4+']

	return (
		<>
			<div
				style={{
					width: '100%',
					height: '56px',
					background: 'white',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				Меню
				<div onClick={() => setIsModalOpen((prev) => !prev)}>нажми</div>
			</div>
			{destinatinList.map((item, i) => (
				<DestinationTab
					key={i}
					checked={i === checkedRoute}
					onChange={() => setCheckedRoute(i)}
					destination={{ destName: item.station, color: item.color }}
					routes={item.routes.map((m) => {
						return { type: <NewIcon name={m.icon} />, text: m.text }
					})}
					size='large'
					size_m='large'
					size_l='medium'
				/>
			))}
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='phoneFilled'
					size='16'
				/>
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='user'
					size='16'
					color='#141416'
				/>
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='burger'
					size='16'
					color='#141416'
				/>
			</Button>
			<Button
				as='button'
				variant='volodiyaLight'
				size='large'
				width='full'>
				Оставить сообщение
			</Button>
			<div style={{ display: 'flex', gap: '8px', width: '100%', margin: '16px 0' }}>
				<MetroTag metro={metro} />
				<MetroTag metro={metro} />
				<MetroTag metro={metro} />
			</div>
			<Button
				as='link'
				variant='gray'
				size='medium'
				href='https://google.com'>
				Подробнее
			</Button>
			<RoundButton iconName='plus' />
			<RoundButton
				iconName='arrowLong'
				deg='90'
			/>
			<RoundButton
				iconName='arrowLong'
				deg='-90'
			/>
			<Button
				as='link'
				href='https://google.com'
				variant='shade'
				size='large'
				post={
					<NewIcon
						name='whatsapp'
						size='24'
					/>
				}>
				Смотреть вакансии
			</Button>
			<Button
				as='button'
				variant='blue'
				size='large'>
				Оставить обращение
			</Button>
			<Button
				as='button'
				variant='black'
				size='large'
				post={<NewIcon name='user' />}>
				Войти в кабинет
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='close'
					size='16'
					color='black'
				/>
			</Button>
			<Tag
				variant='shade'
				size='medium'
				size_m='tiny'
				size_l='medium'>
				2004
			</Tag>
			<Tag
				variant='gray'
				size='tiny'
				size_l='preLarge'>
				STONE Towers
			</Tag>
			<Tag
				size={'large'}
				variant='shade'
				size_l='large'>
				STONE Towers
			</Tag>
			<div style={{ padding: '20px', backgroundColor: '#141416' }}>
				<Input
					size_s={'small'}
					variant='dark'
					pre={'От'}
					post={'м²'}
					type='number'
					placeholder='шушпинчик'
				/>
			</div>
			<div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
				<Input
					size_s={'small'}
					variant='light'
					pre={'От'}
					post={'м²'}
					type='text'
					placeholder='+7 (- - -) - - -  - -  - -'
				/>
			</div>

			<div style={{ margin: '20px', backgroundColor: '#ffffff' }}>
				<FieldInput label='Лейбл'>
					<Input
						size_s={'small'}
						variant='light'
						pre={'От'}
						post={'м²'}
						type='text'
						placeholder='+7 (- - -) - - -  - -  - -'
					/>
				</FieldInput>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'orange' }}>
				<Switcher
					isActive={isActive}
					onClick={() => setIsActive((prev) => !prev)}>
					Приветики
				</Switcher>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'white' }}>
				<div style={{ padding: '20px', maxWidth: '327px' }}>
					<FieldInput label='Количество спален'>
						<TabSwitcher>
							{tabs.map((m, i) => {
								return (
									<TabSwitcher.Item
										key={i}
										value={m}
										addItemClassName={i === 0 ? s.gg : ''}>
										{m}
									</TabSwitcher.Item>
								)
							})}
						</TabSwitcher>
					</FieldInput>
				</div>
				<TabSwitcher>
					{tabs.map((m, i) => {
						return (
							<TabSwitcher.Item
								key={i}
								value={m}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
				<div style={{ padding: '20px' }}>
					<TabSwitcher col>
						{tabs.map((m, i) => {
							return (
								<TabSwitcher.Item
									key={i}
									value={m}>
									{m}
								</TabSwitcher.Item>
							)
						})}
					</TabSwitcher>
				</div>
				<div style={{ padding: '20px', maxWidth: '327px' }}>
					<TabSwitcher col>
						{tabs.map((m, i) => {
							return (
								<TabSwitcher.Item
									key={i}
									value={m}>
									{m}
								</TabSwitcher.Item>
							)
						})}
					</TabSwitcher>
				</div>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'orange' }}>
				<Logo
					variant='white'
					uk
				/>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'white' }}>
				<FieldInput label='Количество metrov'>
					<GroupedInputs>
						<Input
							size_s={'small'}
							variant='light'
							type='number'
							placeholder='70'
						/>
						<Input
							size_s={'small'}
							variant='light'
							post={'м²'}
							type='number'
							placeholder='50'
						/>
					</GroupedInputs>
				</FieldInput>
			</div>
			<Flex
				jc='between'
				gap='1'>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</Flex>
			<Modal
				isOpen={isModalOpen}
				emitIsOpen={() => {
					setIsModalOpen((prev) => !prev)
				}}
				additionalClass={s.modal}>
				<Flex additionalClass={s.modalContent}>
					<Flex additionalClass={s.menuList}>
						{menuList.map((m, i) => {
							return (
								<a
									key={i}
									href={m.link}
									className={s.menuItem}
									onClick={() => setIsModalOpen(false)}>
									{m.title}
								</a>
							)
						})}
					</Flex>
					<Button
						as='link'
						href='https://stone.ru'
						variant='black'
						size='large'
						width='full'
						post={<NewIcon name='user' />}>
						Войти в кабинет
					</Button>
				</Flex>
			</Modal>

			{/*<Modal isOpen={isModalOpen} createPortalObj={{domNode: document.body}}*/}
			{/*       emitIsOpen={() => setIsModalOpen((prev) => !prev)} isClickOutside={true}>*/}
			{/*    <div style={{background: "beige", width: '300px', height: '300px'}} onClick={(e) => e.stopPropagation()}>12323232</div>*/}
			{/*</Modal>*/}
		</>
	)
}

export default App
