import s from './LotCard.module.scss'
import { ILotCard } from './LotCard.types'
import LotImage from './../assets/testLot.webp'
import { NewIcon } from '../../NewIcon'
import { Tag } from '../../Tag'
import { Button } from '../../Button'
import { formatPrice } from '../utils/formatPrice'
import classNames from 'classnames'
import { useLotCard } from '../hooks/useLotCard.tsx'

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
		housing,
		sellingPricePerMeter,
		interiorPlanImg,
		direction,
		floorPlanImg,
		discount,
		sellingPrice,
		sellingPriceBeforeDiscount,
	} = lot

	const {
		getFloorStr,
		FloorByType,
		areaStr,
		isReserved,
		rowConditionsVar,
		currentClientWidth,
		isBuilding,
		LotCardInfo,
	} = useLotCard({ lot, rowConditions })

	if (!currentClientWidth) return null

	return (
		<div
			className={cx(s.root, addClassname, {
				[s.rootDisable]: isReserved,
				[s.rootRow]: rowConditionsVar,
			})}
			data-testid={'lot_card'}>
			{!rowConditionsVar && (
				<div className={cx(s.title)}>
					<LotCardInfo />
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
				{rowConditionsVar && <LotCardInfo />}
				<div className={cx(s.lotPropertyListDesktop)}>
					<Tag variant='gray'>{areaStr}</Tag>
					{!isBuilding && <Tag variant='gray'>{housing}</Tag>}
					<Tag variant='gray'>{getFloorStr()}</Tag>
				</div>
				<ul className={cx(s.lotPropertyListMobile)}>
					<li className={cx(s.lotPropertyItem)}>
						<div>Площадь</div>
						<div>{areaStr}</div>
					</li>
					{!isBuilding && (
						<li className={cx(s.lotPropertyItem)}>
							<div>{housing?.split(' ')[0]}</div>
							<div>{housing?.split(' ')[1]}</div>
						</li>
					)}
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
