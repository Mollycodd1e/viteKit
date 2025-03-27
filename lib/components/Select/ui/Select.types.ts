export type TOption = {
	value: string | number
	label: string
	parent?: string
	id?: number
}

export type TCategory = {
	value: string | number
	label: string
	options: TOption[]
}

export type TModeSelect = 'options' | 'category' | 'double'

type SelectSizes = 'medium' | 'small' | 'large'

export interface MultiSelectProps {
	options: TOption[] | TCategory[]
	category?: TCategory[]
	placeholder?: string
	error?: boolean
	disabled?: boolean
	size_s?: SelectSizes
	size_m?: SelectSizes
	size_l?: SelectSizes
	/**
	 * Доп стили для родителя-контейнера
	 */
	additionalClass?: string
	/**
	 * Доп стили для каждой опции
	 */
	additionalClassOption?: string
	/**
	 * Доп стили для кнопки-контейнера
	 */
	additionalClassBtn?: string
	onChange?: (selectedOptions: TOption[]) => unknown
	onBlur?: (selectedOptions: TOption[]) => unknown
	selectedValues?: TOption[]
	isBtn?: boolean
	btnName?: string
	widthBtn?: string
	widthOptionList?: string
	isListRight?: boolean
	/**
	 * Список опций которые будут задизейблены по умолчанию
	 */
	disabledOptions?: TOption[]
	/**
	 * Список опций которые доступны для клика
	 */
	clickableOptions?: (string | undefined)[]
	sizeIcon?: string
	mode?: TModeSelect
	onClickItem?: (option: TOption | TOption[]) => void
	onCLickSelect?: () => void
	isDisabledNotClickable?: boolean
}
