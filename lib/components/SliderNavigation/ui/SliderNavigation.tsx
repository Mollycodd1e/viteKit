import {RoundButton} from "../../RoundButton";
import {Tag} from "../../Tag";
import {useClientWidth} from "../../../shared/useClientWidth.ts";

interface ISliderNavigation {
    indexSlide: number
    goPrev: () => void
    goNext: () => void
    arr: Array<unknown>
    additionalClassTag?: string
    additionalClassNavButton?: string
    navigationClassName?: string
}

export const SliderNavigation = ({
                                     indexSlide,
                                     goPrev,
                                     goNext,
                                     arr,
                                     additionalClassTag = '',
                                     navigationClassName = '',
                                     additionalClassNavButton = ''
                                 }: ISliderNavigation) => {
    const {isDesktop} = useClientWidth()

    return <div className={navigationClassName}>
        <RoundButton
            size={isDesktop ? 'large' : 'medium'}
            iconName="arrowLong"
            deg="90"
            disabled={indexSlide === 0}
            additionalClass={additionalClassNavButton}
            onClick={goPrev}
        />

        <Tag
            style={{backgroundColor: '#141416'}}
            additionalClass={additionalClassTag}
            variant="shade"
            size={'medium'}>
            {`${indexSlide + 1} из ${arr.length}`}
        </Tag>

        <RoundButton
            disabled={indexSlide === arr.length - 1}
            size={isDesktop ? 'large' : 'medium'}
            iconName="arrowLong"
            deg="-90"
            additionalClass={additionalClassNavButton}
            onClick={goNext}
        />
    </div>
}
