import s from './LotCardSkeleton.module.scss'

export const LotCardSkeleton = () => {
	const isDecoration: boolean = true

	return (
		<div className={s.root}>
			<div className={s.lotImageWrapper}></div>
			<div className={s.lotInfoWrapper}>
				<div className={s.infoHeader} />
				{isDecoration && <div className={s.decor}></div>}
				<div className={s.lotPropertyListDesktop}>
					<div className={s.lotPropertyItemDesktop} />
					<div className={s.lotPropertyItemDesktop} />
					<div className={s.lotPropertyItemDesktop} />
				</div>
				<ul className={s.lotPropertyListMobile}>
					<li className={s.lotPropertyItem}>
						<div></div>
						<div></div>
					</li>
					<li className={s.lotPropertyItem}>
						<div></div>
						<div></div>
					</li>
					<li className={s.lotPropertyItem}>
						<div></div>
						<div></div>
					</li>
				</ul>
			</div>
			<div className={s.lotPriceWrapper}>
				<div className={s.discountWrapper}>
					<div></div>
				</div>
				<div className={s.lotPricePerMetr}></div>
				<div className={s.btnWrapper}>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

