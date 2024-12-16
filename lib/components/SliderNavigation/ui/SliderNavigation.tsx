'use client'
import {RoundButton} from '../../RoundButton'
import {Tag} from '../../Tag'
import {useClientWidth} from '../../../shared/useClientWidth.ts'
import {ISliderNavigation} from './SliderNavigation.types.ts'
import classNames from 'classnames'
import s from './SliderNavigation.module.scss'

const cx = classNames.bind(s)
export const SliderNavigation = ({
                                     indexSlide,
                                     isDisabledOff,
                                     goPrev,
                                     goNext,
                                     arr,
                                     isNeedTag = true,
                                     additionalClassTag = '',
                                     navigationClassName = '',
                                     additionalClassNavButton = '',
                                     size = "medium",
                                     size_m = "medium",
                                     size_l = "large",
                                 }: ISliderNavigation) => {
    const {isDesktop} = useClientWidth()

    return (
        <div className={navigationClassName}>
            <RoundButton
                iconName='directionDown'
                deg='90'
                size={size}
                size_m={size_m}
                size_l={size_l}
                disabled={isDisabledOff ? false : indexSlide === 0}
                additionalClass={additionalClassNavButton}
                onClick={goPrev}
            />

            {isNeedTag && (
                <Tag
                    additionalClass={cx(s.sliderTag, additionalClassTag)}
                    variant='shade'
                    size={!isDesktop ? 'medium' : 'large'}
                    size_m={size_m}
                    size_l={size_l}
                >
                    {`${indexSlide + 1} из ${arr.length}`}
                </Tag>
            )}

            <RoundButton
                disabled={isDisabledOff ? false : indexSlide === arr.length - 1}
                size={'tiny'}
                size_m={'tiny'}
                size_l={'tiny'}
                iconName='directionDown'
                deg='-90'
                additionalClass={additionalClassNavButton}
                onClick={goNext}
            />
        </div>
    )
}
