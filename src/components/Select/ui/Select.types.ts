export type TOption = {
	value: string | number
	label: string
	parent?: string
}

export type TCategory = {
	value: string | number
	label: string
	options: TOption[]
}

export type TModeSelect = 'options' | 'category'

export interface MultiSelectProps {
	options?: TOption[]
	category?: TCategory[]
	placeholder?: string
	error?: boolean
	disabled?: boolean
	/**
	 * Доп стили для родителя-контейнера
	 *
	 * @default false
	 */
	additionalClass?: string
	/**
	 * Доп стили для каждой опции
	 *
	 * @default false
	 */
	additionalClassOption?: string
	/**
	 * Доп стили для кнопки-контейнера
	 *
	 * @default false
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
	 *
	 * @default false
	 */
	disabledOptions?: TOption[]
	/**
	 * Список опций которые доступны для клика
	 *
	 * @default false
	 */
	clickableOptions?: (string | undefined)[]
	sizeIcon?: string
	mode?: TModeSelect
}
