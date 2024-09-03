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

export const LotCard = ({ lot }: ILotCard) => {
	const {
		area,
		floor,
		floorsNumber,
		housing,
		bedroomsCount,
		number,
		isDecoration = false,
		sellingPrice,
		sellingPricePerMeter,
		discountedPrice,
		discountVolume,
		interiorPlanImg,
	} = lot

	const areaStr = area + ' ' + 'м²'
	const floorStr = floor + ' ' + 'из' + ' ' + floorsNumber

	const { isMobile } = useClientWidth()

	return (
		<div className={s.root}>
			<div className={s.lotImageWrapper}>
				<img
					src={interiorPlanImg ?? LotImage}
					width={311}
					height={224}
				/>
			</div>
			<div className={s.lotInfoWrapper}>
				<Text
					className={s.infoHeader}
					html={`${checkBedroomsCount(bedroomsCount)}, ${number}`}
				/>
				{isDecoration && (
					<div className={s.decor}>
						<NewIcon name={'withoutDecor'}></NewIcon>
						<span>Без отделки</span>
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
						onClick={(e) => e.stopPropagation()}>
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
						onClick={(e) => e.stopPropagation()}>
						Уточнить детали
					</Button>
				</div>
			</div>
		</div>
	)
}

