import s from './LotCard.module.scss'
import { ILotCard } from './LotCard.types'
import LotImage from './../assets/testLot.webp'
import { Text } from '../../Text'
import { checkBedroomsCount } from '../utils/checkBedroomsCount'
import { NewIcon } from '../../NewIcon'
import { Tag } from '../../Tag'
import { Button } from '../../Button'
import { formatPrice } from '../utils/formatPrice'
import { useClientWidth } from '../../../main'
import { formatPayment } from '../utils/monthlyPayment'
import { OFFICE_TYPES } from '../utils/const'

export const LotCard = ({
	lot,
	handleBtnForm,
	handleFullScreenBtn,
	btnName = 'Уточнить детали',
}: ILotCard) => {
	const {
		area,
		floor,
		floorsNumber,
		housing,
		bedroomsCount,
		number,
		isDecoration,
		sellingPrice,
		sellingPricePerMeter,
		discountedPrice,
		discountVolume,
		interiorPlanImg,
		mortgageMonthlyPayment,
		workPlacesCount,
		type,
		direction,
		floorPlanImg,
	} = lot

	const isOffice = direction === 1
	const areaStr = area + ' ' + 'м²'
	const floorStr = floor + ' ' + 'из' + ' ' + floorsNumber

	const { isMobile } = useClientWidth()

	return (
		<div className={s.root}>
			<Button
				as='button'
				variant='gray'
				size='small'
				additionalClass={s.fullscreenBtnMobile}
				onClick={(e) => {
					e.preventDefault()
					handleFullScreenBtn && handleFullScreenBtn()
				}}>
				<NewIcon
					name='fullscreen'
					color='#141416'
					size='16'
				/>
			</Button>

			<div className={s.lotImageWrapper}>
				<img
					src={interiorPlanImg ?? floorPlanImg ?? LotImage}
					width={311}
					height={224}
				/>
			</div>
			<div className={s.lotInfoWrapper}>
				<div className={s.monthlyWrapper}>
					<Text
						className={s.infoHeader}
						html={`${
							isOffice && type
								? OFFICE_TYPES[type as keyof typeof OFFICE_TYPES]
								: checkBedroomsCount(bedroomsCount)
						}, ${number}`}
					/>
					{mortgageMonthlyPayment && (
						<div className={s.monthlyPayment}>{formatPayment(mortgageMonthlyPayment)}</div>
					)}
				</div>
				{!isDecoration && (
					<div className={s.decor}>
						{!isOffice && (
							<>
								<NewIcon name={'withoutDecor'} />
								<span>Без отделки</span>
							</>
						)}
						{isOffice && workPlacesCount && <span>{workPlacesCount + ' рабочих мест'}</span>}
					</div>
				)}
				<div className={s.lotPropertyListDesktop}>
					<Tag variant='gray'>{areaStr}</Tag>
					<Tag variant='gray'>{housing}</Tag>
					<Tag variant='gray'>{'Этаж' + ' ' + floorStr}</Tag>
				</div>
				<ul className={s.lotPropertyListMobile}>
					<li className={s.lotPropertyItem}>
						<div>Площадь</div>
						<div>{areaStr}</div>
					</li>
					<li className={s.lotPropertyItem}>
						<div>{housing?.split(' ')[0]}</div>
						<div>{housing?.split(' ')[1]}</div>
					</li>
					<li className={s.lotPropertyItem}>
						<div>Этаж</div>
						<div>{floorStr}</div>
					</li>
				</ul>
			</div>
			<div className={s.lotPriceWrapper}>
				<div className={s.discountWrapper}>
					{discountedPrice && sellingPrice && (
						<div className={s.discountPrice}>
							<span>{formatPrice(sellingPrice)}</span>
							<Tag
								variant='red'
								size='tiny'>
								{'-' + discountVolume + '%'}
							</Tag>
						</div>
					)}
					<div>{formatPrice(discountedPrice || sellingPrice)}</div>
				</div>
				{sellingPricePerMeter && (
					<div className={s.lotPricePerMetr}>{formatPrice(sellingPricePerMeter, true)}</div>
				)}
				<div className={s.btnWrapper}>
					<Button
						as='button'
						variant='gray'
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
						size={isMobile ? 'large' : 'medium'}
						variant='black'
						width='full'
						onClick={(e) => {
							e.preventDefault()
							handleBtnForm()
						}}>
						{btnName}
					</Button>
				</div>
			</div>
		</div>
	)
}
