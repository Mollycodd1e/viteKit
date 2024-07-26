
export interface ISliderNavigation {
	indexSlide: number
	goPrev: () => void
	goNext: () => void
	arr: Array<unknown>
	additionalClassTag?: string
	additionalClassNavButton?: string
	navigationClassName?: string
}