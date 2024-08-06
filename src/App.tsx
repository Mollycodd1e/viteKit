// import { ChangeEvent, useEffect, useState } from 'react'
// import { Button } from './components/Button'
// import { DestinationTab } from './components/DestinationTab'
// import { NewIcon } from './components/NewIcon'
// import { RoundButton } from './components/RoundButton'
// import { Tag } from './components/Tag'
// import { Input } from './components/Input'
// import { Switcher } from './components/Switcher'
// import { Flex } from './components/Flex'
// import { Modal } from './components/Modal'
// import s from './app.module.scss'
// import { FieldInput } from './components/FieldInput'
// import { TabSwitcher } from './components/TabSwitcher'
// import { GroupedInputs } from './components/GroupedInput'
// import { Logo } from './components/Logo'
// import { MetroTag } from './components/MetroTag'
// import { LotCard } from './components/LotCard'
// import { Select } from './components/Select'
// import { SortSelect } from './components/SortSelect'
// import { iconTypes } from './components/NewIcon/ui/NewIcon.tsx'
// import { MetroLabel } from './components/MetroLabel/ui/MetroLabel.tsx'
// import { LotCardSkeleton, TabSelect } from './main.ts'
// import { ProjectCardSkeleton } from './components/ProjectCardSkeleton/index.ts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ButtonsPage } from './pages/ButtonsPage/Buttons.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'

