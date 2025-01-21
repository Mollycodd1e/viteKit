import s from "./Select.module.scss";
import {NewIcon} from "../../NewIcon";
import classNames from "classnames";
import {TOption} from "./Select.types.ts";

const cx = classNames.bind(s)

export interface IOption {
    option: TOption
    isOptionCategory?: boolean
    disabledOptions: TOption[]
    selectedOptions: TOption[]
    clickableOptions?: (string | undefined)[]
    handleOptionClick: (option: TOption) => () => void
    sizeIcon?: string
}


export const Option = ({
                           option,
                           selectedOptions,
                           disabledOptions,
                           clickableOptions,
                           handleOptionClick,
                           isOptionCategory,
                           sizeIcon
                       }: IOption) => {
    return <div
        className={cx(s.option,
            {
                [s.selected]: selectedOptions.some((selected) => selected.value === option.value),
                [s.optionDisabled]: disabledOptions.some(
                    (disabled) => disabled.value === option.value
                ),
                [s.optionCategory]: isOptionCategory,
                [s.optionClickable]: (clickableOptions && clickableOptions.includes(`${option.value}`)),
            })}
        onClick={handleOptionClick(option)}>
        {isOptionCategory && <NewIcon
            size={sizeIcon ?? '20'}
            name={
                selectedOptions.some((selected) => selected.value === option.value)
                    ? 'selectChecked'
                    : 'selectUnchecked'
            }
        />}
        <div>{option.label}</div>
        {!isOptionCategory && <NewIcon
            size={sizeIcon ?? '20'}
            name={
                selectedOptions.some((selected) => selected.value === option.value)
                    ? 'selectChecked'
                    : 'selectUnchecked'
            }
        />}
    </div>
}