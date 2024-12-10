import { LotCardSkeleton } from '../../LotCardSkeleton'
import s from './ProjectCardSkeleton.module.scss'

export const ProjectCardSkeleton = () => {
	const skeletonElements = [1, 2, 3, 4, 5]

	return (
		<div className={s.root}>
			<div className={s.projectHeader}>
				<div className={s.projectTitleWrapper}>
					<div className={s.projectTitle} />
					<div className={s.projectBtn}></div>
				</div>
				<div className={s.metroWrapper}>
					<div className={s.projectYearDesktop} />
					<div></div>
					<div></div>
				</div>
				<div className={s.projectYearMobile} />
			</div>
			{skeletonElements.map((m) => {
				return <LotCardSkeleton key={m} />
			})}
		</div>
	)
}

