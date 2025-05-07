import { TOption } from '../../Select/ui/Select.types.ts'

export interface Option {
	value: string | number
	label: string
}

export interface SortSelectProps {
	options?: Option[]
	selectedOption: Option | null
	placeholder?: string
	error?: boolean
	disabled?: boolean
	onChange?: (event: Option | null) => void
	onBlur?: (event: Option) => void
	additionalClass?: string
	mini?: boolean
	openOnTop?: boolean
	onOpenClick?: () => void
	onClickItem?: (option: TOption | TOption[]) => void
	onCLickSelect?: () => void
}
