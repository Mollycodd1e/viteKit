import { TCategory, TModeSelect, TOption } from '../ui/Select.types.ts'
import { SetStateAction } from 'react'

export type TClickOptionProps = {
	option: TOption | TOption[]
	disabledOptions: TOption[]
	selectedOptions: TOption[]
	setSelectedOptions: (value: SetStateAction<TOption[]>) => void
	mode: TModeSelect
	onChange?: (selectedOptions: TOption[]) => unknown
	optionsParentArr?: TCategory[] | TOption[]
}

const handleClickModeOption = ({
	option,
	setSelectedOptions,
	selectedOptions,
	disabledOptions,
	onChange,
	mode,
	optionsParentArr,
}: TClickOptionProps) => {
	//логика кликов для обычного селекта
	if (!Array.isArray(option)) {
		//если эта опция в списке disable то помянем
		if (disabledOptions.includes(option)) {
			return
		}

		let newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
			? selectedOptions.filter((selected) => selected.value !== option.value)
			: [...selectedOptions, option]
		//для режима когда выбрать  можно только 1 активную опцию
		if (mode === 'single') {
			// в single моде всегда один выбранный элемент
			const newSelectedOptions = [option]
			setSelectedOptions(newSelectedOptions)
			onChange && onChange(newSelectedOptions)
			return
		}

		if (mode === 'double') {
			//доп логика для категории
			if ('options' in option) {
				//проверяем выбрана ли категория и если да, то при нажатии на нее снова отжимаются все ее опции
				const isSelected = selectedOptions
					.map((e) => JSON.stringify(e))
					.includes(JSON.stringify(option))
				if (isSelected)
					newSelectedOptions = newSelectedOptions.filter(
						(item) =>
							!(option.options as TOption[])
								.map((e) => JSON.stringify(e))
								.includes(JSON.stringify(item))
					)
				else {
					if (Array.isArray(option.options)) {
						newSelectedOptions = [...newSelectedOptions, ...option.options]
					}
				}
			}
			//доп логика для опции

			//проверяем есть ли категория в списке
			const categoryFromParent = optionsParentArr?.filter((el) => {
				return 'options' in el && el.options.includes(option)
			})[0]
			const isSelected =
				categoryFromParent &&
				selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(categoryFromParent))
			if (!isSelected && categoryFromParent) {
				//если нет в списке выбранных то пушим туда
				newSelectedOptions.push(categoryFromParent)
			}
		}
		//подставляем новый список
		setSelectedOptions(newSelectedOptions)
		onChange && onChange(newSelectedOptions)
	}
}

const handleClickModeCategory = ({
	option,
	setSelectedOptions,
	selectedOptions,
	disabledOptions,
	onChange,
}: TClickOptionProps) => {
	//логика кликов для мода категории
	if (Array.isArray(option)) {
		const optionsAfterDisable = option.filter((e) => !disabledOptions?.includes(e))

		//если все опции есть в selected
		if (
			optionsAfterDisable.every((e) => {
				return selectedOptions.map((e) => e).includes(e)
			})
		) {
			//то фильтруем так чтобы в selected не осталось ни одной опции категории
			const newSelectedOptions = selectedOptions.filter((e) => !option.includes(e))
			setSelectedOptions(newSelectedOptions)
			onChange && onChange(newSelectedOptions)
		} else {
			//а если их нет, то добавляем все в selected
			const optionsAfterSelected = optionsAfterDisable.filter((e) => !selectedOptions.includes(e))

			const newSelectedOptions = [...selectedOptions, ...optionsAfterSelected]
			setSelectedOptions(newSelectedOptions)
			onChange && onChange(newSelectedOptions)
		}
	}
}

export { handleClickModeCategory, handleClickModeOption }
