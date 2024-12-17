import classNames from 'classnames'
import s from './LotCardSkeleton.module.scss'

interface ILotCardSkeleton {
	isProjectCard?: boolean
}

const cx = classNames.bind(s)

export const LotCardSkeleton = ({ isProjectCard }: ILotCardSkeleton) => {
	const isDecoration: boolean = true

	return (
		<div className={cx(s.root, { [s.projectRoot]: isProjectCard })}>
			<div className={cx(s.lotImageWrapper, { [s.projectLotImageWrapper]: isProjectCard })} />
			<div className={cx(s.lotInfoWrapper, { [s.projectLotInfoWrapper]: isProjectCard })}>
				<div className={cx(s.infoHeader, { [s.projectInfoHeader]: isProjectCard })} />
				{isDecoration && <div className={cx(s.decor, { [s.projectDecor]: isProjectCard })} />}
				<div
					className={cx(s.lotPropertyListDesktop, {
						[s.projectLotPropertyListDesktop]: isProjectCard,
					})}>
					<div className={s.lotPropertyItemDesktop} />
					<div className={s.lotPropertyItemDesktop} />
					<div className={s.lotPropertyItemDesktop} />
				</div>
				<ul
					className={cx(s.lotPropertyListMobile, {
						[s.projectLotPropertyListMobile]: isProjectCard,
					})}>
					<li className={cx(s.lotPropertyItem, { [s.projectLotPropertyItem]: isProjectCard })}>
						<div></div>
						<div></div>
					</li>
					<li className={cx(s.lotPropertyItem, { [s.projectLotPropertyItem]: isProjectCard })}>
						<div></div>
						<div></div>
					</li>
					<li className={cx(s.lotPropertyItem, { [s.projectLotPropertyItem]: isProjectCard })}>
						<div></div>
						<div></div>
					</li>
				</ul>
			</div>
			<div className={cx(s.lotPriceWrapper, { [s.projectLotPriceWrapper]: isProjectCard })}>
				<div className={cx(s.discountWrapper, { [s.projectDiscountWrapper]: isProjectCard })}>
					<div></div>
				</div>
				<div className={cx(s.lotPricePerMetr, { [s.projectLotPricePerMetr]: isProjectCard })}></div>
				<div className={cx(s.btnWrapper, { [s.projectBtnWrapper]: isProjectCard })}>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
