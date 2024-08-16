import { RoundButton } from '../../RoundButton'
import { Tag } from '../../Tag'
import { useClientWidth } from '../../../shared/useClientWidth.ts'
import { ISliderNavigation } from './SliderNavigation.types.ts'
import classNames from 'classnames'
import s from './SliderNavigation.module.scss'
const cx = classNames.bind(s)
export const SliderNavigation = ({
	indexSlide,
	goPrev,
	goNext,
	arr,
	isNeedTag = true,
	additionalClassTag = '',
	navigationClassName = '',
	additionalClassNavButton = '',
}: ISliderNavigation) => {
	const { isDesktop } = useClientWidth()

	return (
		<div className={navigationClassName}>
			<RoundButton
				size={!isDesktop ? 'medium' : 'large'}
				iconName='directionDown'
				deg='90'
				disabled={indexSlide === 0}
				additionalClass={additionalClassNavButton}
				onClick={goPrev}
			/>

			{isNeedTag && (
				<Tag
					additionalClass={cx(s.sliderTag, additionalClassTag)}
					variant='shade'
					size={!isDesktop ? 'medium' : 'large'}>
					{`${indexSlide + 1} из ${arr.length}`}
				</Tag>
			)}

			<RoundButton
				disabled={indexSlide === arr.length - 1}
				size={!isDesktop ? 'medium' : 'large'}
				iconName='directionDown'
				deg='-90'
				additionalClass={additionalClassNavButton}
				onClick={goNext}
			/>
		</div>
	)
}
