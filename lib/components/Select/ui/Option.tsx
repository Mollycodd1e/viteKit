import s from './Select.module.scss'
import {NewIcon} from '../../NewIcon'
import classNames from 'classnames'
import {TOption} from './Select.types.ts'

const cx = classNames.bind(s)

export interface IOption {
    option: TOption
    isOptionCategory?: boolean
    disabledOptions: TOption[]
    selectedOptions: TOption[]
    clickableOptions?: (string | undefined)[]
    handleOptionClick: (option: TOption) => void
    sizeIcon?: string
    addClassName?: string
    isDisabledNotClickable?: boolean
}

export const Option = ({
                           option,
                           selectedOptions,
                           disabledOptions,
                           clickableOptions,
                           handleOptionClick,
                           isOptionCategory,
                           sizeIcon,
                           isDisabledNotClickable,
                           addClassName = '',
                       }: IOption) => {
    const isClickable = clickableOptions ? clickableOptions.includes(`${option.value}`) : true
    const isChecked = selectedOptions.some((selected) => selected.value === option.value)

    const getDisabled = () => {
        if (isDisabledNotClickable && clickableOptions) {
            return !clickableOptions.includes(`${option.value}`)
        }

        return disabledOptions.some((disabled) => disabled.value === option.value)
    }

    return (
        <div
            className={cx(
                s.option,
                {
                    [s.optionDisabled]: getDisabled(),
                    [s.optionCategory]: isOptionCategory,
                    [s.optionClickable]: isClickable,
                },
                addClassName
            )}

            onClick={() => {
                if (getDisabled() && !isChecked) return

                handleOptionClick(option)
            }}>
            {isOptionCategory && (
                <NewIcon
                    size={sizeIcon ?? '20'}
                    name={isChecked ? 'selectChecked' : 'selectUnchecked'}
                />
            )}
            <div>{option.label}</div>
            {!isOptionCategory && (
                <NewIcon
                    size={sizeIcon ?? '20'}
                    name={isChecked ? 'selectChecked' : 'selectUnchecked'
                    }
                />
            )}
        </div>
    )
}
