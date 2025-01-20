import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import {MultiSelectProps, Option} from './Select.types'
import s from './Select.module.scss'
import {NewIcon} from '../../NewIcon'

const cx = classNames.bind(s)

const SelectComponent: React.FC<MultiSelectProps> = ({
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
                                                         sizeIcon
                                                     }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>(selectedValues)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOptionClick = useCallback(
        (option: Option) => () => {
            if (disabledOptions.some((disabled) => disabled.value === option.value)) {
                return
            }
            const newSelectedOptions = selectedOptions.some((selected) => selected.value === option.value)
                ? selectedOptions.filter((selected) => selected.value !== option.value)
                : [...selectedOptions, option]

            setSelectedOptions(newSelectedOptions)

            if (onChange) {
                onChange(newSelectedOptions)
            }
        },
        [selectedOptions, onChange]
    )

    const handleDocumentClick = useCallback((event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            const target = event.target as HTMLElement
            if (target.closest('svg')) {
                return
            }

            setIsOpen(false)
        }
    }, [])

    const handleBlur = useCallback(() => {
        if (onBlur) {
            onBlur(selectedOptions)
        }
    }, [selectedOptions, onBlur])

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [handleDocumentClick])

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
                    {options?.map((option) => (
                        <div
                            key={option.value}
                            className={cx(s.option, {
                                [s.selected]: selectedOptions.some((selected) => selected.value === option.value),
                                [s.optionDisabled]: disabledOptions.some(
                                    (disabled) => disabled.value === option.value
                                ),
                                [s.optionClickable]:
                                (clickableOptions && clickableOptions.includes(`${option.value}`)) || isBtn,
                            })}
                            onClick={handleOptionClick(option)}>
                            <div>{option.label}</div>
                            <NewIcon
                                size={sizeIcon ?? '20'}
                                name={
                                    selectedOptions.some((selected) => selected.value === option.value)
                                        ? 'selectChecked'
                                        : 'selectUnchecked'
                                }
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export const Select = memo(SelectComponent)
Select.displayName = 'Select'
