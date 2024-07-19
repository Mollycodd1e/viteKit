
export interface Option {
	value: string | number
	label: string
}

export interface MultiSelectProps {
	options: Option[]
	placeholder?: string
	error?: boolean
	disabled?: boolean
	onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	onBlur?: (event: React.FocusEvent<HTMLDivElement, Element>) => void
	additionalClass?: string
}

