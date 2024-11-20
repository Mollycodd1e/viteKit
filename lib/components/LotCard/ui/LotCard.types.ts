interface IMetro {
	name: string | null
	color: string | null
	station: string | null
	timeTo: string | null
}

interface IFeatures {
	category: string | null
	icoImg: {
		attributes: {
			url: string
		}
	}
	slug: string | null
	val: string | null
}

interface IGeo {
	lat: string | null
	lon: string | null
}

interface IProject {
	address: string | null
	buildingYear: number | null
	createdAt: string | null
	direction: number | null
	features: IFeatures[] | null
	geo: IGeo | null
	id: number
	logoImg: string | null
	metro: IMetro[]
	name: string
	project: string
	shortDesc: string
	sitPlanImg: string
	sort: number
	sortOffice: number | null
	sortRetail: number | null
	updatedAt: string
	buildingQuarter: number
	projectUuid: string
	portalUuid: string
	location: string
	showPriceFlg: boolean | null
	lotsCount: number | null
}

interface ILotPromo {
	/** Промо текст */
	val: string
	/** Идентификатор */
	slug: string
	/** Категория */
	category: string
	/** Ссылка на иконку */
	icoImg: string
	/** hex цвет */
	color: string
}

export interface ILot {
	/** id Лота */
	id: number | string
	/** Название проекта */
	name?: string | null
	/** Квартал сдачи */
	buildingQuarter?: number | null
	/** uuid Лота из 1с */
	lotUuid: string
	/** UUID проекта */
	projectUuid: string | null
	/** Стоимость объекта недвижимости */
	sellingPrice: string | null
	/** Показывать скоро в продаже или нет */
	showPriceFlg: boolean | null
	/** Цена за квм */
	sellingPricePerMeter: string | null
	/** цена за метра квадратный за год за аренду */
	rentPricePerMeterPerYear: string | null
	/** аренда за месяц */
	rentPricePerMonth: string | null
	/** Размер скидки */
	discountVolume: number | null
	/** Цена со скидкой */
	discountedPrice: number | null
	/** дата освобождения лота */
	availableFrom: string | null
	/** дата, до которой должны быть выданы ключи */
	handoverKeys: string | null
	/** состояние лота: свободен, зарезервирован, продан, сдан в аренду, заблокирован, деактивирован */
	status: number | null
	/** Статус аренды лота */
	rentStatus: number | null
	/** название лота в 1С */
	number: string | null
	/** полный адрес лота (с корпусом) */
	address: string | null
	/** Тип помещения => Квартиры/Пентхаусы/Келлеры/Паркинг Офисы/Ритейл/Офисные Блоки/Паркинг */
	type: number | null
	/** направления, по которым продвигается этот лот */
	direction: number | null
	/** номер подъезда/секции */
	entrance: string | null
	/** Номер квартиры / офиса */
	doorNumber: string | null
	/** Площадь квартиры */
	area: string | null
	/** площадь кухни */
	kitchenArea: number | null
	/** Жилая площадь */
	livingArea: number | null
	/** Кол-во этажей */
	floorsNumber: number | null
	/** Этаж */
	floor: number | null
	/** Высота потолков */
	ceiling: string | null
	/** Этаж, с которого начинаются продаваемые лоты */
	saleFloorMin: number | null
	/** Этаж, на котором заканчиваются продаваемые лоты */
	saleFloorMax: number | null
	/** Количество комнат */
	roomsCount: number | null
	/** Количество спален */
	bedroomsCount?: number | null
	/** Корпус */
	housing: string | null
	/** Секция */
	section: string | null
	/** Очередь строительства */
	buildStage: number | null
	/** угловое? */
	isCorner: boolean | null
	/** общепит? */
	isCatering: boolean | null
	/** является ли лот отдельно стоящим зданием */
	isDetachedBuilding: boolean | null
	/** Наличие телефона */
	isPhone: boolean | null
	/** в ипотеку */
	isMortgage: boolean | null
	/** мусоропровод */
	isGarbageTube: boolean | null
	/** Является ли лот пентхаусом */
	isPenthouse: boolean | null
	/** Является ли лот апартаментом */
	isApart: boolean | null
	/** Является ли лот двухуровневым */
	isDoubleLevel: boolean | null
	/** Есть ли пандус */
	isRamp: boolean | null
	/** Близко ли вход к лифтовой группе */
	isCloseToLift: boolean | null
	/** Ежемясячный платеж */
	mortgageMonthlyPayment?: string
	/** Занят ли лот */
	isOccupied: boolean | null
	/** Является ли лот ГАБ */
	isGab: boolean | null
	/** Есть ли отделка */
	isFacing: boolean | null
	/** Особенности квартиры */
	features: IFeatures[] | null
	/** Количество пассажирских лифтов */
	liftPassenger: number | null
	/** Количество грузовых лифтов */
	liftService?: number | null
	/** Количество балконов */
	balcony: number | null
	/** Количество лоджий */
	loggia: number | null
	/** Состояние помещения */
	condition: string | null
	/** Тип входа в помещений */
	inputType?: string | null
	/** Отделка */
	decoration: string | null
	/** Тип планировки */
	layout: string | null
	/** Тип ремонта */
	repairType: string | null
	/** количество стояков с водой */
	waterPipesCount: number[] | null
	/** количество рабочих мест */
	workPlacesCount: number | null
	/** Количество совместных санузлов */
	combinedWcsCount: number | null
	/** Возможное назначение */
	speciality: number | null
	/** Куда выходят витрины */
	showcaseWindows: string | null
	/** Вид из окна */
	windowView: string | null
	/** Promo метки */
	promo: ILotPromo[] | null
	/** Promo текст */
	promoText: string | null
	/** Ссылка на картинку */
	interiorPlanImg?: string | null
	/** Ссылка на картинку */
	floorPlanImg: string | null
	/** Ссылка на картинку */
	sitPlanImg: string | null
	/** Дата создания */
	createdAt?: string
	/** Дата обновления */
	updatedAt?: string
	/** Первоначальный взнос */
	firstPaymentSum?: string
	/** Массив с лотами в фоисных блоках */
	childLots?: {
		id: number
		floor: number
		floorPlanImg: string
	}[]
	//** Цена до скидки */
	sellingPriceBeforeDiscount: string | null
	//** Скидка */
	discount: string | null
	/** Угол азимута */
	azimuthAngle?: number | null
	/** Тип недвижимости */
	businessType?: string | null
	/** С отделкой или без */
	isDecoration?: boolean | null
	/** С мокрой точкой */
	isWaterPipes?: boolean | null
	/** Данные всего проекта */
	project?: IProject | null
	/** Забронировано или нет????? */
	reservations?: string[] | null
}

export interface ILotCard {
	lot: ILot
	btnName?: string
	btnDisabled?: boolean
	handleBtnForm: () => void
	handleFullScreenBtn?: () => void
}
