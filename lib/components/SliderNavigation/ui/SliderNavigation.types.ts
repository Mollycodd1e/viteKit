type Sizes = 'large' | 'medium' | 'small'

export interface ISliderNavigation {
    indexSlide: number
    goPrev: () => void
    goNext: () => void
    arr: Array<unknown>
    additionalClassTag?: string
    additionalClassNavButton?: string
    navigationClassName?: string
    isNeedTag?: boolean
    isDisabledOff?: boolean

    size?: Sizes
    size_m?: Sizes
    size_l?: Sizes
}