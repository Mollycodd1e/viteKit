import { useEffect, useState } from 'react'
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
import {FieldInput} from './components/FieldInput'
import {TabSwitcher} from './components/TabSwitcher'
import {GroupedInputs} from './components/GroupedInput'
import {Logo} from './components/Logo'
import {MetroTag} from './components/MetroTag'
import {LotCard} from './components/LotCard'
import {Select} from './components/Select'
import {SortSelect} from './components/SortSelect'

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
				timeTo: '5 минут',
				iconName: 'car',
			},
		],
	}

	const tabs = ['Студия', '1', '2', '3', '4+']

	const testLot = {
		id: 1,
		name: "Жилой Комплекс 'Северный'",
		buildingQuarter: 3,
		lotUuid: 'abcd-efgh-ijkl-mnop',
		projectUuid: 'proj-1234',
		sellingPrice: '5000000',
		showPriceFlg: true,
		sellingPricePerMeter: '200000',
		rentPricePerMeterPerYear: '2400000',
		rentPricePerMonth: '200000',
		discountVolume: 10,
		discountedPrice: 4500000,
		availableFrom: '2024-09-01',
		handoverKeys: '2024-12-31',
		status: 1,
		rentStatus: 0,
		number: 'A-101',
		address: 'г. Москва, ул. Ленина, д. 10, кв. 101',
		type: 1,
		direction: 2,
		entrance: '1',
		doorNumber: '101',
		area: '50',
		kitchenArea: 10,
		livingArea: 30,
		floorsNumber: 25,
		floor: 10,
		ceiling: '2.7',
		saleFloorMin: 1,
		saleFloorMax: 25,
		roomsCount: 2,
		bedroomsCount: 1,
		housing: 'Корпус 1',
		section: 'Секция А',
		buildStage: 3,
		isCorner: false,
		isCatering: false,
		isDetachedBuilding: false,
		isPhone: true,
		isMortgage: true,
		isGarbageTube: false,
		isPenthouse: false,
		isApart: false,
		isDoubleLevel: false,
		isRamp: false,
		isCloseToLift: true,
		isOccupied: false,
		isGab: false,
		isFacing: true,
		features: [
			{
				category: 'Инфраструктура',
				icoImg: { attributes: { url: 'https://example.com/icon.png' } },
				slug: 'park',
				val: 'Рядом парк',
			},
		],
		liftPassenger: 2,
		liftService: 1,
		balcony: 1,
		loggia: 0,
		condition: 'Новостройка',
		inputType: 'Отдельный',
		decoration: 'Чистовая',
		layout: 'Евро',
		repairType: 'Евроремонт',
		waterPipesCount: [1, 2],
		workPlacesCount: null,
		combinedWcsCount: 1,
		speciality: 1,
		showcaseWindows: 'Юг',
		windowView: 'Парк',
		promo: [
			{
				val: 'Скидка 10%',
				slug: 'discount',
				category: 'Акция',
				icoImg: 'https://example.com/promo-icon.png',
				color: '#ff0000',
			},
		],
		promoText: 'Скидка 10% на все лоты!',
		interiorPlanImg: 'https://example.com/interior-plan.png',
		floorPlanImg: 'https://example.com/floor-plan.png',
		sitPlanImg: 'https://example.com/sit-plan.png',
		createdAt: '2024-07-18',
		updatedAt: '2024-07-18',
		firstPaymentSum: '500000',
		childLots: [
			{
				id: 101,
				floor: 1,
				floorPlanImg: 'https://example.com/child-floor-plan.png',
			},
		],
		azimuthAngle: 45,
		businessType: 'Residential',
		isDecoration: true,
		isWaterPipes: true,
		project: {
			address: 'г. Москва, ул. Ленина, д. 10',
			buildingYear: 2024,
			createdAt: '2022-01-01',
			direction: 2,
			features: [
				{
					category: 'Благоустройство',
					icoImg: { attributes: { url: 'https://example.com/feature-icon.png' } },
					slug: 'landscaping',
					val: 'Озеленение',
				},
			],
			geo: {
				lat: '55.7558',
				lon: '37.6176',
			},
			id: 1,
			logoImg: 'https://example.com/logo.png',
			metro: [
				{
					name: 'Красные Ворота',
					color: 'Красная',
					station: 'Сокольническая линия',
					timeTo: '10 минут пешком',
				},
			],
			name: 'Северный',
			project: 'Residential',
			shortDesc: 'Жилой комплекс Северный',
			sitPlanImg: 'https://example.com/project-sit-plan.png',
			sort: 1,
			sortOffice: null,
			sortRetail: null,
			updatedAt: '2024-07-18',
			buildingQuarter: 3,
			projectUuid: 'proj-1234',
			portalUuid: 'portal-5678',
			location: 'г. Москва',
			showPriceFlg: true,
			lotsCount: 100,
		},
		reservations: ['res-001', 'res-002'],
	}

	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	]

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e.target)
	}
	const [sort, setSort] = useState('')
	useEffect(() => {
		console.log('sort', sort)
	}, [sort])
	const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
		console.log(e.target)
	}

	const sort_options = [
		{ label: 'По умолчанию', value: '' },
	]


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
			<Button as='button' variant='whiteStroke' isLoading>приветики</Button>
			<Button as='button' variant='blue' isLoading>приветики</Button>
			<div style={{ margin: '20px 0' }}>
				<Select
					options={options}
					onChange={handleClick}
					placeholder='Выберите корпус'
					onBlur={handleBlur}></Select>
			</div>
			<div>
				<SortSelect
					options={sort_options}
					//@ts-expect-error кастомный эвент
					onChange={(e) => setSort(e)}></SortSelect>
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
			<div
				style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', width: '100%', margin: '16px 0' }}>
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
				size='large'
				post={
					<NewIcon
						name='play2'
						size='24'
					/>
				}>
				Оставить обращение
			</Button>
			<div style={{ width: '100%', margin: '40px 0', backgroundColor: 'white' }}>
				<LotCard lot={testLot}></LotCard>
			</div>
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
				<Input width='full'></Input>
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
