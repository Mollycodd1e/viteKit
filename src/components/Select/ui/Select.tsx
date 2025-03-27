import {useEffect, useRef, useState} from 'react'
import classNames from 'classnames'
import {MultiSelectProps, TCategory, TOption} from './Select.types'
import s from './Select.module.scss'
import {Option} from './Option'
import {NewIcon} from '../../NewIcon'
import {Category} from './Category.tsx'
import {handleClickModeCategory, handleClickModeOption, TClickOptionProps} from "../model/selectMode.ts";

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
                           onClickItem,
                           onCLickSelect,
                           size_s = 'large',
                           size_m,
                           size_l,
                           isDisabledNotClickable
                       }: MultiSelectProps) => {
    options = Array.isArray(options) ? [...new Set([...options])] as TOption[] | TCategory[] : []

    const [selectedOptions, setSelectedOptions] = useState<TOption[]>(selectedValues)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOptionClick = (option: TOption | TOption[] | TCategory) => {
        onClickItem && onClickItem(option)
        const dataClick: TClickOptionProps = {
            option,
            selectedOptions,
            disabledOptions,
            setSelectedOptions,
            onChange,
            mode,
            optionsParentArr: options
        }

        if (!Array.isArray(option)) handleClickModeOption(dataClick)
        else handleClickModeCategory(dataClick)
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
                                s[`${size_s}-size`],
                                s[`${size_m}-size_m`],
                                s[`${size_l}-size)_l`],
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
                                s[`${size_s}-size`],
                                s[`${size_m}-size_m`],
                                s[`${size_l}-size_l`],
                                s.selectedOptionsBtn,
                                {[s.selectOptionsDisabled]: disabled},
                                additionalClassBtn
                            )}
                            onClick={() => {
                                onCLickSelect && onCLickSelect()
                                setIsOpen(!isOpen)
                            }}>
                            {btnName}
                        </button>
                        <NewIcon
                            name={'filter'}
                            deg={isOpen ? '180' : '0'}
                            size={sizeIcon ?? '24'}
                            additionalClass={cx(s.icon, {[s.iconBtn]: !btnName})}
                        />
                    </>
                )}
            </div>
            {isOpen && (
                <div className={cx(s.optionsList, {[s.listRight]: isListRight}, additionalClassOption)}>
                    {mode === 'options' &&
                        options?.map((option, i) => (
                            <Option
                                key={i}
                                disabledOptions={disabledOptions}
                                clickableOptions={clickableOptions}
                                selectedOptions={selectedOptions}
                                sizeIcon={sizeIcon}
                                option={option}
                                handleOptionClick={handleOptionClick}
                                isDisabledNotClickable={isDisabledNotClickable}
                            />
                        ))}
                    {(mode === 'category' || mode === 'double') &&
                        options?.map((cat, i) => {
                                if ('options' in cat) {
                                    return <Category
                                        key={i}
                                        disabledOptions={disabledOptions}
                                        clickableOptions={clickableOptions}
                                        selectedOptions={selectedOptions}
                                        sizeIcon={sizeIcon}
                                        category={cat}
                                        mode={mode}
                                        selectedValues={selectedValues}
                                        handleOptionClick={handleOptionClick}
                                        isDisabledNotClickable={isDisabledNotClickable}
                                    />
                                } else return null
                            }
                        )}
                </div>
            )}
        </div>
    )
}
