export type Option = {
	value: string | number
	label: string
}

export type Categories = {
	options: Option[]
}

export type TModeSelect = 'options' | 'categories'

export interface MultiSelectProps {
	/**
	 * Опции (могут быть опции или категории опций)
	 *
	 * @default false
	 */
	options?: Option[]
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
	onChange?: (selectedOptions: Option[]) => unknown
	onBlur?: (selectedOptions: Option[]) => unknown
	/**
	 * Значения
	 *
	 * @default false
	 */
	selectedValues?: Option[]
	isBtn?: boolean
	btnName?: string
	widthBtn?: string
	/**
	 * Ширина
	 *
	 * @default false
	 */
	widthOptionList?: string
	isListRight?: boolean
	/**
	 * Список опций которые будут задизейблены по умолчанию
	 *
	 * @default false
	 */
	disabledOptions?: Option[]
	/**
	 * Да...
	 *
	 * @default false
	 */
	clickableOptions?: (string | undefined)[]
	sizeIcon?: string
	mode?: TModeSelect
}