function App() {
	// const destinatinList = [
	// 	{
	// 		station: 'Швабра',
	// 		color: 'green',
	// 		routes: [
	// 			{
	// 				text: '100 минут в пути',
	// 				icon: 'car',
	// 			},
	// 			{
	// 				text: 'часик',
	// 				icon: 'walk',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		station: 'Метро',
	// 		color: 'red',
	// 		routes: [
	// 			{
	// 				text: 'часик',
	// 				icon: 'walk',
	// 			},
	// 		],
	// 	},
	// ]

	// const [checkedRoute, setCheckedRoute] = useState<number>(0)
	// const [isActive, setIsActive] = useState<boolean>(false)
	// const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	// const [isIconOpen, setIsIconOpen] = useState<boolean>(false)

	// const menuList = [
	// 	{
	// 		title: 'О компании',
	// 		link: '#about',
	// 	},
	// 	{
	// 		title: 'Услуги',
	// 		link: '#services',
	// 	},
	// 	{
	// 		title: 'Новости',
	// 		link: '#news',
	// 	},
	// 	{
	// 		title: 'Вакансии',
	// 		link: '#vacancy',
	// 	},
	// 	{
	// 		title: 'Контакты',
	// 		link: '#contacts',
	// 	},
	// 	{
	// 		title: 'О компании',
	// 		link: '#about',
	// 	},
	// 	{
	// 		title: 'Услуги',
	// 		link: '#services',
	// 	},
	// 	{
	// 		title: 'Новости',
	// 		link: '#news',
	// 	},
	// 	{
	// 		title: 'Вакансии',
	// 		link: '#vacancy',
	// 	},
	// 	{
	// 		title: 'Контакты',
	// 		link: '#contacts',
	// 	},
	// 	{
	// 		title: 'О компании',
	// 		link: '#about',
	// 	},
	// 	{
	// 		title: 'Услуги',
	// 		link: '#services',
	// 	},
	// 	{
	// 		title: 'Новости',
	// 		link: '#news',
	// 	},
	// 	{
	// 		title: 'Вакансии',
	// 		link: '#vacancy',
	// 	},
	// 	{
	// 		title: 'Контакты',
	// 		link: '#contacts',
	// 	},
	// ]

	// const metro = {
	// 	name: 'Сокольники',
	// 	color: 'red',
	// 	routes: [
	// 		{
	// 			timeTo: '5 минут',
	// 			iconName: 'car',
	// 		},
	// 	],
	// }

	// const tabs = ['Студия', '1', '2', '3', '4+']

	// const testLot = {
	// 	id: 1,
	// 	name: "Жилой Комплекс 'Северный'",
	// 	buildingQuarter: 3,
	// 	lotUuid: 'abcd-efgh-ijkl-mnop',
	// 	projectUuid: 'proj-1234',
	// 	sellingPrice: '5000000',
	// 	showPriceFlg: true,
	// 	sellingPricePerMeter: '200000',
	// 	rentPricePerMeterPerYear: '2400000',
	// 	rentPricePerMonth: '200000',
	// 	discountVolume: 10,
	// 	discountedPrice: 4500000,
	// 	availableFrom: '2024-09-01',
	// 	handoverKeys: '2024-12-31',
	// 	status: 1,
	// 	rentStatus: 0,
	// 	number: 'A-101',
	// 	address: 'г. Москва, ул. Ленина, д. 10, кв. 101',
	// 	type: 1,
	// 	direction: 2,
	// 	entrance: '1',
	// 	doorNumber: '101',
	// 	area: '50',
	// 	kitchenArea: 10,
	// 	livingArea: 30,
	// 	floorsNumber: 25,
	// 	floor: 10,
	// 	ceiling: '2.7',
	// 	saleFloorMin: 1,
	// 	saleFloorMax: 25,
	// 	roomsCount: 2,
	// 	bedroomsCount: 1,
	// 	housing: 'Корпус 1',
	// 	section: 'Секция А',
	// 	buildStage: 3,
	// 	isCorner: false,
	// 	isCatering: false,
	// 	isDetachedBuilding: false,
	// 	isPhone: true,
	// 	isMortgage: true,
	// 	isGarbageTube: false,
	// 	isPenthouse: false,
	// 	isApart: false,
	// 	isDoubleLevel: false,
	// 	isRamp: false,
	// 	isCloseToLift: true,
	// 	isOccupied: false,
	// 	isGab: false,
	// 	isFacing: true,
	// 	features: [
	// 		{
	// 			category: 'Инфраструктура',
	// 			icoImg: { attributes: { url: 'https://example.com/icon.png' } },
	// 			slug: 'park',
	// 			val: 'Рядом парк',
	// 		},
	// 	],
	// 	liftPassenger: 2,
	// 	liftService: 1,
	// 	balcony: 1,
	// 	loggia: 0,
	// 	condition: 'Новостройка',
	// 	inputType: 'Отдельный',
	// 	decoration: 'Чистовая',
	// 	layout: 'Евро',
	// 	repairType: 'Евроремонт',
	// 	waterPipesCount: [1, 2],
	// 	workPlacesCount: null,
	// 	combinedWcsCount: 1,
	// 	speciality: 1,
	// 	showcaseWindows: 'Юг',
	// 	windowView: 'Парк',
	// 	promo: [
	// 		{
	// 			val: 'Скидка 10%',
	// 			slug: 'discount',
	// 			category: 'Акция',
	// 			icoImg: 'https://example.com/promo-icon.png',
	// 			color: '#ff0000',
	// 		},
	// 	],
	// 	promoText: 'Скидка 10% на все лоты!',
	// 	interiorPlanImg: 'https://example.com/interior-plan.png',
	// 	floorPlanImg: 'https://example.com/floor-plan.png',
	// 	sitPlanImg: 'https://example.com/sit-plan.png',
	// 	createdAt: '2024-07-18',
	// 	updatedAt: '2024-07-18',
	// 	firstPaymentSum: '500000',
	// 	childLots: [
	// 		{
	// 			id: 101,
	// 			floor: 1,
	// 			floorPlanImg: 'https://example.com/child-floor-plan.png',
	// 		},
	// 	],
	// 	azimuthAngle: 45,
	// 	businessType: 'Residential',
	// 	isDecoration: true,
	// 	isWaterPipes: true,
	// 	project: {
	// 		address: 'г. Москва, ул. Ленина, д. 10',
	// 		buildingYear: 2024,
	// 		createdAt: '2022-01-01',
	// 		direction: 2,
	// 		features: [
	// 			{
	// 				category: 'Благоустройство',
	// 				icoImg: { attributes: { url: 'https://example.com/feature-icon.png' } },
	// 				slug: 'landscaping',
	// 				val: 'Озеленение',
	// 			},
	// 		],
	// 		geo: {
	// 			lat: '55.7558',
	// 			lon: '37.6176',
	// 		},
	// 		id: 1,
	// 		logoImg: 'https://example.com/logo.png',
	// 		metro: [
	// 			{
	// 				name: 'Красные Ворота',
	// 				color: 'Красная',
	// 				station: 'Сокольническая линия',
	// 				timeTo: '10 минут пешком',
	// 			},
	// 		],
	// 		name: 'Северный',
	// 		project: 'Residential',
	// 		shortDesc: 'Жилой комплекс Северный',
	// 		sitPlanImg: 'https://example.com/project-sit-plan.png',
	// 		sort: 1,
	// 		sortOffice: null,
	// 		sortRetail: null,
	// 		updatedAt: '2024-07-18',
	// 		buildingQuarter: 3,
	// 		projectUuid: 'proj-1234',
	// 		portalUuid: 'portal-5678',
	// 		location: 'г. Москва',
	// 		showPriceFlg: true,
	// 		lotsCount: 100,
	// 	},
	// 	reservations: ['res-001', 'res-002'],
	// }

	// const options = [
	// 	{ value: 'option1', label: 'Option 1' },
	// 	{ value: 'option2', label: 'Option 2' },
	// 	{ value: 'option3', label: 'Option 3' },
	// ]

	// const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
	// 	console.log(e.target)
	// }
	// const [sort, setSort] = useState('')
	// useEffect(() => {
	// 	console.log('sort', sort)
	// }, [sort])
	// const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
	// 	console.log(e.target)
	// }

	// const sort_options = [{ label: 'По умолчанию', value: '' }]
	// const [modal1, setmodal1] = useState<boolean>(false)
	// const [modal2, setmodal2] = useState(false)

	// const tabList = ['C мебелью', 'C размерами', 'План этажа', 'Ген. план']
	// const [activeTab, setActiveTab] = useState('C мебелью')

	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/buttons'
					element={<ButtonsPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
