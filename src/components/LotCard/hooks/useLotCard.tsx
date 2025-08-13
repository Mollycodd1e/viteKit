import { useState } from 'react'
import s from '../ui/LotCard.module.scss'
import { ILot } from '../ui/LotCard.types'
import { NewIcon, Text, useClientWidth } from '../../../main'
import { getTagsFeatures } from '../utils/getTagsFeatures'
import classNames from 'classnames'
import { checkBedroomsCount } from '../utils/checkBedroomsCount'
import { formatPayment } from '../utils/monthlyPayment'

const cx = classNames.bind(s)

interface IUseLotCard {
	lot: ILot
	rowConditions?: boolean
}
export const useLotCard = ({ lot, rowConditions }: IUseLotCard) => {
	const {
		status,
		direction,
		area,
		floor,
		endFloor,
		floorsNumber,
		type,
		isCorner,
		windowViews,
		subTypeName,
		number,
		bedroomsCount,
		mortgageMonthlyPayment,
	} = lot

	const [isShowSnippet, setIsShowSnippet] = useState(false)

	const isReserved = status === 2
	const isOffice = direction === 1
	const isBuilding = type === 11

	const areaStr = area + ' ' + 'м²'
	const floorStr =
		(endFloor && endFloor !== floor ? floor + '-' + endFloor : floor) +
		' ' +
		'из' +
		' ' +
		floorsNumber

	const tagFeatures = getTagsFeatures({ ...lot })
	const { isTablet, isDesktop, currentClientWidth } = useClientWidth()
	//если нет rowConditions то будет на tablet и desktop
	const rowConditionsVar =
		typeof rowConditions !== 'undefined' ? rowConditions : isDesktop || isTablet


	const FloorByType = () => {
		if (isBuilding)
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
	const RenderTags = () => {
		if (type === 3) {
			let totalLength = 0
			const maxLength = isDesktop ? 38 : 28
			const elements: string[] = []
			const remainingItems: string[] = []

			if (isCorner) {
				const cornerText = 'Угловая'
				if (totalLength + cornerText.length <= maxLength) {
					elements.push(cornerText)
					totalLength += cornerText.length
				} else {
					return elements
				}
			}

			if (windowViews) {
				for (const item of windowViews) {
					if (totalLength + item.length <= maxLength) {
						elements.push(item)
						totalLength += item.length
					} else {
						remainingItems.push(item)
					}
				}
			}

			return (
				<div className={s.retailSnippets}>
					<ul className={s.shownSnippets}>
						{elements?.map((r, i) => {
							return <li key={i}>{r}</li>
						})}
					</ul>
					{remainingItems?.length > 0 && (
						<div
							className={cx(s.addSnippets, { [s.addSnippetsActive]: isShowSnippet })}
							onClick={(e) => {
								if (!isDesktop) {
									e.stopPropagation()
									e.preventDefault()
									setIsShowSnippet((prev) => !prev)
								}
							}}
							onMouseEnter={() => {
								if (isDesktop) {
									setIsShowSnippet(true)
								}
							}}
							onMouseLeave={() => {
								if (isDesktop) {
									setIsShowSnippet(false)
								}
							}}>
							{'+' + remainingItems?.length}
							{isShowSnippet && (
								<ul className={s.addSnippetsList}>
									{remainingItems.map((r, i) => {
										return <li key={i}>{r}</li>
									})}
									<div className={s.closeSnippetBtn}>
										<NewIcon
											name={'close'}
											size='16'
											color='#ffffff'
										/>
									</div>
								</ul>
							)}
						</div>
					)}
				</div>
			)
		}
		return (
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
		)
	}

	const LotCardInfo = () => {
		return (
			<>
				<div className={cx(s.monthlyWrapper)}>
					<Text
						className={cx(s.infoHeader)}
						html={`${isOffice && type ? subTypeName : checkBedroomsCount(bedroomsCount)}${
							isBuilding ? '' : `, ${number}`
						}`}
					/>
					{mortgageMonthlyPayment && (
						<div className={s.monthlyPayment}>{formatPayment(mortgageMonthlyPayment)}</div>
					)}
				</div>
				<RenderTags />
			</>
		)
	}

	return {
		currentClientWidth,
		isBuilding,
		LotCardInfo,
		tagFeatures,
		FloorByType,
		isTablet,
		isDesktop,
		isReserved,
		areaStr,
		floorStr,
		isShowSnippet,
		setIsShowSnippet,
		rowConditionsVar,
	}
}

