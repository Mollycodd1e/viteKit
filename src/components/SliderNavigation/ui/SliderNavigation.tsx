import {RoundButton} from "../../RoundButton";
import {Tag} from "../../Tag";
import {useClientWidth} from "../../../shared/useClientWidth.ts";
import {ISliderNavigation} from "./SliderNavigation.types.ts";


export const SliderNavigation = ({
                                     indexSlide,
                                     goPrev,
                                     goNext,
                                     arr,
    isNeedTag = true,
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

        {isNeedTag && <Tag
            style={{backgroundColor: '#141416'}}
            additionalClass={additionalClassTag}
            variant="shade"
            size={'medium'}>
            {`${indexSlide + 1} из ${arr.length}`}
        </Tag>}

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

