import { LotCardSkeleton } from '../../LotCardSkeleton'
import s from './ProjectCardSkeleton.module.scss'

export const ProjectCardSkeleton = () => {
	const skeletonElements = [1, 2, 3, 4, 5]

	return (
		<div className={s.root}>
			<div className={s.projectHeader}>
				<div className={s.titleWrapper}>
					<div className={s.projectTitle}></div>
					<div className={s.projectYear} />
				</div>
				<div className={s.metroWrapper}>
					<div></div>
					<div></div>
				</div>
			</div>
			{skeletonElements.map((m) => {
				return <LotCardSkeleton key={m} />
			})}
		</div>
	)
}

