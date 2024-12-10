import { useState } from 'react'
import { LotCard, LotCardSkeleton, ProjectCardSkeleton } from '../../main'
import s from './LotsPage.module.scss'

export const LotsPage = () => {
	const testLot = {
		id: 1,
		name: "Жилой Комплекс 'Северный'",
		buildingQuarter: 3,
		lotUuid: 'abcd-efgh-ijkl-mnop',
		projectUuid: 'proj-1234',
		sellingPrice: '5000000',
		sellingPriceBeforeDiscount: '5400000',
		showPriceFlg: true,
		sellingPricePerMeter: '200000',
		rentPricePerMeterPerYear: '2400000',
		rentPricePerMonth: '200000',
		discount: '3.00',
		discountVolume: null,
		discountedPrice: null,
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
		interiorPlanImg:
			'https://ugra-news.ru/upload/medialibrary/4ba/eoi2i79bfunr3t8zvr12mbt0nupuhnnx/Foto-03.png',
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
		isDecoration: false,
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

	const [isFetching, setIsFetching] = useState(false)

	return (
		<div className={s.root}>
			{/* <ProjectCardSkeleton></ProjectCardSkeleton> */}
			<div className={s.lotWrapper}>
				{isFetching && <LotCardSkeleton />}
				{!isFetching && (
					<LotCard
						lot={testLot}
						handleBtnForm={() => {}}
					/>
				)}
				{!isFetching && (
					<LotCard
						orientation={'vertical'}
						lot={testLot}
						handleBtnForm={() => {}}
					/>
				)}
				<ProjectCardSkeleton />
				<div className={s.optionsWrapper}>
					<label className={s.isFetching}>
						isFetching
						<input
							type='checkbox'
							onClick={() => setIsFetching(!isFetching)}
						/>
					</label>
				</div>
			</div>
		</div>
	)
}
