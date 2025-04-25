import s from './LotCard.module.scss'
import { ILotCard } from './LotCard.types'
import LotImage from './../assets/testLot.webp'
import { Text } from '../../Text'
import { checkBedroomsCount } from '../utils/checkBedroomsCount'
import { NewIcon } from '../../NewIcon'
import { Tag } from '../../Tag'
import { Button } from '../../Button'
import { formatPrice } from '../utils/formatPrice'
import { formatPayment } from '../utils/monthlyPayment'
import classNames from 'classnames'
import { getTagsFeatures } from '../utils/getTagsFeatures.ts'
import { useClientWidth } from '../../../main.ts'

const cx = classNames.bind(s)

export const LotCard = ({
	lot,
	handleBtnForm,
	handleFullScreenBtn,
	btnDisabled,
	addClassname,
	btnName = 'Уточнить детали',
	imgNode,
	rowConditions,
	addClassnameLotImage,
}: ILotCard) => {
	const {
		area,
		floor,
		floorsNumber,
		housing,
		bedroomsCount,
		number,
		sellingPricePerMeter,
		interiorPlanImg,
		mortgageMonthlyPayment,
		type,
		direction,
		floorPlanImg,
		discount,
		sellingPrice,
		sellingPriceBeforeDiscount,
		subTypeName,
		endFloor,
		status,
	} = lot
	const tagFeatures = getTagsFeatures({ ...lot })
	const isReserved = status === 2
	const isOffice = direction === 1

	const areaStr = area + ' ' + 'м²'
	const floorStr =
		(endFloor && endFloor !== floor ? floor + '-' + endFloor : floor) +
		' ' +
		'из' +
		' ' +
		floorsNumber

	const { isTablet, isDesktop } = useClientWidth()
	//если нет rowConditions то будет на tablet и desktop
	const rowConditionsVar =
		typeof rowConditions !== 'undefined' ? rowConditions : isDesktop || isTablet

	const getFloorStr = () => {
		if (type === 11) return 'Кол-во этажей: ' + floorsNumber
		return 'Этаж: ' + floorStr
	}

	const FloorByType = () => {
		if (type === 11)
			return (
				<>
					<div>Количество этажей</div>
					<div>{floorsNumber}</div>
				</>
			)
		return (
			<>
				<div>Этаж</div>
				<div>{floorStr}</div>
			</>
		)
	}

	return (
		<div
			className={cx(s.root, addClassname, {
				[s.rootDisable]: isReserved,
				[s.rootRow]: rowConditionsVar,
			})}
			data-testid={'lot_card'}>
			{!rowConditionsVar && (
				<div className={cx(s.title)}>
					<div className={s.monthlyWrapper}>
						<Text
							className={cx(s.infoHeader)}
							html={`${
								isOffice && type ? subTypeName : checkBedroomsCount(bedroomsCount)
							}, ${number}`}
						/>
						{mortgageMonthlyPayment && (
							<div className={s.monthlyPayment}>{formatPayment(mortgageMonthlyPayment)}</div>
						)}
					</div>

					<div className={s.snippets}>
						{tagFeatures.map((e, i) => {
							const isLast = i === tagFeatures.length - 1
							return (
								<div
									key={i}
									className={cx(s.snippet, isLast ? '' : s.snippetLast)}>
									{e.text}
								</div>
							)
						})}
					</div>
				</div>
			)}
			<div className={cx(s.lotImageWrapper, addClassnameLotImage)}>
				{imgNode ? (
					imgNode
				) : (
					<img
						loading='lazy'
						src={interiorPlanImg ?? floorPlanImg ?? LotImage}
						width={280}
						height={200}
						alt={''}
					/>
				)}
			</div>
			<div className={cx(s.lotInfoWrapper)}>
				{rowConditionsVar && (
					<>
						<div className={cx(s.monthlyWrapper)}>
							<Text
								className={cx(s.infoHeader)}
								html={`${
									isOffice && type ? subTypeName : checkBedroomsCount(bedroomsCount)
								}, ${number}`}
							/>
							{mortgageMonthlyPayment && (
								<div className={s.monthlyPayment}>{formatPayment(mortgageMonthlyPayment)}</div>
							)}
						</div>
						<div className={s.snippets}>
							{tagFeatures.map((e, i) => {
								const isLast = i === tagFeatures.length - 1
								return (
									<div
										key={i}
										className={cx(s.snippet, isLast ? '' : s.snippetLast)}>
										{e.text}
									</div>
								)
							})}
						</div>
					</>
				)}

				<div className={cx(s.lotPropertyListDesktop)}>
					<Tag variant='gray'>{areaStr}</Tag>
					<Tag variant='gray'>{housing}</Tag>
					<Tag variant='gray'>{getFloorStr()}</Tag>
				</div>
				<ul className={cx(s.lotPropertyListMobile)}>
					<li className={cx(s.lotPropertyItem)}>
						<div>Площадь</div>
						<div>{areaStr}</div>
					</li>
					<li className={cx(s.lotPropertyItem)}>
						<div>{housing?.split(' ')[0]}</div>
						<div>{housing?.split(' ')[1]}</div>
					</li>
					<li className={cx(s.lotPropertyItem)}>
						<FloorByType />
					</li>
				</ul>
			</div>
			<div className={cx(s.lotPriceWrapper, { [s.lotPriceWrapperRow]: !rowConditionsVar })}>
				{!isReserved && (
					<div className={s.discountWrapper}>
						{discount && sellingPrice && sellingPriceBeforeDiscount && (
							<div className={cx(s.discountPrice)}>
								<span>
									{formatPrice(sellingPriceBeforeDiscount ?? sellingPrice, false, direction)}
								</span>
								<Tag
									additionalClass={cx(s.discountTag)}
									variant='red'
									size={'tiny'}>
									{'-' + Number(discount) + '%'}
								</Tag>
							</div>
						)}
						<div>{formatPrice(sellingPrice, false, direction)}</div>
					</div>
				)}

				{sellingPricePerMeter && !isReserved && (
					<div className={cx(s.lotPricePerMetr, s.projectLotPricePerMetr)}>
						{formatPrice(sellingPricePerMeter, true, direction)}
					</div>
				)}

				<div className={cx(s.btnWrapper)}>
					<Button
						as='button'
						data-testid={'lot_fullscreen'}
						disabled={btnDisabled}
						variant='whiteStroke'
						additionalClass={s.fullscreenBtn}
						onClick={(e) => {
							e.preventDefault()
							handleFullScreenBtn && handleFullScreenBtn()
						}}>
						<NewIcon
							name='fullscreen'
							color='#141416'
							size='20'
						/>
					</Button>
					<Button
						as='button'
						size='medium'
						disabled={isReserved}
						variant={isReserved ? 'gray' : 'blue'}
						width='full'
						additionalClass={s.lotBtn}
						data-testid={'lot_form'}
						post={
							isReserved ? (
								<NewIcon
									name={'lock'}
									size={'24'}
									color={'#777E90'}
								/>
							) : undefined
						}
						onClick={(e) => {
							e.preventDefault()
							handleBtnForm(e)
						}}>
						{btnName}
					</Button>
				</div>
			</div>
		</div>
	)
}
