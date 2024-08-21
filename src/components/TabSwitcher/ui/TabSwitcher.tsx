import {forwardRef} from 'react'
import s from './TabSwitcher.module.scss'
import {Text} from '../../Text'
import classNames from 'classnames'
import {ITabSwitcherItem, TabSwitcherProps} from './TabSwitcher.types'

const cx = classNames.bind(s)

const TabSwitcher = ({
                         children,
                         variant = 'whiteRow',
                         addClassName = '',
                         col = false,
                     }: TabSwitcherProps) => {
    if (variant !== 'blackRow') {
        return (
            <div className={cx(s.root, s[variant], addClassName, {[s.rootCol]: col})}>
                {children}
            </div>
        )
    }

    if (variant === 'blackRow') {
        return <div>

        </div>
    }

}

const TabSwitcherItem = forwardRef<HTMLInputElement, ITabSwitcherItem>((props, ref) => {
    const {index, children, addItemClassName, disabled = false, itemsLength = 0, ...rest} = props

    return (
        <label>
            <input ref={ref}
                type='checkbox'
                {...rest}/>
            <div
                className={cx(cx(s.item, {[s.firstItem]: index === 0}, {[s.lastItem]: index === itemsLength - 1}, {[s.isDisabled]: disabled}), addItemClassName)}>
                <Text className={s.text}>{children}</Text>
            </div>
        </label>
    )
})

TabSwitcherItem.displayName = 'TabSwitcherItem'

const SwitcherNamespace = Object.assign(TabSwitcher, {Item: TabSwitcherItem})

export {SwitcherNamespace as TabSwitcher}

