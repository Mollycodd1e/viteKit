import {TCategory, TModeSelect, TOption} from "../ui/Select.types.ts";
import {SetStateAction} from "react";


export type TClickOptionProps = {
    option: TOption | TOption[],
    disabledOptions: TOption[],
    selectedOptions: TOption[],
    setSelectedOptions: (value: SetStateAction<TOption[]>) => void,
    mode: TModeSelect
    onChange?: ((selectedOptions: TOption[]) => unknown)
    optionsParentArr?: TCategory[] | TOption[]
}

/**
 * Доп стили для кнопки-контейнера
 *
 * @default true
 */
const handleClickModeOption = ({
                                   option,
                                   setSelectedOptions,
                                   selectedOptions,
                                   disabledOptions,
                                   onChange,
                                   mode,
                                   optionsParentArr
                               }: TClickOptionProps) => {
    //логика кликов для обычного селекта
    if (!Array.isArray(option)) {
        //если эта опция в списке disable то помянем
        if (disabledOptions.includes(option)) {
            return
        }

        const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
            ? selectedOptions.filter((selected) => selected.value !== option.value)
            : [...selectedOptions, option]

        if (mode === 'double') {
            //TODO сделать логику если отжимаем проект то убираются все башни
            //проверяем есть ли категория в списке
            const categoryFromParent = optionsParentArr?.filter((el) => {
                return ('options' in el && el.options.includes(option))
            })[0]
            const isSelected = categoryFromParent && selectedOptions.includes(categoryFromParent)
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
                                     onChange
                                 }: TClickOptionProps) => {
    //TODO чтобы убрать JSON.stringify нужно ввести new Set([... в будущем (но не уверен про уникальность

    //логика кликов для мода категории
    if (Array.isArray(option)) {
        const optionsAfterDisable = option.filter((e) => !disabledOptions?.includes(e))

        //если все опции есть в selected
        if (
            optionsAfterDisable.every((e) => {
                return selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            })
        ) {
            //то фильтруем так чтобы в selected не осталось ни одной опции категории
            const newSelectedOptions = selectedOptions.filter(
                (e) => !option.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            )
            setSelectedOptions(newSelectedOptions)
            onChange && onChange(newSelectedOptions)
        } else {
            //а если их нет, то добавляем все в selected
            const optionsAfterSelected = optionsAfterDisable.filter(
                (e) => !selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            )

            const newSelectedOptions = [...selectedOptions, ...optionsAfterSelected]
            setSelectedOptions(newSelectedOptions)
            onChange && onChange(newSelectedOptions)
        }
    }
}

const handleClickModeDouble = ({
                                   option,
                                   setSelectedOptions,
                                   selectedOptions,
                                   disabledOptions,
                                   onChange
                               }: TClickOptionProps) => {
    //логика кликов для селекта с двойным фильтром
    if (Array.isArray(option)) {
        const optionsAfterDisable = option.filter((e) => !disabledOptions?.includes(e))
        //если все опции есть в selected
        if (
            optionsAfterDisable.every((e) => {
                return selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            })
        ) {
            //то фильтруем так чтобы в selected не осталось ни одной опции категории
            const newSelectedOptions = selectedOptions.filter(
                (e) => !option.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            )
            setSelectedOptions(newSelectedOptions)
            onChange && onChange(newSelectedOptions)
        } else {
            //а если их нет, то добавляем все в selected
            const optionsAfterSelected = optionsAfterDisable.filter(
                (e) => !selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            )

            const newSelectedOptions = [...selectedOptions, ...optionsAfterSelected]
            setSelectedOptions(newSelectedOptions)
            onChange && onChange(newSelectedOptions)
        }
    }
}

export {handleClickModeCategory, handleClickModeDouble, handleClickModeOption}
