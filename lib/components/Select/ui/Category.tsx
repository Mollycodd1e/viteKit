import s from "./Select.module.scss";
import {NewIcon} from "../../NewIcon";
import classNames from "classnames";
import {TCategory, TModeSelect, TOption} from "./Select.types.ts";
import {Option} from "./Option.tsx";
import {useState} from "react";

const cx = classNames.bind(s)

export interface IOption {
    category: TCategory
    selectedValues?: TOption[]
    disabledOptions: TOption[]
    selectedOptions: TOption[]
    clickableOptions?: (string | undefined)[]
    handleOptionClick: (option: TOption | TOption[]) => void
    sizeIcon?: string
    mode: TModeSelect
}


export const Category = ({
                             category,
                             selectedOptions,
                             disabledOptions,
                             clickableOptions,
                             handleOptionClick,
                             sizeIcon,
                             mode
                         }: IOption) => {
    const [isShowOption, setIsShowOption] = useState(false);
    
    const selectedOptionsJSON = selectedOptions.map((e) => JSON.stringify(e))

    const isCategory = mode === 'category'
    const isDouble = mode === 'double'
    const isFull = isCategory && category.options.every(element => selectedOptionsJSON.includes(JSON.stringify(element)));

    const getCategoryImage = () => {
        if (isCategory) {
            if (isFull) return 'selectChecked'
            else return 'selectUnchecked'
        }
        if (isDouble) {
            if (selectedOptions.some((selected) => selected.value === category.value)) {
                return 'selectChecked'
            } else return 'selectUnchecked'
        } else return 'selectUnchecked'
    }

    const categoryImage = getCategoryImage()
    const isFewOptions = category.options.length > 1

    return <>
        <div
            className={cx(s.option, s.category,
                {
                    [s.selected]: selectedOptions.some((selected) => selected.value === category.value),
                    [s.optionDisabled]: disabledOptions.some(
                        (disabled) => disabled.value === category.value
                    ),
                    [s.optionClickable]: clickableOptions ? clickableOptions.includes(category.value.toString()) : true,
                })}
            onClick={() => {
                if (isDouble && !isShowOption) setIsShowOption(true)
                handleOptionClick(isCategory ? category.options : category)
            }}>
            <div className={s.leftSide}><NewIcon
                size={sizeIcon ?? '20'}
                name={categoryImage}
            />
                <div>{category.label}</div>
            </div>

            {isFewOptions && <div className={s.iconArrow} onClick={(e) => {
                e.stopPropagation()
                setIsShowOption((prev) => !prev)
            }}>
                <NewIcon
                    name={'arrowShort'}
                    deg={isShowOption ? '180' : '0'}
                    size={sizeIcon ?? '24'}
                />
            </div>}
        </div>

        {isShowOption && isFewOptions && category.options.map((e, k) => {
            return <Option key={k} option={e} disabledOptions={disabledOptions} selectedOptions={selectedOptions}
                           handleOptionClick={() => handleOptionClick(e)} sizeIcon={sizeIcon}
                           clickableOptions={clickableOptions}
                           isOptionCategory={true}/>
        })}
    </>
}