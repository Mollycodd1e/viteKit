export interface Option {
	value: string | number
	label: string
}

export interface SortSelectProps {
	options: Option[]
	placeholder?: string
	error?: boolean
	disabled?: boolean
	onChange?: (event: Option) => void
	onBlur?: (event: Option) => void
	additionalClass?: string
	mini?: boolean
}