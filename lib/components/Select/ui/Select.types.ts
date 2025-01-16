export interface Option {
	value: string | number
	label: string
}

export interface MultiSelectProps {
	options?: Option[]
	placeholder?: string
	error?: boolean
	disabled?: boolean
	additionalClass?: string
	additionalClassOption?: string
	additionalClassBtn?: string
	onChange?: (selectedOptions: Option[]) => unknown
	onBlur?: (selectedOptions: Option[]) => unknown
	selectedValues?: Option[]
	isBtn?: boolean
	btnName?: string
	widthBtn?: string
	widthOptionList?: string
	isListRight?: boolean
	disabledOptions?: Option[]
	clickableOptions?: (string | undefined)[]
	sizeIcon?: string
}
