import {useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import {MultiSelectProps, TOption} from './Select.types'
import s from './Select.module.scss'
import {Option} from './Option'
import {NewIcon} from '../../NewIcon'
import {Category} from "./Category.tsx";

const cx = classNames.bind(s)

export const Select = ({
                           options,
                           placeholder = 'Выберите опции',
                           error,
                           disabled,
                           disabledOptions = [],
                           additionalClass = '',
                           additionalClassOption,
                           additionalClassBtn,
                           onChange,
                           onBlur,
                           selectedValues = [],
                           isBtn = false,
                           btnName,
                           clickableOptions,
                           isListRight = false,
                           sizeIcon,
                           mode = 'options',
                       }: MultiSelectProps) => {

    const fakeCategory = [
        {
            value: 'Category1',
            label: 'category1',
            options: [
                {value: 'optionsFake1', label: 'labelFake1'},
                {value: 'optionsFake2', label: 'labelFake2'},
                {value: 'optionsFake3', label: 'labelFake3'}
            ]
        },
        // {
        //     value: 'Category2',
        //     label: 'category2',
        //     options: [
        //         {value: 'optionsFake4', label: 'labelFake4'},
        //         {value: 'optionsFake5', label: 'labelFake5'},
        //         {value: 'optionsFake6', label: 'labelFake6'}
        //     ]
        // }
    ]

    const [selectedOptions, setSelectedOptions] = useState<TOption[]>(selectedValues)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOptionClick = (option: TOption | TOption[]) => () => {
        if (!Array.isArray(option)) {
            //если эта опция в списке disable то помянем
            if (disabledOptions.includes(option)) {
                return
            }

            const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
                ? selectedOptions.filter((selected) => selected.value !== option.value)
                : [...selectedOptions, option]

            setSelectedOptions(newSelectedOptions)
            onChange && onChange(newSelectedOptions)
        } else {
            const optionsAfterDisable = option.filter((e) => !disabledOptions?.includes(e))

            //если все опции есть в selected
            if (optionsAfterDisable.every((e) => {
                return selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e))
            })) {
                //то фильтруем так чтобы в selected не осталось ни одной опции категории
                const newSelectedOptions = selectedOptions.filter((e) => !option.map((e) => JSON.stringify(e)).includes(JSON.stringify(e)))
                setSelectedOptions(newSelectedOptions)
                onChange && onChange(newSelectedOptions)
            } else {
                //а если их нет, то добавляем все в selected
                const optionsAfterSelected = optionsAfterDisable.filter((e) => !selectedOptions.map((e) => JSON.stringify(e)).includes(JSON.stringify(e)))

                const newSelectedOptions = [...selectedOptions, ...optionsAfterSelected]
                setSelectedOptions(newSelectedOptions)
                onChange && onChange(newSelectedOptions)
            }

        }
    }

    const handleBlur = () => {
        onBlur && onBlur(selectedOptions)
    }

    useEffect(() => {
        //отслеживает клик и если он вне селекта то закрывает его
        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement

            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (target.closest('svg')) {
                    return
                }

                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    const prevSelectedValuesRef = useRef(selectedValues)

    useEffect(() => {
        if (selectedValues.length !== prevSelectedValuesRef.current.length) {
            setSelectedOptions(selectedValues)
            prevSelectedValuesRef.current = selectedValues
        }
    }, [selectedValues])

    return (
        <div
            ref={containerRef}
            className={cx(s.multiSelectWrapper, {[s.multiSelectWrapperError]: error}, additionalClass)}
            tabIndex={0}
            onBlur={handleBlur}>
            <div className={cx(s.inputWrapper)}>
                {!isBtn && (
                    <>
                        <div
                            className={cx(
                                s.selectedOptions,
                                {[s.selectedOptionsNotEmpty]: selectedOptions.length > 0},
                                {[s.selectOptionsDisabled]: disabled}
                            )}
                            onClick={() => setIsOpen(!isOpen)}>
                            {selectedOptions.length === 0 ? placeholder : 'Выбрано ' + selectedOptions.length}
                        </div>
                        <NewIcon
                            name={'arrowShort'}
                            deg={isOpen ? '180' : '0'}
                            size={sizeIcon ?? '24'}
                            additionalClass={s.icon}
                        />
                    </>
                )}

                {isBtn && (
                    <>
                        <button
                            className={cx(
                                s.selectedOptions,
                                s.selectedOptionsBtn,
                                {[s.selectOptionsDisabled]: disabled},
                                additionalClassBtn
                            )}
                            onClick={() => setIsOpen(!isOpen)}>
                            {btnName}
                        </button>
                        <NewIcon
                            name={'filter'}
                            deg={isOpen ? '180' : '0'}
                            size={sizeIcon ?? '24'}
                            additionalClass={s.icon}
                        />
                    </>
                )}
            </div>
            {isOpen && (
                <div className={cx(s.optionsList, {[s.listRight]: isListRight}, additionalClassOption)}>
                    {mode === 'options' && options?.map((option, i) => (
                        <Option key={i} disabledOptions={disabledOptions} clickableOptions={clickableOptions}
                                selectedOptions={selectedOptions} sizeIcon={sizeIcon} option={option}
                                handleOptionClick={handleOptionClick}/>
                    ))}
                    {mode === 'category' && fakeCategory?.map((cat, i) => (
                        <Category key={i} disabledOptions={disabledOptions} clickableOptions={clickableOptions}
                                  selectedOptions={selectedOptions} sizeIcon={sizeIcon} category={cat}
                                  selectedValues={selectedValues} handleOptionClick={handleOptionClick}/>
                    ))}

                </div>
            )}
        </div>
    )
}

