import { ChangeEvent } from 'react'

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
	onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => unknown
	selectedValues?: Option[]
	isBtn?: boolean
	btnName?: string
	widthBtn?: string
	widthOptionList?: string
	isListRight?: boolean
}
