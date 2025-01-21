import s from "./Select.module.scss";
import {NewIcon} from "../../NewIcon";
import classNames from "classnames";
import {TCategory, TOption} from "./Select.types.ts";
import {Option} from "./Option.tsx";

const cx = classNames.bind(s)

export interface IOption {
    category: TCategory
    selectedValues?: TOption[]
    disabledOptions: TOption[]
    selectedOptions: TOption[]
    clickableOptions?: (string | undefined)[]
    handleOptionClick: (option: TOption) => () => void
    sizeIcon?: string
}


export const Category = ({
                             category,
                             selectedOptions,
                             disabledOptions,
                             clickableOptions,
                             handleOptionClick,
                             sizeIcon
                         }: IOption) => {
    return <>
        <div
            className={cx(s.option, s.category,
                {
                    [s.selected]: selectedOptions.some((selected) => selected.value === category.value),
                    [s.optionDisabled]: disabledOptions.some(
                        (disabled) => disabled.value === category.value
                    ),
                    [s.optionClickable]: (clickableOptions && clickableOptions.includes(`${category.value}`)),
                })}
            onClick={handleOptionClick(category)}>
            <NewIcon
                size={sizeIcon ?? '20'}
                name={
                    selectedOptions.some((selected) => selected.value === category.value)
                        ? 'selectChecked'
                        : 'selectUnchecked'
                }
            />
            <div>{category.label}</div>

        </div>

        {category.options.map((e, k) => {
            return <Option key={k} option={e} disabledOptions={disabledOptions} selectedOptions={selectedOptions}
                           handleOptionClick={handleOptionClick} sizeIcon={sizeIcon} clickableOptions={clickableOptions}
                           isOptionCategory={true}/>
        })}
    </>
}